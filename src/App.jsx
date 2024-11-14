import NavBar from "./components/NavBar";
import SelfCard from "./components/SelfCard";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import AppFooter from "./components/AppFooter";
import FadeInSection from "./components/FadeInSection";
import PoPGif from "../public/PoP.gif";
import VRonGif from "../public/VRon.gif";
import SimpleC from "../public/SimpleC.webp";
import AudioVisGif from "../public/AudioVis.gif";
import { lazy, Suspense } from "react";

const VideoCard = lazy(() => import("./components/VideoCard"));
const Card = lazy(() => import("./components/Card"));

import "./App.css";

function App() {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <div className="">
        <NavBar />

        {/* <button
          onClick={toggleTheme}
          className="px-2 py-2 font-semibold opacity-50 text-black bg-white/30 md:bg-white/80 border-black dark:text-white dark:bg-black/30 dark:hover:bg-neutral-200 dark:hover:text-black hover:border-white hover:bg-neutral-800 hover:text-neutral-300 rounded-full absolute right-8 top-16 z-30"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-brightness-high"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-moon-stars"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          )}
        </button> */}

        <div className="bg-gradient">
          <FadeInSection>
            <div className=" w-full flex justify-center py-4 sm:py-6">
              <h1 className="text-white text-center font-semibold text-4xl sm:text-5xl lg:text-6xl">
                Ghiasy Alexandre
              </h1>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <SelfCard />

          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Timeline />
        </FadeInSection>
        <Suspense>
          <div className="bg-gradient-light dark:bg-gradient w-full h-fit">
            <FadeInSection>
              <div className="w-full flex-col justify-center py-8">
                <h1 className="fun-text pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-6xl">
                  Projects
                </h1>
                <hr className="w-48 lg:w-60 border-neutral-400 mx-auto"></hr>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 mx-4 xs:mx-12 sm:mx-16 ">
              <div className="flex flex-col gap-8">
                <FadeInSection>
                  <Card
                    cardTitle="Plight of Proteus"
                    cardImg={PoPGif}
                    skills={["unity", "sharp"]}
                    link="https://ghiasy321.itch.io/plight-of-proteus"
                    caption="A 2D procedurally generated Rogue like adventure game optimized to run within the browser with webGL."
                  />
                </FadeInSection>

                <FadeInSection>
                  <Card
                    cardTitle="Mahtx Detail Co"
                    cardImg="./Mahtx.webp"
                    skills={["react", "html", "js", "css"]}
                    link="https://mahtxdetail.com/"
                    caption="Car Detailing Business website email booking system,
                SEO optimized score of 92 from Google Index Analytics."
                  />
                </FadeInSection>

                <FadeInSection>
                  <VideoCard
                    cardTitle="Price Review"
                    video="https://www.youtube.com/embed/xcHfXqt_XFM"
                    caption="A product review website where users can see or post reviews and view other users. Implemented user
          sign-up/login system, product reviewing, profanity filter, review abuse reporting, and frontend administrator
          controls."
                    skills={["html", "js", "sql", "php"]}
                  />
                </FadeInSection>

                <FadeInSection>
                  <Card
                    cardTitle="VRon"
                    cardImg={VRonGif}
                    skills={["unity", "sharp", "vr"]}
                    link="https://github.com/ghiasyalexandre"
                    caption="A Mario Kart like virtual reality game with Tron like visuals."
                  />
                </FadeInSection>
              </div>
              <div className="flex flex-col gap-4 lg:gap-8">
                <FadeInSection>
                  <Card
                    cardTitle="Taildawg Productions"
                    cardImg="./Taildawg.webp"
                    skills={["react", "html", "js", "css"]}
                    link="https://taildawgproductions.com/"
                    caption="Greek paddle business website. A 3D React app that uses Three.js to allow demo customization (work in progress)."
                  />
                </FadeInSection>

                <FadeInSection>
                  <VideoCard
                    cardTitle="Quantum Hydrogen Atom in VR"
                    video="https://www.youtube.com/embed/6MUPqvrvFKc"
                    caption="An educational visualization on Quantum principles of a Hydrogen atom in Virtual Reality."
                    skills={["unity", "sharp", "vr"]}
                  />
                </FadeInSection>

                <FadeInSection>
                  <Card
                    cardTitle="Audio Visualizer"
                    cardImg={AudioVisGif}
                    skills={["unity", "sharp"]}
                    caption="An editor for audio visualizations with file uploading, playback controls, and plenty of color!"
                  />
                </FadeInSection>

                <div className="mb-24 lg:mb-36">
                  <FadeInSection>
                    <Card
                      cardTitle="SimpleC Compiler"
                      cardImg={SimpleC}
                      link="https://github.com/ghiasyalexandre/SimpleC"
                      skills={["c"]}
                      caption="A Simplistic Version of C called SimpleC. Implemented a text parser to identify keywords, identifiers, variables, and function calls."
                    />
                  </FadeInSection>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
