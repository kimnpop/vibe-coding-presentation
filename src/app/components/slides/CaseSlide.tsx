import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const CaseSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0, rotateX: -90 }}
        animate={{ scale: 1, rotateX: 0 }}
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
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, rotateZ: 15 }}
        animate={{ opacity: 1, rotateZ: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl mb-10 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>
      <div className="space-y-3">
        {slide.results?.map((result, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -150, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md"
          >
            <span className="text-base md:text-lg text-gray-700 font-light">
              {result}
            </span>
          </motion.div>
        ))}
      </div>
      {slide.highlight && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50, rotate: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="mt-8 inline-block"
        >
          <div className="bg-gray-900 px-6 py-3 rounded-full shadow-lg">
            <span className="text-base font-bold text-white">
              {slide.highlight}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
