import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

import Joji from "../../public/videos/CarJoji.mp4";
import InLove from "../../public/videos/Fall_In_Love.mp4";
import Gunner from "../../public/videos/Gunner.mp4";
import Ideas from "../../public/videos/Ideas.mp4";
import Pokemon from "../../public/videos/PokemonBattle.mp4";
import OnAndOff from "../../public/videos/OnAndOff.mp4";
import StudyTime from "../../public/videos/StudyTime.mp4";
import Saturn from "../../public/videos/Saturn.mp4";
import Galaxy from "../../public/videos/Galaxy.mp4";
import Tunnel from "../../public/videos/Tunnel.mp4";

export default function VfxGallery() {
  return (
    <>
      <div className="pt-12">
        <div className="w-full flex-col justify-center py-8">
          <h1 className="text-white pb-4 text-center font-semibold text-4xl sm:text-5xl lg:text-6xl">
            VFX Work
          </h1>
          <hr className="w-60 lg:w-72 border-neutral-400 mx-auto"></hr>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-16 gap-8">
          <div className="flex flex-col gap-4">
            <VideoCard video={Saturn}></VideoCard>
            <VideoCard video={InLove}></VideoCard>
            <VideoCard video={Galaxy}></VideoCard>

            <VideoCard video={Joji}></VideoCard>
            <VideoCard video={StudyTime}></VideoCard>
          </div>
          <div className="flex flex-col gap-4">
            <VideoCard video={Gunner}></VideoCard>
            <VideoCard video={OnAndOff}></VideoCard>{" "}
            <VideoCard video={Tunnel}></VideoCard>
            <VideoCard video={Pokemon}></VideoCard>
            <VideoCard video={Ideas}></VideoCard>
          </div>
        </div>
        <div className="flex justify-center py-12 bg-gradient">
          <Link to="/">
            <button>View Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
}
