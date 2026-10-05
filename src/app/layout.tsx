import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farhan Khan — Senior Full-Stack Web Developer",
  description: "Farhan Khan designs and builds complete, production-ready web applications across frontend, backend (Laravel/PHP), databases (MySQL), APIs, authentication, and architecture.",
  keywords: [
    "Farhan Khan",
    "Full-Stack Web Developer",
    "Laravel Developer",
    "PHP Developer",
    "MySQL Database Architect",
    "REST API Architecture",
    "Web Application Engineer",
  ],
  authors: [{ name: "Farhan Khan" }],
  creator: "Farhan Khan",
  openGraph: {
    title: "Farhan Khan — Senior Full-Stack Web Developer",
    description: "Building scalable, secure and user-focused web applications from schema to browser engine.",
    type: "website",
    locale: "en_US",
    siteName: "Farhan Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Khan — Senior Full-Stack Web Developer",
    description: "Building scalable, secure and user-focused web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
