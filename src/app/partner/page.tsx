import { Metadata } from "next";
export const metadata: Metadata = { title: "Partner With Us" };

export default function PartnerPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-brand-cream">
      <div className="container-wide max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4 block">
            Partner
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
            Partner With Us
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed max-w-2xl mx-auto">
            [VERIFIED CONTENT REQUIRED] We collaborate with organizations, businesses, and community groups to maximize our impact.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02]">
           <h2 className="font-serif text-2xl mb-6">Partnership Enquiry</h2>
           <p className="text-sm text-brand-text/70 mb-8">
             [VERIFIED CONTENT REQUIRED] Please fill out this form to explore collaboration opportunities. We do not invent existing partners.
           </p>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Organization Name</label>
                   <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Contact Person</label>
                   <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange" />
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Email</label>
                   <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Phone</label>
                   <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange" />
                 </div>
              </div>
              <div>
                 <label className="block text-xs font-bold tracking-widest uppercase text-brand-text/50 mb-2">Proposal / Area of Interest</label>
                 <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange h-32"></textarea>
              </div>
              <button type="button" className="w-full bg-brand-text text-white font-bold tracking-widest uppercase text-sm py-4 rounded-xl hover:bg-brand-orange transition-colors">
                Send Enquiry
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
