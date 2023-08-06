import { Profile2 } from "../assets";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 xss:pb-0">
      <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img
          src={Profile2}
          alt="Profile"
          className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
        />
      </div>

      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-white  ">
          About Me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-10">
          As a front-end programmer, I offer a wide range of services to cater
          to specific needs, from brand design to top-notch web development
          skills. It is my passion to share knowledge and provide personalized
          teaching sessions to my students. My strengths are front-end web
          development, JavaScript, TypeScript, ReactJs, NextJs, and NodeJs. My
          goal is to create meaningful user experiences by taking on web
          development challenges. We can achieve something amazing together if
          we work together!
        </p>

        <div
          className="mt-5 2xl:mt-10 flex flex-wrap gap-5 xss:flex-col"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdOutlineAlternateEmail size={16} /> mha779@gmail.com
          </p>

          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <BsFillTelephoneFill size={16} /> +98 9912769675
          </p>

          <a
            href="https://t.me/mohammad_h_sd"
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsTelegram size={16} /> Telegram
          </a>

          <a
            href="https://www.linkedin.com/in/mohammadhossein-asadi/"
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsLinkedin size={16} /> LinkedIn
          </a>

          <a
            href="https://github.com/mohammadhossein-asadi"
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsGithub size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
