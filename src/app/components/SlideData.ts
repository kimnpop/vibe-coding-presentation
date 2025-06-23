import {
  Brain,
  Zap,
  TrendingUp,
  Target,
  Lightbulb,
  BarChart3,
  Rocket,
  AlertTriangle,
  Code,
  FileText,
} from "lucide-react";

export interface Slide {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  points?: string[];
  issues?: Array<{
    label: string;
    value: string;
    detail?: string;
  }>;
  steps?: string[];
  strengths?: string[];
  limit?: string;
  solutions?: string[];
  benefits?: Array<{
    label: string;
    value: string;
    detail?: string;
  }>;
  results?: string[];
  applications?: string[];
  highlight?: string;
}

export const slides: Slide[] = [
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
