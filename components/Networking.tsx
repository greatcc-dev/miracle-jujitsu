"use client";

export default function Networking() {
  const benefits = [
    { num: "01", title: "자연스러운 만남", desc: "매일 아침 함께 운동하며 깊은 관계가 형성됩니다. 억지로 명함 돌릴 필요가 없습니다." },
    { num: "02", title: "같은 목표를 가진 사람들", desc: "자기계발에 진심인 사람들이 모입니다. 성공한 사람들의 루틴을 자연스럽게 흡수하세요." },
    { num: "03", title: "다양한 업계 인맥", desc: "사업가, 법조인, 의사, IT 전문가까지. 폭넓은 업계의 리더들과 연결됩니다." },
    { num: "04", title: "신뢰 기반 네트워크", desc: "주짓수는 상대를 배려하며 함께 성장하는 운동. 땀으로 쌓은 신뢰는 다릅니다." },
  ];

  return (
    <section id="join" className="bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — title */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-yellow-400" />
              <span className="sport-label">Networking</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-tight text-white mb-6">
              운동 그 이상,<br />
              <span className="text-yellow-400">프리미엄</span><br />
              네트워킹
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
              미라클 주짓수는 단순한 운동 클래스가 아닙니다.
              성공을 향해 나아가는 사람들의 커뮤니티입니다.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-yellow-400 pl-6">
              <p className="text-white text-lg font-light italic leading-relaxed">
                &ldquo;아침 운동은 단순한 체력 관리가 아닙니다.<br />
                <strong className="font-black not-italic">하루를 내가 원하는 대로 시작하는 선언입니다.</strong>&rdquo;
              </p>
              <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mt-4">
                — MIRACLE BJJ 사범
              </p>
            </div>
          </div>

          {/* Right — benefit list */}
          <div className="space-y-0">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="group flex gap-6 py-8 border-t border-white/5 hover:border-yellow-400/20 transition-colors duration-300"
              >
                <span className="text-5xl font-black italic text-white/5 group-hover:text-yellow-400/15 transition-colors leading-none flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-white font-black uppercase text-sm tracking-wide mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-white/5" />
          </div>
        </div>

      </div>
    </section>
  );
}
