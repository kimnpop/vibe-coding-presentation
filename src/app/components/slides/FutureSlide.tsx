import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";
import { ChevronRight } from "lucide-react";

interface SlideComponentProps {
  slide: Slide;
}

export const FutureSlide = ({ slide }: SlideComponentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlightKeywords = (text: string) => {
    return text.split(/(`.*?`|\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="bg-gray-100 text-gray-800 font-mono text-sm rounded-md px-1.5 py-0.5"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl w-full mx-auto select-none flex flex-col justify-center items-center h-full text-center px-4 py-16"
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

      <div className="w-full max-w-5xl space-y-8">
        {/* Top Section: Problem Set */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slide.processDetails?.map((detail, index) => {
              const DetailIcon = detail.icon;
              return (
                <div key={index} className="text-left">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 rounded-lg p-3 mr-4">
                      <DetailIcon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {detail.title}
                    </h4>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {highlightKeywords(detail.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Section: Solution Set */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm"
        >
          {slide.automationFlow && (
            <>
              <h4 className="text-lg font-bold text-gray-800 mb-6 text-center">
                {slide.automationFlow.title}
              </h4>
              <div className="flex flex-wrap items-center justify-center mb-8">
                {slide.automationFlow.steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-center text-center w-28">
                        <div className="bg-gray-100 rounded-full p-4 mb-2">
                          <StepIcon className="w-8 h-8 text-gray-700" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          {step.name}
                        </span>
                      </div>
                      {index < slide.automationFlow!.steps.length - 1 && (
                        <div className="hidden sm:block mx-2">
                          <ChevronRight className="w-7 h-7 text-gray-300" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          )}
          {slide.links && (
            <div className="flex w-full justify-center">
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
      </div>
    </motion.div>
  );
};
