import { AppShell } from "@/components/app-shell";
import { ProtocolOverview } from "@/components/protocol-overview";
import { StartCTA } from "@/components/start-cta";
import { StartHero } from "@/components/start-hero";

export default function HomePage() {
  return (
    <AppShell>
      <StartHero />
      <ProtocolOverview />
      <StartCTA />
    </AppShell>
  );
}