import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Member",
  description: "Become a member of Rengoni – A Ray of Hope and actively participate in driving positive social change in Dibrugarh, Assam."
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            JOIN RENGONI
          </span>
          <h1 className="font-serif text-[48px] md:text-6xl lg:text-[80px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            Become a Member
          </h1>
          <p className="text-lg md:text-xl text-[#3F3936] leading-relaxed">
            Membership of the Society may be granted to individuals who support and agree to abide by the aims, objects, values and Rules and Regulations of the Society.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Member Responsibilities */}
          <div className="w-full lg:w-1/3 space-y-8">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#173F7A] mb-8 uppercase">Responsibilities</h2>
            <div className="bg-[#EAE5DF] rounded-[2rem] p-8 border border-[#173F7A]/5">
              <p className="font-bold text-[#173F7A] uppercase tracking-widest text-sm mb-6 pb-4 border-b border-[#173F7A]/10">
                Every member shall:
              </p>
              <ul className="space-y-4 text-[#3F3936] text-sm lg:text-base leading-relaxed">
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Act honestly and responsibly.</li>
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Respect beneficiaries, volunteers and fellow members.</li>
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Follow the Constitution, Rules and Regulations and lawful decisions of the Society.</li>
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Maintain the dignity and reputation of the Society.</li>
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Avoid misuse of the Society&apos;s name, funds, property or resources.</li>
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Maintain confidentiality concerning sensitive organisational and beneficiary information.</li>
                <li className="flex gap-3"><span className="text-[#F4BA4E] font-bold">•</span> Refrain from conduct that may harm the Society or its beneficiaries.</li>
              </ul>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="w-full lg:w-2/3">
             <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5">
               <h2 className="font-serif text-3xl lg:text-4xl text-[#173F7A] mb-8 uppercase">Membership Application</h2>
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                       <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Full Name</label>
                       <input type="text" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Mobile Number</label>
                       <input type="tel" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                     </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                       <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Email</label>
                       <input type="email" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">City / Location</label>
                       <input type="text" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Profession / Occupation</label>
                     <input type="text" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                  </div>
                  <div>
                     <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Areas where you would like to contribute</label>
                     <textarea className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all min-h-[100px]"></textarea>
                  </div>
                  <div>
                     <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Why would you like to join RENGONI?</label>
                     <textarea className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all min-h-[120px]"></textarea>
                  </div>
                  
                  <div className="pt-4 border-t border-[#173F7A]/10">
                    <p className="text-xs text-[#3F3936]/80 italic mb-6">
                      * Membership applications are subject to the Society&apos;s applicable rules and requirements.
                    </p>
                    <button type="button" className="bg-[#173F7A] text-white font-bold tracking-[0.15em] uppercase text-sm px-10 py-5 rounded-full hover:bg-[#F4BA4E] hover:text-[#173F7A] transition-colors w-full md:w-auto shadow-md">
                      Submit Application
                    </button>
                  </div>
               </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
