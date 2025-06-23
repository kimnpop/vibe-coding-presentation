import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ProblemSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ scale: 0, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl inline-block shadow-lg border border-red-200">
          <IconComponent size={56} className="text-red-700" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {slide.points?.map((point, i) => (
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
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className={`
              p-6 rounded-2xl border-2 transition-all duration-300 shadow-lg
              ${
                i === 0
                  ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300"
                  : ""
              }
              ${
                i === 1
                  ? "bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-300"
                  : ""
              }
              ${
                i === 2
                  ? "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300"
                  : ""
              }
              ${
                i === 3
                  ? "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300"
                  : ""
              }
            `}
          >
            <span className="text-lg md:text-xl font-medium leading-relaxed">
              {point}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
