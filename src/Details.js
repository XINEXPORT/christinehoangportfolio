// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Christine",
  tagline: "I build things for web",
  img: profile,
  about: `I am an enthusiastic Software Engineer with an eye for detail, efficient design, and customer excellence. With a passion for making products that brings joy and ease, I strive for the highest quality and delivery for individuals and businesses.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/christine-hoang-profile/",
  github: "https://github.com/XINEXPORT",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer",
    Company: `Texas Coding Club`,
    Location: "Dallas, TX",
    Type: "Full Time",
    Duration: "Feb 2024 - present",
  },
  {
    Position: "Web Application Administrator",
    Company: `City of Grand Prairie`,
    Location: "Dallas, TX",
    Type: "Full Time",
    Duration: "Apr 2024 - present",
  },
  {
    Position: "Web Application Engineer",
    Company: `Dallas Software Developers Group`,
    Location: "Dallas, TX",
    Type: "Apprenticeship",
    Duration: "March 2024 - April 2024",
  },
  {
    Position: "Full Stack Web Developer",
    Company: `Devmountain`,
    Location: "Dallas, TX",
    Type: "Full Time",
    Duration: "Nov 2023 - Feb 2024",
  },
  {
    Position: "Back-End and Data Engineering Product Manager",
    Company: `Syufy Enterprises`,
    Location: "San Rafael, CA",
    Type: "Full Time",
    Duration: "Jun 2023 - Oct 2023",
  },
  {
    Position: "Senior Quality Engineer",
    Company: `Optum Technology`,
    Location: "Fort Worth, TX",
    Type: "Full Time",
    Duration: "Oct 2017 - May 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "C# Developer Certificate ",
    Company: "Dallas College",
    Location: "Dallas, TX",
    Type: "Part Time",
    Duration: "Jan 2024 - present",
  },
  {
    Position: "Full Stack Web Developer Certificate",
    Company: "Devmountain",
    Location: "Dallas, TX",
    Type: "Full Time",
    Duration: "Nov 2023 - Feb 2024",
  },
  {
    Position: "Bachelor of Arts, Sculpture",
    Company: `The University of Texas at Arlington`,
    Location: "Arlington, TX",
    Type: "Full Time",
    Duration: "Aug 2009 - Dec 2012",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Zest",
    image: projectImage1,
    description: `Zest is a grocery management tool with built-in ingredient tracker, recipe integration, and macro calculator.`,
    techstack: "React Native, JavaScript, Styled-Components, Python, Django, Django ORM, ECS/Docker, Supabase, PostgreSQL, Figma, Miro, Jira, Github",
    previewLink: "https://www.youtube.com/watch?v=j5szZXsyxWs",
    githubLink: "https://github.com/XINEXPORT/dsd-grocery",
  },
  {
    title: "Texas Coding Club",
    image: projectImage2,
    description: `Texas Coding Club is a collaborative blog site made by Joe Aguado and Christine Hoang. The blog discusses topics related to technology, learning new skills, and networking opportunities.`,
    techstack: "React, JavaScript, Tailwind CSS, Vite, Github, npm",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Guess the Animal",
    image: projectImage3,
    description: `Guess the Animal is an online interactive children’s game where a user matches an animal sound to a corresponding image.`,
    techstack: "React, JavaScript, CSS, Boostrap, Express.js, Node.js, Sequelize, PostgreSQL, Axios, Redux, Lodash, Multer, Morgan, Miro",
    previewLink: "https://youtu.be/Xuk3jwRTQCk",
    githubLink: "https://github.com/XINEXPORT/guesstheanimal",
  },
  {
    title: "Vibes",
    image: projectImage4,
    description: `Vibes is a dynamic social platform enabling users to generate live audio soundscape performances in interactive sound rooms, fostering real-time collaboration between hosts and listeners.`,
    techstack: "React, JavaScript, CSS, Express.js, Node.js, Sequelize, PostgreSQL, Vite, Axios, Socket.io, Multer, Redux, npm",
    previewLink: "https://dallas-ft3-vibes.onrender.com/",
    githubLink: "https://github.com/XINEXPORT/Vibes",
  },
  {
    title: "The Record Shop",
    image: projectImage5,
    description: `The Record Shop is a web app where vinyl collectors can upload their records and publish them to an online store for viewing.`,
    techstack: "React, JavaScript, CSS, Express.js, Node.js, Axios, Vite, npm",
    previewLink: "https://the-record-shop.onrender.com/",
    githubLink: "https://github.com/XINEXPORT/record-shop",
  },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "christinehoangt@gmail.com",
};
