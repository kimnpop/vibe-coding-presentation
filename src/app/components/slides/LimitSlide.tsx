import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const LimitSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-4xl mx-auto select-none">
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
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
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: -80, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 shadow-sm hover:shadow-md"
      >
        <p className="text-lg md:text-xl text-gray-700 font-light">
          {slide.limit}
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl text-gray-500 font-light mb-8"
      >
        {slide.description}
      </motion.p>
      {slide.solutions && (
        <div className="space-y-3">
          {slide.solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md"
            >
              <span className="text-base md:text-lg text-gray-700 font-light">
                {solution}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
