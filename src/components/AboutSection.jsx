"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>Python</li>
        <li>React Native</li>
        <li>Swift</li>
        <li>SwiftUI</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Stansbury High School</li>
        <li>Tooele Technical College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Advanced Javascript</li>
        <li>JavaScript: Understanding the weird parts</li>
        <li>Unit Testing & TDD in NodeJS</li>
        <li>Build responsive real-world websites with HTML & CSS</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <div className="flex flex-col">
        <ul className="list-disc pl-2">
          <li>Presidents list at Tooele Tech (3 months)</li>
          <li>Presidents list at Tooele Tech (6 months)</li>
          <li>Presidents list at Tooele Tech (9 months)</li>
          <li>Presidents list at Tooele Tech (12 months)</li>
          <li>Excellence Award from Tooele Tech</li>
          <li>Business & Information Technology Student of the Year 2024</li>
        </ul>
        <iframe
          className="mt-2 rounded-lg self-center h-[315px] w-[500px]"
          src="https://www.youtube.com/embed/QBOb7IRD3GY?si=cGs5v71wjCYjZMFe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("achievements");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid grid-cols-2 gap-8 items-center py-8 px-4 md:gap-16 sm:py-16 xl:px-16">
        <div className="flex items-center justify-center mt-20">
          <Image
            className="rounded-[40px] blur-lg absolute xl:scale-100 lg:scale-95 md:scale-[.68] scale-[0.85]"
            src={"/images/about-img2.jpeg"}
            alt="Macbook Image"
            width={500}
            height={500}
          />
          <Image
            className="rounded-[40px] relative"
            src={"/images/about-img2.jpeg"}
            alt="Macbook Image"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-10 md:mt-0 text-left flex-col h-full">
          <h2 className="text=4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m 31 years old and have a genuine passion for software
            development. I have the{" "}
            <span className="before:block before:absolute before:-inset-0.5 before:skew-y-1 hover:before:-skew-y-1 before:bg-gradient-to-r from-poemPurple to-purple-800 relative inline-block before:transition-all cursor-default before:rounded-md">
              <span className="font-black tracking-wider drop-shadow-lg relative">
                &apos;how can I make it work&apos;
              </span>
            </span>{" "}
            mentality. I enjoy thinking through problems and sharing my
            solutions with others. I also enjoy food, cars, and skateboarding.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              Achievements
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
