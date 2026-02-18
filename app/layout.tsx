import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jefftopia",
  description: "A clean playground for weird projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-ink antialiased">
        <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-base font-semibold tracking-tight">
              Jefftopia
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-5 py-8">{children}</main>
      </body>
    </html>
  );
}
