"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll(".animate-on-enter");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          블랙벨트 사범 직강 · 소수 정예 클래스
        </div>

        {/* Main headline */}
        <h1 className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-100 text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
          <span className="text-white">아침 </span>
          <span className="text-yellow-400">8시</span>
          <br />
          <span className="text-white">하루를 </span>
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            바꾸는
          </span>
          <br />
          <span className="text-white">주짓수</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 text-xl md:text-2xl mb-4 font-light">
          저녁 운동이 힘드신가요?
        </p>
        <p className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-300 text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          이른 아침, 몸과 정신을 깨우는{" "}
          <strong className="text-white">미라클 주짓수</strong>로
          <br />
          성공한 사람들의 루틴에 합류하세요.
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="btn-primary">
            무료 체험 신청하기 →
          </a>
          <a
            href="#features"
            className="text-gray-400 hover:text-white border border-zinc-700 hover:border-zinc-500 py-4 px-8 rounded-full text-lg transition-all duration-200"
          >
            더 알아보기
          </a>
        </div>

        {/* Stats */}
        <div className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-zinc-800 pt-12">
          <div>
            <div className="text-3xl font-black text-yellow-400">AM 8</div>
            <div className="text-gray-500 text-sm mt-1">매일 아침</div>
          </div>
          <div className="border-x border-zinc-800">
            <div className="text-3xl font-black text-white">2만원</div>
            <div className="text-gray-500 text-sm mt-1">1시간 가격</div>
          </div>
          <div>
            <div className="text-3xl font-black text-yellow-400">BJJ</div>
            <div className="text-gray-500 text-sm mt-1">블랙벨트 사범</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
