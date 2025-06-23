"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "./components/SlideData";
import { Controls } from "./components/Controls";
import {
  HeroSlide,
  ProblemSlide,
  QuestionSlide,
  IssueSlide,
  ProcessSlide,
  StrengthSlide,
  LimitSlide,
  ImpactSlide,
  CaseSlide,
  FutureSlide,
} from "./components/slides";

export default function PitchDeck() {
  const [index, setIndex] = useState(0);

  // URL 파라미터에서 슬라이드 인덱스 읽기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const slideIndex = urlParams.get("slide");
    if (slideIndex !== null) {
      const parsedIndex = parseInt(slideIndex);
      if (
        !isNaN(parsedIndex) &&
        parsedIndex >= 1 &&
        parsedIndex <= slides.length
      ) {
        setIndex(parsedIndex - 1);
      }
    }
  }, []);

  // 슬라이드 변경 시 URL 업데이트
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", (index + 1).toString());
    window.history.replaceState({}, "", url);
  }, [index]);

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, slides.length - 1)),
    []
  );
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const goToFirst = useCallback(() => setIndex(0), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Home") goToFirst();
      if (e.key === "h" || e.key === "H" || e.keyCode === 72) goToFirst();
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "h" || e.key === "H" || e.keyCode === 72) goToFirst();
    };

    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "h" || e.key === "H" || e.keyCode === 72) goToFirst();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("keypress", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("keypress", onKeyPress);
    };
  }, [next, prev, goToFirst]);

  const renderSlide = () => {
    const slide = slides[index];

    switch (slide.type) {
      case "hero":
        return <HeroSlide slide={slide} />;
      case "problem":
        return <ProblemSlide slide={slide} />;
      case "question":
        return <QuestionSlide slide={slide} />;
      case "issue":
        return <IssueSlide slide={slide} />;
      case "process":
        return <ProcessSlide slide={slide} />;
      case "strength":
        return <StrengthSlide slide={slide} />;
      case "limit":
        return <LimitSlide slide={slide} />;
      case "impact":
        return <ImpactSlide slide={slide} />;
      case "case":
        return <CaseSlide slide={slide} />;
      case "future":
        return <FutureSlide slide={slide} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center w-full h-[70vh] px-8 relative z-10"
          style={{ userSelect: "text", cursor: "default" }}
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <Controls
        index={index}
        totalSlides={slides.length}
        onNext={next}
        onPrev={prev}
        onGoToFirst={goToFirst}
      />

      {/* Background floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-100 rounded-full opacity-15"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-gray-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gray-100 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gray-100 rounded-full opacity-15"></div>
      </div>
    </div>
  );
}
