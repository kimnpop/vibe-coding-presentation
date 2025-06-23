import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const IssueSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto select-none">
      <motion.div
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, rotateZ: -10 }}
          animate={{ opacity: 1, rotateZ: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

        <div className="space-y-8">
          {slide.issues?.map((issue, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`relative flex items-center ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-gray-400 rounded-full shadow-lg z-10"></div>

              {/* Content card */}
              <div className={`w-5/12 ${i % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl font-black mb-3 text-gray-900">
                    {issue.value}
                  </div>
                  <div className="text-lg text-gray-700 font-semibold mb-2">
                    {issue.label}
                  </div>
                  {issue.detail && (
                    <div className="text-sm text-gray-500 font-light leading-relaxed">
                      {issue.detail}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
