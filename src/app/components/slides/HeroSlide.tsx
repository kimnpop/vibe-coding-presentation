import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const HeroSlide = ({ slide }: SlideComponentProps) => {
  // const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto select-none relative min-h-screen flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold mb-4 text-gray-800"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base md:text-lg mb-12 text-gray-500 font-light"
      >
        {slide.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8"
      >
        <img
          src="/print-then-scan.png"
          alt="Print then scan meme"
          className="mx-auto rounded-lg shadow-2xl"
          style={{ maxWidth: "600px" }}
        />
      </motion.div>
    </div>
  );
};
