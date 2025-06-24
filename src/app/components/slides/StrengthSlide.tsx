import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";
import { Check } from "lucide-react";

interface SlideComponentProps {
  slide: Slide;
}

export const StrengthSlide = ({ slide }: SlideComponentProps) => {
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

      <motion.div
        variants={itemVariants}
        className="w-full max-w-2xl text-left space-y-4"
      >
        {slide.strengths?.map((strength, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Check className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
            <span className="text-lg text-gray-800">{strength}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
