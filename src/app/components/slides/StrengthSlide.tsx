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

      {/* Main content area */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central conversation bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-2xl mb-8 relative"
        >
          <div className="text-2xl font-bold text-gray-800 mb-4">
            {slide.strengths?.[0]}
          </div>
          <div className="text-lg text-gray-600">
            이 한 마디로 시작되는 AI와의 대화
          </div>
        </motion.div>

        {/* Surrounding process cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slide.strengths?.slice(1, 4).map((strength, i) => (
            <motion.div
              key={i + 1}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -5 : 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 0.6 + i * 0.15,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: i % 2 === 0 ? -2 : 2,
                transition: { duration: 0.2 },
              }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-base font-medium text-gray-700 leading-relaxed">
                {strength}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {slide.strengths?.slice(4).map((strength, i) => (
            <motion.div
              key={i + 4}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white px-6 py-4 rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-800">
                {strength}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
