import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Unity's WebGL build ships pre-compressed .br files; the loader requires them to be served
// with "Content-Encoding: br" and the right Content-Type. Vite's static server doesn't do that.
function unityBrotli() {
  const types = { '.js': 'application/javascript', '.wasm': 'application/wasm' }
  const middleware = (root) => (req, res, next) => {
    const url = decodeURIComponent(req.url.split('?')[0])
    if (!url.startsWith('/unity/') || !url.endsWith('.br')) return next()
    const file = path.join(root, url)
    if (!fs.existsSync(file)) return next()
    res.setHeader('Content-Encoding', 'br')
    res.setHeader('Content-Type', types[path.extname(url.slice(0, -3))] || 'application/octet-stream')
    res.setHeader('Content-Length', fs.statSync(file).size)
    fs.createReadStream(file).pipe(res)
  }
  return {
    name: 'unity-brotli',
    configureServer(server) {
      server.middlewares.use(middleware(server.config.publicDir))
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware(path.resolve(server.config.root, server.config.build.outDir)))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), unityBrotli()],
})
