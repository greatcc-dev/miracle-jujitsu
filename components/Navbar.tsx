"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      {/* Yellow top accent stripe */}
      <div className="h-[3px] bg-yellow-400 w-full" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — italic sport style */}
        <a href="#" className="flex items-baseline gap-1">
          <span className="text-yellow-400 text-xl font-black italic uppercase tracking-tight">MIRACLE</span>
          <span className="text-white text-xl font-black italic uppercase tracking-tight">BJJ</span>
        </a>

        {/* Nav — uppercase, wide tracking */}
        <div className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-gray-500">
          <a href="#features" className="hover:text-white transition-colors">특징</a>
          <a href="#schedule" className="hover:text-white transition-colors">일정</a>
          <a href="#pricing" className="hover:text-white transition-colors">가격</a>
          <a href="#join" className="hover:text-white transition-colors">네트워킹</a>
        </div>

        {/* Parallelogram CTA */}
        <a href="#contact" className="btn-primary text-xs py-3 px-6">
          무료 체험 →
        </a>
      </div>
    </nav>
  );
}
