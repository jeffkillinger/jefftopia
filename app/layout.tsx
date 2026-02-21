import type { Metadata } from "next";
import { SiteLayout } from "@/app/components/site-layout";
import "./globals.css";

const siteTitle = "Jeff Killinger | Software Engineer";
const siteDescription =
  "Senior software engineering portfolio focused on frontend architecture, API integration, cloud delivery, and production systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jefftopia.dev"),
  title: {
    default: siteTitle,
    template: "%s | Jeff Killinger",
  },
  description: siteDescription,
  applicationName: "Jefftopia",
  keywords: [
    "Jeff Killinger",
    "Software Engineer",
    "Frontend Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
    "University of Chicago",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "https://jefftopia.dev",
    siteName: "Jefftopia",
    images: [
      {
        url: "/og/jefftopia-og.svg",
        width: 1200,
        height: 630,
        alt: "Jeff Killinger software engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og/jefftopia-og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-stone-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
