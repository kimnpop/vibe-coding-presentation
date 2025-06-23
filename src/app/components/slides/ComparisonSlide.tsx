import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ComparisonSlide = ({ slide }: SlideComponentProps) => {
  return (
    <div className="text-center max-w-6xl mx-auto select-none">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold mb-4 text-gray-800"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base md:text-lg mb-12 text-gray-500 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 잘하는 것 */}
        <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            ✅ 잘하는 것
          </h3>
          <div className="space-y-3 text-left">
            {slide.benefits
              ?.filter((b) => b.value === "잘함")
              .map((benefit, i) => (
                <motion.div
                  key={`good-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-2"
                >
                  <div className="font-semibold text-gray-800">
                    {benefit.label}
                  </div>
                  <div className="text-sm text-gray-600">{benefit.detail}</div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* 못하는 것 */}
        <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
          <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ 못하는 것</h3>
          <div className="space-y-3 text-left">
            {slide.benefits
              ?.filter((b) => b.value !== "잘함")
              .map((benefit, i) => (
                <motion.div
                  key={`bad-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-2"
                >
                  <div className="font-semibold text-gray-800">
                    {benefit.label}
                  </div>
                  <div className="text-sm text-gray-600">{benefit.detail}</div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
