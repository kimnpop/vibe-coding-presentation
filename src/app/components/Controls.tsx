import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

interface ControlsProps {
  index: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToFirst: () => void;
}

export const Controls = ({
  index,
  totalSlides,
  onNext,
  onPrev,
  onGoToFirst,
}: ControlsProps) => {
  return (
    <>
      <div className="absolute top-6 left-8 z-20">
        <motion.button
          onClick={onGoToFirst}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 border border-gray-200"
          aria-label="첫 페이지로"
        >
          <Home size={24} className="text-gray-800" />
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 z-20">
        <motion.button
          onClick={onPrev}
          disabled={index === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 border border-gray-200"
          aria-label="이전 슬라이드"
        >
          <ArrowLeft size={28} className="text-gray-800" />
        </motion.button>
        <motion.button
          onClick={onNext}
          disabled={index === totalSlides - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 border border-gray-200"
          aria-label="다음 슬라이드"
        >
          <ArrowRight size={28} className="text-gray-800" />
        </motion.button>
      </div>

      <div className="absolute top-6 right-8 text-lg text-gray-500 z-20 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
        {index + 1} / {totalSlides}
      </div>
    </>
  );
};
