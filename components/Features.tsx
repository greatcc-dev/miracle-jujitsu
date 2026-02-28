"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🥋",
    title: "블랙벨트 사범 직강",
    description:
      "주짓수 블랙벨트 사범이 직접 지도합니다. 체계적인 커리큘럼으로 초보자부터 중급자까지 빠르게 실력을 향상시킬 수 있습니다.",
    highlight: "BLACK BELT",
  },
  {
    icon: "⏰",
    title: "아침 8시 클래스",
    description:
      "하루를 가장 생산적으로 시작하세요. 저녁에 약속이 많거나 야근이 잦아 운동 시간을 내기 어려운 분들을 위한 최적의 시간대입니다.",
    highlight: "AM 8:00",
  },
  {
    icon: "💼",
    title: "프리미엄 네트워킹",
    description:
      "사업가, 전문직 종사자들이 함께하는 클래스. 땀 흘리며 단련하는 동료들과 자연스럽게 형성되는 깊은 인맥은 덤입니다.",
    highlight: "NETWORK",
  },
  {
    icon: "💰",
    title: "합리적인 가격",
    description:
      "1시간에 단 2만원. 헬스장 PT의 절반도 안 되는 가격으로 최고 수준의 주짓수 수업을 받을 수 있습니다.",
    highlight: "₩20,000/H",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-8");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-6 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4 block">
            Why Miracle
          </span>
          <h2 className="section-title text-4xl md:text-5xl">
            왜 <span className="text-yellow-400">미라클 주짓수</span>인가
          </h2>
          <p className="section-subtitle text-gray-400 text-lg max-w-xl mx-auto mt-4">
            단순한 운동을 넘어, 삶의 질을 바꾸는 경험
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 translate-y-8 transition-all duration-500 card-dark group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                  <span className="text-xs font-black text-yellow-400/60 tracking-widest bg-yellow-400/10 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
