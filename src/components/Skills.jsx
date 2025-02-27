import { skills } from "../data";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div className="w-full py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center max-w-7xl mx-auto px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-md
              hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out
              hover:bg-gray-50 dark:hover:bg-[#2a3b52]
              relative overflow-hidden"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/5 dark:to-purple-400/5
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
            <img
              src={
                typeof skill.icon === "function"
                  ? undefined
                  : typeof skill.icon === "object"
                  ? darkMode
                    ? skill.icon.dark
                    : skill.icon.light
                  : skill.icon
              }
              alt={skill.name}
              className={`w-14 h-14 mb-3 transform group-hover:scale-110 transition-transform duration-300 ${
                skill.name === "Shadcn UI"
                  ? "border border-gray-200 dark:border-gray-700 rounded-md p-1"
                  : ""
              }`}
            />
            <span
              className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400
              transition-colors duration-300"
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
