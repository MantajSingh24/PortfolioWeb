import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mantajdata.dev - Mantaj Singh | Data Analytics & Software Developer",
  description: "Data Analytics & Software Student based in Canada. Seeking co-op positions.",
  keywords: ["Mantaj Singh", "Data Analytics", "Software Developer", "Portfolio", "Data Science", "Machine Learning", "AI"],
  authors: [{ name: "Mantaj Singh" }],
  creator: "Mantaj Singh",
  openGraph: {
    title: "Mantajdata.dev - Mantaj Singh | Data Analytics & Software Developer",
    description: "Data Analytics & Software Student based in Canada. Seeking co-op positions.",
    url: "https://tajdata.co",
    siteName: "Mantajdata.dev",
    images: [
      {
        url: "/Logo website.png",
        width: 1200,
        height: 630,
        alt: "Mantaj Singh - Data Analytics & Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantajdata.dev - Mantaj Singh | Data Analytics & Software Developer",
    description: "Data Analytics & Software Student based in Canada. Seeking co-op positions.",
    images: ["/Logo website.png"],
  },
  icons: {
    icon: [
      { url: "/Logo website.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo website.png", sizes: "64x64", type: "image/png" },
      { url: "/Logo website.png", sizes: "96x96", type: "image/png" },
      { url: "/Logo website.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/Logo website.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/Logo website.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://tajdata.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mantaj Singh",
    "url": "https://tajdata.co",
    "image": "https://tajdata.co/Logo website.png",
    "jobTitle": "Data Analytics & Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Mantajdata.dev",
      "logo": "https://tajdata.co/Logo website.png"
    },
    "sameAs": [
      "https://www.linkedin.com/in/mantaj-s-9448a7271",
      "https://github.com/MantajSingh24"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProviderWrapper>
          <Navbar />
          <main className="relative min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
