import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./_components/theme-toggle";
import Atmosphere from "./_components/atmosphere";
import Intro from "./_components/intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VESTRIPPN3.0 // Microbe Pokédex",
  description:
    "A microbiology pokédex of medically notable bacteria, viruses, fungi, parasites, and pharmacology.",
};

const NO_FLASH = `(function(){try{var m=localStorage.getItem('theme-mode');if(m!=='day'&&m!=='night'&&m!=='auto')m='auto';var h=new Date().getHours();var t=(m==='night'||(m==='auto'&&(h>=18||h<6)))?'night':'day';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='day';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="day"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
        <Atmosphere />
        <header className="sticky top-0 z-20 border-b border-glass-border bg-glass backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3.5">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-base font-black text-surface sm:h-10 sm:w-10 sm:text-lg">
                V
              </span>
              <span className="text-base font-extrabold tracking-tight text-foreground sm:text-xl">
                VESTRIPPN<span className="text-blue">3.0</span>
              </span>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hidden text-sm text-muted md:inline">
                Microbiology Pokédex
              </span>
              <span
                aria-hidden
                className="hidden h-5 w-px bg-border md:inline-block"
              />
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
        <Intro />
      </body>
    </html>
  );
}
