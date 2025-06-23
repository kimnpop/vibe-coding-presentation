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
  ConciergeBell,
  Bot,
  GraduationCap,
  Languages,
  Shuffle,
  Puzzle,
  CopySlash,
  Hourglass,
} from "lucide-react";

export interface Slide {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  points?: Array<{
    text: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  issues?: Array<{
    label: string;
    value: string;
    detail?: string;
    icon?: React.ComponentType<{ className?: string }>;
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
    description: "우리가 일하는 방식, 정말 이대로 괜찮을까요?",
    icon: Eye,
  },
  {
    type: "problem",
    title: "AI, 혹시 이렇게만 쓰고 계신가요?",
    description: "이 방식들, 과연 AI의 전부일까요?",
    points: [
      {
        text: "정보를 빠르게 찾아주는 비서",
        icon: ConciergeBell,
      },
      {
        text: "단순 작업을 대신하는 인턴",
        icon: Bot,
      },
      {
        text: "학습을 도와주는 선생님",
        icon: GraduationCap,
      },
      {
        text: "문서/채팅을 번역하는 번역가",
        icon: Languages,
      },
    ],
    icon: Target,
  },
  {
    type: "issue",
    title: "진짜 문제는 다른 곳에 있습니다",
    subtitle: "개별 업무 최적화의 함정",
    description:
      "AI를 비서나 인턴처럼 쓰는 것은 내 업무 영역 안에서만 효율을 높일 뿐입니다. 하지만 진짜 비효율은 사람과 사람, 팀과 팀 사이의 '경계'에서 발생합니다.",
    issues: [
      {
        label: "컨텍스트 전환 비용",
        value: "23분",
        detail:
          "업무 중단 후 재집중 시간\n(Source: Gloria Mark, University of California, Irvine)",
        icon: Shuffle,
      },
      {
        label: "85%의 대기 시간",
        value: "85%",
        detail:
          "전체 리드타임의 85%는 가치를 더하지 않는 '대기 시간'이며, 대부분 부서 간 핸드오프에서 발생합니다. (Source: Mik Kersten, Project to Product)",
        icon: Hourglass,
      },
      {
        label: "지식 파편화",
        value: "20%",
        detail:
          "정보 검색/취합에 쓰는 업무 시간\n(Source: McKinsey Global Institute)",
        icon: Puzzle,
      },
      {
        label: "끝없는 중복 작업",
        value: "20%",
        detail:
          "데이터 전문가들이 중복 작업으로 낭비하는 주간 업무 시간\n(Source: IDC Report, 2018)",
        icon: CopySlash,
      },
    ],
    icon: BarChart3,
  },
  {
    type: "impact",
    title: "AI, 경계를 허물다",
    subtitle: "AI가 바꾸는 협업의 패러다임",
    description:
      "AI는 특정 역할을 맡은 '구성원'이 아니라, 기획부터 배포까지 모든 경계를 넘나드는 '프로세스 그 자체'가 될 수 있습니다.\n이를 통해 우리는 '경계'에서 발생하는 비용을 원천적으로 제거할 수 있습니다.",
    benefits: [
      {
        label: "Unified Process\n(통합 프로세스)",
        value: "No Handoff",
        detail:
          "AI가 기획-디자인-개발-배포 전 과정을 단독 처리하여 팀 간의 벽과 핸드오프를 제거합니다.",
      },
      {
        label: "Single Context\n(단일 컨텍스트)",
        value: "Zero Switching",
        detail:
          "모든 작업이 하나의 대화 안에서 이뤄지므로, 여러 툴을 오가며 발생하는 집중력 저하가 없습니다.",
      },
      {
        label: "Fragment-Free Knowledge\n(파편화 없는 지식)",
        value: "Zero Search",
        detail:
          "AI가 기획-디자인-코드를 단일 컨텍스트에서 생성하므로, 지식이 여러 툴에 흩어지지 않습니다.\n더 이상 Jira, Figma, Slack을 오가며 파편화된 정보를 찾을 필요가 없습니다.",
      },
    ],
    icon: TrendingUp,
  },
  {
    type: "comparison",
    title: "AI가 잘하는 것 vs 못하는 것",
    description: "AI의 강점과 한계를 명확히 구분해서 이해해봅시다",
    benefits: [
      {
        label: "기획",
        value: "잘함",
        detail: "PRD, 요구사항 분석, 사용자 스토리 작성",
      },
      {
        label: "디자인",
        value: "잘함",
        detail: "UI/UX 디자인, 와이어프레임, 프로토타입",
      },
      {
        label: "개발",
        value: "잘함",
        detail: "프론트엔드, 백엔드, API 개발",
      },
      {
        label: "문서화",
        value: "잘함",
        detail: "기술 문서, API 스펙, 사용자 가이드",
      },
      {
        label: "새로운 패턴",
        value: "어려움",
        detail: "세상에 없는 아주 새로운 UX/기술 패턴",
      },
      {
        label: "창의적 아이디어",
        value: "한계",
        detail: "완전히 새로운 비즈니스 모델이나 서비스",
      },
    ],
    icon: TrendingUp,
    subtitle: "AI의 능력과 한계를 정확히 파악하기",
  },
  {
    type: "strength",
    title: "AI 중심 업무의 실제 모습",
    description:
      "AI와 함께 일할 때 실제로 어떤 모습인지 구체적인 시나리오로 살펴봅시다",
    strengths: [
      "🎯 '스마트임상시험 플랫폼을 만들어줘' → AI가 전체 기획부터 시작",
      "📋 PRD, 와이어프레임, UI 디자인까지 자동 생성",
      "💻 프론트엔드 + 백엔드 코드 동시 구현",
      "🌊 한 번의 대화로 전체 프로세스 완성",
      "💬 중간 산출물이나 회의 없이 바로 결과물",
      "⚡ 3주 걸릴 일을 3일 만에 완성",
    ],
    icon: Workflow,
    subtitle: "구체적인 AI 업무 시나리오",
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
