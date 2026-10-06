import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import flood1 from "../../../flood1.png";
import flood2 from "../../../flood2.png";
import gurudwara1 from "../../../gurudwaraimg1.png";
import gurudwara2 from "../../../gurudwaraimg2.png";
import oldagehome1 from "../../../oldagehome1.png";
import oldagehome2 from "../../../oldagehome2.png";
import orphanage1 from "../../../orphanage1.png";
import orphanage2 from "../../../orphanage2.png";
import cancerpatients1 from "../../../cancerpatients1.png";
import cancerpatients2 from "../../../cancerpatients2.png";
import mentallyill1 from "../../../mentalliill.png";
import mentallyill2 from "../../../mentallyill2.png";
import dogs1 from "../../../dogs1.png";
import dogs2 from "../../../dogs2.png";

export const metadata: Metadata = {
  title: "Our Work | Rengoni",
  description: "Explore the real impact of our volunteers and supporters across different initiatives.",
};

const ourWorkStories = [
  {
    category: "FLOOD RELIEF",
    title: "Supporting communities affected by flooding.",
    description: "Providing essential relief materials and humanitarian assistance to communities and families affected by severe flooding.",
    img1: flood1,
    img2: flood2,
  },
  {
    category: "COMMUNITY & GURUDWARA",
    title: "Community service and support activities.",
    description: "Volunteers gathered to assist in the preparation and distribution of food at Baishakhi Gurudwara, supporting the community through service and shared meals.",
    img1: gurudwara1,
    img2: gurudwara2,
  },
  {
    category: "CARE FOR THE ELDERLY",
    title: "Visits and support at old age homes.",
    description: "Visiting and spending quality time with elderly residents, offering companionship, empathy, and necessary support.",
    img1: oldagehome1,
    img2: oldagehome2,
  },
  {
    category: "CHILDREN & ORPHANAGE SUPPORT",
    title: "Activities supporting children and vulnerable communities.",
    description: "Celebrating the vibrant festival of Bihu with children at a local orphanage, bringing moments of joy, warmth, and togetherness.",
    img1: orphanage1,
    img2: orphanage2,
  },
  {
    category: "HEALTHCARE SUPPORT",
    title: "Food, fruit and other appropriate support for patients in need.",
    description: "Nutritious food and fresh fruits were distributed to support cancer patients with care and compassion during difficult times.",
    img1: cancerpatients1,
    img2: cancerpatients2,
  },
  {
    category: "MENTAL HEALTH & VULNERABLE PEOPLE",
    title: "Support and care for vulnerable people.",
    description: "Providing care, assistance, and support to homeless individuals facing mental health challenges, ensuring they are treated with humanity and dignity.",
    img1: mentallyill1,
    img2: mentallyill2,
  },
  {
    category: "ANIMAL WELFARE",
    title: "Support for animals in need.",
    description: "Ensuring street dogs receive food and care, promoting compassion and welfare for animals in our neighborhoods.",
    img1: dogs1,
    img2: dogs2,
  }
];

export default function OurWorkPage() {
  return (
    <div className="font-sans text-[#211D1C] overflow-x-hidden bg-[#FBF7F4]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative overflow-hidden bg-[#FBF7F4]">
        <div className="container-wide relative z-10 flex flex-col items-center text-center max-w-4xl">
          <span className="text-[#F4BA4E] font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-6 block border border-[#F4BA4E]/20 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
            OUR WORK
          </span>
          <h1 className="font-serif text-[44px] md:text-6xl lg:text-[80px] leading-[1.05] text-[#173F7A] mb-8">
            Where compassion becomes action.
          </h1>
          <p className="text-[#3F3936] text-[16px] lg:text-[20px] leading-relaxed max-w-3xl">
            These are genuine moments from Rengoni&apos;s community work, documenting our commitment to care, dignity, and support.
          </p>
        </div>
      </section>

      {/* 2. VISUAL STORYTELLING FEED */}
      <section className="relative py-16 lg:py-24 bg-[#FBF7F4] z-20">
        <div className="container-wide relative z-10">
          <div className="flex flex-col gap-32 lg:gap-40">
            {ourWorkStories.map((story, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Left/Right Images Area */}
                  <div className="w-full lg:w-1/2 relative">
                     {/* Abstract Background Elements (No blue rays/green) */}
                     {isEven ? (
                       <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F4BA4E]/10 rounded-full blur-3xl -z-10 hidden lg:block"></div>
                     ) : (
                       <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#3F3936]/5 rounded-full blur-3xl -z-10 hidden lg:block"></div>
                     )}
                     
                     <div className={`w-full ${idx % 3 === 0 ? 'aspect-square' : 'aspect-[4/5]'} relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]`}>
                        <Image src={story.img1} alt={story.title} fill className="object-cover" placeholder="blur" />
                     </div>
                     
                     {/* Overlapping secondary image (Desktop only for editorial layout) */}
                     <div className={`absolute ${isEven ? '-bottom-10 -right-10' : '-bottom-10 -left-10'} w-[55%] aspect-square rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] border-[8px] border-[#FBF7F4] hidden md:block z-20 hover:scale-[1.02] transition-transform duration-500`}>
                        <Image src={story.img2} alt={`${story.title} Secondary Image`} fill className="object-cover" placeholder="blur" />
                     </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className={`w-full lg:w-1/2 pt-6 lg:pt-0 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                     <span className="text-[#6B705C] font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-4 block">
                       {story.category}
                     </span>
                     <h2 className="font-serif text-[2.25rem] sm:text-4xl lg:text-[3.5rem] text-[#211D1C] mb-6 leading-[1.05]">
                       {story.title}
                     </h2>
                     <p className="text-[#3F3936] text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-lg">
                       {story.description}
                     </p>
                     <Link href="#" className="inline-flex items-center text-xs lg:text-sm font-bold tracking-[0.15em] text-[#211D1C] uppercase border-b-2 border-[#F4BA4E] pb-1 hover:text-[#F4BA4E] transition-colors group">
                       VIEW STORY <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* 3. DONATION CTA */}
      <section className="bg-white py-24 lg:py-32 relative border-t border-[#173F7A]/5">
        <div className="container-wide relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-[40px] md:text-5xl lg:text-[64px] leading-[1.05] text-[#173F7A] mb-8">
            Help Make the Next Story Possible.
          </h2>
          <p className="text-[#3F3936] text-[17px] md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl">
            Every act of support can become a moment of hope. Your support can help Rengoni continue reaching people and communities who need care, support and solidarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/donate" className="inline-flex items-center justify-center px-10 py-5 text-xs sm:text-sm font-bold tracking-[0.15em] text-white bg-[#173F7A] hover:bg-[#F4BA4E] hover:text-[#173F7A] rounded-full transition-colors uppercase w-full sm:w-auto shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
              DONATE NOW <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
