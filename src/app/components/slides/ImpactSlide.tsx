import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ImpactSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-5xl mx-auto">
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
        <div className="bg-gray-100 p-6 rounded-2xl inline-block shadow-lg">
          <IconComponent size={56} className="text-gray-800" />
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
        className="text-lg md:text-xl mb-10 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slide.benefits?.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.05,
              duration: 0.2,
              ease: "easeOut",
            }}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="text-3xl font-black mb-3 text-gray-900">
              {benefit.value}
            </div>
            <div className="text-base text-gray-600 font-light mb-2">
              {benefit.label}
            </div>
            {benefit.detail && (
              <div className="text-sm text-gray-500 font-light">
                {benefit.detail}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
