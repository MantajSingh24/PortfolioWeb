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
  icons: {
    icon: [
      { url: "/Logo website.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo website.png", sizes: "64x64", type: "image/png" },
      { url: "/Logo website.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/Logo website.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/Logo website.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
