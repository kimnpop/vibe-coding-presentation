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

      <div className="relative">
        {/* Flow arrows */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
          {slide.strengths?.map((strength, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.15,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              {/* Connection line for mobile */}
              {i < slide.strengths!.length - 1 && (
                <div className="md:hidden absolute top-1/2 left-full w-4 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
              )}

              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-300 relative">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>

                <div className="text-center">
                  <span className="text-lg font-medium text-gray-700 leading-relaxed">
                    {strength}
                  </span>
                </div>

                {/* Arrow for desktop */}
                {i < slide.strengths!.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gray-300 transform -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
