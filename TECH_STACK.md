# SUT Ent. Technology Stack

이 문서는 **SUT Ent.** 프로젝트에 적용된 핵심 기술 스택을 정의합니다.
유사한 고품질 인터랙티브 웹 페이지를 구축할 때, 아래의 기술 조합을 표준으로 사용할 수 있습니다.

## 1. Core Framework (기반 기술)
안정적이고 성능이 입증된 최신 모던 웹 기술을 기반으로 합니다.

| 구분 | 기술 | 설명 |
|------|------|------|
| **Runtime** | `Node.js` | v22 LTS (Production), v24 (Development) |
| **Framework** | `React 18` | 컴포넌트 기반 UI 라이브러리 |
| **Language** | `TypeScript` | 정적 타입 시스템을 통한 안정성 확보 |
| **Build Tool** | `Vite` | 압도적인 속도의 개발 서버 및 빌드 최적화 |

## 2. Styling & Design System (스타일링)
빠른 개발 속도와 유지보수 용이성을 위한 유틸리티 퍼스트 접근 방식을 사용합니다.

- **Tailwind CSS**: 유틸리티 클래스 기반의 스타일링 프레임워크.
  - *Config*: 커스텀 컬러(Gold, Deep Black) 및 폰트 설정 포함.
- **Lucide React**: 가볍고 일관된 디자인의 SVG 아이콘 라이브러리.

## 3. Animation & Interaction (인터랙션)
사용자 경험(UX)을 극대화하는 "Cinematic Feel"을 구현하기 위한 핵심 기술입니다.

- **Lenis**: 웹 브라우저의 스크롤을 부드럽게 만들어주는 관성 스크롤 라이브러리. (필수)
- **Framer Motion**: 복잡한 UI 애니메이션(등장, 전환, 제스처)을 선언적으로 구현.

## 4. 3D Graphics (WebGL)
압도적인 비주얼 임팩트를 주기 위한 3D 그래픽 기술입니다.

- **Three.js**: WebGL 기반 3D 그래픽 표준 라이브러리.
- **@react-three/fiber (R3F)**: React 컴포넌트 문법으로 Three.js를 다룰 수 있게 해주는 래퍼.
- **@react-three/drei**: R3F를 위한 유용한 헬퍼 컴포넌트 모음 (Stars, Canvas, Loader 등).

## 5. Infrastructure & DevOps (인프라)
복잡한 서버 설정 없이 어디서든 동일하게 실행 가능한 환경을 제공합니다.

- **Docker**: 애플리케이션 컨테이너화.
- **Docker Compose**: 컨테이너 실행 및 관리 자동화.
- **serve**: 정적 파일(Build 결과물)을 호스팅하는 경량 Node.js 웹 서버.

---

## 6. Quick Install Guide (적용 가이드)

새로운 프로젝트에 이 스택을 적용하려면 `package.json`에 다음 의존성을 추가하세요.

### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.8",
    "lenis": "^1.3.15",
    "three": "^0.181.2",
    "@react-three/fiber": "^8.18.0",
    "@react-three/drei": "^10.7.7",
    "lucide-react": "^0.344.0"
  }
}
```

### DevDependencies
```json
{
  "devDependencies": {
    "typescript": "^5.2.2",
    "vite": "^4.5.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.18"
  }
}
```

