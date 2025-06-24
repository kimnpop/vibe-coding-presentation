import { motion } from "framer-motion";
import { Slide } from "../SlideData";
import React from "react";
import Image from "next/image";

interface SlideComponentProps {
  slide: Slide;
}

export const MemeSlide = ({ slide }: SlideComponentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {slide.image && (
        <div className="relative w-full h-full max-w-lg max-h-[50vh]">
          <Image
            src="/strong-man-survives.jpg"
            alt={slide.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </motion.div>
  );
};
