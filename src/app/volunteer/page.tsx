import { Metadata } from "next";
import VolunteerClient from "./VolunteerClient";

export const metadata: Metadata = { 
  title: "Volunteer | Rengoni – A Ray of Hope",
  description: "Give your time to RENGONI – A RAY OF HOPE."
};

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            VOLUNTEER
          </span>
          <h1 className="font-serif text-[48px] md:text-6xl lg:text-[80px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            GIVE YOUR TIME
          </h1>
          <p className="text-lg md:text-xl text-[#3F3936] leading-relaxed">
            [VERIFIED CONTENT REQUIRED] Join our volunteer network and directly support our initiatives on the ground.
          </p>
        </div>

        <VolunteerClient />
      </div>
    </div>
  );
}
