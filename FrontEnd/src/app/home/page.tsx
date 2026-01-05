import React from "react";
import About from "@/component/About";
import Experience from "@/component/Experience";
import Project from "@/component/Project";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const home = () => {
    return (
        <>
            <div className="flex w-full flex-col items-start justify-center gap-10 p-10 text-white md:flex-row md:p-20">
                <div className="flex h-full w-full items-center justify-center sm:h-60 sm:w-60">
                    <Image
                        src="./profile.png"
                        alt="Profile picture of Akash Karmokar"
                        className="h-full w-full rounded-full border ring-2 ring-[#ffffff]"
                        width={240}
                        height={240}
                    />
                </div>
                <div className="md:w-2/4">
                    <h1 className="flex text-xl leading-normal font-bold tracking-tighter md:text-6xl">
                        Hello I&apos;m Akash
                    </h1>
                    <p className="text-sm tracking-tight md:text-2xl">
                        Engineering tommorrow&apos;s software through
                        today&apos;s curiosity.
                    </p>

                    <div className="flex flex-wrap items-center justify-start">
                        <a
                            href="https://github.com/Akashkarmokar"
                            target="_blank"
                        >
                            <FaGithub size={25} className="cursor-pointer" />
                        </a>
                        <a
                            href="https://www.youtube.com/@a_k.stream"
                            target="_blank"
                        >
                            <FaYoutube
                                size={25}
                                className="ml-4 cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akashcsemu/"
                            target="_blank"
                        >
                            <FaLinkedin
                                size={25}
                                className="ml-4 cursor-pointer"
                            />
                        </a>
                    </div>

                    {/* <button className="mt-5 cursor-pointer rounded-3xl bg-[#465697] px-3 py-2 text-sm font-semibold text-white duration-300 hover:scale-105 hover:opacity-85 md:mb-10 md:px-4 md:py-2 md:text-lg">
                        Contact Me
                    </button> */}
                </div>
            </div>
            <section id="about">
                <About />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Project />
            </section>
        </>
    );
};

export default home;
