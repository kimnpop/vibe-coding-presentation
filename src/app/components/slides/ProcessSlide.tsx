import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ProcessSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto">
      <motion.div
        initial={{ scale: 0, rotateX: 90 }}
        animate={{ scale: 1, rotateX: 0 }}
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
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left side - Main tasks */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            🎯 핵심 업무
          </h3>
          {slide.steps?.slice(0, 2).map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                x: 10,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-800">
                {step}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Right side - Supporting tasks */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            ⚙️ 지원 업무
          </h3>
          {slide.steps?.slice(2).map((step, i) => (
            <motion.div
              key={i + 2}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                x: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-700">
                {step}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
