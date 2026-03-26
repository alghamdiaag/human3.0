export function SynthesisScreen() {
  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="space-y-8 lg:col-span-7 text-right">
        <div className="space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-[#66d9cc]">
            المرحلة 05
          </p>

          <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-6xl">
            النمط الظاهر:
            <br />
            <span className="bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
              المعماري الاستراتيجي
            </span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#bdc9c5] md:text-base">
            القراءة الحالية تشير إلى أنك تميل إلى بناء الأطر قبل الحركة،
            وتفضّل أن يكون القرار ناتجًا عن بنية مفهومة لا عن اندفاع مؤقت.
            أنت لا تبحث فقط عن حل، بل عن نظام يمنع تكرار المشكلة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#1a1c1f] p-8 text-right">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#879390]">
              نقطة الارتكاز الأساسية
            </p>
            <h2 className="text-xl font-bold text-[#e2e2e6]">
              بناء البنية قبل التنفيذ
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
              تظهر لديك أفضل النتائج عندما يكون المسار واضحًا، والمعايير ثابتة،
              وخيارات القرار محددة مسبقًا.
            </p>
          </div>

          <div className="bg-[#1a1c1f] p-8 text-right">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#879390]">
              نقطة الخطر
            </p>
            <h2 className="text-xl font-bold text-[#e2e2e6]">
              التردد الناتج عن الإفراط في التحليل
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
              عندما لا توجد حدود واضحة للحسم، يتحول التحليل من أداة مفيدة إلى
              دائرة تمنعك من الانتقال إلى التنفيذ.
            </p>
          </div>
        </div>

        <div className="bg-[#0c0e11] p-8 text-right">
          <p className="mb-2 text-xs tracking-[0.2em] text-[#66d9cc]">
            التوصية المركزية
          </p>
          <p className="text-sm leading-relaxed text-[#bdc9c5]">
            لا تحتاج إلى مزيد من التفكير الحر، بل إلى إطار قرار يحدد:
            متى تبدأ، متى تتوقف، ومتى تعتبر أن الوضوح كافٍ للانتقال إلى التنفيذ.
          </p>
        </div>
      </div>

      <aside className="space-y-6 lg:col-span-5 text-right">
        <div className="bg-[#1e2023] p-8">
          <p className="mb-6 text-xs tracking-[0.2em] text-[#879390]">
            مؤشرات القراءة
          </p>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#e2e2e6]">وضوح الاتجاه</span>
                <span className="text-sm font-bold text-[#66d9cc]">92%</span>
              </div>
              <div className="h-2 bg-[#333538]">
                <div className="h-full w-[92%] bg-gradient-to-r from-[#66d9cc] to-[#00796f]" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#e2e2e6]">قابلية التنفيذ</span>
                <span className="text-sm font-bold text-[#66d9cc]">87%</span>
              </div>
              <div className="h-2 bg-[#333538]">
                <div className="h-full w-[87%] bg-gradient-to-r from-[#66d9cc] to-[#00796f]" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-[#e2e2e6]">مستوى الثقة</span>
                <span className="text-sm font-bold text-[#66d9cc]">89%</span>
              </div>
              <div className="h-2 bg-[#333538]">
                <div className="h-full w-[89%] bg-gradient-to-r from-[#66d9cc] to-[#00796f]" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-r-2 border-[#66d9cc]/40 pr-4">
          <p className="text-xs leading-relaxed text-[#bdc9c5] italic">
            هذه الشاشة لا تمنحك هوية نهائية جامدة، بل تلخص النمط الأوضح الذي
            ظهر حتى الآن ليُستخدم في بناء التقرير التالي.
          </p>
        </div>

        <a
          href="/report"
          className="inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-6 py-4 text-sm font-bold tracking-[0.2em] text-[#003732]"
        >
          الانتقال إلى التقرير
          <span aria-hidden="true">←</span>
        </a>
      </aside>
    </section>
  );
}