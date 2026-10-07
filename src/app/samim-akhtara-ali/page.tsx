import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import FounderBio from "@/components/FounderBio";

export const metadata: Metadata = {
  title: "Samim Akhtara Ali",
  description: "Learn about Samim Akhtara Ali and her association with Rengoni – A Ray of Hope as a social activist in Dibrugarh, Assam."
};

export default function SamimAkhtaraAliPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Samim Akhtara Ali",
      "url": "https://rengoni.in/samim-akhtara-ali",
      "jobTitle": "Founder & President",
      "worksFor": {
        "@type": "Organization",
        "name": "Rengoni – A Ray of Hope"
      },
      "description": "Samim Akhtara Ali is the Founder and President of RENGONI – A RAY OF HOPE and has been involved in social and community-oriented work for more than a decade."
    }
  };

  return (
    <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C]">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_1fr] gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16 items-start">
          
          {/* IMAGE (Left Column Top) */}
          <div className="w-full lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 order-1">
             <div className="w-full aspect-[3/4] bg-[#EAE5DF] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl relative">
                <Image
                  src="/images/samim-akhtara-ali-rengoni.jpg"
                  alt="Samim Akhtara Ali - Founder & President"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
                {/* Wavy bottom cut like the other pages */}
                <svg className="absolute -bottom-1 left-0 w-full h-auto text-white z-20" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
                  <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
             </div>
          </div>

          {/* BIO CONTENT (Right Column) */}
          <div className="w-full lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 order-2">
            <Link href="/" className="text-xs font-bold tracking-[0.15em] text-[#F4BA4E] uppercase mb-6 inline-block hover:text-[#173F7A] transition-colors">
              ← BACK TO HOME
            </Link>
            
            <h1 className="font-serif text-[40px] md:text-5xl lg:text-[64px] text-[#173F7A] uppercase leading-[1.05] mb-6">
              Samim Akhtara Ali
            </h1>
            
            <div className="mb-12 border-l-2 border-[#F4BA4E] pl-6">
              <h2 className="font-bold text-[#211D1C] tracking-widest uppercase text-sm block mb-1">
                Founder & President
              </h2>
              <span className="text-[#3F3936] text-sm uppercase tracking-widest">
                RENGONI – A RAY OF HOPE
              </span>
            </div>

            <FounderBio />
          </div>

          {/* AWARDS & RECOGNITION (Left Column Bottom) */}
          <div className="w-full lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 order-3">
            <div className="bg-white rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#173F7A]/5">
              <h2 className="font-serif text-[2.25rem] lg:text-[2.75rem] text-[#173F7A] mb-10 leading-[1.05]">
                Awards & Recognition
              </h2>
              <ul className="flex flex-col gap-8">
                {[
                  "Forever Star India Award",
                  "Super Woman Award 2024",
                  "Top TIER award",
                  "FEMINA Game Changer North East 2026 Award",
                  "Times of India award 2026",
                  "Byatikram Outstanding Contribution To Social Empowerment Award 2026 at the Byatikram Women Conclave 5.0"
                ].map((award, idx) => (
                  <li key={idx} className="flex flex-col gap-1.5 border-b border-[#173F7A]/5 pb-8 last:border-0 last:pb-0 group">
                    <span className="font-bold text-[#F4BA4E] text-sm tracking-[0.2em]">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="text-[17px] lg:text-[19px] text-[#211D1C] leading-relaxed font-medium group-hover:text-[#173F7A] transition-colors">
                      {award}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
