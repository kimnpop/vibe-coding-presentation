import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const StrengthSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto">
      <motion.div
        initial={{ scale: 0, rotateY: 90 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="mb-12"
      >
        <div className="bg-gray-100 p-6 rounded-2xl inline-block shadow-lg border border-gray-200">
          <IconComponent size={56} className="text-gray-800" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left side - Initial request */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🎯 시작점</h3>
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-lg font-semibold text-gray-800">
              {slide.strengths?.[0]}
            </span>
          </div>
        </motion.div>

        {/* Right side - Process steps */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            ⚡ 진행 과정
          </h3>
          {slide.strengths?.slice(1, 4).map((strength, i) => (
            <motion.div
              key={i + 1}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-base font-medium text-gray-700">
                {strength}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom - Results */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
        className="mt-8 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🚀 결과</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.strengths?.slice(4).map((strength, i) => (
            <motion.div
              key={i + 4}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.0 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-5 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-800">
                {strength}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
