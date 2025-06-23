import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const QuestionSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="mb-12"
      >
        <div className="bg-gray-100 p-6 rounded-2xl inline-block shadow-lg">
          <IconComponent size={56} className="text-gray-800" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -100, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl mb-10 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="inline-block"
      >
        <div className="bg-gray-900 px-8 py-4 rounded-full shadow-lg">
          <span className="text-xl md:text-2xl font-bold text-white">
            {slide.highlight}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
