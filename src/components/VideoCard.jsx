import "./videoCard.css";
import DynamicSkills from "./DynamicSkills";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import VideoPlayer from "./VideoPlayer";

function VideoCard(props) {
  const cardTitle = props.cardTitle;
  const caption = props.caption;
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
    <div className="rounded-lg">
      <div className="">
        <div ref={reveal} className="bg-gradient">
          <figure>
            <div>
              <VideoPlayer src={video} />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl text-center mt-4 px-4 lg:px-8 font-semibold">
              {cardTitle}
            </h2>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
