import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatorKit — The AI Toolkit for YouTube Creators",
  description:
    "Stop staring at a blank page. Generate hooks, titles, scripts and more in seconds.",
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-white">
          Creator<span className="text-[#8b5cf6]">Kit</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/tools"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Tools
          </Link>
          <a
            href="https://gumroad.com/l/creatorkit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#8b5cf6] px-4 py-2 font-medium text-white transition-colors hover:bg-[#7c3aed]"
          >
            Prompt Pack ($17)
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
      CreatorKit &copy; 2026
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#0a0a0a] text-white">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
