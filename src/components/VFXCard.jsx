import "./videoCard.css";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import VideoPlayer from "./VideoPlayer";

function VFXCard(props) {
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
    <section
      className="rounded-lg"
      aria-labelledby={`${cardTitle}-title`}
      aria-describedby={`${cardTitle}-caption`}
    >
      <figure className="">
        <div
          ref={reveal}
          className="bg-gradient"
          aria-label={`Video player for ${cardTitle}`}
        >
          <div aria-label={`Video player for ${cardTitle}`}>
            <VideoPlayer src={video} />
          </div>
          <h2
            id={`${cardTitle}-title`}
            className="sr-only text-2xl xs:text-3xl sm:text-4xl text-center mt-4 px-4 lg:px-8 font-semibold"
          >
            {cardTitle}
          </h2>{" "}
          <figcaption
            id={`${cardTitle}-caption`}
            className="sr-only text-center text-neutral-300 text-base sm:text-lg lg:text-base xl:text-xl mx-8 mb-2"
          >
            {caption}
          </figcaption>
        </div>
      </figure>
    </section>
  );
}

export default VFXCard;
