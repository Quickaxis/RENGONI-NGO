import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Organization Information | Rengoni – A Ray of Hope",
  description: "Official organization information and registration details for RENGONI – A RAY OF HOPE."
};

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            OFFICIAL INFORMATION
          </span>
          <h1 className="font-serif text-[48px] md:text-6xl lg:text-[72px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            RENGONI – A RAY OF HOPE
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5">
          <h2 className="font-serif text-3xl text-[#173F7A] mb-8 uppercase border-b border-[#173F7A]/10 pb-4">
            Organization Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-12">
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Organization Name</span>
              <p className="text-[#3F3936] text-lg">RENGONI – A RAY OF HOPE</p>
            </div>
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Short Name</span>
              <p className="text-[#3F3936] text-lg">RENGONI</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Nature</span>
              <p className="text-[#3F3936] text-lg">Non-profit, charitable, humanitarian and social-welfare organisation</p>
            </div>
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Registration</span>
              <p className="text-[#3F3936] text-lg">Currently in process</p>
            </div>
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Phone</span>
              <p className="text-[#3F3936] text-lg">8638242054</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Registered Office</span>
              <p className="text-[#3F3936] text-lg">M.R. Road, Naliapool, Dibrugarh, Assam – 786001</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Area of Operation</span>
              <p className="text-[#3F3936] text-lg">Initially throughout Assam</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-[#173F7A] mb-8 uppercase border-b border-[#173F7A]/10 pb-4">
            Registration Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Registration Status</span>
              <p className="text-[#3F3936] text-lg">In Process</p>
            </div>
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Registration Number</span>
              <p className="text-[#3F3936] text-lg italic text-[#3F3936]/70">To be provided after registration is completed</p>
            </div>
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Registration Date</span>
              <p className="text-[#3F3936] text-lg italic text-[#3F3936]/70">To be provided</p>
            </div>
            <div>
              <span className="text-[#173F7A]/70 text-xs font-bold tracking-widest uppercase block mb-1">Registration Authority</span>
              <p className="text-[#3F3936] text-lg italic text-[#3F3936]/70">To be provided</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
