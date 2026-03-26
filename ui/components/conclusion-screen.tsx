"use client";

import { useState } from "react";

export function ConclusionScreen() {
  const [ack, setAck] = useState(false);

  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="space-y-10 lg:col-span-8 text-right">
        <div className="space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-[#66d9cc]">
            المرحلة 04
          </p>

          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl">
            الخلاصة التشغيلية
            <br />
            <span className="bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
              لما تم تثبيته حتى الآن
            </span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#bdc9c5]">
            هذه ليست توصية نهائية، بل خلاصة منظمة لما تم تثبيته عبر المراحل
            السابقة. الهدف هو تحويل الفهم إلى اتجاه عملي يمكن البناء عليه.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-[#1a1c1f] p-8">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#879390]">
              الهدف المثبّت
            </p>
            <p className="text-sm leading-relaxed text-[#e2e2e6]">
              بناء نظام واضح لاتخاذ القرار يمنع التردد ويقلل إعادة التفكير في نفس
              النقاط.
            </p>
          </div>

          <div className="bg-[#1a1c1f] p-8">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#879390]">
              النمط السلوكي
            </p>
            <p className="text-sm leading-relaxed text-[#e2e2e6]">
              ميل لإعادة تحليل الخيارات بشكل متكرر نتيجة غياب بنية واضحة للحسم.
            </p>
          </div>

          <div className="bg-[#1a1c1f] p-8">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#879390]">
              الاتجاه المختار
            </p>
            <p className="text-sm leading-relaxed text-[#e2e2e6]">
              إعطاء الأولوية للوضوح والدقة قبل السرعة في اتخاذ القرار.
            </p>
          </div>

          <div className="bg-[#0c0e11] p-8">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#66d9cc]">
              الاستنتاج التشغيلي
            </p>
            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              المشكلة ليست في نقص القدرة على اتخاذ القرار، بل في غياب إطار
              واضح يحسم متى يتم التوقف عن التفكير والانتقال إلى التنفيذ.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            id="ack"
            type="checkbox"
            checked={ack}
            onChange={(e) => setAck(e.target.checked)}
            className="h-4 w-4 accent-[#66d9cc]"
          />
          <label htmlFor="ack" className="text-sm text-[#bdc9c5]">
            أقرّ بأن هذه الخلاصة تمثل وضعي الحالي بشكل كافٍ للمتابعة
          </label>
        </div>

        <button
          type="button"
          disabled={!ack}
          className="inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#003732] disabled:opacity-40"
        >
          تثبيت الخلاصة والمتابعة
          <span aria-hidden="true">←</span>
        </button>
      </div>

      <aside className="space-y-6 lg:col-span-4 text-right">
        <div className="bg-[#1e2023] p-6">
          <p className="text-xs tracking-[0.2em] text-[#879390]">
            ماذا يحدث الآن؟
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
            سيتم استخدام هذه الخلاصة كأساس لبناء التوصيات في المرحلة التالية.
            أي تغيير هنا سيؤثر مباشرة على جودة النتائج القادمة.
          </p>
        </div>

        <div className="border-r-2 border-[#66d9cc]/40 pr-4">
          <p className="text-xs leading-relaxed text-[#bdc9c5] italic">
            هذه النقطة تمثل الانتقال من الفهم إلى التوجيه.
          </p>
        </div>
      </aside>
    </section>
  );
}