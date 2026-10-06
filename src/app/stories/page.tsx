import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Our Story | Rengoni – A Ray of Hope",
  description: "RENGONI began approximately 10 years ago with a simple purpose: to help others."
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* 1. OUR STORY HERO */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10 border-b border-[#173F7A]/10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            HOW IT STARTED
          </span>
          <h1 className="font-serif text-[48px] md:text-6xl lg:text-[80px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-8">
            Our Story
          </h1>
          
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 text-left">
            <p className="text-xl md:text-2xl font-serif text-[#173F7A] leading-relaxed mb-6">
              RENGONI began approximately 10 years ago with a simple purpose: to help others.
            </p>
            <p className="text-lg text-[#3F3936] leading-relaxed mb-6">
              What began from a desire to serve and support people has grown into an organization working toward a broader vision of helping humans, women, underprivileged people, animals, and communities in need.
            </p>
            <p className="text-lg text-[#3F3936] leading-relaxed font-medium">
              RENGONI continues to believe that even a small act of kindness can become a ray of hope in someone's life.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REAL STORIES COMING SOON */}
      <section className="py-20 lg:py-32 container-wide relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#173F7A] uppercase leading-tight mb-6">
            Real Stories Coming Soon
          </h2>
          <p className="text-lg text-[#3F3936] leading-relaxed">
            Stories from RENGONI's work will be added here as verified accounts, photographs and details become available.
          </p>
        </div>
      </section>
      
    </div>
  );
}
