import { useTheme } from "../context/ThemeContext";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.jpeg";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const { darkMode, isOpen, toggleMenu, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={Logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Mohammadhossein
            </h4>
          </a>

          <ul className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Experience", "Skills", "Projects"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />

            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <AiOutlineClose className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <BiMenu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden py-4 space-y-4 transition-all duration-200`}
          id="mobile-menu"
        >
          {["Home", "About", "Experience", "Skills", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
