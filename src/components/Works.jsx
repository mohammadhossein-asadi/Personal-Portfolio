import { useState, useCallback, useRef, useEffect } from "react";
import { projects } from "../data";
import { ImLink } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import ProjectCard from "./Works/ProjectCard";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useTheme } from "../context/ThemeContext";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const Works = () => {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(0);
  const modalRef = useRef(null);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedProject(null);
      setOpen(0);
    }
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [selectedProject, handleClickOutside]);

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="w-full flex flex-col py-20">
      <h4 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
        My Projects
      </h4>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              ref={modalRef}
              className="relative bg-white dark:bg-[#04133e] rounded-lg w-full max-w-4xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center border-b dark:border-gray-700 pb-3">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <AiOutlineClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <video
                      src={selectedProject.video}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Technologies:
                    </span>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description for desktop */}
                  <div className="hidden md:block">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Description
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Accordion for mobile */}
                  <div className="md:hidden">
                    <Accordion
                      open={open === 1}
                      animate={CUSTOM_ANIMATION}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={`px-4 ${
                          darkMode
                            ? "text-white hover:text-gray-300"
                            : "text-gray-900 hover:text-gray-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <MdDescription />
                          <span>Description</span>
                        </div>
                      </AccordionHeader>
                      <AccordionBody className="px-4 text-gray-600 dark:text-gray-300">
                        {selectedProject.description}
                      </AccordionBody>
                    </Accordion>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors cursor-pointer"
                      >
                        <ImLink />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {selectedProject.code && (
                      <a
                        href={selectedProject.code}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors cursor-pointer"
                      >
                        <BsGithub />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
