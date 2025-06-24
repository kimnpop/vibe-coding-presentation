import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const IssueSlide = ({ slide }: SlideComponentProps) => {
  return (
    <div className="text-center max-w-6xl mx-auto select-none">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {slide.issues?.map((issue, i) => {
          const IconComponent = issue.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 flex flex-col text-center items-center shadow-lg"
            >
              {IconComponent && (
                <div className="bg-gray-200/50 p-3 rounded-xl mb-4">
                  <IconComponent className="h-6 w-6 text-gray-800" />
                </div>
              )}
              <span className="text-5xl font-black text-gray-900 mb-2">
                {issue.value}
              </span>
              <h3 className="text-md font-semibold text-gray-800 flex-grow">
                {issue.label}
              </h3>
              <p className="text-xs text-gray-500 mt-3 whitespace-pre-line">
                {issue.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
