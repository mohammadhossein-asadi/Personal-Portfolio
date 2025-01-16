import { tools } from "../data";

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I use
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image/Preview */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h3>
                {tool.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {tool.description}
                  </p>
                )}

                {/* Tech Stack */}
                {tool.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Links */}
                <div className="flex gap-4 mt-4">
                  {tool.demo && (
                    <a
                      href={tool.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {tool.github && (
                    <a
                      href={tool.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
