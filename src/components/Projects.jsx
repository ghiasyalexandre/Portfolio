import PoPGif from "../../public/PoP.gif";
import VRonGif from "../../public/VRon.gif";
import SimpleC from "../../public/SimpleC.webp";
import AudioVisGif from "../../public/AudioVis.gif";
import FadeInSection from "./FadeInSection";
import YoutubeCard from "./YoutubeCard";
import Card from "./Card";
import { Link } from "react-router-dom";
// const VideoCard = lazy(() => import("../components/VideoCard"));

export default function Projects() {
  return (
    <div className="bg-gradient w-full h-fit">
      <FadeInSection>
        <div className="w-full flex-col justify-center py-8">
          <h1 className="text-white pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-6xl">
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
            <YoutubeCard
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
            <YoutubeCard
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

          <div className="pb-12 lg:pb-12">
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
      <div className="flex justify-center py-12 bg-gradient w-full">
        <Link to="/vfx">
          <button>View VFX Work</button>
        </Link>
      </div>
    </div>
  );
}
