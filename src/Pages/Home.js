import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import Footer from "../Components/Footer";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [h11.current, h12.current, h13.current, myimageref.current],
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "Power3.easeOut" },
    );
  }, []);

  return (
    <main className="container max-width md:flex justify-between items-center px-4 lg:px-8 py-10">
      <div className="flex-1">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,
          <br />
          My Name is
          <br />
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

      <div className="md:mt-0 flex-1 flex justify-center md:justify-end">
        <img
          ref={myimageref}
          className="w-3/4 md:w-1/2 lg:w-2/3 rounded-card-lg"
          src={img}
          alt="Profile"
        />
      </div>
      {/* <Footer/> */}
    </main>
  );
}

export default Home;
