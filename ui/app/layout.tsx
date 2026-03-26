import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الانسان 3.0",
  description: "بيئة تفكير منظّمة لاتخاذ القرار بوضوح وعمق.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}