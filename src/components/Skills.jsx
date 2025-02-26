import { skills } from "../data";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
          >
            <img
              src={typeof skill.icon === "function" ? skill.icon({ darkMode }) : skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
