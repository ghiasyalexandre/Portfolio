import "./videoCard.css";
import DynamicSkills from "./DynamicSkills";
import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function VideoCard(props) {
  const cardTitle = props.cardTitle;
  const caption = props.caption;
  const skills = props.skills;
  const video = props.video;
  const link = props.link;

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

  const cardContent = (
    <>
      <div
        className={`px-4 pt-4 sm:px-6 sm:pt-6 ${link ? "cursor-pointer" : ""}`}
      >
        <div
          className="w-full h-auto border-2 rounded-lg shadow-lg shadow-white/30"
          aria-label={`Video player for ${cardTitle}`}
        >
          <VideoPlayer src={video} />
        </div>
      </div>

      <h2
        className="text-2xl xs:text-3xl sm:text-4xl text-center mt-4 px-4 lg:px-8 font-semibold"
        id={`video-card-${cardTitle}`}
      >
        {cardTitle}
      </h2>

      <hr className="border-neutral-700 my-4 mx-8" />

      <figcaption
        id={`video-caption-${cardTitle}`}
        className="text-center text-neutral-300 text-base sm:text-lg lg:text-base xl:text-xl mx-8 mb-2"
      >
        {caption}
      </figcaption>

      <div className="flex justify-center py-2">
        <DynamicSkills skills={skills} />
      </div>
    </>
  );

  return (
    <section
      className="bg-gradient border border-white rounded-xl hover:shadow-neonLightSlim transition-all duration-1000 ease-in-out"
      aria-labelledby={`video-card-${cardTitle}`}
      ref={reveal}
    >
      <figure className="video-figure">
        {link ? (
          <Link
            to={link}
            draggable={false}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn more about ${cardTitle}`}
          >
            {cardContent}
          </Link>
        ) : (
          cardContent
        )}
      </figure>
    </section>
  );
}

export default VideoCard;
