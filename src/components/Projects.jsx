import PoPGif from "../../public/PoP.gif";
import PoPThumbnail from "../../public/PoPThumbnail.webp";
import VRonVid from "../../public/videos/VRon.webm";
import SimpleC from "../../public/SimpleC.webp";
import Viz from "../../public/videos/Voxel1.webm";
import FadeInSection from "./FadeInSection";
import YoutubeCard from "./YoutubeCard";
import Card from "./Card";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import DynamicSkills from "./DynamicSkills";
import { useState } from "react";
// const VideoCard = lazy(() => import("../components/VideoCard"));

export default function Projects() {
  const [viewPoP, setViewPop] = useState(false);

  function toggleViewPop() {
    setViewPop(!viewPoP);
  }

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  return (
    <article
      className="bg-gradient w-full h-fit"
      aria-labelledby="projects-heading"
    >
      <FadeInSection>
        <div className="w-full flex-col justify-center py-8 lg:py-12">
          <h1
            id="projects-heading"
            className="text-white pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-7xl"
          >
            Projects
          </h1>
          <hr className="w-48 lg:w-72 border-neutral-400/50 mx-auto"></hr>
        </div>
      </FadeInSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 mx-4 xs:mx-12 sm:mx-16 ">
        <div className="flex flex-col gap-8">
          <FadeInSection>
            <section aria-labelledby="plight-of-proteus-title" ref={reveal}>
              <div className=" bg-gradient border border-white rounded-xl hover:shadow-neonLightSlim transition-all duration-1000 ease-in-out">
                <p
                  className=" text-neutral-400 text-left text-xs sm:text-sm pt-2 px-4 sm:pl-8 sm:pt-2"
                  aria-hidden="true"
                >
                  Click Image to Preview!
                </p>
                <figure>
                  <div>
                    <button
                      onClick={toggleViewPop}
                      className="w-full h-auto inline-block cursor-pointer px-4 sm:px-6 border-0 "
                      aria-label="Toggle preview for Plight of Proteus"
                    >
                      {!viewPoP ? (
                        <img
                          className="w-full h-auto border rounded-lg shadow-lg shadow-white/30"
                          src={PoPThumbnail}
                          draggable={false}
                          aria-label="Toggle preview for Plight of Proteus"
                        />
                      ) : (
                        <img
                          className="w-full h-auto border rounded-lg shadow-lg shadow-white/30"
                          src={PoPGif}
                          draggable={false}
                          alt="Plight of Proteus Preview"
                        />
                      )}
                    </button>
                  </div>
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl  mt-4 text-center font-semibold px-4 lg:px-8">
                    Plight of Proteus
                  </h2>
                  <hr className="border-neutral-700 my-4 mx-8" />
                  <figcaption className="text-center text-neutral-300 text-base sm:text-lg lg:text-base xl:text-xl mx-8 md:mx-16 mb-2 ">
                    A 2D procedurally generated Rogue like adventure game
                    optimized to run within the browser with webGL.
                  </figcaption>
                  <div className="flex justify-center py-2">
                    <DynamicSkills skills={["unity", "sharp"]} />
                  </div>
                </figure>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <div ref={reveal}>
              <Card
                cardTitle="Money Maker Mindset"
                cardImg="./MMindset.webp"
                skills={["angular", "html", "ts", "css"]}
                link="https://financial-app-8ra.pages.dev/"
                caption={`A Financial Education website with articles on investing, saving, and tools such as a loan calculator. \n(work in progress)`}
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div ref={reveal}>
              <VideoCard
                cardTitle="VRon"
                video={VRonVid}
                skills={["unity", "sharp", "vr"]}
                link="https://github.com/ghiasyalexandre"
                caption="A Mario Kart like virtual reality game with Tron like visuals."
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div ref={reveal}>
              <YoutubeCard
                cardTitle="Price Review"
                video="xcHfXqt_XFM"
                thumbnail="./PriceReviewThumbnail.webp"
                caption="A product review website where users can see or post reviews and view other users. Implemented user
      sign-up/login system, product reviewing, profanity filter, review abuse reporting, and frontend administrator
      controls."
                skills={["html", "js", "sql", "php"]}
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div ref={reveal}>
              <Card
                cardTitle="UCF Pi Delta Psi"
                cardImg="./pdpsi.webp"
                skills={["angular", "html", "ts", "css"]}
                link="https://ucfpdpsi.org"
                caption="Business website for the University of Central Florida's historical Asian Cultural Fraternity. Sub 1ms load time! 92/100 Google Index Analytics."
              />
            </div>
          </FadeInSection>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <FadeInSection>
            <div ref={reveal}>
              <Card
                cardTitle="Mahtx Detail Co"
                cardImg="./Mahtx.webp"
                skills={["react", "html", "js", "css"]}
                link="https://mahtxdetail.com/"
                caption="Car Detailing Business website email booking system, SEO optimized score of 92 from Google Index Analytics."
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div ref={reveal}>
              <YoutubeCard
                cardTitle="Quantum Hydrogen Atom in VR"
                video="6MUPqvrvFKc"
                thumbnail="./AtomThumbnail.webp"
                caption="An educational visualization on Quantum principles of a Hydrogen atom in Virtual Reality. Involving custom shaders and VR controls that runs at 60fps. Worked with a physics engine to simulate the electron cloud behavior."
                skills={["unity", "sharp", "vr"]}
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <Card
              cardTitle="Taildawg Productions"
              cardImg="./Taildawg.webp"
              skills={["react", "html", "js", "css"]}
              link="https://taildawgproductions.com/"
              caption={`Greek paddle business website. A 3D React app that uses Three.js to allow demo customization. \n(work in progress)`}
            />
          </FadeInSection>

          <FadeInSection>
            <div ref={reveal}>
              <VideoCard
                cardTitle="Audio Visualizer"
                video={Viz}
                skills={["unity", "sharp"]}
                caption="An efficient Voxel audio visualization using hlsl shaders to push 1 million voxels at more than 60fps with plenty of color!"
              />
            </div>
          </FadeInSection>

          <div className="pb-4 lg:pb-12">
            <FadeInSection>
              <div ref={reveal}>
                <Card
                  cardTitle="SimpleC Compiler"
                  cardImg={SimpleC}
                  link="https://github.com/ghiasyalexandre/SimpleC"
                  skills={["c"]}
                  caption="A Simplistic Version of C called SimpleC. Implemented a text parser to identify keywords, identifiers, variables, and function calls."
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12 w-full ">
        <Link to="/vfx" draggable={false} aria-label="View VFX Gallery">
          <button className="bg-gradient scale-110">View VFX Work</button>
        </Link>
      </div>
    </article>
  );
}
