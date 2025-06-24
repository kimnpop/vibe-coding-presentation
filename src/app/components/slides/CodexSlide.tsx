import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";

interface SlideComponentProps {
  slide: Slide;
}

export const CodexSlide = ({ slide }: SlideComponentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="max-w-4xl w-full mx-auto select-none flex flex-col justify-center items-center h-full text-center px-4"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-black mb-4 text-gray-900"
      >
        {slide.title}
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-lg md:text-xl font-semibold mb-8 text-gray-500"
      >
        {slide.subtitle}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl mb-12 text-gray-700 font-light leading-relaxed"
      >
        {slide.description}
      </motion.p>

      {slide.links && (
        <motion.div variants={itemVariants} className="mt-12">
          {slide.links.map((link, index) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-white py-3 pl-8 pr-4 text-lg font-bold text-gray-800 ring-1 ring-inset ring-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
              >
                <span>{link.text}</span>
                <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 ease-in-out">
                  <LinkIcon className="h-6 w-6 text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-black" />
                </span>
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
};
