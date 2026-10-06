import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { 
  title: "Samim Akhtara Ali – Founder & President of RENGONI",
  description: "Samim Akhtara Ali is the Founder and President of RENGONI – A RAY OF HOPE and has been involved in social and community-oriented work for more than a decade."
};

export default function SamimAkhtaraAliPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samim Akhtara Ali",
    "jobTitle": "Founder & President",
    "worksFor": {
      "@type": "Organization",
      "name": "RENGONI – A RAY OF HOPE"
    },
    "description": "Samim Akhtara Ali is the Founder and President of RENGONI – A RAY OF HOPE and has been involved in social and community-oriented work for more than a decade."
  };

  return (
    <div className="pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C]">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: PHOTOGRAPH */}
          <div className="w-full lg:w-[40%]">
             <div className="w-full aspect-[3/4] bg-[#EAE5DF] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl relative">
                <Image
                  src="/images/founderimage.jpg"
                  alt="Samim Akhtara Ali - Founder & President"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Wavy bottom cut like the other pages */}
                <svg className="absolute -bottom-1 left-0 w-full h-auto text-white z-20" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
                  <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
             </div>
          </div>
          
          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-[60%]">
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

            <div className="text-lg md:text-xl text-[#3F3936] leading-relaxed space-y-6 mb-16 max-w-3xl">
              <p>
                Samim Akhtara Ali is the Founder and President of RENGONI – A RAY OF HOPE and has been involved in social and community-oriented work for more than a decade.
              </p>
              <p>
                Through her work, she has focused on helping people in need and contributing to the welfare of humans, women, underprivileged communities, and animals.
              </p>
              <p>
                Her journey reflects a commitment to compassion, resilience and service to society.
              </p>
            </div>

            {/* AWARDS & RECOGNITION */}
            <div className="bg-white rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#173F7A]/5 mt-4">
              <h2 className="font-serif text-[2.5rem] lg:text-[3rem] text-[#173F7A] mb-12 leading-[1.05]">
                Awards & Recognition
              </h2>
              <ul className="flex flex-col gap-8 lg:gap-10">
                {[
                  "Forever Star India Award",
                  "Super Woman Award 2024",
                  "Top TIER award",
                  "FEMINA Game Changer North East 2026 Award",
                  "Times of India award 2026",
                  "Byatikram Outstanding Contribution To Social Empowerment Award 2026 at the Byatikram Women Conclave 5.0",
                  "Byatikram Life Time Achievement Award For Excellence In The Field Education at the guru gaurav samman 2026"
                ].map((award, idx) => (
                  <li key={idx} className="flex items-start gap-6 lg:gap-8 border-b border-[#173F7A]/5 pb-8 lg:pb-10 last:border-0 last:pb-0 group">
                    <span className="font-bold text-[#F4BA4E] text-sm lg:text-base tracking-[0.2em] pt-1 shrink-0">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="text-lg lg:text-xl text-[#211D1C] leading-relaxed font-medium group-hover:text-[#173F7A] transition-colors">
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
