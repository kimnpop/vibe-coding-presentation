import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ImpactSlide = ({ slide }: SlideComponentProps) => {
  // const IconComponent = slide.icon;

  // Check if this is the transition slide (AI difference slide)
  const isTransitionSlide = slide.title === "그렇다면 AI는 어떻게 다를까?";

  return (
    <div className="text-center max-w-6xl mx-auto select-none">
      <motion.div
        initial={{ scale: 0, rotateZ: 180 }}
        animate={{ scale: 1, rotateZ: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.2,
          ease: "easeOut",
        }}
        className="mb-12"
      >
        {/* 아이콘 영역 제거 */}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl font-semibold mb-4 text-gray-800"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="text-base md:text-lg mb-12 text-gray-500 font-light"
      >
        {slide.description}
      </motion.p>

      {isTransitionSlide ? (
        // Transition slide layout - AI difference
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slide.benefits?.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              {/* Background circle */}
              <div className="absolute inset-0 bg-gray-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>

              {/* Main content */}
              <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                {/* Circular progress indicator */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-600"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 251.2" }}
                      animate={{ strokeDasharray: "251.2 251.2" }}
                      transition={{
                        delay: 0.8 + i * 0.1,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-gray-900">
                      {benefit.value}
                    </span>
                  </div>
                </div>

                <div className="text-xl text-gray-700 font-semibold mb-3">
                  {benefit.label}
                </div>
                {benefit.detail && (
                  <div className="text-sm text-gray-500 font-light leading-relaxed">
                    {benefit.detail}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Capabilities comparison slide layout
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI가 잘하는 것 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              ✅ AI가 잘하는 것
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {slide.benefits?.slice(0, 4).map((benefit, i) => (
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
                    transition: { duration: 0.2 },
                  }}
                  className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-green-800">
                      {benefit.label}
                    </span>
                    <span className="text-lg font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {benefit.value}
                    </span>
                  </div>
                  <div className="text-sm text-green-700 leading-relaxed">
                    {benefit.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI가 못하는 것 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-red-800 mb-6">
              ❌ AI가 어려워하는 것
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {slide.benefits?.slice(4).map((benefit, i) => (
                <motion.div
                  key={i + 4}
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
                  className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-red-800">
                      {benefit.label}
                    </span>
                    <span className="text-lg font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                      {benefit.value}
                    </span>
                  </div>
                  <div className="text-sm text-red-700 leading-relaxed">
                    {benefit.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
