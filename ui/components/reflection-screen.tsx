"use client";

import Link from "next/link";
import { useState } from "react";

export function ReflectionScreen() {
  const [confirmed, setConfirmed] = useState<null | "accurate" | "adjust">(null);

  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="space-y-10 lg:col-span-8 text-right">
        <div className="space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-[#66d9cc]">
            المرحلة 02
          </p>

          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl">
            القراءة الأولية
            <br />
            <span className="bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
              لما يظهر من إجابتك
            </span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#bdc9c5]">
            هذه ليست نتيجة نهائية، بل قراءة أولية لما يبدو أنه يتشكل من
            إجابتك. الهدف هنا هو التأكد من أن النظام يسير في الاتجاه الصحيح قبل
            الانتقال إلى التحليل الأعمق.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-[#1a1c1f] p-8 text-right">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-[#e2e2e6]">
                النمط الأول
              </span>
              <span className="text-xs tracking-[0.2em] text-[#66d9cc]">
                إشارة مبكرة
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              يبدو أن الأولوية الأساسية لديك ليست مجرد إنجاز المهمة، بل بناء
              مسار أكثر وضوحًا واستقرارًا لاتخاذ القرار دون استنزاف ذهني متكرر.
            </p>
          </div>

          <div className="bg-[#1a1c1f] p-8 text-right">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-[#e2e2e6]">
                النمط الثاني
              </span>
              <span className="text-xs tracking-[0.2em] text-[#66d9cc]">
                ملاحظة سلوكية
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              هناك ميل واضح إلى إعادة التفكير في نفس النقاط أكثر من مرة، مما
              يشير إلى أن المشكلة ليست في نقص الرغبة، بل في ضعف البنية التي
              تنظم الاختيار والحسم.
            </p>
          </div>

          <div className="bg-[#0c0e11] p-8 text-right">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-[#e2e2e6]">
                مستوى الثقة الحالي
              </span>
              <span className="text-lg font-extrabold text-[#66d9cc]">88%</span>
            </div>

            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              القراءة الحالية جيدة بما يكفي للمتابعة، لكنها ما زالت تحتاج إلى
              تأكيد منك قبل تثبيتها كاتجاه صحيح.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <button
            type="button"
            onClick={() => setConfirmed("accurate")}
            className="inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#003732]"
          >
            هذا دقيق
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={() => setConfirmed("adjust")}
            className="inline-flex w-full items-center justify-between border border-[#3e4946] bg-transparent px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#e2e2e6]"
          >
            أحتاج تعديل
            <span aria-hidden="true">←</span>
          </button>
        </div>

        {confirmed && (
          <div className="bg-[#1e2023] p-6 text-right">
            <p className="text-sm leading-relaxed text-[#bdc9c5]">
              {confirmed === "accurate"
                ? "تم تسجيل أن القراءة الحالية دقيقة، ويمكن للنظام الانتقال إلى الخطوة التالية."
                : "تم تسجيل أنك تحتاج تعديلًا، وسيعود النظام لتعديل القراءة قبل تثبيت المسار."}
            </p>
          </div>
        )}

        <Link
          href="/conflict"
          className={`inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#003732] ${
            !confirmed ? "pointer-events-none opacity-40" : ""
          }`}
        >
          الانتقال إلى الخطوة التالية
          <span aria-hidden="true">←</span>
        </Link>
      </div>

      <aside className="space-y-6 lg:col-span-4 text-right">
        <div className="bg-[#1e2023] p-6">
          <p className="text-xs tracking-[0.2em] text-[#879390]">
            لماذا هذه الشاشة مهمة؟
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
            لأن جودة التحليل القادم تعتمد على صحة الفهم الحالي. إذا كانت القراءة
            الأولية منحرفة، فكل ما بعدها سيتأثر.
          </p>
        </div>

        <div className="border-r-2 border-[#66d9cc]/40 pr-4">
          <p className="text-xs leading-relaxed text-[#bdc9c5] italic">
            الهدف هنا ليس الإقناع، بل التحقق من أن النظام يرى ما تراه أنت فعلًا.
          </p>
        </div>
      </aside>
    </section>
  );
}