export default function NewsEventsPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-brand-cream">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4 block">
            Updates
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
            News & Events
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 leading-relaxed">
            [VERIFIED CONTENT REQUIRED] Stay updated with our latest activities, upcoming events, and community news.
          </p>
        </div>

        <h2 className="font-serif text-3xl mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[1, 2].map(i => (
             <div key={i} className="bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-6 shadow-sm border border-black/[0.02]">
                <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <span className="text-brand-orange font-bold text-3xl">[DATE]</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-brand-text/50">[MONTH]</span>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl text-brand-text mb-3">[VERIFIED EVENT NAME]</h3>
                  <p className="text-brand-text/70 text-sm mb-4">[VERIFIED CONTENT REQUIRED] Event description placeholder.</p>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Learn More</span>
                </div>
             </div>
          ))}
        </div>

        <h2 className="font-serif text-3xl mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="group">
               <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                  <span className="text-gray-400 text-sm">[IMAGE PLACEHOLDER]</span>
               </div>
               <span className="text-brand-text/50 text-xs font-semibold tracking-wider uppercase mb-2 block">[VERIFIED DATE]</span>
               <h3 className="font-serif text-xl text-brand-text mb-3 group-hover:text-brand-orange transition-colors">[VERIFIED NEWS TITLE]</h3>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
