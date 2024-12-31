"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sujee",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Dynamic and results-driven{" "}
            <span className="font-bold text-white">
              Computer Science undergraduate
            </span>{" "}
            with a passion for innovative problem-solving and a proven track
            record in developing responsive applications and streamlining
            processes. Adept at combining technical expertise with effective
            communication, I excel in collaborative environments and thrive on
            tackling complex challenges. Fluent in{" "}
            <span className="font-bold text-white">English, Tamil,</span> and{" "}
            <span className="font-bold text-white">Sinhala</span>, and committed
            to delivering impactful solutions in the tech industry.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-700 to-yellow-300 hover:bg-yellow-500 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-600 to-yellow-300 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
          <div className="socials flex flex-row gap-3 my-5 mx-[60px]">
            <Link href="https://github.com/sujeevanan">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>

            <Link href="https://www.linkedin.com/in/sujeevanan-loganathan-101037222/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative  border-solid border-white ">
            <Image
              src="/images/sujee2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain rounded-full "
              width={360}
              height={360}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
