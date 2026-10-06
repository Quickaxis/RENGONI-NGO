import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-brand-cream">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4 block">
            People
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
            The Community Behind Rengoni
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed">
            [VERIFIED CONTENT REQUIRED] Meet the people dedicated to making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           <Link href="/samim-akhtara-ali" className="group text-center">
              <div className="w-full aspect-square bg-gray-200 rounded-full mb-6 overflow-hidden flex items-center justify-center mx-auto">
                 <span className="text-gray-400 text-sm">[IMAGE]</span>
              </div>
              <h3 className="font-serif text-xl text-brand-text group-hover:text-brand-orange transition-colors">Samim Akhtara Ali</h3>
              <span className="text-xs font-semibold tracking-widest text-brand-text/50 uppercase">[VERIFIED ROLE]</span>
           </Link>
           {/* Placeholders for other verified team members */}
           {[1, 2, 3].map(i => (
             <div key={i} className="text-center opacity-60 grayscale">
              <div className="w-full aspect-square bg-gray-200 rounded-full mb-6 flex items-center justify-center mx-auto">
                 <span className="text-gray-400 text-sm">[PLACEHOLDER]</span>
              </div>
              <h3 className="font-serif text-xl text-brand-text">[VERIFIED NAME]</h3>
              <span className="text-xs font-semibold tracking-widest text-brand-text/50 uppercase">[VERIFIED ROLE]</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
