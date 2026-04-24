import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fauzanhadi.my.id";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fauzan Hadi — Software Engineer & UI/UX Enthusiast",
    template: "%s | Fauzan Hadi",
  },
  description:
    "Portfolio Fauzan Hadi — Software Engineer & UI/UX Enthusiast yang berfokus pada membangun aplikasi web dan mobile yang estetik, cepat, dan user-friendly.",
  keywords: [
    "Fauzan Hadi",
    "Software Engineer",
    "UI/UX Designer",
    "Web Developer",
    "Next.js",
    "React",
    "Flutter",
    "Portfolio",
    "Frontend Developer",
    "Indonesia",
  ],
  authors: [{ name: "Fauzan Hadi", url: siteUrl }],
  creator: "Fauzan Hadi",
  publisher: "Fauzan Hadi",

  alternates: {
    canonical: siteUrl,
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

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Fauzan Hadi",
    title: "Fauzan Hadi — Software Engineer & UI/UX Enthusiast",
    description:
      "Portfolio Fauzan Hadi — Software Engineer & UI/UX Enthusiast yang berfokus pada membangun aplikasi web dan mobile yang estetik, cepat, dan user-friendly.",
    images: [
      {
        url: "/image/profile.png",
        width: 1200,
        height: 630,
        alt: "Fauzan Hadi — Software Engineer & UI/UX Enthusiast",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fauzan Hadi — Software Engineer & UI/UX Enthusiast",
    description:
      "Portfolio Fauzan Hadi — Software Engineer & UI/UX Enthusiast yang berfokus pada membangun aplikasi web dan mobile yang estetik, cepat, dan user-friendly.",
    images: ["/image/profile.png"],
    creator: "@fauzanhadi",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="5d6c905d-7c91-4a20-8e64-9794153b823d"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}