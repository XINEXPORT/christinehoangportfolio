import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<",
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center glass">
    <div className="flex-1">
      <h1
        ref={h11}
        className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
      >
        Hi,<br />My Name is<br />
      </h1>
      <h1
        ref={h12}
        className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
      >
        {name}
      </h1>
      <h2
        ref={h13}
        className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-5"
      >
        {tagline}
      </h2>
    </div>
  
    <div className="flex-1 flex justify-end">
      <img
        ref={myimageref}
        className="w-1/2 md:w-1/3 rounded-card-lg"
        src={img}
        alt="Christine Hoang"
      />
    </div>
  </main>
  );
}

export default Home;
