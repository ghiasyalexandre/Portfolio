import "./videoCard.css";
import DynamicSkills from "./DynamicSkills";
import VideoPlayer from "./VideoPlayer";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function VideoCard(props) {
  const cardTitle = props.cardTitle;
  const caption = props.caption;
  const skills = props.skills;
  const video = props.video;

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
    <div
      className=" bg-gradient border border-white rounded-xl hover:shadow-neonLightSlim transition-all duration-1000 ease-in-out"
      ref={reveal}
    >
      <figure className="video-figure">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6">
          <div className="w-full h-auto border-2 rounded-lg shadow-lg shadow-white/30">
            <VideoPlayer src={video} />
          </div>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl text-center mt-4 px-4 lg:px-8 font-semibold">
          {cardTitle}
        </h2>
        <hr className="border-neutral-700 my-4 mx-8" />
        <figcaption className="text-center text-neutral-300 text-base sm:text-lg lg:text-base xl:text-xl mx-8 mb-2">
          {caption}
        </figcaption>
        <div className="flex justify-center py-2">
          <DynamicSkills skills={skills} />
        </div>
      </figure>
    </div>
  );
}

export default VideoCard;
