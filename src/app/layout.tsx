import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#070709",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jungudo Muhammad Tukur | Software Developer & Technology Innovator",
  description:
    "Portfolio of Jungudo Muhammad Tukur — Nigerian software developer, AI enthusiast, and technology innovator building practical solutions that solve real-world problems in Africa.",
  keywords: [
    "Jungudo Muhammad Tukur",
    "Nigeria Software Developer",
    "Software Developer Gombe",
    "AI Enthusiast Nigeria",
    "Technology Innovator Africa",
    "Computer Science Student",
    "Startup Builder",
    "AgriSense IoT",
    "ListingWriter",
    "WizzyAI",
    "PropaBridge",
    "Fullstack React Next.js",
  ],
  authors: [{ name: "Jungudo Muhammad Tukur", url: "https://github.com/hafeezmt" }],
  creator: "Jungudo Muhammad Tukur",
  metadataBase: new URL("https://jungudo-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jungudo-portfolio.vercel.app",
    siteName: "Jungudo Muhammad Tukur — Portfolio",
    title: "Jungudo Muhammad Tukur | Software Developer & Technology Innovator",
    description:
      "Building practical technology solutions that solve real-world problems. Nigerian software developer and technology innovator.",
    images: [
      {
        url: "/images/profile/jungudo-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Jungudo Muhammad Tukur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungudo Muhammad Tukur | Software Developer & Technology Innovator",
    description:
      "Building practical technology solutions that solve real-world problems. Nigerian software developer and technology innovator.",
    creator: "@Jungudotukur",
    images: ["/images/profile/jungudo-profile.jpg"],
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
  homeLocation: {
    "@type": "Place",
    name: "Gombe State, Nigeria",
  },
  sameAs: [
    "https://github.com/hafeezmt",
    "https://www.linkedin.com/in/jungudo-tukur",
    "https://dev.to/hafeezmt",
    "https://x.com/Jungudotukur",
  ],
  jobTitle: "Software Developer & Technology Innovator",
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "IoT Systems",
    "Offline-First Architecture",
    "Prompt Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#070709] text-slate-100 min-h-screen selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
