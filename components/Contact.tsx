"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", job: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-white/10 focus:border-yellow-400 px-4 py-3 text-white placeholder-gray-700 outline-none transition-colors text-sm font-bold uppercase tracking-wide";

  return (
    <section id="contact" className="bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[2px] bg-yellow-400" />
          <span className="sport-label">Free Trial</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-tight text-white mb-3">
          지금 바로<br />
          <span className="text-yellow-400">무료 체험</span>
        </h2>
        <p className="text-gray-500 text-sm mb-16">첫 수업은 무료입니다. 부담 없이 경험해 보세요.</p>

        {submitted ? (
          <div className="border border-yellow-400/20 bg-yellow-400/[0.03] p-16 text-center">
            <div className="text-6xl font-black italic text-yellow-400 mb-4">DONE</div>
            <p className="text-white font-black uppercase text-sm tracking-widest mb-2">신청이 완료되었습니다</p>
            <p className="text-gray-500 text-xs">곧 연락드리겠습니다. 미라클 주짓수에서 뵙겠습니다!</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Info */}
            <div className="lg:col-span-2 space-y-0">
              {[
                { icon: "⏰", label: "수업 시간", value: "매일 AM 08:00 — 09:00" },
                { icon: "💰", label: "수업료", value: "₩20,000 / 1회 (첫 체험 무료)" },
                { icon: "📍", label: "위치", value: "상담 후 안내" },
                { icon: "🥋", label: "준비물", value: "편한 운동복 (도복 대여 가능)" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6 border-t border-white/5">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">{item.label}</div>
                    <div className="text-gray-300 text-sm font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/5" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold block mb-2">이름 *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="홍길동" className={inputClass} />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold block mb-2">연락처 *</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="010-0000-0000" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold block mb-2">직업 / 업종</label>
                <input type="text" value={form.job} onChange={e => setForm({...form, job: e.target.value})} placeholder="스타트업 대표, 변호사, 의사 등" className={inputClass} />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold block mb-2">문의 사항</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="궁금한 점을 적어주세요" rows={4} className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center mt-2">
                무료 체험 신청하기 →
              </button>
              <p className="text-gray-700 text-[10px] uppercase tracking-widest text-center">
                개인정보는 수업 안내 외 사용되지 않습니다
              </p>
            </form>

          </div>
        )}
      </div>
    </section>
  );
}
