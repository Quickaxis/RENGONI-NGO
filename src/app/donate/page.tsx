import { Metadata } from "next";
export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4 block">
              Support Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-brand-text mb-6">
              Make a Difference Today.
            </h1>
            <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
              [VERIFIED CONTENT REQUIRED] Your donation helps us continue our vital work supporting those most in need.
            </p>
            <div className="p-6 bg-brand-cream rounded-2xl border border-black/[0.02]">
              <h3 className="font-serif text-xl mb-2">Transparency</h3>
              <p className="text-sm text-brand-text/70">[VERIFIED CONTENT REQUIRED] Information about how funds are used and tax exemption details if applicable.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
             <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 text-center">
                <h2 className="font-serif text-2xl mb-2">Secure Donation</h2>
                <p className="text-sm text-brand-text/50 mb-8">[RAZORPAY INTEGRATION AREA]</p>
                <div className="w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">Payment Gateway Placeholder</span>
                </div>
                <p className="text-xs text-brand-text/40">Do not implement Razorpay yet. This area is reserved for the future integration.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
