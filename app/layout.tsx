import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./_components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VESTRIPPN3.0 // Screening Matrix",
  description:
    "A screening matrix of medically notable bacteria, categorized by Gram stain and morphology.",
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
        <header className="sticky top-0 z-20 border-b border-border bg-surface/60 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-lg font-black text-surface">
                V
              </span>
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                VESTRIPPN<span className="text-blue">3.0</span>
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-muted sm:inline">
                Gram &amp; Morphology Grid
              </span>
              <span
                aria-hidden
                className="hidden h-5 w-px bg-border sm:inline-block"
              />
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
