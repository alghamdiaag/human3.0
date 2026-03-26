export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#020617]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 w-full max-w-screen-xl items-center justify-around px-8">
        <button
          type="button"
          className="flex flex-col items-center justify-center text-[10px] tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
        >
          <span className="mb-1 text-base">→</span>
          التالي
        </button>

        <button
          type="button"
          className="flex scale-110 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#66d9cc] to-[#00796f] px-6 py-2 text-[10px] font-bold tracking-[0.2em] text-[#003732] shadow-lg shadow-teal-500/20 transition active:scale-100"
        >
          <span className="mb-1 text-base">▶</span>
          تنفيذ
        </button>

        <button
          type="button"
          className="flex flex-col items-center justify-center text-[10px] tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
        >
          <span className="mb-1 text-base">←</span>
          السابق
        </button>
      </div>
    </nav>
  );
}