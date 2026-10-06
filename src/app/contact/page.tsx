import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Contact | Rengoni – A Ray of Hope",
  description: "Get in touch with RENGONI – A RAY OF HOPE."
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            RENGONI – A RAY OF HOPE
          </span>
          <h1 className="font-serif text-[48px] md:text-6xl lg:text-[80px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#3F3936] leading-relaxed max-w-2xl">
            We welcome inquiries, feedback, and collaboration opportunities. Reach out to us using the information below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3 space-y-12">
            
            <div>
              <h3 className="font-bold text-[#173F7A] text-sm uppercase tracking-widest mb-3 border-b border-[#173F7A]/10 pb-2">
                Office Address
              </h3>
              <p className="text-[#3F3936] text-base lg:text-lg leading-relaxed">
                M.R. Road, Naliapool<br/>
                Dibrugarh, Assam – 786001
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#173F7A] text-sm uppercase tracking-widest mb-3 border-b border-[#173F7A]/10 pb-2">
                Area of Operation
              </h3>
              <p className="text-[#3F3936] text-base lg:text-lg leading-relaxed">
                Initially throughout the State of Assam.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#173F7A] text-sm uppercase tracking-widest mb-3 border-b border-[#173F7A]/10 pb-2">
                Phone
              </h3>
              <p className="text-[#3F3936] text-base lg:text-lg leading-relaxed">
                8638242054
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#173F7A] text-sm uppercase tracking-widest mb-3 border-b border-[#173F7A]/10 pb-2">
                Email
              </h3>
              <p className="text-[#3F3936] text-base lg:text-lg leading-relaxed">
                rengoniarayofhope@gmail.com
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#173F7A] text-sm uppercase tracking-widest mb-3 border-b border-[#173F7A]/10 pb-2">
                Social Media
              </h3>
              <p className="text-[#3F3936] text-base lg:text-lg leading-relaxed uppercase tracking-wider text-xs">
                COMING SOON
              </p>
            </div>

          </div>
          
          <div className="w-full lg:w-2/3">
             <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5">
               <h2 className="font-serif text-3xl lg:text-4xl text-[#173F7A] mb-8 uppercase">Send a Message</h2>
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                       <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Name</label>
                       <input type="text" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Email</label>
                       <input type="email" className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">Message</label>
                     <textarea className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all min-h-[160px]"></textarea>
                  </div>
                  <button type="button" className="bg-[#173F7A] text-white font-bold tracking-[0.15em] uppercase text-sm px-10 py-5 rounded-full hover:bg-[#F4BA4E] hover:text-[#173F7A] transition-colors w-full md:w-auto shadow-md">
                    Send Message
                  </button>
               </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
