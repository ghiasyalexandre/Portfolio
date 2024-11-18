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

export default function VfxGallery() {
  return (
    <>
      <meta name="Ghiasy Alexandre's Porfolio page of VFX designs" />
      <div className="pt-8 ">
        <div className="w-full flex-col justify-center py-8">
          <h1 className="text-white pb-3 sm:pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-6xl">
            Gallery
          </h1>
          <hr className="w-48 lg:w-56 border-neutral-400 mx-auto"></hr>
          <p className="text-center text-neutral-400 mt-1 sm:mb-2 text-xs sm:text-sm">
            Tap or Hover to Play Audio!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-16 gap-8">
          <div className="flex flex-col gap-4">
            <VFXCard video={Saturn}></VFXCard>
            <VFXCard video={InLove}></VFXCard>
            <VFXCard video={Galaxy}></VFXCard>

            <VFXCard video={Joji}></VFXCard>
            <VFXCard video={StudyTime}></VFXCard>
          </div>
          <div className="flex flex-col gap-4">
            <VFXCard video={Gunner}></VFXCard>
            <VFXCard video={OnAndOff}></VFXCard>
            <VFXCard video={Tunnel}></VFXCard>
            <VFXCard video={Pokemon}></VFXCard>
            <VFXCard video={Ideas}></VFXCard>
          </div>
        </div>
        <div className="flex justify-center gap-x-16 py-12">
          <Link to="/" draggable={false}>
            <button className="bg-gradient scale-125">View Projects</button>
          </Link>
          <a
            target=""
            draggable={false}
            href="https://www.instagram.com/adairvfx/"
          >
            <button className="bg-gradient scale-125">VFX Instagram</button>
          </a>
        </div>
      </div>
    </>
  );
}
