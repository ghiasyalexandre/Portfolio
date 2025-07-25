import "./videoCard.css";
import DynamicSkills from "./DynamicSkills";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function YoutubeCard(props) {
  const cardTitle = props.cardTitle;
  const caption = props.caption;
  const thumbnail = props.thumbnail;
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
    <section
      className=" bg-gradient border border-white rounded-xl hover:shadow-neonLightSlim transition-all duration-1000 ease-in-out"
      aria-labelledby={`youtube-card-${cardTitle}`}
      ref={reveal}
    >
      <p
        className=" text-neutral-400 text-left text-xs sm:text-sm pl-5 sm:pl-8 pt-4 sm:px-6 sm:pt-6"
        aria-hidden="true"
      >
        Click Image to Preview!
      </p>
      <figure className="video-figure">
        <div
          className="video-wrapper px-4 sm:px-6"
          aria-label={`Preview video for ${cardTitle}`}
        >
          {/* <iframe
            className=" aspect-video w-full h-auto flex align-middle border rounded-lg shadow-lg shadow-white/30"
            src={video}
            title={cardTitle}
            allowFullScreen
          ></iframe> */}

          <LiteYouTubeEmbed
            id={video}
            iframeClass="w-full h-full rounded-lg"
            playerClass="hidden"
            wrapperClass="w-full bg-inherit aspect-video  cursor-pointer  border rounded-lg shadow-lg shadow-white/30"
            title={cardTitle}
            thumbnail={thumbnail}
            // style={`background-image: url(${thumbnail})`}
            poster="hqdefault"
            webp
          ></LiteYouTubeEmbed>
        </div>
        {/* <p className="text-xs md:text-sm text-right mt-1 mr-4 sm:mr-8">
          Click Image to Preview!
        </p> */}
        <h2
          className="text-2xl xs:text-3xl sm:text-4xl text-center mt-4 px-4 lg:px-8 font-semibold   bg"
          id={`youtube-card-${cardTitle}`}
        >
          {cardTitle}
        </h2>
        <hr className="border-neutral-700 my-4 mx-8" />
        <figcaption
          className="text-center text-neutral-300 text-base sm:text-lg lg:text-base xl:text-xl mx-8 mb-2"
          aria-describedby={`caption-${cardTitle}`}
        >
          {caption}
        </figcaption>
        <div className="flex justify-center py-2">
          <DynamicSkills skills={skills} />
        </div>
      </figure>
    </section>
  );
}

export default YoutubeCard;
