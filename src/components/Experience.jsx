import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Experience = ({ experience }) => {
  return (
    <section
      aria-labelledby="experience-title"
      className="pt-8 px-8 lg:px-16 rounded-lg max-w-sm xs:max-w-md sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col justify-center pb-12">
        <h1
          id="experience-title"
          className="text-white text-center font-semibold text-4xl sm:text-5xl lg:text-6xl"
        >
          Experience
        </h1>
        <hr className="w-72 border-neutral-400 mt-4 mx-auto lg:w-80"></hr>
      </div>

      <article
        className="relative   "
        style={{
          borderImage: "linear-gradient(135deg, #55efc4, #6c5ce7, #d63031) 1",
          transition: "backgroundImage 1000ms ease-in-out",
          backgroundSize: "250%",
          backgroundPosition: "left",
          borderStyle: "solid",
          borderLeftWidth: "4px",
        }}
      >
        {experience.map((exp, index) => (
          <div
            key={index}
            className="mb-8 ml-8 relative shadow shadow-white/30"
            aria-labelledby={`experience-title-${index}`}
          >
            <div id={`${index}`} className={`absolute -left-[54px] top-6 w-10 h-10 bg-white text-black peer-hover-[:nth-of-type(${index})]:animate-pulse rounded-full flex items-center justify-center shadow-lg`}>
              <FontAwesomeIcon className="w-7 h-5"
                icon={exp.type === "work" ? faBriefcase : faGraduationCap}
              />
            </div>
            <div className={`p-6 bg-gradient peer-[:nth-of-type(${index})]: rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h2
                  className="text-lg sm:text-xl text-center sm:text-left font-semibold text-gray-100"
                  id={`experience-title-${index}`}
                >
                  {exp.title}
                </h2>
                <span className="text-xs sm:text-sm text-center text-gray-200">
                  {exp.dateRange}
                </span>
              </div>
              <p className="text-gray-400 text-sm text-center sm:text-left italic mb-1">
                {exp.organization}
              </p>
              <p className="text-gray-200 mt-2 text-center sm:text-left whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Experience;
