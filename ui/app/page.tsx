import { TopAppBar } from "@/components/top-app-bar";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111316] text-[#e2e2e6]">
     <TopAppBar />

      <section className="mx-auto flex w-full max-w-screen-xl flex-col px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <div className="mb-10 inline-flex w-fit items-center border border-white/10 bg-[#1a1c1f] px-3 py-1 self-start">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#66d9cc]">
            الملاذ المعرفي
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 text-right">
            <h1 className="max-w-4xl text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
              <span className="block">هندسة</span>
              <span className="block bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
                التفكير العميق
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#bdc9c5] md:text-xl">
              ادخل إلى بيئة رقمية منسّقة صُممت لتصفية التشويش وبناء وضوحك
              المعرفي. يوفّر هذا البروتوكول مساحة تفكير عالية التركيز تساعدك
              على تنظيم الرؤية واتخاذ القرار بقدر أكبر من الانضباط والعمق.
            </p>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#879390]">
                حالة النظام
              </span>
              <div className="h-px w-full bg-white/10" />
              <span className="text-sm font-bold text-[#66d9cc]">
                المعرّف: NEURAL-001-ALPHA
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="relative min-h-[240px] overflow-hidden bg-[#0c0e11] p-8 md:col-span-2 text-right">
            <div className="relative z-10">
              <div className="mb-6 text-2xl text-[#66d9cc]">✦</div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#879390]">
                مخرجات البروتوكول
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight">
                خريطة معرفية وتقرير نهائي
              </h2>

              <ul className="mt-6 space-y-3 text-sm text-[#bdc9c5]">
                <li className="flex items-center justify-end gap-3">
                  تحليل معرفي عالي الدقة
                  <span className="h-1.5 w-1.5 bg-[#66d9cc]" />
                </li>
                <li className="flex items-center justify-end gap-3">
                  قياس كثافة الانتباه
                  <span className="h-1.5 w-1.5 bg-[#66d9cc]" />
                </li>
                <li className="flex items-center justify-end gap-3">
                  تنظيم هرمي للتفكير والتحليل
                  <span className="h-1.5 w-1.5 bg-[#66d9cc]" />
                </li>
              </ul>
            </div>

            <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-[#66d9cc]/10 blur-3xl" />
          </div>

          <div className="flex min-h-[240px] flex-col justify-between bg-[#1a1c1f] p-8 text-right">
            <div>
              <div className="mb-6 text-2xl text-[#66d9cc]">◔</div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#879390]">
                المدة
              </p>
              <p className="text-4xl font-extrabold tracking-tight">
                12–15 <span className="text-lg font-medium text-white/40">دقيقة</span>
              </p>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[#bdc9c5]">
              تحتاج هذه المرحلة إلى فترة تركيز متصلة حتى تتم المعايرة الفكرية
              بالشكل الصحيح.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="bg-[#282a2d] p-8 text-right lg:col-span-5">
            <h3 className="text-3xl font-extrabold tracking-tight">
              هل أنت مستعد للبدء؟
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
              عند بدء البروتوكول، فأنت تقرّ بالحاجة إلى تركيز متصل وبيئة هادئة
              تسمح للنظام ببناء قراءة أوضح لمسار تفكيرك.
            </p>

            <button
              type="button"
              className="mt-10 inline-flex w-full items-center justify-center gap-4 bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-8 py-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#003732] transition hover:brightness-110 active:scale-[0.99]"
            >
              ابدأ البروتوكول
              <span aria-hidden="true">←</span>
            </button>
          </div>

          <div className="overflow-hidden bg-[#0c0e11] lg:col-span-7">
            <div className="relative h-[280px] bg-[radial-gradient(circle_at_center,rgba(102,217,204,0.18),transparent_55%)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(12,14,17,0.9))]" />
              <div className="absolute bottom-6 right-6 flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse bg-[#66d9cc]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#66d9cc]/80">
                  النظام جاهز لبدء الاستكشاف الأولي
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#020617]/90 backdrop-blur-lg">
        <div className="mx-auto flex h-20 w-full max-w-screen-xl items-center justify-around px-8">
          <button
            type="button"
            className="flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
          >
            <span className="mb-1 text-base">→</span>
            التالي
          </button>

          <button
            type="button"
            className="flex scale-110 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#66d9cc] to-[#00796f] px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#003732] shadow-lg shadow-teal-500/20 transition active:scale-100"
          >
            <span className="mb-1 text-base">▶</span>
            تنفيذ
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
          >
            <span className="mb-1 text-base">←</span>
            السابق
          </button>
        </div>
      </nav>
    </main>
  );
}