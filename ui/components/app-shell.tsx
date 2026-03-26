import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-[#111316] px-6 pb-28 pt-10 text-[#e2e2e6] md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-screen-xl">
        {children}
      </div>
    </main>
  );
}