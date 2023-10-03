import { useState } from "react";
import { projects } from "../data";
import { ImLink } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Works = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h4 className="text-3xl font-bold text-black dark:text-white mt-10 text-center">
        Projects
      </h4>
      <div className="flex flex-wrap gap-10 lg:gap-20 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="w-[350px] h-[350px] cursor-pointer shadow-xl rounded-md xss:w-[300px] xss:h-[300px]"
            onClick={() => openModal(project)}
          >
            <div className="hover:scale-110 ease-in-out duration-300">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-[250px] object-cover rounded-md"
              />
              <div className="w-full h-[100px] bg-white dark:bg-[#04133e]">
                <h4 className="text-2xl text-black dark:text-white font-semibold py-2 px-1">
                  {project.title}
                </h4>
                <p className="text-sm text-orange-600 px-1 uppercase">
                  {project.cat}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={closeModal}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-2xl"
              onClick={stopPropagation}
            >
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col lg:w-[700px] md:w-[600px] xxs:w-[330px] xss:w-[280px] outline-none focus:outline-none w-full h-full ${
                  darkMode
                    ? "bg-white"
                    : "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]"
                }`}
              >
                <div className="flex items-start justify-between p-5 rounded-t ">
                  <h3 className="text-3xl font-semibold text-white dark:text-black">
                    {selectedProject.title}
                  </h3>
                  <span
                    className="border-0 float-right text-white dark:text-black"
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={27} />
                  </span>
                </div>
                <div className="relative py-3 px-5 flex-auto">
                  <video
                    src={selectedProject.video}
                    className="rounded-lg shadow-2xl w-full h-full"
                    autoPlay
                  ></video>
                  <div className="flex pt-3 xxs:flex xxs:flex-wrap xxs:gap-2 xss:gap-1">
                    <span className="text-lg font-medium text-white dark:text-black">
                      Technologies:
                    </span>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm font-bold mr-2 ml-2 px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="font-semibold p-4 text-white dark:text-black xss:p-1">
                    {selectedProject.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-24 py-2 flex gap-3 items-center justify-center rounded-full shadow-lg bg-black text-white cursor-pointer"
                    >
                      <ImLink size={16} /> Live
                    </a>
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noreferrer"
                      className="w-24 py-2 flex gap-3 items-center justify-center rounded-full shadow-lg bg-black text-white cursor-pointer"
                    >
                      <BsGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Works;
