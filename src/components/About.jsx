import { Profile2 } from "../assets";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsTelegram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const contactLinks = [
  {
    icon: <MdOutlineAlternateEmail className="w-5 h-5" />,
    text: "mha779@gmail.com",
    href: "mailto:mha779@gmail.com",
  },
  {
    icon: <BsFillTelephoneFill className="w-5 h-5" />,
    text: "+98 9912769675",
    href: "tel:+989912769675",
  },
  {
    icon: <BsTelegram className="w-5 h-5" />,
    text: "Telegram",
    href: "https://t.me/mohammad_h_sd",
  },
  {
    icon: <BsLinkedin className="w-5 h-5" />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammadhossein-asadi/",
  },
  {
    icon: <BsGithub className="w-5 h-5" />,
    text: "GitHub",
    href: "https://github.com/mohammadhossein-asadi",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <div className="w-full lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={Profile2}
                  alt="Profile"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As a front-end programmer, I offer a wide range of services to
                cater to specific needs, from brand design to top-notch web
                development skills. It is my passion to share knowledge and
                provide personalized teaching sessions to my students. My
                strengths are front-end web development, JavaScript, TypeScript,
                ReactJs, NextJs, and NodeJs. My goal is to create meaningful
                user experiences by taking on web development challenges. We can
                achieve something amazing together if we work together!
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                    text-gray-700 dark:text-gray-300 transition-colors duration-300"
                >
                  {link.icon}
                  <span className="font-medium">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
