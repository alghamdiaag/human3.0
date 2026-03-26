export function ProtocolOverview() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      <div className="relative min-h-[240px] overflow-hidden bg-[#0c0e11] p-8 text-right md:col-span-2">
        <div className="relative z-10">
          <div className="mb-6 text-2xl text-[#66d9cc]">✦</div>
          <p className="mb-2 text-xs font-bold tracking-[0.24em] text-[#879390]">
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
          <p className="mb-2 text-xs font-bold tracking-[0.24em] text-[#879390]">
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
  );
}