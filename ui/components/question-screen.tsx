"use client";

import { useState } from "react";

export function QuestionScreen() {
  const [answer, setAnswer] = useState("");

  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="space-y-10 lg:col-span-7 text-right">
        <div className="space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-[#66d9cc]">
            المرحلة 01
          </p>

          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl">
            ما الذي تحاول تحقيقه
            <br />
            <span className="bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
              في هذه المرحلة تحديدًا؟
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-[#bdc9c5]">
            صف الهدف بشكل واضح ومباشر. تجنب العموميات، وركّز على النتيجة التي
            تريد الوصول إليها فعليًا.
          </p>
        </div>

        <div className="space-y-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="اكتب إجابتك هنا..."
            className="h-40 w-full resize-none border border-[#3e4946] bg-[#0c0e11] p-4 text-sm text-[#e2e2e6] outline-none focus:border-[#66d9cc]"
          />

          <div className="flex items-center justify-between text-xs text-[#879390]">
            <span>{answer.length} حرف</span>
            <span>النظام يستقبل إجابتك</span>
          </div>
        </div>

        <button
          type="button"
          disabled={!answer.trim()}
          className="inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#003732] disabled:opacity-40"
        >
          متابعة
          <span aria-hidden="true">←</span>
        </button>
      </div>

      <aside className="space-y-6 lg:col-span-5 text-right">
        <div className="bg-[#1a1c1f] p-6">
          <p className="text-xs tracking-[0.2em] text-[#879390]">
            مثال توضيحي
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
            أريد بناء نظام يساعدني على اتخاذ قرارات واضحة دون تردد، ويمنعني من
            إعادة التفكير في نفس النقاط بشكل متكرر.
          </p>
        </div>

        <div className="border-r-2 border-[#66d9cc]/40 pr-4">
          <p className="text-xs leading-relaxed text-[#bdc9c5] italic">
            كلما كانت الإجابة أدق، زادت جودة التحليل في المراحل القادمة.
          </p>
        </div>
      </aside>
    </section>
  );
}