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
  TrendingUp,
  AlertTriangle,
  Home,
} from "lucide-react";

const slides = [
  {
    type: "hero",
    title: "하던대로 하면 안 됩니다.",
    subtitle: "바이브코딩으로 본 생산성의 전환",
    description:
      "매일 ChatGPT에게 질문만 하고 계신가요? AI는 그 이상의 잠재력을 가지고 있습니다.",
    icon: Brain,
  },
  {
    type: "problem",
    title: "현재 AI 활용의 한계",
    description: "대부분의 사람들이 AI를 이렇게만 쓰고 있습니다",
    points: [
      "❓ 질문하고 답변받기 (ChatGPT)",
      "🔧 코드 버그 수정 (GitHub Copilot)",
      "📝 문서 작성 도움 (Notion AI)",
      "🎨 이미지 생성 (DALL-E, Midjourney)",
    ],
    icon: Target,
    subtitle: "이 정도로만 쓰기엔 너무 아깝습니다",
  },
  {
    type: "question",
    title: "업무의 경계, 허물 수 있을까?",
    description:
      "개발자는 개발만, 기획자는 기획만...\n이런 구분이 정말 필요한가요?",
    highlight: "업무 영역 혁신",
    icon: Zap,
    subtitle: "AI는 모든 영역을 연결할 수 있습니다",
  },
  {
    type: "issue",
    title: "현재 업무의 숨겨진 비용",
    description: "우리가 매일 겪고 있는 비효율의 현실",
    issues: [
      {
        label: "커뮤니케이션 비용",
        value: "30%",
        detail: "회의, 이메일, 메신저",
      },
      {
        label: "불필요한 중간 산출물",
        value: "40%",
        detail: "PRD, 와이어프레임, 목업",
      },
      { label: "반복 작업", value: "25%", detail: "보일러플레이트 코드" },
    ],
    icon: BarChart3,
    subtitle: "실제 업무 시간의 95%가 이런 일들",
  },
  {
    type: "process",
    title: "전통적인 업무 프로세스",
    description: "각 단계마다 새로운 사람이 필요하고, 새로운 산출물이 생깁니다",
    steps: [
      "📋 기획자: PRD 작성 (1주)",
      "🎨 디자이너: 와이어프레임 (1주)",
      "🎭 디자이너: UI 디자인 (1주)",
      "💻 개발자: 프론트엔드 (2주)",
      "🔧 개발자: 백엔드 (2주)",
      "🧪 QA: 테스트 (3일)",
    ],
    icon: Code,
    subtitle: "총 6주, 5명의 인력이 필요",
  },
  {
    type: "strength",
    title: "AI의 놀라운 능력",
    description:
      "AI는 레퍼런스만 있다면 모든 단계를 혼자서 처리할 수 있습니다!",
    strengths: [
      "📋 PRD 작성 및 요구사항 분석",
      "🎨 UI/UX 디자인 및 와이어프레임",
      "💻 프론트엔드 + 백엔드 개발",
      "🧪 자동화된 테스트 코드 생성",
      "📚 문서화 및 API 스펙 작성",
    ],
    icon: Rocket,
    subtitle: "한 번의 프롬프트로 모든 것을",
  },
  {
    type: "limit",
    title: "AI의 한계와 극복 방법",
    description: "AI도 완벽하지는 않습니다. 하지만 우리가 도와줄 수 있습니다.",
    limit: "세상에 없는 것(예: 토스의 거꾸로 input)엔 약함",
    icon: AlertTriangle,
    subtitle: "하지만 이런 경우는 드뭅니다",
    solutions: [
      "🎯 명확한 요구사항 제시",
      "📖 구체적인 레퍼런스 제공",
      "🔄 반복적인 피드백과 개선",
    ],
  },
  {
    type: "impact",
    title: "업무 혁신의 실제 임팩트",
    description: "업무 영역을 허물 때 얻을 수 있는 놀라운 변화",
    benefits: [
      { label: "개발 속도", value: "10x 빠름", detail: "6주 → 3일" },
      { label: "커뮤니케이션", value: "0 비용", detail: "회의 불필요" },
      { label: "품질", value: "일관성", detail: "AI의 논리적 사고" },
    ],
    icon: TrendingUp,
    subtitle: "실제 프로젝트에서 검증된 결과",
  },
  {
    type: "case",
    title: "실제 사례: v0.dev로 만든 스마트임상시험",
    subtitle: "PRD부터 배포까지 3일 만에 완성",
    description:
      "기존 6주 걸리던 프로젝트를 AI의 도움으로 3일 만에 완성했습니다.\n\n기획자, 디자이너, 개발자 모두가 AI와 협업하여\n업무의 경계를 허물고 혁신적인 결과를 만들어냈습니다.",
    results: [
      "🎯 기획/디자인 공수 0 (AI가 대체)",
      "⚡ 개발 시간 70% 단축 (3일 → 1일)",
      "💬 커뮤니케이션 비용 최소화 (회의 0회)",
      "🚀 배포까지 완료 (CI/CD 자동화)",
    ],
    icon: FileText,
    highlight: "성공 사례",
  },
  {
    type: "future",
    title: "AI로 업무의 미래를 만나다",
    description: "앞으로 AI와 함께할 수 있는 더 놀라운 가능성들",
    applications: [
      "📄 살아있는 문서: 코드 변경시 자동 업데이트되는 PRD",
      "🔍 코드 분석 기반 설계서: 기존 코드를 분석해서 새로운 기능 설계",
      "🤖 GitHub Actions 자동화: PR 생성부터 배포까지 완전 자동화",
      "📊 실시간 대시보드: 개발 진행상황을 실시간으로 추적",
      "🎯 A/B 테스트 자동화: AI가 최적의 UX를 찾아줌",
    ],
    icon: Lightbulb,
    subtitle: "이미 시작된 미래",
    highlight: "AI와 함께하는 업무 혁신",
  },
];

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
        parsedIndex >= 0 &&
        parsedIndex < slides.length
      ) {
        setIndex(parsedIndex);
      }
    }
  }, []);

  // 슬라이드 변경 시 URL 업데이트
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", index.toString());
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
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, goToFirst]);

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
              className="mb-16"
            >
              <div className="bg-gray-100 p-8 rounded-3xl inline-block">
                <IconComponent size={72} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black mb-8 text-gray-900 leading-tight"
            >
              {slide.title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-light mb-12 text-gray-600"
            >
              {slide.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto"
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
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="space-y-4">
              {slide.points?.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                  className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <span className="text-lg md:text-xl text-gray-700 font-light">
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
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="inline-block"
            >
              <div className="bg-gray-900 px-8 py-4 rounded-full">
                <span className="text-xl md:text-2xl font-bold text-white">
                  {slide.highlight}
                </span>
              </div>
            </motion.div>
          </div>
        );

      case "issue":
        return (
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.issues?.map((issue, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="text-3xl font-black mb-3 text-gray-900">
                    {issue.value}
                  </div>
                  <div className="text-base text-gray-600 font-light mb-2">
                    {issue.label}
                  </div>
                  {issue.detail && (
                    <div className="text-sm text-gray-500 font-light">
                      {issue.detail}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "process":
        return (
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3">
              {slide.steps?.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="bg-gray-100 px-5 py-3 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-200 transition-all duration-300"
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "strength":
        return (
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {slide.strengths?.map((strength, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <span className="text-base text-gray-700 font-light">
                    {strength}
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
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8"
            >
              <p className="text-lg md:text-xl text-gray-700 font-light">
                {slide.limit}
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-lg md:text-xl text-gray-500 font-light mb-8"
            >
              {slide.description}
            </motion.p>
            {slide.solutions && (
              <div className="space-y-3">
                {slide.solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.2 }}
                    className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                  >
                    <span className="text-base md:text-lg text-gray-700 font-light">
                      {solution}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        );

      case "impact":
        return (
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.benefits?.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="text-2xl font-black mb-3 text-gray-900">
                    {benefit.value}
                  </div>
                  <div className="text-base text-gray-600 font-light mb-2">
                    {benefit.label}
                  </div>
                  {benefit.detail && (
                    <div className="text-sm text-gray-500 font-light">
                      {benefit.detail}
                    </div>
                  )}
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
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={56} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-4 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl font-light mb-8 text-gray-600"
            >
              {slide.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="space-y-3">
              {slide.results?.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                >
                  <span className="text-base md:text-lg text-gray-700 font-light">
                    {result}
                  </span>
                </motion.div>
              ))}
            </div>
            {slide.highlight && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="mt-8 inline-block"
              >
                <div className="bg-gray-900 px-6 py-3 rounded-full">
                  <span className="text-base font-bold text-white">
                    {slide.highlight}
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        );

      case "future":
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-100 p-6 rounded-2xl inline-block">
                <IconComponent size={64} className="text-gray-800" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl font-light mb-8 text-gray-600"
              >
                {slide.subtitle}
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl mb-10 text-gray-600 font-light"
            >
              {slide.description}
            </motion.p>
            <div className="space-y-4">
              {slide.applications?.map((app, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.2 }}
                  className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                >
                  <span className="text-base md:text-lg text-gray-700 font-light">
                    {app}
                  </span>
                </motion.div>
              ))}
            </div>
            {slide.highlight && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="mt-8 inline-block"
              >
                <div className="bg-gray-900 px-6 py-3 rounded-full">
                  <span className="text-base font-bold text-white">
                    {slide.highlight}
                  </span>
                </div>
              </motion.div>
            )}
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

      <div className="absolute top-6 left-8 z-20">
        <motion.button
          onClick={goToFirst}
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
