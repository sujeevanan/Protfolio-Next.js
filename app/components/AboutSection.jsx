"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>mySQL</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Java</li>
        <li>Python</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Git/Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex gap-4">
        <div className="border-2 flex-1 border-yellow-500 p-3 rounded-md">
          <h2 className="font-bold text-lg">School:</h2>
          <ul className="list-none pl-3">
            <li className="font-semibold">Lyceum International School</li>
            <li>
              <i>Selected Combine Mathematics Stream has the field of study</i>
            </li>
            <li>
              {" "}
              <i className="text-sm">from 2004-2019</i>
            </li>
          </ul>
        </div>
        <div className="border-2 flex-1 border-yellow-500 p-3 rounded-md">
          <h2 className="font-bold text-lg">University:</h2>
          <ul className="list-none pl-2">
            <li className="font-semibold">Eastern University Sri Lanka</li>
            <li>
              <i>Bachelor of Science in Computer Science</i>
            </li>
            <li>
              {" "}
              <i className="text-sm">from 2021-2024</i>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ">
        <li className="cursor-pointer">Google AI Essentials</li>
        <li className="cursor-pointer">Tailwind CSS from A-Z (Udemy)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/sujee.jpg"
          alt="about-section "
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I’m Sujeevanan Loganathan, a passionate individual with a
            diverse set of interests. As a sportsman, I thrive on discipline,
            teamwork, and perseverance, values that I bring into every aspect of
            my life. When I’m not on the field, you’ll find me immersed in
            books, exploring new worlds and ideas. My curiosity drives my keen
            interest in learning and mastering new technologies, always staying
            ahead in this fast-evolving digital era. I’m dedicated to personal
            growth, continuous learning, and making a positive impact in
            everything I do.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
