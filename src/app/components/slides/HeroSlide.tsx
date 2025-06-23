import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const HeroSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-4xl mx-auto relative">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="mb-16"
      >
        <div className="bg-gray-100 p-8 rounded-3xl inline-block shadow-lg">
          <IconComponent size={72} className="text-gray-800" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-black mb-8 text-gray-900 leading-tight"
      >
        {slide.title}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
        className="text-xl md:text-2xl font-light mb-12 text-gray-600"
      >
        {slide.subtitle}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl text-gray-500 font-light"
      >
        {slide.description}
      </motion.p>
    </div>
  );
};
