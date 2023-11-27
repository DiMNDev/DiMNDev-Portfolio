"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const gifRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const restartGif = () => {
    if (isPlaying) {
      return;
    } else {
      const gifElement = gifRef.current;
      gifElement.src = gifElement.src;
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
      }, 4000);
    }
  };

  return (
    <section id="/">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-[#d10000]">
              Hello, I&apos;m <br />{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Joshua Arnold",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Web Developer",
                1000,
                "A Problem Solver",
                1000,
                "A Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl ">
            {`"Man who work for passion far richer than man who work for money"`}
            <br />
          </p>
          <p className="text-right">
            - Mr. Myagi{" "}
            <span className="relative">
              <Image
                src="/images/bonsai.png"
                alt="BONSAI"
                className="inline-block brightness-200"
                height={12}
                width={12}
              />
            </span>{" "}
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-700 via-purple-600 to-[#d10000]  hover:bg-slate-200 text-white grannyShift">
              <span>Hire Me</span>
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-700 via-purple-600 to-[#d10000] hover:bg-slate-800 text-white  mt-3">
              <span className="block rounded-full w-full bg-[#181818] hover:bg-slate-800 px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-gradient-to-tr from-transparent to-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-5  shadow-purple-900 shadow-xl">
            <Image
              ref={gifRef}
              src="/images/myWink35.gif"
              alt="Memoji of Josh"
              className="absolute transform -translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 md:-top-10 left-1/2 scale-100 lg:scale-150 rounded-full overflow-visible cursor-pointer mt-10"
              width={250}
              height={250}
              onMouseEnter={restartGif}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
