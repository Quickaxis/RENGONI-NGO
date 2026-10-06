import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rengoni – A Ray of Hope",
    template: "%s | Rengoni – A Ray of Hope"
  },
  description: "Creating meaningful change through compassion, action, and community.",
  openGraph: {
    title: "Rengoni – A Ray of Hope",
    description: "Creating meaningful change through compassion, action, and community.",
    siteName: "Rengoni – A Ray of Hope",
    type: "website",
    images: [
      {
        url: '/logo/rengoni-logo.png',
        width: 1536,
        height: 1024,
        alt: 'Rengoni - A Ray of Hope',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rengoni – A Ray of Hope",
    description: "Creating meaningful change through compassion, action, and community.",
    images: ['/logo/rengoni-logo.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Rengoni – A Ray of Hope",
                  "url": "https://rengoni.org"
                },
                {
                  "@type": "NGO",
                  "name": "Rengoni – A Ray of Hope",
                  "alternateName": "Rengoni",
                  "url": "https://rengoni.org",
                  "logo": "https://rengoni.org/logo/rengoni-logo.png"
                }
              ]
            })
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
