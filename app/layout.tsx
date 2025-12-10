import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOMOBONO Research",
  description: "Inteligência e análise estratégica para o mercado de criptomoedas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="invest-theme">
          {/* Background - Almost AMOLED with very subtle noise or gradient if desired, or just plain dark */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-[#f5f5f7] dark:bg-[#050505] transition-colors duration-300">
            {/* Subtle grid or noise could go here, but keeping it simple for AMOLED look */}
          </div>

          <main className="min-h-screen relative z-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
