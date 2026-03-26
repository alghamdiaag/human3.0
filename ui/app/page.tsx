export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111316] text-[#e2e2e6]">
      <header className="sticky top-0 z-50 border-b border-teal-500/20 bg-[#020617]/80 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-md p-2 text-teal-400 transition hover:bg-white/5"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-5 bg-current mb-1" />
              <span className="block h-0.5 w-5 bg-current mb-1" />
              <span className="block h-0.5 w-5 bg-current" />
            </button>

            <div>
              <div className="text-xl font-bold tracking-tight text-teal-400">
                Linear Protocol
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Human 3.0 · Stage 00
              </div>
            </div>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-teal-400 transition hover:bg-white/5"
            aria-label="More options"
          >
            <span className="flex flex-col items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-current" />
              <span className="h-1 w-1 rounded-full bg-current" />
              <span className="h-1 w-1 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className="h-[2px] w-full bg-[#1e2023]">
          <div className="h-full w-[8%] bg-gradient-to-r from-[#66d9cc] to-[#00796f]" />
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-screen-xl flex-col px-6 pb-28 pt-10 md:px-10 lg:px-16">
        <div className="mb-10 inline-flex w-fit items-center border border-white/10 bg-[#1a1c1f] px-3 py-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#66d9cc]">
            Cognitive Sanctuary
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="max-w-4xl text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
              <span className="block">Architecture of</span>
              <span className="block bg-gradient-to-r from-[#66d9cc] to-[#00796f] bg-clip-text text-transparent">
                Deep Thought.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#bdc9c5] md:text-xl">
              Enter a curated digital environment designed to filter noise and
              map your neural clarity. This protocol facilitates a high-end
              cognitive synchronization through editorial precision.
            </p>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#879390]">
                System Status
              </span>
              <div className="h-px w-full bg-white/10" />
              <span className="text-sm font-bold text-[#66d9cc]">
                ID: NEURAL-001-ALPHA
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="flex min-h-[240px] flex-col justify-between bg-[#1a1c1f] p-8">
            <div>
              <div className="mb-6 text-2xl text-[#66d9cc]">◔</div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#879390]">
                Duration
              </p>
              <p className="text-4xl font-extrabold tracking-tight">
                12–15 <span className="text-lg font-medium text-white/40">MINS</span>
              </p>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[#bdc9c5]">
              A sustained interval of focus is required for optimal neural
              calibration.
            </p>
          </div>

          <div className="relative min-h-[240px] overflow-hidden bg-[#0c0e11] p-8 md:col-span-2">
            <div className="relative z-10">
              <div className="mb-6 text-2xl text-[#66d9cc]">✦</div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#879390]">
                Protocol Outcome
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight">
                Neural Map &amp; Report
              </h2>

              <ul className="mt-6 space-y-3 text-sm text-[#bdc9c5]">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-[#66d9cc]" />
                  High-resolution cognitive profiling
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-[#66d9cc]" />
                  Attention density analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-[#66d9cc]" />
                  Editorial thought hierarchy
                </li>
              </ul>
            </div>

            <div className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-[#66d9cc]/10 blur-3xl" />
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="overflow-hidden bg-[#0c0e11] lg:col-span-7">
            <div className="relative h-[280px] bg-[radial-gradient(circle_at_center,rgba(102,217,204,0.18),transparent_55%)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(12,14,17,0.9))]" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse bg-[#66d9cc]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#66d9cc]/80">
                  System Ready for Initial Inquiry
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#282a2d] p-8 lg:col-span-5">
            <h3 className="text-3xl font-extrabold tracking-tight">
              Ready for Synchronization?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#bdc9c5]">
              By initiating the protocol, you acknowledge the requirement for
              uninterrupted focus within the sanctuary environment.
            </p>

            <button
              type="button"
              className="mt-10 inline-flex w-full items-center justify-center gap-4 bg-gradient-to-r from-[#66d9cc] to-[#00796f] px-8 py-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#003732] transition hover:brightness-110 active:scale-[0.99]"
            >
              Start Protocol
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#020617]/90 backdrop-blur-lg">
        <div className="mx-auto flex h-20 w-full max-w-screen-xl items-center justify-around px-8">
          <button
            type="button"
            className="flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
          >
            <span className="mb-1 text-base">←</span>
            Previous
          </button>

          <button
            type="button"
            className="flex scale-110 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#66d9cc] to-[#00796f] px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#003732] shadow-lg shadow-teal-500/20 transition active:scale-100"
          >
            <span className="mb-1 text-base">▶</span>
            Execute
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
          >
            <span className="mb-1 text-base">→</span>
            Next
          </button>
        </div>
      </nav>
    </main>
  );
}