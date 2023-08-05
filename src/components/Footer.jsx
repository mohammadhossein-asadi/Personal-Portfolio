import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />

      <div className="w-full flex flex-col md:flex-row pb-[2rem] pt-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between ">
        <p className="text-lg text-white font-semibold ">Tehran</p>

        <div className="flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white pl-[200px]">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="flex flex-col gap-5 text-md text-white">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BiLogoGmail size={16} /> Email: mha7779@gmail.com
          </a>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsLinkedin size={16} /> Phone: +98 9912769675
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center pb-5">
        <p className="text-white font-semibold tracking-wider text-2xl">
          Social Media
        </p>

        <div className="flex gap-10 text-white text-2xl mb-10">
          <a
            href="https://www.linkedin.com/in/mohammadhossein-asadi/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="hover:scale-125 cursor-pointer" size={30} />
          </a>
          <a href="https://t.me/mohammad_h_sd" target="_blank" rel="noreferrer">
            <BsTelegram className="hover:scale-125 cursor-pointer" size={30} />
          </a>
          <a
            href="https://github.com/mohammadhossein-asadi"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="hover:scale-125 cursor-pointer" size={30} />
          </a>
          <a
            href="https://www.instagram.com/mohammadhossein_sd/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="hover:scale-125 cursor-pointer" size={30} />
          </a>
          <a
            href="https://twitter.com/Mohammad_h_sd"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle
              className="hover:scale-125 cursor-pointer"
              size={30}
            />
          </a>
        </div>

        <p className="text-gray-400 text-md tracking-wider">
          ©2023 Mohammadhosein Asadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
