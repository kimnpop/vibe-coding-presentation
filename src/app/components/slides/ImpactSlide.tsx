import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ImpactSlide = ({ slide }: SlideComponentProps) => {
  return (
    <div className="text-center max-w-6xl mx-auto select-none">
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
        className="text-base md:text-lg mb-12 text-gray-500 font-light whitespace-pre-line"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {slide.benefits?.map((benefit, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col text-left"
            >
              <div className="mb-4">
                <span className="text-md font-semibold text-green-800 bg-green-100 px-4 py-1.5 rounded-full transition-colors duration-300 group-hover:bg-green-200">
                  {benefit.value}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 whitespace-pre-line leading-snug">
                {benefit.label}
              </h3>

              <p className="text-gray-500 text-sm flex-grow whitespace-pre-line">
                {benefit.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
