"use client";

import Link from "next/link";
import { useState } from "react";

type ConflictChoice = "clarity" | "speed" | null;

export function ConflictScreen() {
  const [selected, setSelected] = useState<ConflictChoice>(null);

  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="space-y-10 lg:col-span-8 text-right">
        <div className="space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-[#66d9cc]">
            المرحلة 03
          </p>

          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl">
            تم رصد
            <br />
            <span className="bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
              تعارض يحتاج إلى حسم
            </span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#bdc9c5]">
            النظام يرى أن هناك تعارضًا بين طلبك للوضوح العميق، ورغبتك في الوصول
            السريع إلى نتيجة. لا يمكن تثبيت المسار قبل تحديد ما هو الأهم في هذه
            المرحلة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelected("clarity")}
            className={`p-8 text-right transition ${
              selected === "clarity"
                ? "bg-[#1e2023] ring-1 ring-[#66d9cc]"
                : "bg-[#1a1c1f] hover:bg-[#1e2023]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-[#e2e2e6]">
                الأولوية للوضوح
              </span>
              <span className="text-xs tracking-[0.2em] text-[#66d9cc]">
                خيار 01
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              يعني أن بناء فهم دقيق للمشكلة أهم من الوصول السريع إلى إجابة
              مريحة أو قرار مؤقت.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSelected("speed")}
            className={`p-8 text-right transition ${
              selected === "speed"
                ? "bg-[#1e2023] ring-1 ring-[#66d9cc]"
                : "bg-[#1a1c1f] hover:bg-[#1e2023]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-[#e2e2e6]">
                الأولوية للسرعة
              </span>
              <span className="text-xs tracking-[0.2em] text-[#66d9cc]">
                خيار 02
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              يعني أن الوصول إلى قرار سريع أهم من التعمق الكامل، حتى لو كان ذلك
              على حساب بعض الدقة في الفهم.
            </p>
          </button>
        </div>

        <div className="bg-[#0c0e11] p-6 text-right">
          <p className="text-sm leading-relaxed text-[#bdc9c5]">
            {selected === null &&
              "اختر أحد المسارين حتى يستطيع النظام متابعة بناء التوجيه الصحيح."}
            {selected === "clarity" &&
              "تم اختيار مسار الوضوح. سيعطي النظام وزنًا أكبر للدقة، وبناء الفهم قبل التوصية."}
            {selected === "speed" &&
              "تم اختيار مسار السرعة. سيعطي النظام وزنًا أكبر للحسم العملي وتقليل زمن الوصول إلى القرار."}
          </p>
        </div>

        <Link
          href="/conclusion"
          className={`inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#003732] ${
            !selected ? "pointer-events-none opacity-40" : ""
          }`}
        >
          تثبيت الاختيار والمتابعة
          <span aria-hidden="true">←</span>
        </Link>
      </div>

      <aside className="space-y-6 lg:col-span-4 text-right">
        <div className="bg-[#1e2023] p-6">
          <p className="text-xs tracking-[0.2em] text-[#879390]">
            لماذا تم إيقاف التقدم؟
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
            لأن التوصيات اللاحقة ستعتمد على هذا الحسم. إذا لم يكن الاتجاه واضحًا
            هنا، سيبني النظام استنتاجاته على أساس غير ثابت.
          </p>
        </div>

        <div className="border-r-2 border-[#66d9cc]/40 pr-4">
          <p className="text-xs leading-relaxed text-[#bdc9c5] italic">
            هذه الشاشة لا تضيف تعقيدًا؛ بل تمنع الانتقال إلى مرحلة لاحقة بمسار
            غير محسوم.
          </p>
        </div>
      </aside>
    </section>
  );
}