# SUT Ent. - Premium Influencer & KOL Marketing Platform

**SUT Ent.**는 모델/인플루언서 에이전시 및 블록체인 KOL 마케팅을 위한 프리미엄 웹사이트입니다.
Three.js를 활용한 시네마틱 3D 배경과 고급스러운 디자인으로 브랜드의 가치를 극대화합니다.

![Project Preview](/public/screenshot_preview.png)
*(프로젝트 스크린샷이 있다면 여기에 추가)*

---

## 🛠 Tech Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Core** | React 18, TypeScript, Vite | 빠르고 안정적인 프론트엔드 기반 |
| **Styling** | Tailwind CSS | 유틸리티 퍼스트 스타일링 |
| **Animation** | Framer Motion, Lenis | 부드러운 스크롤 및 UI 인터랙션 |
| **3D Graphics** | Three.js, R3F, Drei | WebGL 기반 인터랙티브 배경 |
| **Icons** | Lucide React | 모던하고 가벼운 아이콘 |
| **DevOps** | Docker, Docker Compose | 컨테이너 기반 배포 환경 |

---

## 🚀 Getting Started

이 프로젝트를 로컬 컴퓨터에서 실행하거나 서버에 배포하는 방법입니다.

### Prerequisites (필수 조건)
*   **Node.js**: v18 이상 (권장: v22 LTS)
*   **npm** 또는 **yarn**
*   **Docker** (선택 사항, 컨테이너 실행 시 필요)

### 1. Installation (설치)
```bash
# 저장소 클론
git clone <repository-url>
cd sut-ent-landing

# 의존성 패키지 설치
npm install
# (또는 npm ci --legacy-peer-deps)
```

### 2. Development (로컬 개발)
개발 모드에서는 HMR(Hot Module Replacement)이 지원되어 수정 사항이 즉시 반영됩니다.
```bash
npm run dev
```
*   **접속**: `http://localhost:5173`

### 3. Docker Execution (도커 실행) - 권장
복잡한 환경 설정 없이 바로 실행하려면 Docker를 사용하세요.

```bash
# 컨테이너 빌드 및 백그라운드 실행
docker-compose up -d --build

# 컨테이너 중지
docker-compose down
```
*   **접속**: `http://localhost:40680` (포트는 `docker-compose.yml`에서 변경 가능)

---

## 📂 Project Structure

```
sut-ent-landing/
├── public/              # 정적 파일 (이미지, 파비콘 등)
│   └── images/          # 서비스/모델 이미지 폴더
├── src/
│   ├── components/      # React 컴포넌트 (섹션별 분리)
│   │   ├── Hero.tsx             # 메인 배너
│   │   ├── Navbar.tsx           # 상단 메뉴
│   │   ├── ServicesSection.tsx  # 서비스 소개 (수정 포인트 1)
│   │   ├── ContactSection.tsx   # 문의 폼
│   │   └── ...
│   ├── App.tsx          # 메인 레이아웃 및 섹션 배치
│   └── index.css        # Tailwind 및 전역 스타일
├── Dockerfile           # 도커 빌드 설정
├── docker-compose.yml   # 도커 실행 설정
└── package.json         # 의존성 및 스크립트
```

---

## 🎨 Customization Guide (수정 가이드)

### 1. 텍스트 및 이미지 수정
대부분의 콘텐츠는 각 컴포넌트 파일 내부에 정의되어 있습니다.
*   **서비스 목록 수정**: `src/components/ServicesSection.tsx` 상단의 `services` 배열을 수정하세요.
*   **인플루언서 데이터**: `src/components/InfluencerSection.tsx` 내부 데이터를 확인하세요.
*   **이미지 변경**: `public/images/` 폴더에 이미지를 넣고 경로를 업데이트하세요.

### 2. 테마 및 컬러 변경
`tailwind.config.js` 파일에서 브랜드 컬러를 수정할 수 있습니다.
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      accent: '#d4af37', // 현재 골드 컬러
    }
  }
}
```

### 3. 3D 배경 수정
`src/components/ThreeBackground.tsx` 파일에서 파티클 개수나 회전 속도를 조절할 수 있습니다.

---

## 🚢 Deployment (배포)

실제 운영 환경(Production)을 위해 빌드할 때 사용합니다.

```bash
# 프로덕션 빌드 (dist 폴더 생성)
npm run build

# 빌드 결과물 미리보기
npm run preview
```
생성된 `dist` 폴더의 내용을 Nginx, Vercel, Netlify 등의 정적 호스팅 서비스에 업로드하면 됩니다.

---

## 📞 Contact
프로젝트 관련 문의는 아래로 연락주세요.
*   **Email**: contact@sutent.com
