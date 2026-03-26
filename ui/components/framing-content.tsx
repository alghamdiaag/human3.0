import Link from "next/link";

export function FramingContent() {
  return (
    <section className="grid gap-12 lg:grid-cols-12">
      <div className="space-y-12 lg:col-span-7">
        <div className="space-y-6 text-right">
          <p className="text-xs font-bold tracking-[0.2em] text-[#66d9cc]">
            أساس البروتوكول
          </p>

          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-[#e2e2e6] md:text-6xl">
            البنية المعرفية
            <br />
            <span className="bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
              ذات التسع مراحل
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#bdc9c5]">
            هذا البروتوكول ليس استبيانًا سريعًا، بل مسارًا منظمًا للتفكير
            والانتباه. كل مرحلة تبني على ما قبلها، حتى لا تنتقل إلى استنتاج
            جديد قبل تثبيت ما يسبقه بوضوح.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#1a1c1f] p-8 text-right">
            <div className="mb-4 text-2xl text-[#66d9cc]">◈</div>
            <h2 className="text-xl font-bold text-[#e2e2e6]">
              صرامة خطوة بخطوة
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
              كل مرحلة تتطلب اكتمالًا معرفيًا قبل فتح المرحلة التالية. لا توجد
              قفزات، ولا اختصارات، ولا انتقال عشوائي بين الشاشات.
            </p>
          </div>

          <div className="border-r-4 border-[#66d9cc]/20 bg-[#1a1c1f] p-8 text-right">
            <div className="mb-4 text-2xl text-[#66d9cc]">▣</div>
            <h2 className="text-xl font-bold text-[#e2e2e6]">
              أرشفة يمكن الرجوع إليها
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
              كل قرار وكل نمط يظهر أثناء الاستخدام يمكن حفظه ضمن السجل، حتى
              يتكوّن مع الوقت مسار واضح لطريقة تفكيرك وتطور قراراتك.
            </p>
          </div>
        </div>

        <div className="relative h-64 overflow-hidden bg-[#0c0e11]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,217,204,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,14,17,0.95),transparent)]" />

          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse bg-[#66d9cc]" />
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#66d9cc]/80">
              النظام جاهز لبداية الاستكشاف المنظّم
            </span>
          </div>
        </div>
      </div>

      <aside className="space-y-8 lg:col-span-5">
        <div className="bg-[#1e2023] p-1">
          <div className="space-y-8 bg-[#111316] p-8">
            <div className="flex items-end justify-between">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#bdc9c5]">
                خريطة المراحل
              </h2>
              <span className="text-sm font-bold text-[#66d9cc]">00 / 09</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#66d9cc] bg-[#66d9cc]/10 text-xs font-bold text-[#66d9cc]">
                    00
                  </div>
                  <div className="h-8 w-px bg-[#66d9cc]/30" />
                </div>

                <div className="pb-8 text-right">
                  <p className="text-sm font-bold text-[#66d9cc]">
                    التهيئة والسياق
                  </p>
                  <p className="text-[10px] tracking-[0.1em] text-[#879390]">
                    المرحلة الحالية
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 opacity-50">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3e4946] text-xs text-[#bdc9c5]">
                    01
                  </div>
                  <div className="h-8 w-px bg-[#3e4946]/30" />
                </div>

                <div className="pb-8 text-right">
                  <p className="text-sm font-medium text-[#e2e2e6]">
                    الاستكشاف الأولي
                  </p>
                  <p className="text-[10px] tracking-[0.1em] text-[#879390]">
                    مغلق حتى تبدأ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 opacity-40">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3e4946] text-xs text-[#bdc9c5]">
                    02
                  </div>
                  <div className="h-8 w-px bg-[#3e4946]/30" />
                </div>

                <div className="pb-8 text-right">
                  <p className="text-sm font-medium text-[#e2e2e6]">
                    التحليل الدلالي
                  </p>
                  <p className="text-[10px] tracking-[0.1em] text-[#879390]">
                    مغلق
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 opacity-30">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3e4946] text-xs text-[#bdc9c5]">
                    03
                  </div>
                  <div className="h-4 w-px bg-[#3e4946]/30" />
                </div>

                <div className="pb-4 text-right">
                  <p className="text-sm font-medium text-[#e2e2e6]">
                    المراحل 03–09
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/question"
              className="inline-flex w-full items-center justify-between bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-8 py-5 text-sm font-extrabold tracking-[0.2em] text-[#003732] transition hover:brightness-110 active:scale-[0.99]"
            >
              المتابعة إلى الاستكشاف الأولي
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>

        <div className="border-r-2 border-[#66d9cc]/40 py-2 pr-6 text-right">
          <p className="text-xs leading-relaxed text-[#bdc9c5] italic">
            الوضوح المعرفي لا ينتج من السرعة، بل من البنية الصحيحة التي تمنع
            القفز إلى نتائج غير ناضجة.
          </p>
        </div>
      </aside>
    </section>
  );
}