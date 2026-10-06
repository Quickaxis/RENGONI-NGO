import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Metadata } from "next";
export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolvedPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-brand-cream">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4 block">
            Take Action
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
            Get Involved
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed">
            [VERIFIED CONTENT REQUIRED] Your support makes our work possible. Discover ways to join our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link href="/donate" className="group bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] flex flex-col items-start hover:-translate-y-1 transition-transform">
             <h2 className="font-serif text-3xl text-brand-text mb-4">Donate</h2>
             <p className="text-brand-text/70 mb-8 flex-grow">[VERIFIED CONTENT REQUIRED] Make a direct impact through financial support.</p>
             <span className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-widest text-white bg-brand-orange group-hover:bg-black rounded-full transition-colors uppercase">Make a Difference</span>
          </Link>

          <Link href="/membership" className="group bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] flex flex-col items-start hover:-translate-y-1 transition-transform">
             <h2 className="font-serif text-3xl text-brand-text mb-4">Become a Member</h2>
             <p className="text-brand-text/70 mb-8 flex-grow">[VERIFIED CONTENT REQUIRED] Join our community of dedicated supporters.</p>
             <span className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-widest text-brand-text border border-brand-text/20 group-hover:border-black group-hover:bg-black group-hover:text-white rounded-full transition-all uppercase">Join Rengoni</span>
          </Link>

          <Link href="/volunteer" className="group bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] flex flex-col items-start hover:-translate-y-1 transition-transform">
             <h2 className="font-serif text-3xl text-brand-text mb-4">Volunteer</h2>
             <p className="text-brand-text/70 mb-8 flex-grow">[VERIFIED CONTENT REQUIRED] Give your time and skills to our programs.</p>
             <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-brand-text group-hover:text-brand-orange transition-colors uppercase">Volunteer With Us <ArrowRight className="w-4 h-4"/></span>
          </Link>

          <Link href="/partner" className="group bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] flex flex-col items-start hover:-translate-y-1 transition-transform">
             <h2 className="font-serif text-3xl text-brand-text mb-4">Partner With Us</h2>
             <p className="text-brand-text/70 mb-8 flex-grow">[VERIFIED CONTENT REQUIRED] Collaborate for greater community impact.</p>
             <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-brand-text group-hover:text-brand-orange transition-colors uppercase">Partner <ArrowRight className="w-4 h-4"/></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
