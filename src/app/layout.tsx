import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jungudo Muhammad Tukur | AI, Data & Technology",
  description:
    "Portfolio of Jungudo Muhammad Tukur — Statistics student, AI and data enthusiast, software developer, UI/UX learner, geospatial technology practitioner, and young technology innovator from Nigeria.",
  keywords: [
    "Jungudo Muhammad Tukur",
    "Nigeria",
    "AI",
    "Data Science",
    "Statistics",
    "Software Developer",
    "Portfolio",
    "Gombe",
    "Technology",
  ],
  authors: [{ name: "Jungudo Muhammad Tukur" }],
  creator: "Jungudo Muhammad Tukur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jungudomuhammadtukur.vercel.app",
    siteName: "Jungudo Muhammad Tukur",
    title: "Jungudo Muhammad Tukur | AI, Data & Technology",
    description:
      "Statistics student, AI and data enthusiast, software developer, UI/UX learner, and technology innovator from Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungudo Muhammad Tukur | AI, Data & Technology",
    description:
      "Statistics student, AI and data enthusiast, software developer, and technology innovator from Nigeria.",
    creator: "@Jungudotukur",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#050505] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
