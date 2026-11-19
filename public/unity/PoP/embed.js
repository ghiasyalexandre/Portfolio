/*!
 * Plight of Proteus - embed script.
 *
 * Put the game into any web page:
 *
 *   <div data-plight-embed></div>
 *   <script src="https://YOUR-HOST/plight/embed.js" defer></script>
 *
 * Options (data attributes on the container):
 *   data-aspect="16/9"     width/height ratio of the player box (default 16/9)
 *   data-autoload="true"   start loading immediately instead of showing a click-to-play cover
 *   data-title="..."       title on the click-to-play cover
 *   data-src="..."         URL of the game's index.html (default: next to this script)
 *
 * The container is fluid: it fills the width it's given and keeps its aspect ratio, never taller
 * than the window. Size or position it with ordinary CSS (e.g. max-width on the container).
 * Or mount from code: PlightEmbed.mount(element, { aspect: "4/3", autoload: true }).
 */
(function () {
  "use strict";
  if (window.PlightEmbed) return;

  var script = document.currentScript;
  var base = script && script.src ? new URL(".", script.src).href : new URL(".", location.href).href;
  var players = [];

  var css =
    ".plight-embed{position:relative;width:100%;max-height:100vh;max-height:100dvh;background:#07060d;border-radius:10px;overflow:hidden;" +
    "box-shadow:0 0 0 1px rgba(255,255,255,.08),0 12px 40px rgba(0,0,0,.35)}" +
    ".plight-embed iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}" +
    ".plight-embed.plight-fs{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;height:100dvh!important;" +
    "max-height:none!important;aspect-ratio:auto!important;border-radius:0!important;z-index:2147483647!important;margin:0!important}" +
    // Click-to-play cover: same backdrop and title font as the game's main menu and loader.
    "@font-face{font-family:'Gameplay 1987';src:url('" + base + "TemplateData/gameplay-1987.ttf') format('truetype');font-display:swap}" +
    ".plight-cover{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4%;" +
    "width:100%;border:0;padding:16px;cursor:pointer;color:#fff;font-family:'Gameplay 1987',system-ui,sans-serif;text-transform:uppercase;" +
    "letter-spacing:.04em;background:#d7744a url('" + base + "TemplateData/menu-bg.png') center/100% 100% no-repeat;image-rendering:pixelated}" +
    ".plight-cover b,.plight-cover span{-webkit-text-stroke:.09em #1b1820;paint-order:stroke fill;text-shadow:0 .08em 0 #1b1820}" +
    ".plight-cover b{font-weight:400;font-size:clamp(22px,6.5vw,72px);line-height:1.05;text-align:center}" +
    ".plight-cover span{font-size:clamp(18px,3.6vw,40px);padding:.2em .7em;border:3px solid #fff;background:rgba(27,24,32,.45);" +
    "box-shadow:0 0 0 2px #1b1820,0 4px 0 2px rgba(27,24,32,.35)}" +
    ".plight-cover:hover span,.plight-cover:focus-visible span{background:rgba(27,24,32,.7)}" +
    ".plight-cover:focus-visible{outline:3px solid #fff;outline-offset:-6px}" +
    ".plight-cover small{font:500 12px/1.3 system-ui,sans-serif;color:#1b1820;opacity:.75;letter-spacing:.02em;text-transform:none}" +
    "html.plight-noscroll,html.plight-noscroll body{overflow:hidden!important}";

  function injectCss() {
    if (document.getElementById("plight-embed-css")) return;
    var s = document.createElement("style");
    s.id = "plight-embed-css";
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  function parseAspect(v) {
    var m = String(v || "").match(/^\s*([\d.]+)\s*[/:x]\s*([\d.]+)\s*$/);
    return m && +m[1] > 0 && +m[2] > 0 ? m[1] + " / " + m[2] : "16 / 9";
  }

  function setPseudoFs(p, on) {
    p.box.classList.toggle("plight-fs", on);
    var anyFs = players.some(function (q) { return q.box.classList.contains("plight-fs"); });
    document.documentElement.classList.toggle("plight-noscroll", anyFs);
    if (p.frame && p.frame.contentWindow) p.frame.contentWindow.postMessage({ type: "plight:fullscreen-state", on: on }, "*");
  }

  function load(p) {
    if (p.frame) return;
    var f = document.createElement("iframe");
    f.src = p.src;
    f.title = p.title;
    // fullscreen: menu toggle; autoplay: music; gamepad/pointer lock: input; wake lock: keep screen on.
    f.allow = "fullscreen; autoplay; gamepad; screen-wake-lock";
    f.setAttribute("allowfullscreen", "");
    p.frame = f;
    p.box.innerHTML = "";
    p.box.appendChild(f);
    // Give keyboard focus to the game once it has loaded (the click-to-play gesture also lets
    // the browser start audio).
    f.addEventListener("load", function () { try { f.focus(); } catch (e) {} });
  }

  function mount(el, opts) {
    if (!el || el.__plight) return el && el.__plight;
    opts = opts || {};
    injectCss();
    var d = el.dataset || {};
    var p = {
      box: el,
      src: opts.src || d.src || base + "index.html",
      title: opts.title || d.title || "Plight of Proteus",
      frame: null,
    };
    el.__plight = p;
    el.classList.add("plight-embed");
    el.style.aspectRatio = parseAspect(opts.aspect || d.aspect);
    players.push(p);

    var autoload = opts.autoload != null ? !!opts.autoload : d.autoload === "true";
    if (autoload) {
      load(p);
    } else {
      var cover = document.createElement("button");
      cover.type = "button";
      cover.className = "plight-cover";
      cover.setAttribute("aria-label", "Play " + p.title);
      var b = document.createElement("b"); b.textContent = p.title;
      var s = document.createElement("span"); s.textContent = "Play";
      var sm = document.createElement("small"); sm.textContent = "Keyboard + mouse, or touch";
      cover.appendChild(b); cover.appendChild(s); cover.appendChild(sm);
      cover.addEventListener("click", function () { load(p); });
      el.innerHTML = "";
      el.appendChild(cover);
    }
    return p;
  }

  // Messages from the game page: hello (announce fullscreen fallback support) and fullscreen requests.
  window.addEventListener("message", function (e) {
    var data = e.data;
    if (!data || typeof data.type !== "string" || data.type.indexOf("plight:") !== 0) return;
    for (var i = 0; i < players.length; i++) {
      var p = players[i];
      if (!p.frame || e.source !== p.frame.contentWindow) continue;
      if (data.type === "plight:hello") e.source.postMessage({ type: "plight:host" }, "*");
      else if (data.type === "plight:fullscreen") setPseudoFs(p, !!data.on);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    players.forEach(function (p) { if (p.box.classList.contains("plight-fs")) setPseudoFs(p, false); });
  });

  function scan() {
    var els = document.querySelectorAll("[data-plight-embed]");
    for (var i = 0; i < els.length; i++) mount(els[i]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scan);
  else scan();

  window.PlightEmbed = { mount: mount, scan: scan };
})();
