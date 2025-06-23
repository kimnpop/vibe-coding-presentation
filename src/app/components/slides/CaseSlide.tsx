import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const CaseSlide = ({ slide }: SlideComponentProps) => {
  // const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-5xl mx-auto select-none">
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
        {/* 아이콘 영역 제거 */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {slide.results?.map((result, i) => (
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
            className="relative group"
          >
            {/* Storyboard frame */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Frame number */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gray-300 rounded-tl-2xl"></div>

              <div className="text-center pt-4">
                <span className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                  {result}
                </span>
              </div>
            </div>
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
          className="inline-block"
        >
          <div className="bg-gray-900 px-8 py-4 rounded-full shadow-2xl border-2 border-gray-700">
            <span className="text-lg font-bold text-white">
              ✨ {slide.highlight}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
