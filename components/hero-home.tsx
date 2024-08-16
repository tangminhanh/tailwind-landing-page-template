'use client';

import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <section className="relative dark:bg-gray-900">
      <PageIllustration />
      <div className="mx-auto my-auto max-w-6xl px-4 sm:px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className=" pb-8 text-center md:pb-16 grid justify-items-center">
            
            <h1
              className="mb-5 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]  md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Hi! I'm Lynn Tang <br className="max-lg:hidden" />
              
            </h1>
            <div className="mb-[0.5em] grid justify-items-center ">
              <video
                ref={videoRef}
                className="relative drop-shadow-xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg border-transparent w-full max-w-[10em] md:max-w-[14em]"
                src="/images/ava.mp4"
                data-aos="zoom-y-out"
                autoPlay
                muted
                loop
              />
              {!isPlaying && (
                <button
                  className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-[1.5em]"
                  onClick={togglePlay}
                >
                </button>
              )}
            </div>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-5 text-xl text-gray-700 dark:text-white"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Final Year Student @NTU, Singapore
              </p>
              <p
                className="mb-8 text-lg text-gray-500 max-w-4xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Crafting beautiful and functional web applications is my passion. As a full-stack developer, I bring together my skills in front-end and back-end development to create seamless user experiences.
              </p>
              <div className="">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-white-500 dark:bg-gradient-to-t from-pink-500 to-indigo-500 bg-[length:100%_100%] text-gray-900 bg-[bottom] dark:text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      About Me
                    </span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-200 dark:bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[14px] text-green-500 font-bold">
                  My Passion
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-blue-500">
                  Creator
                </span>
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  content is life
                </span>
                <br />
                <br />
                <span className="animate-[code-3_10s_infinite] text-indigo-500">
                  Coding
                </span>
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  Build world behind the screen
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-pink-500">
                  Community 
                </span>
                <br />
                <span className="animate-[code-5_10s_infinite]">
                  Come for Software
                </span>{" "}
                <span className="animate-[code-6_10s_infinite]">
                  Stay for Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
