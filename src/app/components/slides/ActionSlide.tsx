import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";
import { Users, Cpu } from "lucide-react";

interface SlideComponentProps {
  slide: Slide;
}

export const ActionSlide = ({ slide }: SlideComponentProps) => {
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl text-left"
      >
        {slide.experiments?.map((experiment, index) => {
          const AiIcon = experiment.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col border border-gray-200/80 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                {experiment.title}
              </h3>
              <div className="flex flex-col space-y-3 flex-grow">
                <div className="bg-gray-100 p-4 rounded-lg flex-grow">
                  <div className="flex items-center text-sm font-semibold text-gray-600 mb-1">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Human Team</span>
                  </div>
                  <p className="text-base text-gray-900 font-medium">
                    {experiment.team}
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg flex-grow">
                  <div className="flex items-center text-sm font-semibold text-indigo-600 mb-1">
                    <Cpu className="w-4 h-4 mr-2" />
                    <span>AI Role</span>
                  </div>
                  <div className="flex items-center">
                    <AiIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    <p className="text-base text-indigo-900 font-bold">
                      {experiment.aiRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
