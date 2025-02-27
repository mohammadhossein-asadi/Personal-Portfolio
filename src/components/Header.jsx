import { Nextjs2, Nextjs, Nodejs, Profile, Redux, Reactjs } from "../assets";
import Resume from "../assets/MohammadhosseinAsadi_Cv.pdf";
import { useTheme } from "../context/ThemeContext";
import Image from "./shared/Image";

const Header = () => {
  const { darkMode } = useTheme();

  const techIcons = [
    {
      src: Reactjs,
      alt: "React.js",
      className: "top-7 md:top-[4rem] left-[-0.25rem] md:-left-3 2xl:left-2",
    },
    {
      src: Redux,
      alt: "Redux",
      className: "bottom-7 left-[-0.25rem] md:bottom-10 2xl:left-4",
    },
    {
      src: {
        light: Nextjs2,
        dark: Nextjs
      },
      alt: "Next.js",
      className: "top-7 md:top-14 right-[-0.25rem] md:-right-3 2xl:right-2",
    },
    {
      src: Nodejs,
      alt: "Node.js",
      className: "bottom-7 right-[-0.25rem] md:bottom-10 2xl:right-4",
    },
  ];

  const stats = [
    { label: "Experience", value: "4+ Years" },
    { label: "Projects", value: "50+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <header className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Frontend React Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Hi, I&apos;m Mohammadhossein. A passionate Frontend React
              Developer based in Tehran, Iran. 📍
            </p>
            <div className="flex gap-4 md:gap-6 pt-4">
              <a
                href={Resume}
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                  text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-800 
                  hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold 
                  rounded-lg transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] mx-auto">
              {/* Profile Image */}
              <div className="relative z-0">
                <Image
                  src={Profile}
                  alt="Profile"
                  priority={true}
                  className="w-auto h-full object-cover transform transition-transform duration-500 hover:scale-105 rounded-xl"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                />
              </div>

              {/* Tech Icons */}
              <div
                className="absolute inset-0 z-10"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                {techIcons.map((icon, index) => (
                  <div
                    key={icon.alt}
                    className={`absolute ${icon.className}`}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      className="w-12 h-12 md:w-16 md:h-16 2xl:w-20 2xl:h-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
