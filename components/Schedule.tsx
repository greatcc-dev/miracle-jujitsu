"use client";

export default function Schedule() {
  const timeline = [
    { time: "07:45", label: "도착 & 준비", desc: "도복 착용, 스트레칭" },
    { time: "08:00", label: "클래스 START", desc: "워밍업 & 기초 드릴", active: true },
    { time: "08:20", label: "기술 교육", desc: "당일 기술 집중 학습" },
    { time: "08:45", label: "스파링", desc: "실전 감각 훈련" },
    { time: "09:00", label: "마무리", desc: "쿨다운 & 정리" },
  ];

  const targets = [
    { icon: "🏢", label: "사업가·CEO" },
    { icon: "⚖️", label: "법조인·변호사" },
    { icon: "🏥", label: "의사·전문직" },
    { icon: "💻", label: "IT·스타트업" },
    { icon: "🏦", label: "금융·컨설팅" },
    { icon: "🎯", label: "운동 필요한 누구나" },
  ];

  return (
    <section id="schedule" className="bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-sky-400" />
              <span className="sport-label">Schedule</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-tight text-white mb-3">
              1시간의<br />
              <span className="text-sky-400">완벽한 루틴</span>
            </h2>
            <p className="text-gray-500 text-sm mb-12">출근 전 딱 1시간. 몸과 마음을 깨웁니다.</p>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-6 py-5 border-t border-white/5 group ${
                    item.active ? "border-sky-400/20" : ""
                  }`}
                >
                  {/* Time */}
                  <div className={`font-mono font-black text-sm w-14 flex-shrink-0 pt-0.5 ${
                    item.active ? "text-sky-400" : "text-gray-600"
                  }`}>
                    {item.time}
                  </div>

                  {/* Dot + line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-3 h-3 flex-shrink-0 mt-1 ${
                      item.active
                        ? "bg-sky-400"
                        : "border border-white/20 bg-transparent"
                    }`}
                      style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-white/5 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4">
                    <div className={`font-black uppercase text-sm tracking-wide mb-1 ${
                      item.active ? "text-white" : "text-gray-400"
                    }`}>
                      {item.label}
                    </div>
                    <div className="text-gray-600 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who's joining */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-sky-400" />
              <span className="sport-label">Who&apos;s Joining</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-tight text-white mb-3">
              이런 분들이<br />
              <span className="text-sky-400">함께합니다</span>
            </h2>
            <p className="text-gray-500 text-sm mb-12">
              각 분야 최고의 전문가들과 땀 흘리고,<br />
              자연스러운 네트워크를 만드세요.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {targets.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-white/5 hover:border-sky-400/20 px-4 py-4 transition-colors duration-200 group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-400 group-hover:text-white text-sm font-bold uppercase tracking-wide transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-sky-400/20 bg-sky-400/[0.03] p-6">
              <div className="flex items-start gap-4">
                <span className="text-sky-400 text-2xl font-black italic leading-none">!</span>
                <div>
                  <p className="text-white font-black uppercase text-sm tracking-wide mb-1">저녁 운동이 힘드신가요?</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    야근, 저녁 약속, 피로로 운동을 미루고 계신가요?
                    아침 주짓수는 하루를 시작하는 가장 확실한 방법입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
