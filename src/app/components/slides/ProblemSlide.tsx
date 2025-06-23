import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ProblemSlide = ({ slide }: SlideComponentProps) => {
  return (
    <div className="text-center max-w-5xl mx-auto select-none">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="text-base md:text-lg mb-12 text-gray-500 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {slide.points?.map((point, i) => {
          const IconComponent = point.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              className="bg-gray-50/80 p-5 rounded-2xl border border-gray-200/50 hover:bg-white hover:border-gray-300 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <IconComponent className="h-6 w-6 text-gray-700" />
                </div>
                <span className="text-lg font-medium text-gray-800 text-left">
                  {point.text}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
