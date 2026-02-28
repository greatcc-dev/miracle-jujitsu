"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", job: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual backend/form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4 block">
            Free Trial
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            지금 바로
            <br />
            <span className="text-yellow-400">무료 체험 신청</span>
          </h2>
          <p className="text-gray-400 text-lg">
            첫 수업은 무료입니다. 부담 없이 경험해 보세요.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-3">신청이 완료되었습니다!</h3>
            <p className="text-gray-400">
              곧 연락드리겠습니다. 미라클 주짓수에서 뵙겠습니다!
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-dark">
                <div className="text-2xl mb-3">📍</div>
                <h3 className="text-white font-bold mb-1">위치</h3>
                <p className="text-gray-400 text-sm">상담 후 안내 드립니다</p>
              </div>
              <div className="card-dark">
                <div className="text-2xl mb-3">⏰</div>
                <h3 className="text-white font-bold mb-1">수업 시간</h3>
                <p className="text-gray-400 text-sm">매일 아침 8:00 ~ 9:00</p>
              </div>
              <div className="card-dark">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="text-white font-bold mb-1">수업료</h3>
                <p className="text-gray-400 text-sm">1회 2만원 (첫 체험 무료)</p>
              </div>
              <div className="card-dark">
                <div className="text-2xl mb-3">🥋</div>
                <h3 className="text-white font-bold mb-1">준비물</h3>
                <p className="text-gray-400 text-sm">편한 운동복 (도복 첫 체험 대여 가능)</p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">이름 *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">연락처 *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">직업 / 업종</label>
                <input
                  type="text"
                  value={form.job}
                  onChange={(e) => setForm({ ...form, job: e.target.value })}
                  placeholder="예: 스타트업 대표, 변호사, 의사 등"
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">문의 사항</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="궁금한 점이 있으시면 편하게 적어주세요."
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-yellow-400 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                무료 체험 신청하기 →
              </button>
              <p className="text-gray-600 text-xs text-center">
                개인정보는 수업 안내 외 다른 목적으로 사용되지 않습니다.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
