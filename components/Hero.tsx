"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col justify-end">

      {/* Giant background time — decorative */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] text-[28vw] font-black italic text-transparent pointer-events-none select-none leading-none"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)", opacity: 0.6 }}
      >
        08:00
      </div>

      {/* Diagonal yellow accent bar */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-sky-400/[0.03]"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Left yellow vertical stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-sky-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-20 pt-40 w-full">
        {/* Sport label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px] bg-sky-400" />
          <span className="sport-label">블랙벨트 사범 직강 · 소수 정예</span>
        </div>

        {/* Main headline — left aligned, extreme scale */}
        <h1 className="font-black italic uppercase leading-[0.9] tracking-tight mb-10">
          <div className="text-[clamp(56px,10vw,130px)] text-white">하루를</div>
          <div className="text-[clamp(56px,10vw,130px)] flex items-baseline gap-4 flex-wrap">
            <span className="text-sky-400">바꾸는</span>
          </div>
          <div className="text-[clamp(56px,10vw,130px)] text-white">주짓수</div>
        </h1>

        <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed font-light">
          저녁 운동이 힘드신가요? 아침 8시, 성공한 사람들이 선택한 루틴에 합류하세요.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a href="#contact" className="btn-primary">
            무료 체험 신청 →
          </a>
          <a href="#features" className="btn-outline">
            더 알아보기
          </a>
        </div>

        {/* Stats row — scoreboard style */}
        <div className="flex flex-wrap gap-0 border-t border-white/10 pt-10">
          {[
            { num: "08:00", label: "AM · 매일 아침" },
            { num: "₩20K", label: "1회 수업료" },
            { num: "1H", label: "집중 트레이닝" },
            { num: "BJJ", label: "블랙벨트 사범" },
          ].map((s, i) => (
            <div
              key={i}
              className="pr-10 mr-10 border-r border-white/10 last:border-0 last:mr-0"
            >
              <div className="text-3xl md:text-4xl font-black italic text-sky-400 leading-none">
                {s.num}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
