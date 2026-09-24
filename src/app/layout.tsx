import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jungudo Muhammad Tukur | UI/UX Designer & Product Lead",
  description:
    "Portfolio of Jungudo Muhammad Tukur — UI/UX Designer, Product Manager, Computer Science & Statistics student, and Tech Entrepreneur from Nigeria.",
  keywords: [
    "Jungudo Muhammad Tukur",
    "Nigeria",
    "UI/UX Designer",
    "Product Manager",
    "Tech Entrepreneur",
    "Software Developer",
    "Computer Science",
    "WizzyAI",
    "PropaBridge",
    "AgriSense IoT",
    "Gombe State",
  ],
  authors: [{ name: "Jungudo Muhammad Tukur" }],
  creator: "Jungudo Muhammad Tukur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jungudo-portfolio.vercel.app",
    siteName: "Jungudo Muhammad Tukur Portfolio",
    title: "Jungudo Muhammad Tukur | UI/UX Designer & Product Lead",
    description:
      "Entrepreneurial UI/UX designer and product lead building AI-powered digital products for African communities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungudo Muhammad Tukur | UI/UX Designer & Product Lead",
    description:
      "Entrepreneurial UI/UX designer and product lead building AI-powered digital products for African communities.",
    creator: "@Jungudotukur",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jungudo Muhammad Tukur",
  url: "https://jungudo-portfolio.vercel.app",
  sameAs: [
    "https://github.com/hafeezmt",
    "https://www.linkedin.com/in/jungudo-tukur",
    "https://x.com/Jungudotukur",
  ],
  jobTitle: "UI/UX Designer & Product Lead",
  worksFor: [
    {
      "@type": "Organization",
      name: "WizzyAI",
    },
    {
      "@type": "Organization",
      name: "PropaBridge",
    },
    {
      "@type": "Organization",
      name: "AgriSense IoT",
    },
  ],
  knowsAbout: [
    "UI/UX Design",
    "Product Management",
    "React",
    "Next.js",
    "AI Product Development",
    "IoT Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#070709] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
