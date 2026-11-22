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
  metadataBase: new URL("https://farhan-khan28.github.io"),
  title: "Farhan Khan — Full-Stack Web Developer | React, Node.js, Laravel",
  description: "Farhan Khan is a full-stack web developer specializing in React.js, Node.js microservices, Laravel, PostgreSQL, and MySQL. Building scalable, production-ready web applications.",
  keywords: ["Farhan Khan","Full-Stack Developer","React.js Developer","Node.js Developer","Laravel Developer","PostgreSQL","MySQL","Web Application Engineer","Microservices","Pakistan"],
  authors: [{ name: "Farhan Khan" }],
  creator: "Farhan Khan",
  icons: { icon: "/Portfolio_App/favicon.ico", shortcut: "/Portfolio_App/favicon.ico" },
  openGraph: {
    title: "Farhan Khan — Full-Stack Web Developer",
    description: "React.js, Node.js microservices, Laravel, PostgreSQL & MySQL — building scalable web platforms from schema to browser.",
    type: "website",
    locale: "en_US",
    siteName: "Farhan Khan Portfolio",
    url: "https://farhan-khan28.github.io/Portfolio_App/",
    images: [{ url: "/Portfolio_App/og-image.png", width: 1200, height: 630, alt: "Farhan Khan — Full-Stack Web Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Khan — Full-Stack Web Developer",
    description: "React.js, Node.js, Laravel, PostgreSQL & MySQL — full-stack engineer.",
    images: ["/Portfolio_App/og-image.png"],
  },
  robots: { index: true, follow: true },
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
