import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Rengoni – Our Story",
  description: "Learn about the story and mission of Rengoni – A Ray of Hope, an NGO based in Dibrugarh, Assam dedicated to social welfare and community support."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      {/* Subtle Dot Grid Background matching reference */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 relative z-10">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-[#F4BA4E] font-bold text-xs lg:text-sm uppercase tracking-[0.2em] mb-6 block">
                ABOUT RENGONI
              </span>
              <h1 className="font-serif text-[48px] md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-[#173F7A] uppercase mb-8">
                HELPING PEOPLE, ANIMALS, AND COMMUNITIES IN NEED.
              </h1>
            </div>
            <div className="w-full lg:w-1/2 text-lg md:text-xl lg:text-2xl text-[#3F3936] leading-relaxed space-y-6">
              <p className="font-bold text-[#173F7A]">
                RENGONI – A RAY OF HOPE is a social organization dedicated to helping people, animals, and communities in need.
              </p>
              <p>
                RENGONI was started approximately 10 years ago with the purpose of helping others and creating positive change in society. Over the years, the organization has worked with the aim of supporting people from different backgrounds, particularly those who need care, assistance, dignity, and a helping hand.
              </p>
              <p>
                The organization believes that support should extend beyond one particular group. Its vision includes helping people, women, children, underprivileged communities, animals, and others in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 OUR STORY RESTORED SECTION */}
      <section className="py-20 lg:py-32 relative z-10 bg-white border-y border-[#173F7A]/5">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              HOW IT STARTED
            </span>
            <h2 className="font-serif text-[40px] md:text-5xl lg:text-[64px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-8">
              Our Story
            </h2>
            
            <div className="bg-[#FBF7F4] p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left border border-[#173F7A]/5">
              <p className="text-xl md:text-2xl font-serif text-[#173F7A] leading-relaxed mb-6">
                RENGONI began approximately 10 years ago with a simple purpose: to help others.
              </p>
              <p className="text-lg text-[#3F3936] leading-relaxed mb-6">
                What began from a desire to serve and support people has grown into an organization working toward a broader vision of helping humans, women, underprivileged people, animals, and communities in need.
              </p>
              <p className="text-lg text-[#3F3936] leading-relaxed font-medium">
                RENGONI continues to believe that even a small act of kindness can become a ray of hope in someone&apos;s life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR FOUNDER SECTION */}
      <section className="py-20 lg:py-32 relative z-10 bg-white border-y border-[#173F7A]/5">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[3/4] w-full bg-[#EAE5DF] rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center">
                 <Image
                   src="/images/samim-akhtara-ali-rengoni.jpg"
                   alt="Samim Akhtara Ali - Founder & President"
                   fill
                   className="object-cover"
                   sizes="(max-width: 1024px) 100vw, 50vw"
                 />
                 {/* Decorative wavy cut like the Our Work page */}
                 <svg className="absolute -bottom-1 left-0 w-full h-auto text-white z-20" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
                   <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                 </svg>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                OUR FOUNDER
              </span>
              <h2 className="font-serif text-[40px] md:text-5xl lg:text-[64px] text-[#173F7A] uppercase leading-[1.05] mb-4">
                Samim Akhtara Ali
              </h2>
              <p className="font-bold text-[#211D1C] tracking-widest uppercase text-sm mb-8 border-b border-[#173F7A]/10 pb-6 inline-block">
                Founder & President
              </p>
              
              <div className="text-lg text-[#3F3936] leading-relaxed space-y-6 mb-10">
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

              <blockquote className="border-l-4 border-[#F4BA4E] pl-6 py-2 mb-10">
                <p className="font-serif text-2xl text-[#173F7A] italic">
                  &quot;Her work is rooted in the belief that compassion can become a ray of hope for someone facing difficult circumstances.&quot;
                </p>
              </blockquote>

              <Link href="/samim-akhtara-ali" className="inline-flex items-center text-xs lg:text-sm font-bold uppercase tracking-[0.15em] text-[#173F7A] hover:text-[#F4BA4E] transition-colors pb-1 w-fit group">
                VIEW FOUNDER PROFILE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 lg:py-32 relative z-10 border-b border-[#173F7A]/10">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* VISION */}
            <div className="w-full lg:w-1/2">
              <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                OUR VISION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#173F7A] mb-8 leading-[1.1] uppercase">
                To build a more compassionate and supportive society.
              </h2>
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
                 <p className="text-xl lg:text-2xl font-serif text-[#211D1C] leading-relaxed mb-6">
                   To build a more compassionate and supportive society where every human being and every living being is treated with dignity, care, and respect.
                 </p>
                 <p className="text-base lg:text-lg text-[#3F3936] leading-relaxed">
                   RENGONI envisions a community where people come together to support those who are struggling and where no one is left without hope or assistance.
                 </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="w-full lg:w-1/2">
              <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                OUR MISSION
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#173F7A] mb-8 leading-[1.1] uppercase">
                To serve humanity with compassion.
              </h2>
              <div className="bg-[#173F7A] rounded-[2rem] p-8 lg:p-12 shadow-2xl text-white h-full">
                 <p className="text-lg lg:text-xl font-medium leading-relaxed mb-8">
                   Our mission is to serve humanity with compassion and to provide support to people and communities facing difficulties.
                 </p>
                 <ul className="space-y-4 text-white/90">
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">01</span> Support people in need</li>
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">02</span> Help underprivileged and vulnerable communities</li>
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">03</span> Support women and children</li>
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">04</span> Assist people during difficult circumstances</li>
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">05</span> Promote compassion and care for animals</li>
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">06</span> Participate in humanitarian and community-support activities</li>
                   <li className="flex gap-4"><span className="text-[#F4BA4E] font-bold">07</span> Create awareness and encourage people to contribute positively to society</li>
                 </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SAFEGUARDING & ZERO TOLERANCE */}
      <section className="py-20 lg:py-32 relative z-10 bg-white border-t border-[#173F7A]/5">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              ORGANIZATIONAL VALUES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#173F7A] uppercase leading-[1.1]">
              Zero Tolerance for Violence & Abuse
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FBF7F4] p-8 lg:p-10 rounded-[2rem] border border-[#211D1C]/5">
              <h3 className="font-bold text-[#173F7A] uppercase tracking-wider text-sm mb-4">Zero Tolerance</h3>
              <p className="text-[#3F3936] text-sm lg:text-base leading-relaxed mb-4">
                The Society shall maintain zero tolerance for violence, harassment, intimidation, abuse, exploitation, sexual misconduct, threats or discriminatory behaviour.
              </p>
              <p className="text-[#3F3936] text-sm lg:text-base leading-relaxed">
                Appropriate disciplinary action may be taken against any member found responsible, subject to applicable law and principles of natural justice.
              </p>
            </div>
            
            <div className="bg-[#FBF7F4] p-8 lg:p-10 rounded-[2rem] border border-[#211D1C]/5">
              <h3 className="font-bold text-[#173F7A] uppercase tracking-wider text-sm mb-4">Protection of Beneficiaries</h3>
              <p className="text-[#3F3936] text-sm lg:text-base leading-relaxed mb-4">
                Members and volunteers shall ensure that beneficiaries are treated with dignity and shall not exploit, threaten, humiliate, abuse or otherwise take undue advantage of any person receiving assistance.
              </p>
              <p className="text-[#3F3936] text-sm lg:text-base leading-relaxed">
                Special care shall be taken for children, women in vulnerable circumstances, elderly persons, homeless persons, and persons requiring additional support.
              </p>
            </div>

            <div className="bg-[#FBF7F4] p-8 lg:p-10 rounded-[2rem] border border-[#211D1C]/5">
              <h3 className="font-bold text-[#173F7A] uppercase tracking-wider text-sm mb-4">Conflict of Interest</h3>
              <p className="text-[#3F3936] text-sm lg:text-base leading-relaxed">
                Every office-bearer and member shall disclose any actual or potential conflict of interest.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
