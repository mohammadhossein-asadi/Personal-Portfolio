import {
  Reactjs,
  Redux,
  Nextjs,
  HTML5,
  CSS3,
  Profile,
  Nodejs,
} from "../assets";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-orange-600">
          FRONT-END DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center">
            I'am a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">
              Developer
            </p>
          </div>
        </div>

        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          Mohammadhossein
        </h1>

        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Experienced Front-end developer specialized in ReactJS and NextJS,
          with two years of professional experience. Strong team player familiar
          with agile methodology, passionate about continuous learning.
        </p>

        <div className="mt-10 flex gap-10">
          <button className="bg-orange-600 text-lg text-white font-semibold rounded-md py-3 px-5">
            Hire Me
          </button>
          <a
            href="#projects"
            className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]"
          >
            Projects
          </a>
        </div>
      </div>

      <div className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] 2xl:w-[700px] 2xl:h-[700px] rounded-full border border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex items-center justify-center overflow-hidden">
        <img src={Profile} alt="Profile" className="w-auto lg:scale-[1.13]" />
        <div className="w-full h-full rounded-full">
          <img
            src={Reactjs}
            className="absolute top-7 md:top-20 left-3 md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16"
          />
          <img
            src={Nextjs}
            className="absolute top-5 md:top-14 right-3 md:-right-3 2xl:right-2 w-12 h-12 md:w-16 md:h-16"
          />
          <img
            src={Redux}
            className="absolute bottom-7 left-3 md:bottom-10 2xl:left-12 w-12 h-12 md:w-16 md:h-16"
          />
          <img
            src={Nodejs}
            className="absolute bottom-7 right-3 md:bottom-10 2xl:right-12 w-12 h-12 md:w-16 md:h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
