"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "VIBE Coding Pitch",
    description: "사람들의 이목을 집중시키는 발표, 지금 시작합니다!",
  },
  {
    title: "문제 정의",
    description:
      "지루한 발표는 이제 그만! 모두가 집중하는 피치덱을 만들어보세요.",
  },
  {
    title: "솔루션",
    description: "Next.js + 인터랙티브 UI로 멋진 발표를 쉽고 빠르게!",
  },
  {
    title: "시작해볼까요?",
    description: "오른쪽 화살표(→)로 다음 슬라이드, 왼쪽(←)으로 이전 슬라이드!",
  },
];

export default function PitchDeck() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, slides.length - 1)),
    []
  );
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full h-[70vh] select-none"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg">
            {slides[index].title}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl opacity-90">
            {slides[index].description}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button
          onClick={prev}
          disabled={index === 0}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition disabled:opacity-30"
          aria-label="이전 슬라이드"
        >
          <ArrowLeft size={32} />
        </button>
        <button
          onClick={next}
          disabled={index === slides.length - 1}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition disabled:opacity-30"
          aria-label="다음 슬라이드"
        >
          <ArrowRight size={32} />
        </button>
      </div>
      <div className="absolute top-6 right-8 text-lg opacity-60 select-none">
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}
