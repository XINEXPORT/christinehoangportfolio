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
import django from "./assets/techstack/django.png";
import express from "./assets/techstack/express.png";
import nodejs from "./assets/techstack/nodejs.png";
import python from "./assets/techstack/python.png";
import lodash from "./assets/techstack/lodash.png";
import postgresql from "./assets/techstack/postgresql.png";
import typescript from "./assets/techstack/typescript.png";
import axios from "./assets/techstack/axios.png";
import vitejs from "./assets/techstack/vitejs.png";
import visualstudio from "./assets/techstack/visualstudio.png";
import csharp from "./assets/techstack/csharp.png";
import netcore from "./assets/techstack/netcore.png";
import docker from "./assets/techstack/docker.png";
import mssqlserver from "./assets/techstack/mssqlserver.png";
import R from "./assets/techstack/R.png";
import swagger from "./assets/techstack/swagger.png";
import azuredevops from "./assets/techstack/azuredevops.png";
import socketio from "./assets/techstack/socketio.png";
import jquery from "./assets/techstack/jquery.png";

// Project Images
import zest from "./assets/projects/zest.jpg";
import texascodingclub from "./assets/projects/texascodingclub.jpg";
import guesstheanimal from "./assets/projects/guesstheanimal.jpg";
import vibes from "./assets/projects/vibes.jpg";
import recordshop from "./assets/projects/recordshop.jpg";
import carebuddy from "./assets/projects/carebuddy.jpg";

// Biography
export const personalDetails = {
  name: "Christine",
  tagline: "I am a Software Engineer based in Dallas",
  img: profile,
  about1: `Christine Hoang is a Software Engineer based in Dallas, Texas.`,
  about2: `She has worked as a technology professional, taking on various roles including Sales Analyst, Application Analyst, Senior Quality Engineer, and Project Manager.`,
  about3: `Currently enrolled at Dallas College, Christine is refining her expertise in programming, with a focus on modern web development technologies and frameworks, such as React and .NET. Her technical skillset includes, but is not limited to, JavaScript, C#, Python, and SQL.`,
  about4: `Christine enjoys living a healthy lifestyle, coding, and discovering creative ways to help communities in need.`,
};

// Social Media URLs
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/christine-hoang-profile/",
  github: "https://github.com/XINEXPORT",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Work Experience
export const workDetails = [
  {
    Position: "Web Developer",
    Company: `Games for Love`,
    Company_Link: "https://gamesforlove.org/",
    Location: "Dallas, TX",
    Type: "Part Time",
    Duration: "December 2024 - present",
  },
  {
    Position: "Application Administrator",
    Company: `City of Grand Prairie`,
    Company_Link: "https://www.gptx.org/Home",
    Location: "Grand Prairie, TX",
    Type: "Full Time",
    Duration: "Apr 2024 - present",
  },
  {
    Position: "Software Engineer",
    Company: `Dallas AI`,
    Company_Link: "https://dallas-ai.org/",
    Location: "Dallas, TX",
    Type: "Apprenticeship",
    Duration: "June 2024 - August 2024",
  },
  {
    Position: "Software Engineer",
    Company: `Dallas Software Developers Group`,
    Company_Link: "https://www.dallassoftwaredevelopers.org/",
    Location: "Dallas, TX",
    Type: "Apprenticeship",
    Duration: "March 2024 - April 2024",
  },
  {
    Position: "Back-End and Data Engineering Project Manager",
    Company: `Syufy Enterprises`,
    Company_Link: "https://www.villasport.com/",
    Location: "San Rafael, CA",
    Type: "Full Time",
    Duration: "Jun 2023 - Oct 2023",
  },
  {
    Position: "Senior Quality Analyst",
    Company: `Optum Technology`,
    Company_Link: "https://www.optum.com/en/",
    Location: "Fort Worth, TX",
    Type: "Full Time",
    Duration: "Oct 2016 - May 2023",
  },
  {
    Position: "eBusiness Analyst",
    Company: `BNSF Railway Inc.`,
    Company_Link: "https://bnsf.com/",
    Location: "Fort Worth, TX",
    Type: "Full Time",
    Duration: "Dec 2015 - Oct 2016",
  },
  {
    Position: "Sales Analyst",
    Company: `PhysAssist Scribes`,
    Company_Link: "https://www.teamhealth.com/",
    Location: "Fort Worth, TX",
    Type: "Full Time",
    Duration: "Mar 2013 - Oct 2014",
  },
];

// Education Details
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
  react: react,
  js: js,
  html: html,
  css: css,
  tailwind: tailwind,
  redux: redux,
  sass: sass,
  bootstrap: bootstrap,
  django: django,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  express: express,
  nodejs: nodejs,
  python: python,
  lodash: lodash,
  postgresql: postgresql,
  typescript: typescript,
  axios: axios,
  vitejs: vitejs,
  visualstudio: visualstudio,
  csharp: csharp,
  netcore: netcore,
  docker: docker,
  mssqlserver: mssqlserver,
  R: R,
  swagger: swagger,
  azuredevops: azuredevops,
  socketio: socketio,
  jquery,
};

// Project Details
export const projectDetails = [
  {
    title: "CareBuddy",
    image: carebuddy,
    description: `CareBuddy is an AI Healthcare chat companion that can recommend lifestyle tips and nutrition recommendations for individuals seeking a healthier lifestyle.`,
    techstack:
      "React, JavaScript, Sass, Bootstrap, MaterialUI, ExpressJS, NodeJS, Axios, Vite, OpenAI",
    previewLink: "https://www.youtube.com/watch?v=Y253UFw9eD8",
    githubLink: "https://github.com/XINEXPORT/chatgpt-ai-healthapp",
  },
  {
    title: "Zest",
    image: zest,
    description: `Zest is a grocery management tool with built-in ingredient tracker, recipe integration, and macro calculator.`,
    techstack:
      "React Native, JavaScript, Styled-Components, Python, Django, Django ORM, ECS/Docker, Supabase, PostgreSQL, Figma, Miro, Jira, Github",
    previewLink: "https://www.youtube.com/watch?v=j5szZXsyxWs",
    githubLink: "https://github.com/XINEXPORT/dsd-grocery",
  },
  {
    title: "Texas Coding Club",
    image: texascodingclub,
    description: `Texas Coding Club is a collaborative blog site made by Joe Aguado and Christine Hoang. The blog discusses topics related to technology, learning new skills, and networking opportunities.`,
    techstack: "React, JavaScript, Tailwind CSS, Vite, Github, npm",
    previewLink: "https://www.texascodingclub.com/",
    githubLink: "https://github.com/XINEXPORT/vite-ghpages",
  },
  {
    title: "Guess the Animal",
    image: guesstheanimal,
    description: `Guess the Animal is an online interactive children’s game where a user matches an animal sound to a corresponding image.`,
    techstack:
      "React, JavaScript, CSS, Boostrap, Express.js, Node.js, Sequelize, PostgreSQL, Axios, Redux, Lodash, Multer, Morgan, Miro",
    previewLink: "https://youtu.be/Xuk3jwRTQCk",
    githubLink: "https://github.com/XINEXPORT/guesstheanimal",
  },
  {
    title: "Vibes",
    image: vibes,
    description: `Vibes is a dynamic social platform enabling users to generate live audio soundscape performances in interactive rooms, fostering real-time collaboration between hosts and listeners.`,
    techstack:
      "React, JavaScript, CSS, Express.js, Node.js, Sequelize, PostgreSQL, Vite, Axios, Socket.io, Multer, Redux, npm",
    previewLink: "",
    githubLink: "https://github.com/XINEXPORT/Vibes",
  },
  {
    title: "The Record Shop",
    image: recordshop,
    description: `The Record Shop is a web app where vinyl collectors can upload their records and publish them to an online store for viewing.`,
    techstack: "React, JavaScript, CSS, Express.js, Node.js, Axios, Vite, npm",
    previewLink: "https://the-record-shop.onrender.com/",
    githubLink: "https://github.com/XINEXPORT/record-shop",
  },
];

// Contact Details
export const contactDetails = {
  email: "christine.hoang@gamesforlove.org",
};

//CV Details
export const cvDetails = {
  cv: "/assets/cv/Christine_Hoang_Resume.pdf",
};
