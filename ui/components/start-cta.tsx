export function StartCTA() {
  return (
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
          className="mt-10 inline-flex w-full items-center justify-center gap-4 bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-8 py-5 text-sm font-extrabold tracking-[0.2em] text-[#003732] transition hover:brightness-110 active:scale-[0.99]"
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
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#66d9cc]/80">
              النظام جاهز لبدء الاستكشاف الأولي
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}