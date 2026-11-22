import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#08090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://farhan-khan28.github.io"),
  title: {
    default: "Farhan Khan — Senior Full-Stack Web Developer | React, Node.js, Laravel",
    template: "%s | Farhan Khan",
  },
  description:
    "Farhan Khan is a Senior Full-Stack Web Developer specializing in React.js, high-throughput Node.js microservices, robust Laravel systems, and PostgreSQL & MySQL databases. Explore production case studies and architecture.",
  keywords: [
    "Farhan Khan",
    "Farhan Khan Developer",
    "Senior Full-Stack Developer",
    "Full-Stack Web Developer",
    "React.js Developer",
    "Node.js Developer",
    "Node.js Microservices",
    "Laravel Developer",
    "PHP Web Developer",
    "PostgreSQL Database Architect",
    "MySQL Query Optimization",
    "WebSockets Real-Time Engineer",
    "REST API Architecture",
    "Enterprise Software Solutions",
    "Portfolio Web Developer",
  ],
  authors: [{ name: "Farhan Khan", url: "https://farhan-khan28.github.io/Portfolio_App/" }],
  creator: "Farhan Khan",
  publisher: "Farhan Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://farhan-khan28.github.io/Portfolio_App/",
  },
  icons: {
    icon: [
      { url: "/Portfolio_App/favicon.ico", sizes: "any" },
      { url: "/Portfolio_App/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/Portfolio_App/favicon.ico",
    apple: "/Portfolio_App/favicon.svg",
  },
  openGraph: {
    title: "Farhan Khan — Senior Full-Stack Web Developer",
    description:
      "Engineering scalable web applications with React.js, Node.js microservices, Laravel MVC, and PostgreSQL/MySQL relational engines.",
    type: "profile",
    firstName: "Farhan",
    lastName: "Khan",
    username: "Farhan-Khan28",
    gender: "male",
    locale: "en_US",
    siteName: "Farhan Khan — Portfolio",
    url: "https://farhan-khan28.github.io/Portfolio_App/",
    images: [
      {
        url: "/Portfolio_App/og-image.png",
        width: 1200,
        height: 630,
        alt: "Farhan Khan — Senior Full-Stack Web Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Khan — Senior Full-Stack Web Developer",
    description:
      "React.js, Node.js microservices, Laravel, PostgreSQL & MySQL — building complete web platforms from schema to browser.",
    images: ["/Portfolio_App/og-image.png"],
    creator: "@FarhanKhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://farhan-khan28.github.io/Portfolio_App/#person",
      "name": "Farhan Khan",
      "jobTitle": "Senior Full-Stack Web Developer",
      "url": "https://farhan-khan28.github.io/Portfolio_App/",
      "image": "https://farhan-khan28.github.io/Portfolio_App/og-image.png",
      "sameAs": [
        "https://github.com/Farhan-Khan28",
        "https://www.linkedin.com/in/farhankhan"
      ],
      "knowsAbout": [
        "React.js",
        "Node.js",
        "Laravel",
        "PHP",
        "PostgreSQL",
        "MySQL",
        "Microservices Architecture",
        "WebSockets",
        "REST APIs",
        "Full-Stack Web Development",
        "Database Architecture"
      ],
      "description":
        "Senior Full-Stack Web Developer specializing in React.js client interfaces, distributed Node.js microservices, Laravel backend platforms, and PostgreSQL & MySQL databases."
    },
    {
      "@type": "WebSite",
      "@id": "https://farhan-khan28.github.io/Portfolio_App/#website",
      "url": "https://farhan-khan28.github.io/Portfolio_App/",
      "name": "Farhan Khan — Senior Full-Stack Web Developer",
      "description":
        "Official engineering portfolio of Farhan Khan featuring production systems, live application deployments, and backend architecture.",
      "publisher": {
        "@id": "https://farhan-khan28.github.io/Portfolio_App/#person"
      }
    }
  ]
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
      <head>
        <link rel="canonical" href="https://farhan-khan28.github.io/Portfolio_App/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
