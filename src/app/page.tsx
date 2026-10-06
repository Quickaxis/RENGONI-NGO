import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rengoni – A Ray of Hope | NGO in Dibrugarh, Assam",
  description: "Rengoni – A Ray of Hope is a social welfare organization based in Dibrugarh, Assam, supporting communities through compassionate action, welfare initiatives, awareness, relief and community engagement."
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import aboutImageDesktop from "../../rengoni-about-community-dibrugarh.png";
import aboutImageMobile from "../../rengoni-hero-mobile-assam.png";
import featuredStoryDesktop from "../../rengoni-featured-story-desktop.jpg";
import featuredStoryMobile from "../../rengoni-featured-story-mobile.jpg";
import newChildrenImg from "../../rengoni-children-education-assam.png";
import newWomenImg from "../../rengoni-women-empowerment-assam.png";
import newHealthImg from "../../rengoni-health-camp-dibrugarh.png";
import OrganicEdge from "@/components/OrganicEdge";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <div className="font-sans text-[#211D1C] overflow-x-hidden bg-[#FBF7F4]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#FBF7F4] h-[100svh] min-h-[100svh] lg:h-auto lg:min-h-screen flex flex-col pt-[90px] pb-6 lg:pt-32 lg:pb-24 z-10">
        <div className="container-wide w-full relative z-10 flex-1 flex flex-col justify-start lg:justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-5 lg:gap-4 xl:gap-12 w-full mt-4 lg:mt-0">
            
            {/* Mobile Image (appears first) */}
            <div className="w-full lg:hidden relative flex items-center justify-center z-10 flex-shrink-0 mt-2 mb-4">
              <div className="relative w-[clamp(280px,85vw,400px)] flex items-center justify-center hover:scale-[1.02] transition-transform duration-700">
                <Image 
                  src="/images/hero-assam.png"
                  width={800}
                  height={600}
                  alt="Rengoni Community - Assam" 
                  className="w-full h-auto drop-shadow-2xl object-contain" 
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[45%] max-w-[540px] xl:max-w-[600px] relative z-20 mt-0 flex flex-col items-start lg:items-start text-left flex-shrink-0">
              <div className="mb-6 lg:mb-8 flex flex-col items-start w-full hidden md:flex">
                <span className="font-serif text-[1.25rem] lg:text-[1.5rem] font-medium tracking-tight text-[#211D1C] leading-none">RENGONI</span>
                <span className="font-serif text-[10px] lg:text-[11px] text-[#392D2D] tracking-widest mt-1.5 leading-none uppercase">A Ray of Hope</span>
              </div>
              <div className="mb-6 lg:mb-8 flex flex-col items-start w-full md:hidden">
                <span className="font-serif text-[1.25rem] font-medium tracking-tight text-[#211D1C] leading-none">RENGONI</span>
                <span className="font-serif text-[10px] text-[#392D2D] tracking-widest mt-1.5 leading-none uppercase">A Ray of Hope</span>
              </div>
              
              <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] text-[#211D1C] mb-6 tracking-tight">
                Hope begins<br />when we<br />stand<br />together.
              </h1>
              <p className="text-[15px] sm:text-lg lg:text-xl text-[#392D2D] mb-8 lg:mb-12 max-w-[480px] leading-relaxed mx-0 lg:mx-0">
                Creating meaningful change through compassion, action, and community.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <WhatsAppCTA className="inline-flex items-center justify-center h-[54px] lg:h-[60px] px-8 text-[13px] lg:text-[15px] font-bold tracking-[0.15em] text-[#211D1C] bg-[#F4BA4E] hover:bg-[#211D1C] hover:text-[#FBF7F4] rounded-full transition-colors uppercase shadow-md flex-shrink-0 w-full sm:w-auto">
                  MAKE A DIFFERENCE
                </WhatsAppCTA>
                <Link href="/our-work" className="inline-flex items-center justify-center h-[54px] lg:h-[60px] px-8 text-[13px] lg:text-[15px] font-bold tracking-[0.15em] text-[#211D1C] bg-transparent border border-[#211D1C]/20 hover:border-[#211D1C] rounded-full transition-colors uppercase flex-shrink-0 w-full sm:w-auto">
                  EXPLORE OUR WORK
                </Link>
              </div>
            </div>

            {/* Desktop Image (hidden on mobile) */}
            <div className="hidden lg:flex w-[55%] relative items-center justify-end z-10 flex-shrink-0">
              <div className="relative w-[clamp(500px,45vw,800px)] max-w-[100vw] flex items-center justify-center hover:scale-[1.02] transition-transform duration-700">
                <Image 
                  src="/images/hero-assam.png"
                  width={800}
                  height={600}
                  alt="Rengoni Community - Assam" 
                  className="w-full h-auto drop-shadow-2xl object-contain" 
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR STORY (REPLACES ABOUT RENGONI) */}
      <section className="relative min-h-[100svh] lg:min-h-screen flex flex-col justify-center bg-[#211D1C] overflow-hidden z-20">
        
        {/* Top Organic Edge */}
        <OrganicEdge position="top" color="#FBF7F4" />
        
        <div className="absolute inset-0 z-0 bg-[#211D1C]">
          <Image 
            src={aboutImageDesktop} 
            alt="About Rengoni" 
            fill 
            className="object-cover object-center opacity-70 hidden md:block"
            placeholder="blur"
          />
          <Image 
            src={aboutImageMobile} 
            alt="About Rengoni Mobile" 
            fill 
            className="object-cover object-center opacity-70 md:hidden"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#211D1C]/70 via-[#211D1C]/35 to-transparent"></div>
        </div>

        <div className="container-wide relative z-10 w-full py-24 lg:py-0">
           <div className="max-w-3xl">
             <div className="mb-6 md:mb-8 flex flex-col items-start drop-shadow-sm">
               <span className="text-[#F4BA4E] font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                 OUR STORY
               </span>
             </div>
             <h2 className="font-serif text-[3rem] sm:text-6xl lg:text-[clamp(3.5rem,6vw,6rem)] text-[#FBF7F4] mb-6 md:mb-8 leading-[1.05] drop-shadow-md">
               A simple purpose:<br/>to help others.
             </h2>
             <div className="text-lg md:text-xl text-[#FBF7F4]/90 leading-relaxed mb-10 md:mb-12 space-y-6 max-w-2xl drop-shadow-sm">
               <p>RENGONI began approximately 10 years ago with a simple purpose: to help others.</p>
               <p>What began from a desire to serve and support people has grown into an organization working toward a broader vision of helping humans, women, underprivileged people, animals, and communities in need.</p>
               <p className="font-serif text-2xl text-[#F4BA4E] leading-snug">&quot;Even a small act of kindness can become a ray of hope in someone&apos;s life.&quot;</p>
             </div>
             <Link href="/about" className="inline-flex items-center justify-center px-10 py-5 text-xs md:text-sm font-bold tracking-widest text-[#211D1C] bg-[#F4BA4E] hover:bg-white rounded-full transition-colors uppercase shadow-xl">
                READ OUR STORY
             </Link>
           </div>
        </div>
        
        <OrganicEdge position="bottom" color="#FBF7F4" />
      </section>

      {/* 2.5 OUR WORK CTA */}
      <section className="relative py-20 lg:py-24 bg-white z-20 border-t border-[#173F7A]/5">
        <div className="container-wide flex flex-col items-center text-center">
          <span className="text-[#F4BA4E] font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-4 block">
            OUR WORK
          </span>
          <h2 className="font-serif text-[2.5rem] sm:text-4xl lg:text-[3.5rem] text-[#173F7A] mb-6 leading-[1.05]">
            Where compassion becomes action.
          </h2>
          <p className="text-[#3F3936] text-[15px] lg:text-[17px] leading-relaxed max-w-2xl mx-auto mb-10">
            These are genuine moments from Rengoni&apos;s community work, documenting our commitment to care, dignity, and support. Explore the real impact of our volunteers and supporters across different initiatives.
          </p>
          <Link href="/our-work" className="inline-flex items-center text-xs lg:text-sm font-bold tracking-[0.15em] text-[#173F7A] uppercase border-b-2 border-[#F4BA4E] pb-1 hover:text-[#F4BA4E] transition-colors group">
            EXPLORE OUR WORK <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. OUR AREAS OF WORK */}
      <section className="relative py-16 lg:py-20 bg-[#FBF7F4]">
        <div className="container-wide">
          <div className="mb-8 lg:mb-10 border-b border-[#173F7A]/10 pb-5 lg:pb-6">
            <div className="max-w-2xl">
              <span className="text-[#173F7A] font-bold text-xs uppercase tracking-[0.12em] mb-3 block">
                OUR AREAS OF WORK
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#211D1C] mb-3 leading-tight">
                The Society&apos;s stated objects
              </h2>
              <p className="text-[#211D1C]/70 text-base lg:text-[17px] leading-relaxed">
                RENGONI&apos;s work is guided by its charitable, humanitarian and social-welfare objectives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-8 items-stretch">
            {/* Featured Area: Child Welfare */}
            <div className="bg-white rounded-[1.5rem] lg:rounded-[1.75rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col group relative">
              <div className="relative w-full aspect-video bg-[#EAE5DF] overflow-hidden shrink-0">
                <Image src={newChildrenImg} alt="Child Welfare" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500" placeholder="blur" />
              </div>
              <div className="p-7 lg:p-9 flex flex-col justify-between flex-grow bg-white relative z-10">
                <div className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-[#173F7A] flex items-center justify-center shadow-sm text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <div>
                  <span className="text-[#F4BA4E] font-bold text-[10px] uppercase tracking-[0.12em] mb-2 block">AREA OF WORK</span>
                  <h3 className="font-serif text-[1.75rem] lg:text-[2.25rem] text-[#173F7A] mb-3 leading-tight">
                    Child Welfare
                  </h3>
                  <p className="text-[#211D1C]/70 leading-relaxed max-w-lg mb-6 text-sm lg:text-[15px]">
                    Welfare, protection, education, health and development of orphaned, underprivileged, vulnerable and disadvantaged children.
                  </p>
                </div>
                <Link href="/programs" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#173F7A] group/link w-fit mt-2 hover:text-[#F4BA4E] transition-colors">
                  VIEW ALL AREAS OF WORK <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Supporting Areas */}
            <div className="flex flex-col gap-6 lg:gap-6">
              {/* Supporting Area 1: Women's Empowerment */}
              <div className="bg-white rounded-[1.5rem] lg:rounded-[1.75rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col sm:flex-row group flex-1">
                <div className="w-full sm:w-[42%] h-[220px] sm:h-auto relative overflow-hidden shrink-0 bg-[#EAE5DF]">
                  <Image src={newWomenImg} alt="Women's Empowerment" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500" placeholder="blur" />
                  <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-[#173F7A] flex items-center justify-center shadow-sm text-white z-10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                </div>
                <div className="w-full sm:w-[58%] p-6 lg:p-7 flex flex-col justify-center bg-white relative z-10">
                  <span className="text-[#F4BA4E] font-bold text-[9px] uppercase tracking-[0.12em] mb-2 block">AREA OF WORK</span>
                  <h3 className="font-serif text-[1.4rem] lg:text-[1.6rem] text-[#173F7A] mb-2 leading-tight">
                    Women&apos;s Empowerment
                  </h3>
                  <p className="text-[#211D1C]/70 text-[13px] lg:text-[14px] leading-relaxed mb-4">
                    Dignity, safety, empowerment, independence and socio-economic development of women.
                  </p>
                  <Link href="/programs" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#173F7A] hover:text-[#F4BA4E] transition-colors group/link w-fit mt-1">
                    LEARN MORE <ArrowRight className="ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Supporting Area 2: Healthcare & Awareness */}
              <div className="bg-white rounded-[1.5rem] lg:rounded-[1.75rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col sm:flex-row group flex-1">
                <div className="w-full sm:w-[42%] h-[220px] sm:h-auto relative overflow-hidden shrink-0 bg-[#EAE5DF]">
                  <Image src={newHealthImg} alt="Healthcare & Awareness" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500" placeholder="blur" />
                  <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-[#173F7A] flex items-center justify-center shadow-sm text-white z-10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                </div>
                <div className="w-full sm:w-[58%] p-6 lg:p-7 flex flex-col justify-center bg-white relative z-10">
                  <span className="text-[#F4BA4E] font-bold text-[9px] uppercase tracking-[0.12em] mb-2 block">AREA OF WORK</span>
                  <h3 className="font-serif text-[1.4rem] lg:text-[1.6rem] text-[#173F7A] mb-2 leading-tight">
                    Healthcare & Awareness
                  </h3>
                  <p className="text-[#211D1C]/70 text-[13px] lg:text-[14px] leading-relaxed mb-4">
                    Health camps, awareness programmes, and community-health initiatives.
                  </p>
                  <Link href="/programs" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#173F7A] hover:text-[#F4BA4E] transition-colors group/link w-fit mt-1">
                    LEARN MORE <ArrowRight className="ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESTORED FEATURED STORY SECTION */}
      <section className="relative min-h-[650px] lg:min-h-[750px] flex flex-col justify-center bg-[#211D1C] overflow-hidden z-20">
        
        {/* Background Images */}
        <div className="absolute inset-0 z-0 bg-[#211D1C]">
          <Image 
            src={featuredStoryDesktop} 
            alt="The Rengoni Story" 
            fill 
            className="object-cover object-center hidden md:block"
            placeholder="blur"
          />
          <Image 
            src={featuredStoryMobile} 
            alt="The Rengoni Story Mobile" 
            fill 
            className="object-cover object-center md:hidden"
            placeholder="blur"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#211D1C]/80 via-[#211D1C]/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="container-wide relative z-10 w-full py-20 lg:py-0">
           <div className="max-w-[550px] md:max-w-[600px]">
             <span className="text-[#F4BA4E] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 block drop-shadow-md">
               THE RENGONI STORY
             </span>
             <h2 className="font-serif text-[2.75rem] sm:text-5xl lg:text-[4rem] text-white mb-6 leading-[1.05] drop-shadow-lg">
               Change begins<br/>when we choose<br/>to act.
             </h2>
             <div className="text-[15px] md:text-[17px] text-white/90 leading-relaxed mb-8 md:mb-10 drop-shadow-md font-medium space-y-4">
               <p>
                 RENGONI began with a simple purpose: to help others. Over the years, that commitment has grown into a broader vision of supporting people, women, children, underprivileged communities, animals, and others who need care, dignity, and a helping hand.
               </p>
             </div>
             <Link href="/about" className="inline-flex items-center text-xs md:text-sm font-bold tracking-[0.15em] text-white uppercase border-b-2 border-[#F4BA4E] pb-1 hover:text-[#F4BA4E] transition-colors drop-shadow-md group">
                READ OUR STORY <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>
        
        {/* Golden Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] lg:h-[6px] bg-[#F4BA4E] z-20"></div>
      </section>

      {/* 5. OUR IMPACT */}
      <section className="relative py-20 lg:py-24 bg-[#EAE5DF] overflow-hidden">
        <div className="container-wide relative z-20 w-full">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-[#173F7A] font-bold text-[11px] lg:text-xs uppercase tracking-[0.2em] mb-4 block">
              OUR IMPACT
            </span>
            <h2 className="font-serif text-[40px] leading-[1.05] md:text-5xl lg:text-[64px] lg:leading-[1.1] text-[#211D1C] mb-6">
              Making a Difference
            </h2>
            <p className="text-[#3F3936] text-[15px] lg:text-[17px] leading-relaxed max-w-2xl mx-auto">
              Our work spans across multiple areas of need, bringing hope and support to those who need it most. We focus on qualitative improvements in the lives of the people and communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
            {[
              "Human Welfare",
              "Women Empowerment & Support",
              "Community Support",
              "Support for Underprivileged People",
              "Animal Welfare",
              "Humanitarian Support"
            ].map((theme, idx) => (
              <div key={idx} className="bg-[#FBF7F4] border border-[#173F7A]/10 p-6 lg:p-8 rounded-[1.5rem] flex items-center justify-center text-center hover:border-[#F4BA4E] hover:shadow-md transition-all">
                <h3 className="font-serif text-lg lg:text-xl text-[#173F7A]">{theme}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GET INVOLVED */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-[#FBF7F4] overflow-hidden border-t border-[#173F7A]/5">
        {/* Subtle Background Decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#F4BA4E]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-32 h-32 bg-[#173F7A]/5 rounded-full mix-blend-multiply blur-2xl pointer-events-none"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="text-[#F4BA4E] font-bold text-[11px] lg:text-xs uppercase tracking-[0.2em] mb-4 block">
              GET INVOLVED
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#173F7A] mb-6">
              Stay in Touch
            </h2>
            <p className="text-[#3F3936] text-[15px] sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl mx-auto">
              There are many ways to be part of Rengoni — give, volunteer, join our community, or work with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-[1200px] mx-auto">
            {/* Primary Action */}
            <WhatsAppCTA className="group flex flex-col justify-between p-8 lg:p-10 rounded-[2rem] bg-[#173F7A] text-white hover:bg-[#102F5A] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.1)] lg:scale-105 lg:z-10 relative overflow-hidden text-left">
               <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-[#F4BA4E]/20 transition-colors pointer-events-none"></div>
               <div className="relative z-10">
                 <p className="text-[10px] lg:text-[11px] text-[#F4BA4E] uppercase tracking-[0.2em] font-bold mb-4">MAKE A GIFT TODAY</p>
                 <h3 className="font-serif text-3xl lg:text-4xl mb-4 leading-tight">Donate</h3>
               </div>
               <div className="flex justify-end mt-12 lg:mt-24 relative z-10">
                 <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#F4BA4E] flex items-center justify-center transition-colors">
                   <ArrowRight className="w-5 h-5 text-white group-hover:text-[#173F7A] group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
            </WhatsAppCTA>
            
            {/* Secondary Action 1 */}
            <Link href="/membership" className="group flex flex-col justify-between p-8 lg:p-10 rounded-[2rem] bg-white border border-[#173F7A]/5 text-[#211D1C] hover:border-[#F4BA4E]/50 hover:shadow-lg transition-all duration-500">
               <div>
                 <p className="text-[10px] lg:text-[11px] text-[#173F7A]/60 uppercase tracking-[0.2em] font-bold mb-4 group-hover:text-[#F4BA4E] transition-colors">JOIN OUR COMMUNITY</p>
                 <h3 className="font-serif text-2xl lg:text-3xl mb-4 leading-tight text-[#173F7A]">Membership</h3>
               </div>
               <div className="flex justify-end mt-12 lg:mt-24">
                 <div className="w-10 h-10 rounded-full border border-transparent group-hover:bg-[#FBF7F4] flex items-center justify-center transition-colors">
                   <ArrowRight className="w-5 h-5 text-[#173F7A]/30 group-hover:text-[#F4BA4E] group-hover:translate-x-1 transition-all" />
                 </div>
               </div>
            </Link>

            {/* Secondary Action 2 */}
            <Link href="/volunteer" className="group flex flex-col justify-between p-8 lg:p-10 rounded-[2rem] bg-white border border-[#173F7A]/5 text-[#211D1C] hover:border-[#F4BA4E]/50 hover:shadow-lg transition-all duration-500">
               <div>
                 <p className="text-[10px] lg:text-[11px] text-[#173F7A]/60 uppercase tracking-[0.2em] font-bold mb-4 group-hover:text-[#F4BA4E] transition-colors">GIVE YOUR TIME</p>
                 <h3 className="font-serif text-2xl lg:text-3xl mb-4 leading-tight text-[#173F7A]">Volunteer</h3>
               </div>
               <div className="flex justify-end mt-12 lg:mt-24">
                 <div className="w-10 h-10 rounded-full border border-transparent group-hover:bg-[#FBF7F4] flex items-center justify-center transition-colors">
                   <ArrowRight className="w-5 h-5 text-[#173F7A]/30 group-hover:text-[#F4BA4E] group-hover:translate-x-1 transition-all" />
                 </div>
               </div>
            </Link>

            {/* Secondary Action 3 */}
            <Link href="/contact" className="group flex flex-col justify-between p-8 lg:p-10 rounded-[2rem] bg-white border border-[#173F7A]/5 text-[#211D1C] hover:border-[#F4BA4E]/50 hover:shadow-lg transition-all duration-500">
               <div>
                 <p className="text-[10px] lg:text-[11px] text-[#173F7A]/60 uppercase tracking-[0.2em] font-bold mb-4 group-hover:text-[#F4BA4E] transition-colors">WORK WITH US</p>
                 <h3 className="font-serif text-2xl lg:text-3xl mb-4 leading-tight text-[#173F7A]">Partner</h3>
               </div>
               <div className="flex justify-end mt-12 lg:mt-24">
                 <div className="w-10 h-10 rounded-full border border-transparent group-hover:bg-[#FBF7F4] flex items-center justify-center transition-colors">
                   <ArrowRight className="w-5 h-5 text-[#173F7A]/30 group-hover:text-[#F4BA4E] group-hover:translate-x-1 transition-all" />
                 </div>
               </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
