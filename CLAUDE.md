# 미라클 주짓수 — 프로젝트 정보

## 개요
주짓수 블랙벨트 사범이 운영하는 아침 주짓수 클래스 홍보용 랜딩 페이지.

## 핵심 정보
- 수업 시간: 매일 아침 8:00 ~ 9:00
- 가격: 1회 2만원 (첫 체험 무료)
- 사범: 주짓수 블랙벨트
- 타겟: 저녁 운동이 어려운 사업가·전문직 종사자
- 부가 가치: 수강생 간 자연스러운 프리미엄 네트워킹

## 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build**: Turbopack

## 프로젝트 구조
```
miracle-jujitsu/
├── app/
│   ├── globals.css       # Tailwind 기본 설정 + 공통 컴포넌트 스타일
│   ├── layout.tsx        # SEO 메타데이터 포함
│   └── page.tsx          # 섹션 조합 메인 페이지
├── components/
│   ├── Navbar.tsx        # 스크롤 감지 고정 네비게이션
│   ├── Hero.tsx          # 메인 히어로 (타이틀, CTA, 스탯)
│   ├── Features.tsx      # 4가지 핵심 특징 카드
│   ├── Schedule.tsx      # 타임라인 + 참여자 타겟
│   ├── Networking.tsx    # 네트워킹 혜택 + 인용구
│   ├── Pricing.tsx       # 가격 카드 + 타 운동 비교표
│   ├── Contact.tsx       # 무료 체험 신청 폼
│   └── Footer.tsx        # 푸터
├── CLAUDE.md
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 디자인 시스템
- **테마**: 다크 (블랙/골드)
- **주요 색상**: `zinc-950` 배경, `yellow-400` 포인트
- **공통 클래스** (`globals.css` 정의):
  - `.btn-primary` — 황금색 CTA 버튼
  - `.card-dark` — 다크 카드 컴포넌트
  - `.gold-text` — 황금색 텍스트
  - `.section-title` / `.section-subtitle` — 섹션 헤딩

## 로컬 실행
```bash
npm run dev    # http://localhost:3000
npm run build  # 프로덕션 빌드
npm start      # 프로덕션 서버
```

## GitHub
- 레포: https://github.com/greatcc-dev/miracle-jujitsu
- 브랜치: `main`

## 추후 작업 예정
- [ ] Contact 폼 백엔드 연동 (이메일 or 카카오 알림톡)
- [ ] 실제 위치 정보 추가
- [ ] 사범 소개 섹션 추가
- [ ] 수강 후기/testimonial 섹션
- [ ] Vercel 배포
