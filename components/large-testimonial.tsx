import Image from "next/image";
import Logo01 from "@/public/images/logo-01.svg";
import React from "react";
import TestimonialImg from "@/public/images/tma.png";
import styles from "@/app/css/additional-styles/beyond-coding.module.css";
import { TimelineData } from "@/app/lib/data";
import Projects from "./projects";

export default function LargeTestimonial() {
  const calculateRotation = (index: number) => {
    const baseRotation = 25; // Starting rotation for the middle card
    const separationAngle = 20; // Angle separation between cards
    const middleIndex = Math.floor(TimelineData.length / 2);

    // Calculate rotation based on the index relative to the middle card
    return (index - middleIndex) * separationAngle + baseRotation;
  };
  return (
    <section>
      <div className="mx-auto full-w px-4 sm:px-6 dark:bg-gray-900 dark:border-gray-900">
        <div className="mx-auto max-w-3xl py-10 text-center md:pb-15 ">
          <h2 className="text-3xl font-bold md:text-4xl dark:text-gray-100 ">
            Projects
          </h2>
          <p className="dark:text-gray-100">Personal and Academic projects showcasing my versatility and creativity.<br></br> Let's bring your next big idea to life.</p>
        </div>
        <Projects />
        
        <div className={`flex overflow-hidden h-screen ${styles.containerr}`}>
          <div className="flex-1 flex flex-col items-start text-3xl md:text-4xl font-bold p-2.5 dark:text-gray-100">
            {/* Left static content */}
            <h1>Beyond Coding</h1>
            {/* <p>Static content on the left side.</p> */}
          </div>
          {/* <div className={styles.divider}></div> */}
          <div className={styles.timeline}>
            {/* Right scrollable timeline */}
            {TimelineData.map((section, index) => (
              <div key={index} className={`${styles.timelineSection}`}>
                <h2 className={`text-xl ${styles.timelineTitle}`}>{section.title}</h2>
                <div className={styles.cardContainerWrapper}>
                <div className={` ${styles.cardContainer}`}>
                  {section.items.map((item, idx) => {
                    const rotation = calculateRotation(idx);
                    return (
                      <div
                        key={idx}
                        className={styles.glass}
                        style={
                          {
                            '--r': `${rotation}deg`, // Use units
                            transform: `rotate(${rotation}deg)`
                          } as React.CSSProperties
                        }
                        data-text={item}
                      >
                        
                        <div className={styles.glassContent}>
                          {/* <p>{item}</p> */}
                          <Image
                              src={section.img[idx]} 
                              width={200} // Fixed width
                              height={150} 
                              alt=""
                              className="object-center"
                            />
                        </div>
                      </div>
                    );
                  })}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 dark:text-svg-light"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                />
              </svg>
              <div className="relative w-24 h-24 overflow-hidden rounded-full">
                <Image
                  className="object-cover"
                  src={TestimonialImg}
                  layout="fill"
                  alt="Large testimonial"
                />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              “No pain, no gain. {" "}
              <em className="italic text-blue-500">Aim for the stars</em>,
              and I'll reach my dream”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
