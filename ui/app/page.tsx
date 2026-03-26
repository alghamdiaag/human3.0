import { ProtocolOverview } from "@/components/protocol-overview";
import { StartCTA } from "@/components/start-cta";
import { StartHero } from "@/components/start-hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111316] px-6 pb-28 pt-10 text-[#e2e2e6] md:px-10 lg:px-16">
      <StartHero />
      <ProtocolOverview />
      <StartCTA />
    </main>
  );
}