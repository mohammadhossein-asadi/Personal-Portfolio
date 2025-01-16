import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";
import { ImLink } from "react-icons/im";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="group relative w-full max-w-[350px] h-[350px] cursor-pointer rounded-xl overflow-hidden bg-black/5 dark:bg-white/5"
      onClick={() => onClick(project)}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-full w-full">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover brightness-[0.98] group-hover:brightness-[0.8] transition-all duration-500 group-hover:scale-110"
        />

        {/* Quick Action Links */}
        <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(project.url, "_blank");
              }}
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors transform hover:scale-110 hover:shadow-lg"
            >
              <ImLink size={18} />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(project.code, "_blank");
              }}
              className="p-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition-colors transform hover:scale-110 hover:shadow-lg"
            >
              <BsGithub size={18} />
            </a>
          )}
        </div>

        {/* Title and Category - Always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
          <h4 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h4>
          <p className="text-sm text-gray-300 uppercase tracking-wider">
            {project.cat}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
