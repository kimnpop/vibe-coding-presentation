import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const FutureSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto select-none">
      <motion.div
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="mb-12"
      >
        <div className="bg-gray-100 p-6 rounded-2xl inline-block shadow-lg border border-gray-200">
          <IconComponent size={64} className="text-gray-800" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.4, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">⚠️ Before</h3>
          {slide.applications?.slice(0, 2).map((app, i) => (
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
              className="bg-gray-100 p-6 rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-700">{app}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">✨ After</h3>
          {slide.applications?.slice(2).map((app, i) => (
            <motion.div
              key={i + 2}
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
              className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-800">{app}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {slide.highlight && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50, rotateY: 90 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
          transition={{
            delay: 1.0,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="mt-8 inline-block"
        >
          <div className="bg-gray-900 px-8 py-4 rounded-full shadow-2xl border-2 border-gray-700">
            <span className="text-lg font-bold text-white">
              🚀 {slide.highlight}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
