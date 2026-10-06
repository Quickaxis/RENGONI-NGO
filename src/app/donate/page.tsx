import { Metadata } from "next";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Support Rengoni | Make a Difference",
  description: "Support Rengoni’s social initiatives. Your contributions help us provide relief, healthcare, and education to those in need in Assam."
};

export default function DonatePage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-white">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4 block">
            SUPPORT US
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-text mb-6">
            Make a Difference Today.
          </h1>
          <p className="text-lg text-brand-text/70 leading-relaxed mb-8">
            Your contribution can help Rengoni continue its work supporting people and communities in need.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <WhatsAppCTA className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-brand-text bg-brand-orange hover:bg-black hover:text-white rounded-full transition-colors uppercase">
              WANT TO CONTRIBUTE
            </WhatsAppCTA>
            <WhatsAppCTA className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-brand-text border border-brand-text/20 hover:border-black hover:bg-black hover:text-white rounded-full transition-all uppercase">
              CONTACT US ON WHATSAPP
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </div>
  );
}
