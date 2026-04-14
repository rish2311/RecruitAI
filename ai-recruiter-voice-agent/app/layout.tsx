import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Intervo AI - AI Voice Recruiting",
  description:
    "AI Voice Recruiting That Never Sleeps. Hire faster, smarter, and 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        sora.variable,
        jetbrainsMono.variable,
        "font-sans",
        "dark",
      )}
    >
      <body className="min-h-full flex flex-col selection:bg-purple-500/30 selection:text-purple-100 bg-[#0B0B13] text-white">
        {children}
      </body>
    </html>
  );
}
