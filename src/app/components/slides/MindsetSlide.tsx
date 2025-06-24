import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";

interface SlideComponentProps {
  slide: Slide;
}

export const MindsetSlide = ({ slide }: SlideComponentProps) => {
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
        className="text-base md:text-lg mb-12 text-gray-500 font-light max-w-3xl"
      >
        {slide.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {slide.points?.map((point, index) => {
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center justify-start h-full"
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                {point.metric && (
                  <div className="text-8xl font-black text-blue-600">
                    {point.metric}
                  </div>
                )}
                {point.metricLabel && (
                  <div className="text-xl font-bold text-gray-800 mt-2">
                    {point.metricLabel}
                  </div>
                )}
              </div>
              <p className="text-base text-gray-600 leading-relaxed mt-8">
                {point.text}
              </p>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
