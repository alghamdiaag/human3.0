type TopAppBarProps = {
  title?: string;
  subtitle?: string;
  progress?: number;
};

export function TopAppBar({
  title = "البروتوكول الخطي",
  subtitle = "هيومن 3.0 · المرحلة 00",
  progress = 8,
}: TopAppBarProps) {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <header className="sticky top-0 z-50 border-b border-teal-500/20 bg-[#020617]/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <button
          type="button"
          className="rounded-md p-2 text-teal-400 transition hover:bg-white/5"
          aria-label="القائمة"
        >
          <span className="flex flex-col items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
          </span>
        </button>

        <div className="text-right">
          <div className="text-xl font-bold tracking-tight text-teal-400">
            {title}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
            {subtitle}
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-[#1e2023]">
        <div
          className="h-full bg-gradient-to-r from-[#66d9cc] to-[#00796f]"
          style={{ width: `${safeProgress}%` }}
        />
      </div>
    </header>
  );
}