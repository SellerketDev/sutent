# 1. Build Stage
FROM node:22-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# 2. Production Stage (Serve using lightweight Node server)
FROM node:22-alpine AS runner

WORKDIR /app

# 정적 파일 서빙을 위한 'serve' 패키지 설치 (전역)
RUN npm install -g serve

# 빌드된 결과물(dist)만 이전 스테이지에서 복사
COPY --from=builder /app/dist ./dist

# 포트 노출 (기본 3000)
EXPOSE 3000

# 애플리케이션 실행 (SPA 모드 -s)
CMD ["serve", "-s", "dist", "-l", "3000"]

