import {
  TrendingUp,
  Target,
  BarChart3,
  Rocket,
  FileText,
  Users,
  Eye,
  CheckCircle,
  ConciergeBell,
  Bot,
  GraduationCap,
  Languages,
  Shuffle,
  Puzzle,
  CopySlash,
  Hourglass,
  Lightbulb,
  Palette,
  Code,
  ExternalLink,
  Sparkles,
  PieChart,
  GitMerge,
  FileX2,
  Github,
  BrainCircuit,
  Binary,
} from "lucide-react";

export interface Slide {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  links?: Array<{
    text: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  points?: Array<{
    metric?: string;
    metricLabel?: string;
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
  gaps?: Array<{
    role: string;
    icon: React.ComponentType<{ className?: string }>;
    can: string;
    cannot: string;
  }>;
  overlaps?: {
    domains: string[];
    roles: Array<{
      name: string;
      competencies: number[];
    }>;
  };
  results?: string[];
  applications?: string[];
  highlight?: string;
  processSteps?: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  experiments?: Array<{
    title: string;
    team: string;
    aiRole: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  workDistributionData?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  source?: string;
  processDetails?: Array<{
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  automationFlow?: {
    title: string;
    steps: Array<{
      name: string;
      icon: React.ComponentType<{ className?: string }>;
    }>;
  };
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
      "AI를 비서나 인턴처럼 쓰는 것은 내 업무 영역 안에서만 효율을 높일 뿐입니다.\n하지만 진짜 비효율은 사람과 사람, 팀과 팀 사이의 '경계'에서 발생합니다.",
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
          "AI가 기획, 디자인, 코드 등 필요한 모든 정보를 단일 맥락에서 통합 처리합니다. 개발자는 더 이상 Jira, Figma, Slack 등 여러 도구를 오가며 정보를 찾거나 질문하느라 스스로 업무 흐름을 중단시킬 필요가 없습니다.",
      },
      {
        label: "Fragment-Free Knowledge\n(파편화 없는 지식)",
        value: "Zero Search",
        detail:
          "AI가 모든 산출물을 살아있는 '단일 진실 공급원(SSoT)'으로 통합 관리합니다. 더 이상 Jira, Figma 등 여러 시스템에 흩어진 정보를 찾아다닐 필요가 없습니다.",
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
    type: "action",
    title: "우리가 하는 일, AI가 더 잘합니다.",
    subtitle: "AI가 더 잘하는 일, 경계를 허무는 데 써야 합니다.",
    description:
      "AI의 통합 능력을 활용해, 의도적으로 '역할 공백'을 만들고 그 자리를 AI에게 맡기는 실험이 필요합니다.",
    icon: Users,
    experiments: [
      {
        title: "A 기능",
        team: "기획 + 디자인",
        aiRole: "개발",
        icon: Code,
      },
      {
        title: "B 기능",
        team: "기획 + 개발",
        aiRole: "디자인",
        icon: Palette,
      },
      {
        title: "C 기능",
        team: "디자인 + 개발",
        aiRole: "기획",
        icon: Lightbulb,
      },
    ],
  },
  {
    type: "case",
    title: "사례: 스마트임상시험 프로토타입",
    subtitle: "AI 단독으로 실행한 End-to-End 프로세스",
    description:
      "단 하나의 목표 설명에서 시작해, 커뮤니케이션 없이 기획, 디자인, 코드 생성을 거쳐 프로토타입을 완성하며 AI의 통합 실행 능력을 입증했습니다.",
    links: [
      {
        text: "프로토타입 보기",
        url: "https://ggzklqfy6p9trgpd9.lite.vusercontent.net/",
        icon: ExternalLink,
      },
      {
        text: "개발 과정 보기",
        url: "https://v0.dev/chat/image-analysis-FESFfl45xHY",
        icon: FileText,
      },
      {
        text: "개선된 과정 보기",
        url: "https://v0.dev/chat/notion-audio-transcription-qlS9HrgOUIr",
        icon: Sparkles,
      },
    ],
    processSteps: [
      { name: "목표 설정", icon: Target },
      { name: "PRD 생성", icon: FileText },
      { name: "UX/UI 디자인", icon: Palette },
      { name: "코드 구현", icon: Code },
      { name: "프로토타입 완성", icon: CheckCircle },
    ],
    icon: Rocket,
    highlight: "AI 단독 실행 가능성 입증",
  },
  {
    type: "workDistribution",
    title: "우리가 하는 일의 진짜 모습",
    subtitle: "업무의 58%는 '업무를 위한 업무'입니다",
    description:
      "지금까지 우리는 전체의 42%를 차지하는 '핵심 업무'의 효율을 높이는 새로운 방식을 이야기했습니다.\n하지만 생산성을 가로막는 더 큰 문제는 보이지 않는 곳에 있습니다.",
    icon: PieChart,
    workDistributionData: [
      { name: "핵심 업무 (전략+전문)", value: 42, color: "#3b82f6" },
      { name: "업무를 위한 업무", value: 58, color: "#cbd5e1" },
    ],
    source: "Source: Asana, Anatomy of Work Index 2022 (via hrmonline.com.au)",
  },
  {
    type: "future",
    title: "사례: '살아있는' 시스템 설계서",
    subtitle: "AI로 코드와 문서의 라이프사이클을 동기화합니다.",
    description:
      "SSoT(Single Source of Truth) 부재 문제를 AI로 해결한 과정입니다.",
    icon: GitMerge,
    processDetails: [
      {
        title: "As-is: 제안과 논의의 기록",
        description:
          "우리는 `RFC`와 `Design Doc`을 통해 아이디어를 제안하고, 특정 시점의 설계를 기록으로 남깁니다. 하지만 이 문서들은 '박제된 생각'일 뿐, 살아있는 코드의 최종 모습을 반영하지는 못합니다.",
        icon: FileText,
      },
      {
        title: "Problem: 시스템의 현재 청사진 부재",
        description:
          "개발이 진행되며 코드는 계속 바뀌지만, 이를 따라 문서를 갱신하는 것은 엄청난 비용입니다. 결국, 시스템의 현재 상태를 정확히 보여주는 '단일 진실 공급원 (SSoT)'은 존재하지 않게 됩니다.",
        icon: FileX2,
      },
    ],
    automationFlow: {
      title: "To-be: AI 기반 자동화 파이프라인",
      steps: [
        { name: "PR Merge", icon: GitMerge },
        { name: "GitHub Action", icon: Github },
        { name: "Script", icon: Code },
        { name: "Gemini AI", icon: Bot },
        { name: "Wiki Update", icon: FileText },
      ],
    },
    links: [
      {
        text: "완성된 설계 문서 보기",
        url: "https://github.com/khc-dp/dp-app-techblog/wiki/System-Architecture",
        icon: ExternalLink,
      },
      {
        text: "자동화 과정 보기",
        url: "https://github.com/khc-dp/dp-app-techblog/blob/main/.github/workflows/publish_to_wiki.yml",
        icon: Github,
      },
    ],
  },
  {
    type: "mindset",
    title: "새로운 시대의 업무 원칙",
    subtitle: "AI는 도구가 아니라, 새로운 업무 표준입니다",
    description:
      "비즈니스 목표를 달성하는 방식은 근본적으로 바뀌었습니다. 이제 AI와 함께 일하는 새로운 방식이 '선택'이 아닌 '표준'이 되고 있습니다. 이 원칙들을 따르지 못한다면, 우리는 더 이상 AI 시대가 요구하는 기준에 맞는 인재라고 할 수 없을 것입니다.",
    icon: BrainCircuit,
    points: [
      {
        metric: "0",
        metricLabel: "Handoff",
        text: "AI를 프로세스 통합자로 삼아 팀 간의 경계를 허물고, 실행의 병목을 원천적으로 제거합니다.",
        icon: GitMerge,
      },
      {
        metric: "0%",
        metricLabel: "업무를 위한 업무",
        text: "반복적이고 가치 없는 업무를 AI에 위임하여, 확보된 자원을 100% 핵심 가치 창출에 집중시킵니다.",
        icon: Rocket,
      },
      {
        metric: "∞",
        metricLabel: "가설 검증 사이클",
        text: "'어떻게'의 제약을 AI로 제거하고, '무엇을, 왜'에만 집중하여 실패 비용 없이 무한에 가깝게 실험하고 학습합니다.",
        icon: Sparkles,
      },
    ],
  },
  {
    type: "codex",
    title: "이런 것도 해보고 있어요",
    icon: Binary,
    description: "AI에게 모든 개발을 순서 없이, 병렬로 한 번에 맡겨보는 실험.",
    links: [
      {
        text: "OpenAI Codex에 대해 더 알아보기",
        url: "https://openai.com/index/introducing-codex/",
        icon: ExternalLink,
      },
    ],
  },
];
