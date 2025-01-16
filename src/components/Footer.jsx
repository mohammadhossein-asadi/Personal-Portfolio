import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";

const Footer = () => {
  const navLinks = ["Home", "About", "Projects"];
  const socialLinks = [
    {
      icon: <BsLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/mohammadhossein-asadi/",
    },
    {
      icon: <BsTelegram className="w-6 h-6" />,
      href: "https://t.me/mohammad_h_sd",
    },
    {
      icon: <BsGithub className="w-6 h-6" />,
      href: "https://github.com/mohammadhossein-asadi",
    },
    {
      icon: <BsInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/mohammadhossein_sd/",
    },
    {
      icon: <AiFillTwitterCircle className="w-6 h-6" />,
      href: "https://twitter.com/Mohammad_h_sd",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Location
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Tehran, Iran</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:mha7779@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 
                  hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <BiLogoGmail className="w-4 h-4" />
                <span>mha7779@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <BsLinkedin className="w-4 h-4" />
                <span>+98 9912769675</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Social Media
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                    transform hover:scale-110 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>©{new Date().getFullYear()} Mohammadhosein Asadi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
