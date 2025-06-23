"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Zap,
  Target,
  BarChart3,
  Code,
  FileText,
  Lightbulb,
  Rocket,
} from "lucide-react";

const slides = [
  {
    type: "hero",
    title: "AI, 단순한 도구를 넘어서",
    subtitle: "업무의 경계를 허무는 AI 혁신",
    description: "AI를 단순히 답변하는 비서로만 쓰고 있지 않나요?",
    icon: Brain,
  },
  {
    type: "problem",
    title: "현재 AI 활용의 한계",
    description:
      "코드 고쳐주는 인턴, 모르는 걸 알려주는 선생님...\n이 정도로만 쓰고 있진 않으신가요?",
    points: ["단순 질의응답 도구", "코드 수정 어시스턴트", "지식 전달 매개체"],
    icon: Target,
  },
  {
    type: "question",
    title: "업무의 경계, 허물 수 있을까?",
    description:
      "AI는 각자의 영역에서만 쓰기엔 아깝습니다.\n업무의 경계를 허물 때 진짜 힘이 나옵니다!",
    highlight: "업무 영역 혁신",
    icon: Zap,
  },
  {
    type: "issue",
    title: "현재 업무의 문제점",
    description: "더 효율적으로 일할 수 없을까?",
    issues: [
      { label: "커뮤니케이션 비용", value: "30%" },
      { label: "불필요한 중간 산출물", value: "40%" },
      { label: "반복 작업", value: "25%" },
    ],
    icon: BarChart3,
  },
  {
    type: "process",
    title: "업무 프로세스 해부",
    description: "AI는 이 모든 단계를 잘할 수 있습니다.",
    steps: ["정책 정의", "요구사항 정리", "UX 설계", "GUI 구성", "개발"],
    icon: Code,
  },
  {
    type: "strength",
    title: "AI의 강점",
    description: "AI는 레퍼런스만 있다면 전부 잘합니다!",
    strengths: ["정책 정의", "요구사항 정리", "UX 설계", "GUI 구성", "개발"],
    icon: Rocket,
  },
  {
    type: "limit",
    title: "AI의 한계",
    description: "하지만 그런 일은 드뭅니다.",
    limit: "세상에 없는 것(예: 토스의 거꾸로 input)엔 약함",
    icon: Target,
  },
  {
    type: "impact",
    title: "업무 혁신의 본질",
    description: "업무 영역 자체를 허물 때 임팩트가 극대화됩니다!",
    benefits: [
      { label: "속도", value: "10x 빠름" },
      { label: "커뮤니케이션", value: "0 비용" },
      { label: "품질", value: "일관성" },
    ],
    icon: Zap,
  },
  {
    type: "case",
    title: "실제 사례: v0.dev",
    subtitle: "PRD부터 개발까지",
    description:
      "스마트임상시험: 최소 리소스로 최대 아웃풋\nAI가 요구사항 이해부터 개발까지 주도!",
    results: [
      "기획/디자인 공수 0",
      "개발 시간 70% 단축",
      "커뮤니케이션 비용 최소화",
    ],
    icon: FileText,
  },
  {
    type: "future",
    title: "AI로 업무의 미래를 만나다",
    description: "AI로 업무의 본질을 혁신할 수 있습니다.",
    applications: [
      "살아있는 문서 자동화",
      "코드 분석 기반 설계서 생성",
      "GitHub Actions 자동화",
    ],
    icon: Lightbulb,
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

  const slide = slides[index];
  const IconComponent = slide.icon;

  const renderSlide = () => {
    switch (slide.type) {
      case "hero":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={80} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-light mb-8 text-gray-600"
            >
              {slide.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-500 font-light"
            >
              {slide.description}
            </motion.p>
          </div>
        );

      case "problem":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-12 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <div className="space-y-6">
              {slide.points?.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
                >
                  <span className="text-xl md:text-2xl text-gray-700 font-light">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "question":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light whitespace-pre-line"
            >
              {slide.description}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-block"
            >
              <div className="bg-gray-900 px-8 py-4 rounded-full">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {slide.highlight}
                </span>
              </div>
            </motion.div>
          </div>
        );

      case "issue":
        return (
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {slide.issues?.map((issue, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="text-4xl font-black mb-4 text-gray-900">
                    {issue.value}
                  </div>
                  <div className="text-lg text-gray-600 font-light">
                    {issue.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "process":
        return (
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              {slide.steps?.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-gray-100 px-8 py-4 rounded-full text-lg font-medium text-gray-800 hover:bg-gray-200 transition-all duration-300"
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "strength":
        return (
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slide.strengths?.map((strength, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <span className="text-lg text-gray-700 font-light">
                    ✓ {strength}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "limit":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-700 font-light">
                {slide.limit}
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-500 font-light"
            >
              {slide.description}
            </motion.p>
          </div>
        );

      case "impact":
        return (
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {slide.benefits?.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="text-3xl font-black mb-4 text-gray-900">
                    {benefit.value}
                  </div>
                  <div className="text-lg text-gray-600 font-light">
                    {benefit.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "case":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={60} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-2 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-light mb-8 text-gray-600"
            >
              {slide.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light whitespace-pre-line"
            >
              {slide.description}
            </motion.p>
            <div className="space-y-4">
              {slide.results?.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                >
                  <span className="text-lg md:text-xl text-gray-700 font-light">
                    🎯 {result}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "future":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-2xl inline-block">
                <IconComponent size={70} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="space-y-6">
              {slide.applications?.map((app, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <span className="text-lg md:text-xl text-gray-700 font-light">
                    💡 {app}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );

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
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full h-[70vh] select-none px-8 relative z-10"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 z-20">
        <motion.button
          onClick={prev}
          disabled={index === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 border border-gray-200"
          aria-label="이전 슬라이드"
        >
          <ArrowLeft size={28} className="text-gray-800" />
        </motion.button>
        <motion.button
          onClick={next}
          disabled={index === slides.length - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 border border-gray-200"
          aria-label="다음 슬라이드"
        >
          <ArrowRight size={28} className="text-gray-800" />
        </motion.button>
      </div>

      <div className="absolute top-6 right-8 text-lg text-gray-500 select-none z-20 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}
