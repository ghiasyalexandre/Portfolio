import { Link } from "react-router-dom";
import VFXCard from "./VFXCard";

import Joji from "../../public/videos/CarJoji.webm";
import InLove from "../../public/videos/FallInLove.webm";
import Gunner from "../../public/videos/Gunner.webm";
import Ideas from "../../public/videos/Ideas.mp4";
import Pokemon from "../../public/videos/PokemonBattle.mp4";
import OnAndOff from "../../public/videos/OnAndOff.mp4";
import StudyTime from "../../public/videos/StudyTime.mp4";
import Saturn from "../../public/videos/Saturn.webm";
import Galaxy from "../../public/videos/Galaxy.mp4";
import Tunnel from "../../public/videos/Tunnel.mp4";
import { Helmet } from "react-helmet-async";

export default function VfxGallery() {
  return (
    <article
      className="pt-8 "
      aria-labelledby="vfx-gallery-title"
      aria-describedby="vfx-gallery-description"
    >
      {" "}
      <Helmet>
        <title>VFX Gallery - Ghiasy Alexandre</title>
        <meta
          name="description"
          content="Explore the VFX gallery of Ghiasy Alexandre, featuring stunning video effects and animations showcasing creativity and technical skill."
        />
      </Helmet>
      <div className="w-full flex-col justify-center py-8">
        <h1
          className="text-white pb-3 sm:pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-6xl"
          id="vfx-gallery-title"
        >
          Gallery
        </h1>
        <hr className="w-48 lg:w-56 border-neutral-400 mx-auto"></hr>
        <p
          className="text-center text-neutral-400 mt-1 sm:mb-2 text-xs sm:text-sm "
          id="vfx-gallery-description"
        >
          Tap or Hover to Play Audio!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-16 gap-8">
        <div className="flex flex-col gap-4">
          <VFXCard
            video={Saturn}
            cardTitle="Saturn Journey"
            caption="A mesmerizing journey through Saturn Audio Reacting to SZA."
          ></VFXCard>
          <VFXCard
            video={InLove}
            cardTitle="Fall in Love"
            caption="Romantic visuals enhanced with vibrant audio effects."
          />
          <VFXCard
            video={Galaxy}
            cardTitle="Galaxy Voyage"
            caption="Explore the mysteries of the galaxy in this audio-visual masterpiece."
          />
          <VFXCard
            video={Joji}
            cardTitle="Joji Remix"
            caption="Audio-visual remix inspired by Joji's musical aesthetics."
          />
          <VFXCard
            video={StudyTime}
            cardTitle="Study Time"
            caption="Relaxing visuals designed for an immersive study environment."
          />
        </div>
        <div className="flex flex-col gap-4">
          <VFXCard
            video={Gunner}
            cardTitle="Gunner's Path"
            caption="A thrilling visual journey packed with dynamic audio."
          />
          <VFXCard
            video={OnAndOff}
            cardTitle="On and Off"
            caption="Experience the switch between chaos and calm through visuals."
          />
          <VFXCard
            video={Tunnel}
            cardTitle="Tunnel Vision"
            caption="Travel through an infinite tunnel with hypnotic VFX."
          />
          <VFXCard
            video={Pokemon}
            cardTitle="Pokemon Battle"
            caption="Reimagined battle visuals inspired by the Pokemon universe."
          />
          <VFXCard
            video={Ideas}
            cardTitle="Burst of Ideas"
            caption="A dynamic representation of creativity and ideas coming to life."
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-16 py-12">
        <Link
          to="/"
          draggable={false}
          aria-label="View all projects by the Ghiasy Alexandre"
        >
          <button className="bg-gradient scale-125">View Projects</button>
        </Link>
        <a
          target=""
          draggable={false}
          href="https://www.instagram.com/adairvfx/"
          aria-label="Visit the VFX Instagram account"
        >
          <button className="bg-gradient scale-125">VFX Instagram</button>
        </a>
      </div>
    </article>
  );
}
