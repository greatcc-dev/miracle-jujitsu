"use client";

export default function Networking() {
  const benefits = [
    {
      icon: "🤝",
      title: "자연스러운 만남",
      desc: "매일 아침 함께 운동하며 자연스럽게 깊은 관계가 형성됩니다. 억지로 명함을 돌릴 필요가 없습니다.",
    },
    {
      icon: "🔥",
      title: "같은 목표를 가진 사람들",
      desc: "자기계발에 진심인 사람들이 모입니다. 성공한 사람들의 루틴과 마인드를 자연스럽게 흡수할 수 있습니다.",
    },
    {
      icon: "🌐",
      title: "다양한 업계 인맥",
      desc: "사업가, 법조인, 의사, IT 전문가까지 다양한 분야의 전문가들이 함께합니다.",
    },
    {
      icon: "💪",
      title: "신뢰 기반의 네트워크",
      desc: "주짓수는 상대를 배려하며 함께 성장하는 운동입니다. 땀으로 쌓은 신뢰는 어떤 인맥보다 강합니다.",
    },
  ];

  return (
    <section id="join" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4 block">
            Networking
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            운동 그 이상,
            <br />
            <span className="text-yellow-400">프리미엄 네트워킹</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            미라클 주짓수는 단순한 운동 클래스가 아닙니다.
            성공을 향해 나아가는 사람들의 커뮤니티입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 rounded-2xl transition-all duration-200 group"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote/Testimonial style callout */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-700 rounded-3xl p-10 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          <div className="text-5xl mb-6">&ldquo;</div>
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-6">
            아침 운동은 단순한 체력 관리가 아닙니다.
            <br />
            <strong className="text-white">하루를 내가 원하는 대로 시작하는 선언</strong>입니다.
          </p>
          <p className="text-yellow-400 font-semibold">— 미라클 주짓수 사범</p>
        </div>
      </div>
    </section>
  );
}
