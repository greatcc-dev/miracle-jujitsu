"use client";

export default function Pricing() {
  const included = [
    "블랙벨트 사범 직접 지도",
    "도복 대여 (첫 체험)",
    "사업가·전문직 네트워킹",
    "아침 8시 고정 시간",
    "소수 정예 클래스",
    "체계적인 커리큘럼",
  ];

  const compare = [
    { label: "헬스장 PT", price: "7~10만원", per: "/회", note: "고가" },
    { label: "일반 주짓수", price: "10~15만원", per: "/월", note: "저녁 위주" },
    { label: "미라클 주짓수", price: "2만원", per: "/회", note: "최고 가성비", highlight: true },
  ];

  return (
    <section id="pricing" className="bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[2px] bg-yellow-400" />
          <span className="sport-label">Pricing</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — big price display */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-tight text-white mb-2">
              투명하고<br />
              <span className="text-yellow-400">합리적인</span><br />
              가격
            </h2>
            <p className="text-gray-500 text-sm mb-12">복잡한 멤버십 없이, 딱 필요한 만큼만</p>

            {/* Scoreboard-style price */}
            <div className="border border-white/5 bg-white/[0.02] p-8 mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-[clamp(60px,10vw,100px)] font-black italic text-yellow-400 leading-none">
                  ₩20K
                </span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-8">
                1회 수업 · 1시간
              </p>

              {/* Included list */}
              <div className="space-y-3 mb-8">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-4 h-[2px] bg-yellow-400/40 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary w-full justify-center">
                무료 체험 신청 →
              </a>
              <p className="text-gray-700 text-[10px] uppercase tracking-widest text-center mt-4">
                첫 체험 무료
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-white/5 px-5 py-4">
                <div className="text-2xl font-black italic text-yellow-400">1H</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-1">집중 트레이닝</div>
              </div>
              <div className="border border-white/5 px-5 py-4">
                <div className="text-2xl font-black italic text-yellow-400">AM8</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-1">출근 전 완료</div>
              </div>
            </div>
          </div>

          {/* Right — comparison */}
          <div>
            <h3 className="text-white font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-3">
              <span className="text-gray-600">——</span> 타 운동과 비교
            </h3>

            <div className="space-y-2">
              {compare.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-5 border transition-colors duration-200 ${
                    item.highlight
                      ? "border-yellow-400/30 bg-yellow-400/[0.04]"
                      : "border-white/5 bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.highlight && (
                      <div className="w-1.5 h-6 bg-yellow-400 flex-shrink-0" />
                    )}
                    <div>
                      <span className={`font-black uppercase text-sm tracking-wide ${
                        item.highlight ? "text-white" : "text-gray-500"
                      }`}>
                        {item.label}
                      </span>
                      {item.highlight && (
                        <div className="text-[10px] uppercase tracking-widest text-yellow-400/60 font-bold">
                          {item.note}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-black italic text-xl ${
                      item.highlight ? "text-yellow-400" : "text-gray-600"
                    }`}>
                      {item.price}
                    </span>
                    <span className={`text-xs ${item.highlight ? "text-yellow-400/60" : "text-gray-700"}`}>
                      {item.per}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="mt-12 pt-10 border-t border-white/5">
              <div className="text-[clamp(60px,8vw,90px)] font-black italic leading-none text-white/5 mb-0">
                75%
              </div>
              <p className="text-white font-black uppercase text-sm tracking-wide -mt-2">
                헬스장 PT 대비 절감
              </p>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                같은 시간, 같은 노력으로 더 많은 것을 얻으세요.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
