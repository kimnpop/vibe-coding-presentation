import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";

interface SlideComponentProps {
  slide: Slide;
}

export const WorkDistributionSlide = ({ slide }: SlideComponentProps) => {
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

  const pieData = slide.workDistributionData || [];
  const gradientParts = pieData
    .reduce((acc, item) => {
      const start = acc.length > 0 ? acc[acc.length - 1].end : 0;
      const end = start + item.value;
      acc.push({ ...item, start, end });
      return acc;
    }, [] as Array<{ name: string; value: number; color: string; start: number; end: number }>)
    .map((item) => `${item.color} ${item.start}% ${item.end}%`)
    .join(", ");

  const conicGradient = `conic-gradient(${gradientParts})`;

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
        className="text-base md:text-lg mb-12 text-gray-500 font-light max-w-4xl whitespace-pre-line"
      >
        {slide.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl"
      >
        <div
          className="w-64 h-64 rounded-full"
          style={{ background: conicGradient }}
        />
        <div className="flex flex-col gap-4 text-left">
          {pieData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-5 h-5 rounded-sm mr-3"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-lg text-gray-700">
                {item.name}:{" "}
                <span className="font-bold text-gray-900">{item.value}%</span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      {slide.source && (
        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-400 mt-12"
        >
          {slide.source}
        </motion.p>
      )}
    </motion.div>
  );
};
