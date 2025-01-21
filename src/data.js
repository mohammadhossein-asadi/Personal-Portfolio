import {
  CSS3,
  Express,
  HTML5,
  Javascript,
  Mongodb,
  Nextjs,
  Nextjs2,
  Nodejs,
  Typescript,
  Reactjs,
  Mui,
  Tailwind,
  admin,
  house,
  port1,
  port2,
  tictactoe,
  connectify,
} from "./assets";

import Personal from "./assets/work/personal.gif";
import Portfolio from "./assets/work/portfolio.mp4";
import Admin from "./assets/work/admin.mp4";
import House from "./assets/work/house.mp4";
import TicTacToe from "./assets/work/tictactoe.gif";
import Connectify from "./assets/work/connectify.gif";

export const projectStats = [
  {
    name: "Total Projects",
    value: "200+",
  },
  {
    name: "Website Design",
    value: "150+",
  },
  {
    name: "Mobile App Design",
    value: "50",
  },
  {
    name: "Clients worldwide",
    value: "+86",
  },
];

export const experiences = [
  {
    company: "APSignals",
    role: "Front-End Developer | Mentor Assistant",
    period: "Oct 2021 – Nov 2023",
    achievements: [
      "Developed a comprehensive assignment submission and management system, improving collaboration and efficiency for students and mentors by 15%. Built reusable components and custom hooks, reducing redundant code by 30%.",
      "Utilized the MERN stack to design dynamic and responsive web applications, integrating industry best practices and streamlining the development process.",
    ],
  },
  {
    company: "Fanap",
    role: "Front-End Developer | Internship",
    period: "Aug 2021 – Oct 2021",
    achievements: [
      "Designed and developed real-time web pages with HTML, CSS, and JavaScript, including interactive charts and dashboards, and implemented user-friendly websites with optimized performance.",
      "Participated in Agile methodologies to enhance team productivity and project management, ensuring timely delivery of projects.",
    ],
  },
];

export const tools = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "React",
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
  {
    name: "NextJs",
    icon: Nextjs2,
  },
];

export const skills = [
  {
    name: "JavaScript",
    icon: Javascript,
  },
  {
    name: "TypeScript",
    icon: Typescript,
  },
  {
    name: "ReactJs",
    icon: Reactjs,
  },
  {
    name: "NextJs",
    icon: Nextjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "MaterialUi",
    icon: Mui,
  },
  {
    name: "Tailwind",
    icon: Tailwind,
  },
  {
    name: "CSS3",
    icon: CSS3,
  },
  {
    name: "HTML5",
    icon: HTML5,
  },
];

export const projects = [
  {
    id: 1,
    title: "Connectify",
    cat: "Web App",
    url: "https://connectifysocial.vercel.app/",
    code: "https://github.com/mohammadhossein-asadi/Connectify-client",
    img: connectify,
    video: Connectify,
    description: `A modern social media platform that allows users to create, share, and engage with content. Built with React, Redux Toolkit, and Material-UI, Connectify offers a seamless user experience with real-time updates and interactive features.`,
    technologies: [
      "React",
      "Redux Toolkit",
      "Material UI",
      "Redux Persist",
      "React Dropzone",
      "Formik",
      "Yup",
    ],
    live: "https://connectifysocial.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Website",
    cat: "Web Design",
    url: "https://mohammadhs.com",
    code: "https://github.com/mohammadhossein-asadi/Personal-Website",
    img: port1,
    video: Personal,
    description: `A captivating personal website using JavaScript, ReactJs, and Tailwind CSS to showcase my portfolio and
    professional journey, featuring dynamic animations and interactive components for seamless navigation
    and efficient styling. This website highlights my skills and accomplishments in an engaging and visually
    appealing manner.`,
    technologies: ["JavaScript", "ReactJs", "Tailwind CSS", "AOS"],
    live: "https://actual-live-url.com",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    cat: "Web App",
    url: "https://tic-tac-toe-next-js-p.vercel.app/",
    code: "https://github.com/mohammadhossein-asadi/Tic-Tac-Toe-NextJS",
    img: tictactoe,
    video: TicTacToe,
    description: `A modern implementation of the classic Tic Tac Toe game built with Next.js, TypeScript, and Framer Motion. Features a beautiful UI, smooth animations, and advanced gameplay features like move history and undo/redo functionality.`,
    technologies: [
      "TypeScript",
      "NextJs",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Lucide Icons",
    ],
    live: "https://tic-tac-toe-next-js-p.vercel.app/",
  },
  {
    id: 4,
    title: "House Rental",
    cat: "Web Design",
    url: "https://house-rental-website.vercel.app/",
    code: "https://github.com/mohammadhossein-asadi/House-Rental-Website",
    img: house,
    video: House,
    description: `Dynamic House Rental Website: Built with JavaScript, HTML, and CSS, using Grid layout for an organized
    and appealing presentation. Facilitates rental listings, offering seamless user experience to find
    properties. Perfect for users seeking an intuitive platform to discover their ideal rental homes
    effortlessly.`,
    technologies: ["JavaScript", "HTML", "CSS", "Grid"],
    live: "https://house-rental-website.vercel.app/",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    cat: "Web Design",
    url: "https://react-admin-dashboard-p.vercel.app/",
    code: "https://github.com/mohammadhossein-asadi/React-Admin-Dashboard",
    img: admin,
    video: Admin,
    description: `An advanced Admin Dashboard project using ReactJs, Material-UI (MUI), Nivo charts, Formik, Yup, and
    FullCalendar to create a powerful management interface. It features interactive components, dynamic
    animations, statistical insights through Nivo charts, and efficient form handling with Formik and Yup.
    Additionally, FullCalendar is integrated for easy event scheduling and management.`,
    technologies: [
      "ReactJs",
      "MUI",
      "Nivo charts",
      "Formik",
      "Yup",
      "Full Calendar",
    ],
    live: "https://react-admin-dashboard-p.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    cat: "Web Design",
    url: "https://next-personal-portfolio-p.vercel.app/",
    code: "https://github.com/mohammadhossein-asadi/Next-Personal-Portfolio",
    img: port2,
    video: Portfolio,
    description: `A modern portfolio website utilizing JavaScript, Next.js, and Tailwind CSS to showcase projects. Next.js
    offers improved performance with server-side rendering, and Tailwind CSS ensures a visually appealing
    and responsive design, making it a standout platform for displaying creative work.`,
    technologies: ["JavaScript", "NextJs", "Tailwind"],
    live: "https://next-personal-portfolio-p.vercel.app/",
  },
];

export const softSkills = [
  "Time management",
  "Communication",
  "Empathy",
  "Teamwork",
  "Helpfulness",
  "Creativity",
  "Self-learning",
  "Accountability",
  "Problem solving",
  "Open-mindedness",
];
