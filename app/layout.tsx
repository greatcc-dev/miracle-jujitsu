import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미라클 주지수 | 아침 8시, 하루를 바꾸는 주짓수",
  description:
    "주짓수 블랙벨트 사범의 아침 주짓수 클래스. 사업가·전문직 네트워킹, 1시간 2만원의 합리적인 가격. 저녁 운동이 힘드신 분들을 위한 최고의 솔루션.",
  keywords: ["주짓수", "아침운동", "주지수", "미라클", "BJJ", "네트워킹", "운동"],
  openGraph: {
    title: "미라클 주지수 | 아침 8시, 하루를 바꾸는 주짓수",
    description: "블랙벨트 사범의 아침 주짓수. 사업가·전문직 네트워킹, 1시간 2만원",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
