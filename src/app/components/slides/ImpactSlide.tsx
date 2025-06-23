import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ImpactSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto">
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
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl inline-block shadow-lg border border-red-200">
          <IconComponent size={56} className="text-red-700" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>

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
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>

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
                    className="text-red-500"
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
    </div>
  );
};
