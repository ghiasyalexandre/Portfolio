import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Experience = ({ experience }) => {
  return (
    <div className="pt-8 px-8 lg:px-16 rounded-lg max-w-sm xs:max-w-md sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto transition-all duration-300 ease-in-out">
      <div className="flex flex-col justify-center pb-12">
        <h1 className="text-white text-center font-semibold text-4xl sm:text-5xl lg:text-6xl">
          Experience
        </h1>
        <hr className="w-72 border-neutral-400 mt-4 mx-auto lg:w-80"></hr>
      </div>

      <div
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
          >
            <div className="absolute -left-12 top-6 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-lg">
              <FontAwesomeIcon
                icon={exp.type === "work" ? faBriefcase : faGraduationCap}
              />
            </div>
            <div className="p-6 bg-gradient rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h3 className="text-lg sm:text-xl text-center sm:text-left font-semibold text-gray-100">
                  {exp.title}
                </h3>
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
      </div>
    </div>
  );
};

export default Experience;
