import { Link } from "react-router-dom";
import VFXCard from "./VFXCard";

import Fly from "../../public/videos/Fly.webm";
import InLove from "../../public/videos/FallInLove.webm";
import Gunner from "../../public/videos/Gunner.webm";
import Ideas from "../../public/videos/Ideas.mp4";
import Pokemon from "../../public/videos/PokemonBattle.mp4";
import OnAndOff from "../../public/videos/OnAndOff.mp4";
import StudyTime from "../../public/videos/StudyTime.mp4";
import Saturn from "../../public/videos/Saturn.webm";
import Galaxy from "../../public/videos/Galaxy.mp4";
import Tunnel from "../../public/videos/Tunnel.mp4";
import WideO from "../../public/videos/WideO.webm";
import VoxelCube from "../../public/videos/VoxelCube.webm";
import { Helmet } from "react-helmet-async";
import FadeInSection from "./FadeInSection";

export default function VfxGallery() {
  return (
    <>
      <Helmet>
        <title>VFX Gallery - Ghiasy Alexandre</title>
        <meta
          name="description"
          content="Explore the VFX gallery of Ghiasy Alexandre, featuring stunning video effects and animations showcasing creativity and technical skill."
        />
      </Helmet>
      <article
        aria-labelledby="vfx-gallery-title"
        aria-describedby="vfx-gallery-description"
        className="bg-gradient w-full h-fit"
      >
        <div className="w-full flex-col justify-center py-8 lg:py-12">
          <h1
            className="text-white pb-3 sm:pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-7xl"
            id="vfx-gallery-title"
          >
            Gallery
          </h1>
          <hr className="w-48 lg:w-56 border-neutral-400/50 mx-auto pb-1" />
          <p
            className="text-center font-semibold sm:font-normal text-neutral-400 mt-1 sm:mb-2 text-xs sm:text-sm lg:text-base "
            id="vfx-gallery-description"
          >
            Tap or Hover to Play Audio !
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:px-8 xl:px-16 gap-4">
          <div className="flex flex-col gap-4">
            <FadeInSection>
              <VFXCard
                video={Saturn}
                cardTitle="Saturn Journey"
                caption="Saturn  by SZA Audio Reactive Saturn."
              ></VFXCard>
            </FadeInSection>
            <FadeInSection>
              <VFXCard
                video={InLove}
                cardTitle="Fall in Love"
                caption="Beyonce's Fall in love visuals enhanced with vibrant audio effects."
              />
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={VoxelCube}
                cardTitle="Voxel Cube"
                caption="Audio-visual remix inspired by Queens's song Cool Cat."
              />{" "}
            </FadeInSection>
            <FadeInSection>
              <VFXCard
                video={Fly}
                cardTitle="ISOxo Big Bang"
                caption="ISOxo with a audio-visual masterpiece of a nebula."
              />{" "}
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={WideO}
                cardTitle="Disco Lines Remix"
                caption="Audio-visual remix inspired by Disco Lines's music."
              />
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={StudyTime}
                cardTitle="Study Time"
                caption="Relaxing visuals designed for an immersive study environment."
              />
            </FadeInSection>
          </div>
          <div className="flex flex-col gap-4">
            <FadeInSection>
              <VFXCard
                video={Gunner}
                cardTitle="Gunner's Path"
                caption="A thrilling visual journey packed with dynamic audio."
              />
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={OnAndOff}
                cardTitle="On and Off"
                caption="Experience the switch between chaos and calm through visuals."
              />
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={Tunnel}
                cardTitle="Tunnel Vision"
                caption="Travel through an infinite tunnel with hypnotic VFX."
              />
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={Pokemon}
                cardTitle="Pokemon Battle"
                caption="Reimagined battle visuals inspired by the Pokemon universe."
              />
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={Galaxy}
                cardTitle="Frank Ocean Galaxy Voyage"
                caption="Frank Ocean with a audio-visual masterpiece galaxy."
              />{" "}
            </FadeInSection>{" "}
            <FadeInSection>
              <VFXCard
                video={Ideas}
                cardTitle="Burst of Ideas"
                caption="A dynamic representation of creativity and ideas coming to life."
              />{" "}
            </FadeInSection>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-x-12 py-12">
          <Link
            to="/"
            draggable={false}
            aria-label="View all projects by the Ghiasy Alexandre"
          >
            <button className="bg-gradient text-white scale-110">
              View Projects
            </button>
          </Link>

          <a
            target="_blank"
            draggable={false}
            href="https://www.instagram.com/adairvfx/"
            aria-label="Visit the VFX Instagram account"
          >
            <button className="bg-gradient text-white scale-110">
              VFX Instagram
            </button>
          </a>
        </div>
      </article>
    </>
  );
}
