"use client";

const features = [
  {
    num: "01",
    tag: "BLACK BELT",
    title: "블랙벨트 사범 직강",
    description: "주짓수 블랙벨트 사범이 직접 지도. 체계적인 커리큘럼으로 초보자부터 중급자까지 빠르게 성장합니다.",
  },
  {
    num: "02",
    tag: "AM 8:00",
    title: "아침 8시 클래스",
    description: "저녁 약속, 야근으로 운동을 미루지 마세요. 출근 전 1시간으로 하루를 완전히 다르게 시작합니다.",
  },
  {
    num: "03",
    tag: "NETWORK",
    title: "프리미엄 네트워킹",
    description: "사업가, 전문직 종사자들이 함께합니다. 땀 흘리며 단련하는 과정에서 깊고 진실된 인맥이 만들어집니다.",
  },
  {
    num: "04",
    tag: "₩20,000/H",
    title: "압도적 가성비",
    description: "헬스장 PT의 1/4 가격. 1시간에 2만원으로 블랙벨트 사범의 수업을 받을 수 있는 유일한 기회입니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0d0d0d] overflow-hidden">

      {/* Marquee ticker */}
      <div className="border-y border-white/5 bg-sky-400/5 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {Array(2).fill(
            ["MIRACLE BJJ", "AM 8:00", "블랙벨트", "₩20,000", "FREE TRIAL", "NETWORKING", "아침 주짓수", "BLACK BELT"]
          ).flat().map((item, i) => (
            <span key={i} className="text-xs font-black uppercase tracking-[0.3em] text-sky-400/50 mx-8">
              {item} <span className="text-white/10 mx-4">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-sky-400" />
              <span className="sport-label">Why Miracle</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-tight text-white">
              왜<br />
              <span className="text-sky-400">미라클인가</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            단순한 운동을 넘어,<br />삶의 방식을 바꾸는 경험
          </p>
        </div>

        {/* Features list — horizontal rows, numbered */}
        <div className="space-y-0">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex items-start gap-6 md:gap-12 py-8 border-t border-white/5 hover:border-sky-400/20 transition-colors duration-300 cursor-default"
            >
              {/* Number */}
              <div className="text-[clamp(40px,6vw,72px)] font-black italic text-white/5 group-hover:text-sky-400/20 transition-colors duration-300 leading-none flex-shrink-0 w-20 md:w-32 text-right">
                {f.num}
              </div>

              {/* Tag */}
              <div className="hidden md:flex w-28 flex-shrink-0 pt-2">
                <span className="text-[10px] font-black tracking-widest text-sky-400/50 uppercase bg-sky-400/5 px-2 py-1 group-hover:bg-sky-400/10 transition-colors">
                  {f.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-black uppercase italic text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                  {f.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-white/10 group-hover:text-sky-400/40 transition-colors duration-300 text-2xl font-black pt-1">
                →
              </div>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  );
}
