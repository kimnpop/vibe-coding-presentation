import {
  TrendingUp,
  Target,
  BarChart3,
  Rocket,
  FileText,
  Users,
  GitBranch,
  Eye,
  Workflow,
  CheckCircle,
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
    title: "하던대로 하면 안 됩니다",
    subtitle: "바이브코딩으로 본 생산성의 전환",
    description:
      "일하는 사람들의 단절된 업무와 반복적인 작업의 현실을 바꿔봅시다",
    icon: Eye,
  },
  {
    type: "problem",
    title: "AI를 어떻게 쓰고 있습니까?",
    description:
      "비서? 인턴? 선생님? 하지만 진짜 생산성 전환은 그 다음에 있습니다",
    points: [
      "❓ 비서처럼 질문하고 답변받기",
      "👨‍💼 인턴처럼 단순 작업 위임",
      "👨‍🏫 선생님처럼 학습 도움받기",
      "➤ AI에게 전체 업무를 맡길 수 있을까?",
    ],
    icon: Target,
    subtitle: "AI는 그 이상의 잠재력을 가지고 있습니다",
  },
  {
    type: "issue",
    title: "병목은 어디서 생기는가?",
    description: "업무가 잘게 쪼개진 현실에서 경계마다 생기는 비용들",
    issues: [
      {
        label: "컨텍스트 전환",
        value: "23분",
        detail: "평균 회복 시간 (Gloria Mark)",
      },
      {
        label: "핸드오프 많은 팀",
        value: "46배",
        detail: "배포 속도 감소 (DORA)",
      },
      {
        label: "사일로 조직",
        value: "2배",
        detail: "프로젝트 실패 확률 증가 (IBM)",
      },
    ],
    icon: BarChart3,
    subtitle: "기획 → 디자인 → 개발 → QA, 경계마다 생기는 비용",
  },
  {
    type: "impact",
    title: "정량적 근거: 왜 경계가 비용인가",
    description: "연구 결과로 입증된 업무 경계의 숨겨진 비용",
    benefits: [
      {
        label: "컨텍스트 스위칭",
        value: "23분",
        detail: "평균 회복 시간 (Gloria Mark)",
      },
      {
        label: "핸드오프 많은 팀",
        value: "46배 ↓",
        detail: "배포 속도 감소 (DORA)",
      },
      {
        label: "복구 속도",
        value: "2,600배",
        detail: "느림 (DORA)",
      },
    ],
    icon: TrendingUp,
    subtitle: "사일로 조직은 프로젝트 실패 확률 2배 증가 (IBM)",
  },
  {
    type: "strength",
    title: "AI는 역할이 아니라 흐름이다",
    description: "AI는 모든 단계를 한 맥락 안에서 처리 가능합니다",
    strengths: [
      "🎯 문제 정의",
      "🎨 UX 설계",
      "🖼️ UI 생성",
      "💻 코드 구현",
      "🌊 모든 단계를 한 맥락 안에서 처리",
    ],
    icon: Workflow,
    subtitle: "사람 중심의 분업 vs AI 중심의 흐름",
  },
  {
    type: "case",
    title: "사례: 스마트임상시험 프로토타입 실험",
    subtitle: "v0.dev + 생성형 AI로 전체 프로세스 실험",
    description:
      "목적 설명 → PRD → UX → 디자인 → 코드 생성까지\n\n커뮤니케이션 거의 없이 프로토타입 완성\n\n실제 개발까진 안 갔지만, 초기 기획·구현까지 AI 단독 실행 가능성 입증",
    results: [
      "💡 목적 설명부터 시작",
      "📋 PRD 자동 생성",
      "🎨 UX/UI 설계",
      "💻 코드 자동 생성",
      "🚧 실제 개발까지는 미완성이지만 가능성 입증",
    ],
    icon: Rocket,
    highlight: "AI 단독 실행 가능성 입증",
  },
  {
    type: "process",
    title: "우리는 두 가지 일을 한다",
    description: "현실은 대부분 2번에 시간과 리소스를 씁니다",
    steps: [
      "🎯 1️⃣ 제품을 만드는 일",
      "⚙️ 2️⃣ 제품을 잘 만들기 위한 일",
      "📄 문서 작성",
      "🔄 운영 관리",
      "📏 기준 정의",
      "💬 커뮤니케이션",
    ],
    icon: Users,
    subtitle: "AI가 잘하는 일과 사람이 해야 할 일",
  },
  {
    type: "future",
    title: "사례: 살아있는 문서 만들기",
    subtitle: "코드가 바뀔 때 문서도 자동으로 바꾸자",
    description: "문서가 금방 낡는 문제를 해결하기 위한 자동화 시스템",
    applications: [
      "⚠️ 문서가 금방 낡는다",
      "💡 코드가 바뀔 때 문서도 자동으로 바꾸자",
      "🤖 GitHub Actions + AI",
      "🔄 PR 병합 → 문서 자동 갱신",
      "✅ 항상 최신 상태의 설계 문서 자동 유지",
    ],
    icon: FileText,
    highlight: "항상 최신 상태의 문서",
  },
  {
    type: "question",
    title: "메시지 요약",
    description:
      "업무의 경계는 효율을 위해 만들어졌지만,\n오늘날에는 생산성의 병목이 됩니다.\n\nAI는 역할을 넘고, 경계를 허물고, 흐름을 통합합니다.\n\nAI에게 전체 업무 흐름을 맡기고,\n우리는 방향을 설정하고 검토하는 역할로 전환해야 합니다.",
    highlight: "AI와 함께하는 업무 혁신",
    icon: CheckCircle,
    subtitle: "경계를 허물고 흐름을 통합하는 AI",
  },
  {
    type: "hero",
    title: "하던대로 하면, 계속 그 정도만 나옵니다",
    subtitle: "AI를 도구로만 쓰지 말고, 팀처럼 일하게 하십시오",
    description: "이제는 우리가 AI에게 일을 시킬 차례입니다",
    icon: GitBranch,
  },
];
