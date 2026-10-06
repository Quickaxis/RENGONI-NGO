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
  metadataBase: new URL('https://rengoni.in'),
  alternates: {
    canonical: 'https://rengoni.in',
  },
  title: {
    default: "Rengoni – A Ray of Hope | NGO in Dibrugarh, Assam",
    template: "%s | Rengoni – A Ray of Hope"
  },
  description: "Rengoni – A Ray of Hope is a social welfare organization based in Dibrugarh, Assam, working through community initiatives, welfare activities, awareness, relief and support for people and communities in need.",
  openGraph: {
    title: "Rengoni – A Ray of Hope | NGO in Dibrugarh, Assam",
    description: "Rengoni – A Ray of Hope is a social welfare organization based in Dibrugarh, Assam, working through community initiatives, welfare activities, awareness, relief and support for people and communities in need.",
    siteName: "Rengoni – A Ray of Hope",
    url: "https://rengoni.in",
    type: "website",
    images: [
      {
        url: 'https://rengoni.in/logo/rengoni-logo.png',
        width: 1536,
        height: 1024,
        alt: 'Rengoni - A Ray of Hope',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rengoni – A Ray of Hope | NGO in Dibrugarh, Assam",
    description: "Rengoni – A Ray of Hope is a social welfare organization based in Dibrugarh, Assam, working through community initiatives, welfare activities, awareness, relief and support for people and communities in need.",
    images: ['https://rengoni.in/logo/rengoni-logo.png'],
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
                  "url": "https://rengoni.in/"
                },
                {
                  "@type": "Organization",
                  "name": "Rengoni – A Ray of Hope",
                  "url": "https://rengoni.in/",
                  "logo": "https://rengoni.in/logo/rengoni-logo.png",
                  "email": "rengoniarayofhope@gmail.com",
                  "telephone": "+918638242054",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "M.R. Road, Naliapool",
                    "addressLocality": "Dibrugarh",
                    "addressRegion": "Assam",
                    "postalCode": "786001",
                    "addressCountry": "IN"
                  }
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
