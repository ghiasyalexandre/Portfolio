import Porto from "/Porto.webp";

function SelfCard(props) {
  return (
    <div className="bg-gradient border-neutral-800 border-t group">
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 sm:pl-8 py-8">
        <div className="col-span-1 justify-center flex pb-4 md:pb-0 ">
          <img
            draggable={false}
            className="h-auto w-auto max-h-96 sm:max-h-120 sm:h-full sm:w-auto rounded-lg select-none xs:pb-0 border-white border hover:shadow-neonLightSlim transition-all duration-500 ease-in-out"
            src={Porto}
            alt="Ghiasy Alexandre portrait"
          />
        </div>

        <div className="col-span-1 sm:col-span-2 flex items-center">
          <div className="">
            <h1
              id="about-me"
              className="text-white w-full font-semibold text-4xl md:text-4xl lg:text-5xl text-center"
            >
              About Me
            </h1>

            <hr className="self-hr mx-auto my-4 lg:my-8 w-[80%] group-hover:bg-right" />

            <div>
              <figcaption
                aria-labelledby="about-me"
                className=" text-neutral-200 group-hover:text-white w-[80%] mx-auto text-center text-sm sm:text-base lg:text-xl xl:text-2xl !leading-tight xl:!leading-9 transition-all duration-500 ease-in-out"
              >
                Software developer with a background in web design,
                client-server applications, software development cycles, and IT
                best practices. Current Application Developer II for the
                University of Central Florida utilizing SQL, SQR, and
                PeopleTools. Interned at Lockheed Martin involving simulations
                and C#. <br />
                See my VFX library below.
              </figcaption>
              <hr className="self-hr mx-auto my-4 lg:my-8 w-[80%] group-hover:bg-right" />

              <div className="flex justify-evenly">
                <a
                  className="group/icon"
                  aria-label="Visit my LinkedIn profile"
                  href="https://www.linkedin.com/in/ghiasy-a/"
                  target="_blank"
                  rel="noreferrer"
                  draggable={false}
                >
                  <svg
                    id="core"
                    className="w-7 xs:w-6 sm:w-7 md:w-8 lg:w-10 tooltip group-hover/icon:scale-115 transition-all ease-in-out duration-300 opacity-90 group-hover:opacity-100 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      className="self-icon-fill"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                    <defs>
                      <linearGradient id="skill-icon-gradient">
                        <stop offset="0%" stopColor="var(--color-stop-1)" />
                        <stop offset="50%" stopColor="var(--color-stop-2)" />
                        <stop offset="100%" stopColor="var(--color-stop-3)" />
                      </linearGradient>
                    </defs>
                    <title className="tooltiptext">Linkedin</title>
                  </svg>
                </a>
                <a
                  href="https://github.com/ghiasyalexandre"
                  className="group/icon"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit my GitHub profile"
                  draggable={false}
                >
                  <svg
                    id="core"
                    className="w-7 xs:w-6 sm:w-7 md:w-8 lg:w-10 tooltip group-hover/icon:scale-115 transition-all ease-in-out duration-300 opacity-90 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      className="self-icon-fill"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                    <title className="tooltiptext">Github</title>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/ghiasy.a/"
                  target="_blank"
                  className="group/icon"
                  rel="noreferrer"
                  aria-label="Visit my Instagram profile"
                  draggable={false}
                >
                  <svg
                    id="core"
                    className="w-7 xs:w-6 sm:w-7 md:w-8 lg:w-10 tooltip group-hover/icon:scale-115 transition-all ease-in-out duration-300 opacity-90 group-hover:opacity-100 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      className="self-icon-fill"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                    <title className="tooltiptext">Instagram</title>
                  </svg>
                </a>

                <a
                  href="https://docs.google.com/document/d/19I8bSM32SW5Uj1uzMZR66mZxYbtSH_zTVHioR0nKX4I/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download my resume"
                  className="group/icon"
                  draggable={false}
                >
                  <svg
                    id="core"
                    className="h-7 xs:h-6 sm:h-7 md:h-8 lg:h-10 tooltip group-hover/icon:scale-115 transition-all ease-in-out duration-300 opacity-90 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      className="self-icon-fill"
                      d="M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z"
                    />
                    <title className="tooltiptext">Resume</title>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfCard;
