export function StartHero() {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col">
      <div className="mb-10 inline-flex w-fit items-center self-start border border-white/10 bg-[#1a1c1f] px-3 py-1">
        <span className="text-[11px] font-semibold tracking-[0.28em] text-[#66d9cc]">
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
            <span className="text-[10px] tracking-[0.2em] text-[#879390]">
              حالة النظام
            </span>
            <div className="h-px w-full bg-white/10" />
            <span className="text-sm font-bold text-[#66d9cc]">
              المعرّف: NEURAL-001-ALPHA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}