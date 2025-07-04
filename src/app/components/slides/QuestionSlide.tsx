import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const QuestionSlide = ({ slide }: SlideComponentProps) => {
  // const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-5xl mx-auto select-none min-h-screen flex flex-col justify-center">
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
        <div className="bg-gray-100 p-6 rounded-2xl inline-block shadow-lg border border-gray-200">
          {/* 아이콘 영역 제거 */}
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
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl font-semibold mb-4 text-gray-800"
        >
          {slide.subtitle}
        </motion.h2>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-400"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-gray-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-200 rounded-full opacity-50"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-500 font-light leading-relaxed mb-8 relative z-10"
          >
            {slide.description}
          </motion.p>

          {slide.highlight && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="inline-block relative z-10"
            >
              <div className="bg-gray-900 px-8 py-4 rounded-full shadow-xl border-2 border-gray-700">
                <span className="text-xl md:text-2xl font-bold text-white">
                  ✨ {slide.highlight}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
