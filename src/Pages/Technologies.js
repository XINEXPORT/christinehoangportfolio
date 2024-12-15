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
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      <img src={react} title="React" alt="React" />
      <img src={js} title="JavaScript" alt="JavaScript" />
      <img src={typescript} title="Typescript" alt="Typescript" />
        <img src={html} title="html" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={express} title="Express" alt="Bootstrap" />
        <img src={nodejs} title="NodeJS" alt="NodeJS" />
        <img src={django} title="Django" alt="Django" />
        <img src={python} title="Python" alt="Python" />
        <img src={lodash} title="Lodash" alt="Lodash" />        
        <img src={redux} title="Redux" alt="Redux" />
        <img src={postgresql} title="PostgreSQL" alt="PostgreSQL" />

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
