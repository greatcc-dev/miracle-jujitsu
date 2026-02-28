"use client";

export default function Schedule() {
  const timeline = [
    { time: "07:45", label: "도착 & 준비", desc: "도복 착용, 워밍업" },
    { time: "08:00", label: "클래스 시작", desc: "스트레칭 & 기초 드릴" },
    { time: "08:20", label: "기술 교육", desc: "당일 기술 집중 학습" },
    { time: "08:45", label: "스파링", desc: "실전 감각 훈련" },
    { time: "09:00", label: "마무리", desc: "쿨다운 & 정리" },
  ];

  const targetAudience = [
    { icon: "🏢", label: "사업가·CEO" },
    { icon: "⚖️", label: "법조인·변호사" },
    { icon: "🏥", label: "의사·전문직" },
    { icon: "💻", label: "IT·스타트업" },
    { icon: "🏦", label: "금융·컨설팅" },
    { icon: "🎯", label: "운동이 필요한 누구나" },
  ];

  return (
    <section id="schedule" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div>
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4 block">
              Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              1시간의
              <br />
              <span className="text-yellow-400">완벽한 루틴</span>
            </h2>
            <p className="text-gray-400 mb-10">
              딱 1시간. 출근 전 몸과 마음을 깨우는 최적의 시간 구성
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-yellow-400/60 via-yellow-400/20 to-transparent" />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                          i === 0
                            ? "border-yellow-400 bg-yellow-400"
                            : "border-zinc-700 bg-zinc-900"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            i === 0 ? "bg-black" : "bg-zinc-600"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-yellow-400 font-mono font-bold text-sm">
                          {item.time}
                        </span>
                        <span className="text-white font-semibold">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4 block">
              Who&apos;s Joining
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              이런 분들이
              <br />
              <span className="text-yellow-400">함께합니다</span>
            </h2>
            <p className="text-gray-400 mb-10">
              각 분야 최고의 전문가들과 함께 땀 흘리고,
              <br />
              자연스러운 네트워크를 만들어 보세요.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {targetAudience.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 rounded-xl p-4 transition-all duration-200"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-300 font-medium text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💡</span>
                <div>
                  <p className="text-white font-semibold mb-1">
                    저녁 운동이 힘드신가요?
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    야근, 저녁 약속, 피로감으로 운동을 미루고 계신가요?
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
