import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "See the impact of Rengoni’s social initiatives and volunteer efforts in transforming lives across Dibrugarh, Assam."
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            HOW WE HELP
          </span>
          <h1 className="font-serif text-[48px] md:text-6xl lg:text-[80px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            Our Impact
          </h1>
          <p className="text-lg md:text-xl text-[#3F3936] leading-relaxed max-w-2xl mx-auto">
            Our qualitative impact statements are based on the organization&apos;s core objectives to create meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col h-full">
            <h2 className="font-serif text-3xl text-[#173F7A] mb-4 uppercase">People</h2>
            <p className="text-[#3F3936] text-lg leading-relaxed flex-1">
              Supporting people facing hardship and vulnerability.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col h-full">
            <h2 className="font-serif text-3xl text-[#173F7A] mb-4 uppercase">Women</h2>
            <p className="text-[#3F3936] text-lg leading-relaxed flex-1">
              Working toward dignity, safety and empowerment.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col h-full">
            <h2 className="font-serif text-3xl text-[#173F7A] mb-4 uppercase">Children</h2>
            <p className="text-[#3F3936] text-lg leading-relaxed flex-1">
              Supporting welfare, education, protection and development.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col h-full lg:col-span-1 lg:col-start-1">
            <h2 className="font-serif text-3xl text-[#173F7A] mb-4 uppercase">Animals</h2>
            <p className="text-[#3F3936] text-lg leading-relaxed flex-1">
              Promoting welfare and responsible care.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5 flex flex-col h-full lg:col-span-2">
            <h2 className="font-serif text-3xl text-[#173F7A] mb-4 uppercase">Communities</h2>
            <p className="text-[#3F3936] text-lg leading-relaxed flex-1">
              Encouraging compassion, awareness and collective support.
            </p>
          </div>

        </div>

        <div className="text-center bg-[#EAE5DF] rounded-[2rem] p-8 max-w-3xl mx-auto border border-[#173F7A]/5">
          <p className="text-[#3F3936] text-sm uppercase tracking-widest">
            Specific impact figures will be published as verified records become available.
          </p>
        </div>

      </div>
    </div>
  );
}
