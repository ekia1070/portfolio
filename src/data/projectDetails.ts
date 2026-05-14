export type ProjectDetail = {
  seq: string;
  title: string;
  period: string;
  customer: string;
  role: string;
  techStack: string[];
  environment: string;
  responsibilities: string[];
  problemSolving: {
    situation: string[];
    solution: string[];
    result: string[];
  };
};

export const projectDetails: Record<string, ProjectDetail> = {
  PD_01: {
    seq: "PD_01",
    title: "연료연소 통합관리시스템 구축",
    period: "2017.10 ~ 2018.03",
    customer: "한국남부발전",
    role: "개발 PM & PL",
    techStack: [
      "전자정부프레임워크",
      "Ibatis",
      "Oracle",
      "SVN",
      "IbSheet",
      "HTML5",
    ],
    environment: "Windows, Linux Server",
    responsibilities: [
      "개발 관련 모든 산출물 작성 및 프로젝트 공통 모듈 설계와 개발 업무 스케쥴 관리",
      "개발 환경 및 서버 환경 세팅과 프로젝트 배포 업무 처리",
      "본사 및 사업소 담당자 인터뷰를 통한 요구사항 정의 및 설계 진행",
      "내부 시스템 및 외부 홈페이지 2개 시스템 구축과 선박 운항동정 기능 연계",
      "GENi, PMDC 등 레거시 시스템과 SAP 시스템 연계 작업 진행",
    ],
    problemSolving: {
      situation: [
        "본사, 하동 사업소, 삼척 사업소 총 3개 부서가 함께 사용하는 시스템 구축 프로젝트를 진행하였으며, 하동 사업소에는 기존 운영 중인 레거시 시스템이 존재하는 상황이었습니다.",
        "초기 제안 단계에서는 통합 시스템 구축 방향으로 진행되었으나, 실제 업무 프로세스 및 요구사항 조율 과정에서 부서별 운영 방식 차이로 인해 단일 구조로 통합하기 어려운 문제가 발생하였습니다.",
        "제한된 구축 기간 내 각 부서 환경에 맞는 시스템을 개별적으로 구축해야 하는 상황이었습니다.",
      ],
      solution: [
        "본사 및 사업소 담당자 인터뷰를 직접 진행하며 업무 프로세스와 요구사항을 재정의하고, 부서별 기능 범위를 구분하여 설계를 진행하였습니다.",
        "프리랜서 과장급 인력을 포함한 개발 인력을 본사와 사업소 단위로 역할 분담하여 병렬 개발 구조를 구성하였습니다.",
        "기능 설계 및 산출물 작성 이후 공통 모듈 개발과 핵심 기능 구현 작업에 참여하였습니다.",
        "GENi, PMDC, SAP 등 레거시 시스템 연계 구조를 함께 설계하여 기존 운영 환경과의 연속성을 유지할 수 있도록 구성하였습니다.",
      ],
      result: [
        "부서별 요구사항 차이를 반영한 시스템 구축을 제한된 일정 내 안정적으로 완료하였습니다.",
        "내부 시스템과 외부 홈페이지 간 기능 연계를 포함한 통합 운영 환경을 구축하였습니다.",
        "레거시 시스템 및 SAP 연계를 통해 기존 업무 흐름을 유지하면서 신규 시스템 전환을 성공적으로 수행하였습니다.",
      ],
    },
  },
  PD_02: {
    seq: "PD_02",
    title: "Codemy 블록체인 교육 플랫폼 사이트 구축",
    period: "2019.05 ~ 2019.10",
    customer: "Codemy",
    role: "BE 개발 PL",
    techStack: [
      "Spring STS",
      "Java",
      "XML",
      "jQuery",
      "React",
      "HTML5",
      "MySQL",
    ],
    environment: "Mac",
    responsibilities: [
      "Spring STS 및 Spring Security 사용 환경 구축",
      "Amazon AWS Cloud 환경 구축",
      "Codemy Wallet 블록체인 전자지갑 사이트 구축 및 기존 PHP 구축 사이트 Spring 마이그레이션",
      "JSON-RPC 프로토콜 Spring 환경 설정과 블록체인 서버 통신 작업 수행",
      "Thymeleaf를 사용한 이메일 인증 기능 구축",
    ],
    problemSolving: {
      situation: [
        "기존 PHP 기반으로 구축되어 있던 블록체인 전자지갑 서비스를 사이트 공통 기술 스택인 Spring 기반 구조로 마이그레이션해야 하는 상황이었습니다.",
        "구축 일정이 짧아 기존 PHP 소스를 전체 분석하며 재구현하기에는 일정상 어려움이 존재하였습니다.",
      ],
      solution: [
        "React 기반 프론트엔드 소스를 기준으로 실제 사용 중인 API 및 기능 흐름을 역추적하며 재사용 가능한 기능과 핵심 로직을 우선 식별하였습니다.",
        "필요한 기능 중심으로 Spring 환경에 빠르게 재구성하여 마이그레이션을 진행하였습니다.",
      ],
      result: [
        "제한된 일정 내 주요 기능을 안정적으로 마이그레이션하였습니다.",
        "기존 서비스 동작 흐름을 유지하면서 Spring 기반 공통 구조에 맞춘 시스템 전환을 수행하였습니다.",
      ],
    },
  },
  PD_03: {
    seq: "PD_03",
    title: "먼슬리키친 배달앱 설계 및 API 개발",
    period: "2020.08 ~ 2020.10",
    customer: "먼슬리키친",
    role: "BE 개발 PL",
    techStack: [
      "Node.js",
      "Swagger",
      "Redis",
      "MQTT",
      "Amazon MQ",
      "PostgreSQL",
      "Git",
      "Jira",
      "Zeplin",
      "Jenkins",
    ],
    environment: "Mac",
    responsibilities: [
      "Zeplin 기반 디자이너 프로토타입 화면 기준 기능 및 DB 설계",
      "React Native 프론트엔드 및 WPF 개발자와 협업하여 Node 기반 RESTful API 개발",
      "React Native 기반 배달 App, WPF 기반 주문접수 앱, React 기반 CMS까지 총 3개 시스템 설계",
      "WPF 기반 주문접수 앱과 MQTT 데이터 통신 기능 설계 및 개발",
      "KICC PG사 결제 연동을 위한 Spring 기반 소규모 결제 플랫폼 개발",
      "AWS EC2 + Load Balancer 기반 서버 이중화 세팅",
    ],
    problemSolving: {
      situation: [
        "WPF 기반 주문접수 애플리케이션과 Node.js 기반 시스템 API 간 통신 구조를 설계 및 테스트하는 과정에서 기존 REST API 기반 처리만으로는 실시간 주문 상태 반영에 지연이 발생하는 문제가 있었습니다.",
      ],
      solution: [
        "실시간성이 필요한 처리 영역을 분리하고, 기존 API 기반 통신 일부를 MQTT 기반 Publish / Subscribe 구조로 대체하였습니다.",
        "Amazon MQ Broker를 사용하여 실시간 이벤트 처리가 가능하도록 개선하였습니다.",
      ],
      result: [
        "주문 상태 반영 과정에서 발생하던 지연 현상을 개선하였습니다.",
        "보다 안정적인 실시간 주문 처리 환경을 구성하였습니다.",
      ],
    },
  },
  PD_04: {
    seq: "PD_04",
    title: "파이브잇 아카데미 시스템 구축",
    period: "2022.01 ~ 2022.12",
    customer: "파이브잇 (자체 구축)",
    role: "BE 개발 PL (프리랜서)",
    techStack: [
      "Spring Boot",
      "JSP",
      "jQuery",
      "jsRender",
      "CDN",
      "MySQL",
      "Git",
    ],
    environment: "Mac",
    responsibilities: [
      "파이브잇 쿠킹 아카데미 관리자 및 사용자 사이트 백엔드와 프론트엔드 화면 개발",
      "이니시스 PG 연동 기반 클래스 결제 로직 개발",
      "카카오, 네이버 소셜 로그인 인터페이스 연계 및 로직 개발",
      "Aligo 휴대폰 인증 관련 인터페이스 연계 및 로직 개발",
      "카카오 알림톡 및 SMS 전송 관련 인터페이스 연계",
      "Jenkins Maven + GitHub 연동 배포 환경 구축",
    ],
    problemSolving: {
      situation: [
        "기존 프로젝트는 서버 내 FTP 직접 업로드 방식으로 배포를 진행하고 있어 배포 과정의 수동 작업 의존도가 높고, 실수로 인한 운영 반영 리스크가 존재하는 상황이었습니다.",
      ],
      solution: [
        "Jenkins 기반 CI/CD 환경을 구축하고 GitHub 저장소와 연동하였습니다.",
        "빌드 및 배포 자동화 프로세스를 구성하였습니다.",
      ],
      result: [
        "수동 배포 작업을 최소화하여 배포 안정성과 작업 효율을 개선하였습니다.",
        "기존 방식 대비 빠르고 일관성 있는 배포 환경을 구축하였습니다.",
      ],
    },
  },
  PD_05: {
    seq: "PD_05",
    title: "LGE 2023년 COE 프로젝트",
    period: "2023.08 ~ 2023.12",
    customer: "LG 블록체인 사업부",
    role: "BE 개발 PL (프리랜서)",
    techStack: ["Node.js", "Express", "jQuery", "MySQL", "Git", "AWS Lambda"],
    environment: "Mac",
    responsibilities: [
      "Node.js 기반 API 개발 및 React.js 프론트 연동 작업",
      "Node.js 기반 Nice 휴대폰 인증 모듈 연동 작업",
      "Hedera, Klaytn(KAS), Ethereum(Alchemy) NFT 관련 블록체인 API 연동 작업",
      "Wallypto 기반 웹, 모바일 지갑 연동 작업",
      "Cafe24 API 분석 및 Web3 API와 Cafe24 쿠폰 연동 API 기능 개발",
      "Node.js 기능을 AWS Lambda 커스터마이징 기능으로 구현하고 Serverless Framework 기반 배포",
      "AWS SES 연동 이메일 전송 서비스 구현",
    ],
    problemSolving: {
      situation: [
        "Web3에서 사용하는 NFT와 Cafe24 쿠폰 시스템 간 데이터 구조 및 인증 방식 차이로 인해 쿠폰 연동 흐름을 직접 연결하기 어려운 문제가 있었습니다.",
      ],
      solution: [
        "Cafe24 API 구조를 분석하고 Web3 서비스와 연계 가능한 중간 연동 API를 구현하였습니다.",
        "Cafe24 Mall 내에서 사용하는 스크립트에 지갑 연동 관련 스크립트를 추가 구현하여 쿠폰 발급 및 사용 흐름을 통합하였습니다.",
      ],
      result: [
        "외부 서비스 간 연동 흐름을 안정적으로 구성하였습니다.",
        "Web3 지갑 내 NFT를 통한 쿠폰 사용 기능을 마련하였습니다.",
      ],
    },
  },
  PD_06: {
    seq: "PD_06",
    title: "SK렌터카 고객채널 통합 구축 프로젝트",
    period: "2025.03 ~ 2025.08",
    customer: "SK렌터카",
    role: "FE 개발 (프리랜서)",
    techStack: ["React.js", "Next.js", "TypeScript", "Redux", "Axios", "Figma", "Git"],
    environment: "Mac",
    responsibilities: [
      "견적 관련 핵심 비즈니스 로직 프론트엔드 구현 및 API 연동",
      "공통 사용 컴포넌트 퍼블리셔 연계 구현",
      "신규 개발 필요 API 도출",
      "중고차, 월렌트 파트 기능 담당",
    ],
    problemSolving: {
      situation: [
        "기존 사이트는 업무 기능별로 독립적인 상태관리 구조를 사용하고 있어 기능 간 데이터 연계 및 공통 로직 재사용이 어려운 문제가 있었습니다.",
      ],
      solution: [
        "일부 기능에서 사용 중이던 Redux 상태관리 구조를 확장 적용하였습니다.",
        "공통으로 사용 가능한 상태 및 기능을 식별하여 재사용 가능한 형태로 구조를 개선하였습니다.",
      ],
      result: [
        "기능별 독립성은 유지하면서 공통 로직 중복을 줄였습니다.",
        "상태 관리 흐름을 일관성 있게 개선하여 유지보수성과 기능 확장 효율을 향상시켰습니다.",
      ],
    },
  },
  PD_07: {
    seq: "PD_07",
    title: "오늘고 플러스 B2B 식자재 유통 시스템 구축",
    period: "2026.01 ~ 2026.03",
    customer: "엠즈푸드시스템",
    role: "FE 개발 PL (프리랜서)",
    techStack: [
      "React.js",
      "TypeScript",
      "ESLint",
      "Recoil",
      "Axios",
      "fp-ts",
      "Material UI",
      "Git",
    ],
    environment: "Mac",
    responsibilities: [
      "메인 페이지 및 서브 목록 페이지 UI 구현",
      "공통 사용 컴포넌트 선별 및 구현",
      "장바구니 기능 구현",
      "쿠폰 신규 기능 구현",
      "개발 및 운영 서버 환경설정 및 배포",
    ],
    problemSolving: {
      situation: [
        "기존 Flutter 기반 모바일 환경의 스플래시 구조를 PC 웹 환경에 그대로 적용하기 어려운 문제가 있었습니다.",
      ],
      solution: [
        "스피너 기반 로딩 UI 및 스플래시 컴포넌트를 추가했습니다.",
        "Recoil 상태 관리를 활용하여 초기 캐시 데이터를 적재하는 구조를 구현하였습니다.",
      ],
      result: [
        "웹 환경에서도 초기 데이터 로딩 흐름을 안정적으로 구성하였습니다.",
        "기존 모바일 구조와의 동작 흐름을 최대한 일관성 있게 유지하였습니다.",
      ],
    },
  },
};
