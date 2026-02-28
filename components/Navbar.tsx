"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-2xl font-black tracking-tight">
            미라클
          </span>
          <span className="text-white text-2xl font-black tracking-tight">
            주짓수
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">
            특징
          </a>
          <a href="#schedule" className="hover:text-white transition-colors">
            일정
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            가격
          </a>
          <a href="#join" className="hover:text-white transition-colors">
            네트워킹
          </a>
        </div>
        <a
          href="#contact"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-5 rounded-full text-sm transition-all duration-200 hover:scale-105"
        >
          무료 체험 신청
        </a>
      </div>
    </nav>
  );
}
