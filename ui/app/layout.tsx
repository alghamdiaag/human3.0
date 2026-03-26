import type { Metadata } from "next";
import "./globals.css";
import { TopAppBar } from "@/components/top-app-bar";
import { BottomNav } from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "هيومن 3.0",
  description: "بيئة تفكير منظّمة لاتخاذ القرار بوضوح وعمق.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <TopAppBar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}