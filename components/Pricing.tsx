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
    { label: "헬스장 PT", price: "7~10만원/회", note: "고가" },
    { label: "일반 주짓수", price: "10~15만원/월", note: "저녁 위주" },
    { label: "미라클 주짓수", price: "2만원/회", note: "최고 가성비", highlight: true },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            투명하고 <span className="text-yellow-400">합리적인 가격</span>
          </h2>
          <p className="text-gray-400 text-lg">복잡한 멤버십 없이, 딱 필요한 만큼만</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Main pricing card */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-3xl blur opacity-30" />
            <div className="relative bg-zinc-900 border border-yellow-400/40 rounded-3xl p-10">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-6xl font-black text-white">₩20,000</span>
              </div>
              <p className="text-yellow-400 font-semibold text-lg mb-8">1회 수업 / 1시간</p>

              <div className="space-y-3 mb-10">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary w-full text-center block">
                무료 체험 신청하기
              </a>

              <p className="text-gray-600 text-xs text-center mt-4">
                첫 체험은 무료로 진행됩니다
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">타 운동과 비교</h3>
            <div className="space-y-3">
              {compare.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    item.highlight
                      ? "border-yellow-400/40 bg-yellow-400/5"
                      : "border-zinc-800 bg-zinc-900/50"
                  }`}
                >
                  <div>
                    <span
                      className={`font-semibold ${
                        item.highlight ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.highlight && (
                      <span className="ml-2 text-xs bg-yellow-400 text-black font-bold px-2 py-0.5 rounded-full">
                        추천
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-bold ${
                        item.highlight ? "text-yellow-400" : "text-gray-500"
                      }`}
                    >
                      {item.price}
                    </span>
                    <span
                      className={`ml-2 text-xs ${
                        item.highlight ? "text-yellow-400/70" : "text-gray-600"
                      }`}
                    >
                      {item.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-yellow-400 mb-1">1H</div>
                <div className="text-gray-500 text-sm">딱 1시간, 효율적</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-yellow-400 mb-1">AM8</div>
                <div className="text-gray-500 text-sm">출근 전 완료</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
