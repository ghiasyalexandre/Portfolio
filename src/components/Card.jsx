import DynamicSkills from "./DynamicSkills";

function Card(props) {
  const cardTitle = props.cardTitle;
  const cardImg = props.cardImg;
  const skills = props.skills;
  const caption = props.caption;
  const link = props.link;

  return (
    <div className=" bg-gradient border border-white rounded-xl hover:shadow-neonLightSlim transition-all duration-1000 ease-in-out">
      <figure className="video-figure">
        <div>
          <a
            className="w-full h-auto inline-block cursor-pointer  px-4 pt-4 sm:px-6 sm:pt-6"
            href={link}
            draggable={false}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-full h-auto border rounded-lg shadow-lg shadow-white/30"
              src={cardImg}
              draggable={false}
              alt="img"
            />
          </a>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl  mt-4 text-center font-semibold px-4 lg:px-8">
          {cardTitle}
        </h2>
        <hr className="border-neutral-700 my-4 mx-8" />
        <figcaption className="text-center text-neutral-300 text-base sm:text-lg lg:text-base xl:text-xl mx-8 md:mx-16 mb-2">
          {caption}
        </figcaption>
        <div className="flex justify-center py-2">
          <DynamicSkills skills={skills} />
        </div>
      </figure>
    </div>
  );
}

export default Card;
