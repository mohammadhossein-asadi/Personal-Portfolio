import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.jpeg";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-20">
      <div className="w-full items-center justify-between py-4 px-10">
        <div className="flex items-center justify-between w-full">
          <a href="/">
            <div className="flex justify-center items-center cursor-pointer">
              <img src={Logo} alt="logo" width={40} height={40} />
              <h4 className="text-2xl font-bold text-blue-500 cursor-pointer pl-2 xss:text-xl">
                Mohammadhossein
              </h4>
            </div>
          </a>
          <ul className="hidden md:flex gap-10 text-xl font-semibold text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="lg:ml-4 xss:ml-[1rem]">
            {darkMode ? (
              <FiSun size={24} color="white" />
            ) : (
              <BsFillMoonStarsFill size={24} color="black" />
            )}
          </button>

          <div className="md:hidden xss:mr-[-12px] mt-[6px]">
            <button
              type="button"
              className=""
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu
                size={31}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-700 dark:text-gray-300`}
              />

              <AiOutlineClose
                size={26}
                className={`${isOpen ? "block" : "hidden"} dark:text-gray-400`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-4 text-md text-gray-800 dark:text-neutral-200">
            <a href="#home" className="cursor-pointer" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="cursor-pointer" onClick={toggleMenu}>
              About
            </a>
            <a href="#projects" className="cursor-pointer" onClick={toggleMenu}>
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
