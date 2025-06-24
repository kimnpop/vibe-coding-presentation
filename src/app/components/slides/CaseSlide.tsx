import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";
import { ChevronRight } from "lucide-react";

interface SlideComponentProps {
  slide: Slide;
}

export const CaseSlide = ({ slide }: SlideComponentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl w-full mx-auto select-none flex flex-col justify-center items-center h-full text-center px-4"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      <motion.h2
        variants={itemVariants}
        className="text-xl md:text-2xl font-semibold mb-4 text-gray-800"
      >
        {slide.subtitle}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-base md:text-lg mb-12 text-gray-500 font-light max-w-4xl"
      >
        {slide.description}
      </motion.p>

      <motion.div variants={itemVariants} className="w-full max-w-6xl">
        {/* Row 1: Icons and Arrows */}
        <div className="flex items-center justify-center">
          {slide.processSteps?.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-28">
                <div className="bg-gray-100 rounded-full p-4">
                  <step.icon className="w-8 h-8 text-gray-700" />
                </div>
              </div>
              {slide.processSteps && index < slide.processSteps.length - 1 && (
                <div className="mx-2 md:mx-4">
                  <ChevronRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Row 2: Captions */}
        <div className="flex items-start justify-center mt-3">
          {slide.processSteps?.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-28">
                <span className="text-sm font-semibold text-gray-800">
                  {step.name}
                </span>
              </div>
              {slide.processSteps && index < slide.processSteps.length - 1 && (
                <div className="mx-2 md:mx-4">
                  <div className="w-8 h-8" /> {/* Spacer */}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {slide.links && (
        <div className="flex w-full justify-center space-x-4 pt-12">
          {slide.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-white py-2 pl-6 pr-2 text-base font-bold text-gray-800 ring-1 ring-inset ring-gray-200 transition-all duration-200 ease-in-out hover:bg-gray-100"
            >
              <span>{link.text}</span>
              <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 ease-in-out">
                <svg
                  className="h-5 w-5 text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};
