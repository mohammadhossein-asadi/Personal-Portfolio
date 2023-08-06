import React from "react";
import { projects } from "../data";

const cleanLink = (link) => {
  const baseUrl = "http://localhost:5173/";
  return link.replace(baseUrl, "").replace(/^\/+/, ""); // اضافه کردن این خط برای حذف اولین '/' اضافی
};

const Works = () => {
  return (
    <div className="w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h4 className="text-3xl font-bold text-black dark:text-white mt-10 text-center">
        Projects
      </h4>

      <div className="flex flex-wrap gap-10 lg:gap-20 justify-center">
        {projects.map((project) => (
          <a
            href={`//${project.url}`}
            target="_blank"
            rel="noreferrer noopener"
            key={project.id}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="w-[350px] h-[350px] cursor-pointer shadow-xl rounded-md"
            >
              <div className="hover:scale-110 ease-in-out duration-300">
                <img
                  src={project.img}
                  alt={project.title}
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Works;
