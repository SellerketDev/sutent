# SUT Ent. - Premium Influencer & KOL Marketing Platform

## 1. Project Overview (프로젝트 개요)
**SUT Ent.**는 모델/인플루언서 광고 대행 및 블록체인 전문 KOL(Key Opinion Leader) 마케팅을 위한 프리미엄 엔터테인먼트 랜딩 페이지입니다.
단순한 에이전시를 넘어, 데이터와 기술(Tech)이 결합된 하이엔드 솔루션을 시각적으로 표현하는 데 중점을 두었습니다.

## 2. Completed Features (현재 구현 사항)

### 🎨 Visual & Design (고급화 전략)
- **Luxury Identity**: Deep Black 배경에 Gold(#d4af37) 엑센트를 사용하여 무게감 있고 고급스러운 브랜드 이미지를 구축했습니다.
- **Cinematic Experience**: `Lenis`를 통한 부드러운 스크롤(Smooth Scroll)과 오프닝 시네마틱 프리로더(Preloader)를 적용하여 사용자 몰입감을 극대화했습니다.
- **3D Background**: `Three.js`를 활용한 황금빛 별 파티클 효과로 은은하고 깊이감 있는 배경을 구현했습니다.

### 🧩 Key Sections (기능적 구성)
1. **Hero Section (메인)**:
   - 시선을 사로잡는 풀스크린 배경과 패럴랙스 효과.
   - 브랜드 슬로건 및 주요 액션 버튼(CTA) 배치.
2. **Why SUT Ent? (서비스 강점)**:
   - 16:9 비율의 고화질 이미지를 활용한 교차 배치(Zig-zag Layout).
   - 스크롤 시 좌우에서 부드럽게 날아오는 Fly-in 애니메이션 적용.
3. **Exclusive Influencers (모델 소개)**:
   - 카드 형태의 인플루언서 쇼케이스.
   - **Interaction**: 마우스 오버 시 흑백→컬러 전환 및 상세 정보 노출.
4. **KOL & Blockchain (특화 분야)**:
   - 블록체인/Web3 전문성 강조.
   - 움직이는 UI 요소(Floating Cards)를 통해 '살아있는 데이터'와 '기술력'을 시각화.
5. **Contact**: 상담 신청 폼 및 오피스 정보.

## 3. Tech Stack (사용 기술)
- **Core**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP (Lenis)
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: Lucide React

## 4. Future Roadmap (향후 계획)
**"Next Level Luxury & Immersion"**
현재의 정적인 이미지를 넘어, 사용자가 웹사이트를 '경험'할 수 있도록 고도화할 예정입니다.

- [x] **WebGL/3D Integration**: Three.js를 활용한 3D 오브젝트 및 파티클 효과로 압도적인 비주얼 구현.
- [x] **Why SUT Ent? Refinement**: 이미지 중심의 레이아웃 개편 및 애니메이션 고도화.
- [x] **Cinematic Transitions**: 페이지 이동 및 스크롤 시 영화 같은 부드러운 움직임 구현 (Lenis, Preloader).
- [ ] **Micro-Interactions**: 버튼 클릭, 커서 움직임에 반응하는 섬세한 마이크로 인터랙션 추가.
- [ ] **Media Optimization**: 고화질 영상 및 이미지를 끊김 없이 로딩하기 위한 최적화 작업.
- [ ] **Admin System**: 인플루언서 DB 관리 및 캠페인 대시보드(Backend) 연동.

## 5. Getting Started (실행 방법)

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 개발 서버 실행 (로컬 확인)
npm run dev

# 3. 프로덕션 빌드 (배포용)
npm run build
```

## 6. Environment Info (개발 환경)
프로젝트 실행을 위해 권장되는 환경 버전 정보입니다.

| Tool | Version | Description |
|------|---------|-------------|
| **Node.js** | `v24.11.1` | JavaScript Runtime |
| **npm** | `11.6.2` | Package Manager |
| **Vite** | `^4.5.0` | Build Tool |
| **React** | `^18.2.0` | Frontend Framework |

* **Note**: `.gitignore` 파일이 생성되어 있어 `node_modules` 등 불필요한 파일은 Git에 포함되지 않습니다.
