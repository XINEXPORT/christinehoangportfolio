import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    django,
    express,
    nodejs,
    python,
    lodash, 
    postgresql,
    typescript,
    axios,
    vitejs,
    visualstudio,
    csharp,
    netcore,
    docker,
    mssqlserver,
    R,
    swagger,
    azuredevops,
    socketio,
    jquery
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 mb-20 px-4 lg:px-8">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl mb-4">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6 glass mb-8">
      <img src={react} title="React" alt="React" />
      <img src={js} title="JavaScript" alt="JavaScript" />
      <img src={python} title="Python" alt="Python" />
      <img src={csharp} title="C#" alt="C#" />
      <img src={R} title="R" alt="R" />
        <img src={html} title="html" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={sass} title="Sass" alt="Sass" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={jquery} title="jQuery" alt="jQuery" />
        <img src={express} title="Express" alt="Bootstrap" />
        <img src={nodejs} title="NodeJS" alt="NodeJS" />
        <img src={django} title="Django" alt="Django" />
        <img src={lodash} title="Lodash" alt="Lodash" />        
        <img src={redux} title="Redux" alt="Redux" />
        <img src={socketio} title="Socket.IO" alt="Socket.IO" />
        <img src={axios} title="Axios" alt="Axios" />
        <img src={postgresql} title="PostgreSQL" alt="PostgreSQL" />
        <img src={mssqlserver} title="MS SQL Server" alt="MS SQL Server" />
        <img src={vitejs} title="Vite.JS" alt="Vite.JS" />

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        <p className="text-content py-2 lg:max-w-3xl mb-4">
          Frameworks, Platforms, & Librairies
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6 glass mb-8">
        <img src={visualstudio} title="Visual Studio" alt="Visual Studio" />
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={azuredevops} title="Azure DevOps" alt="Azure DevOps" />
        <img src={netcore} title=".NET Core" alt=".NET Core" />
        <img src={docker} title="Docker" alt="Docker" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={swagger} title="Swagger" alt="Swagger" />
      </section>
    </main>
  );
}

export default Technologies;
