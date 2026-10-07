"use client";

import { useState } from "react";

export default function FounderBio() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16">
      {/* ALWAYS VISIBLE PART */}
      <div className="text-lg md:text-xl text-[#3F3936] leading-relaxed space-y-6">
        <p>
          Samim Akhtara Ali is the Founder and President of RENGONI – A RAY OF HOPE and has been involved in social and community-oriented work for more than a decade.
        </p>
        <p>
          Through her work, she has focused on helping people in need and contributing to the welfare of humans, women, underprivileged communities, and animals.
        </p>
        <p>
          Her journey reflects a commitment to compassion, resilience and service to society.
        </p>
      </div>

      {/* EXPANDABLE PART (Hidden on mobile by default, always visible on desktop) */}
      <div 
        id="founder-bio-expanded"
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } md:grid-rows-[1fr]`}
        aria-hidden={!isExpanded}
      >
        <div className="overflow-hidden">
          <div className="pt-6 text-lg md:text-xl text-[#3F3936] leading-relaxed space-y-6">
            <p>
              Her journey has not been without hardship. Having endured deep personal pain and life&apos;s harshest adversities, Samim chose courage over fear and resilience over surrender. Instead of allowing circumstances to define her, she rebuilt herself through faith, determination, and inner strength. Today, her life stands as an inspiring testimony to the power of rising above challenges. For over a decade, Samim has been actively involved in social work. She has dedicated herself to supporting the poor, blind, flood victims, orphaned children, mentally ill individuals, and abandoned animals&mdash;particularly street dogs. Her humanitarian efforts have created meaningful impact at the grassroots level in Dibrugarh and beyond.
            </p>
            <p>
              In recognition of her outstanding contributions to the social sector, she has been honoured with the Forever Star India Super Women Award 2024 in the category of Social Activist. The award was presented by Bollywood actor Rahul Dev at a grand ceremony held at Zee Studio, Jaipur, Rajasthan. She was also conferred with a Top Tier Honour. She was also honoured with the FEMINA Game Changer North East 2026 Award and the Times of India award in the Social Activist category. Samim carries forward a strong legacy of journalism, literature, and service. She is the daughter of Late Rahmat Ali, a renowned journalist and former President of Dibrugarh Press Club, General Secretary of Dibrugarh Journalists&apos; Association, and Vice President of North East Journalists&apos; Association. Her late mother, Jabin Akhtara Begum, was the Vice Principal of Victory HS Bengali Girls School, Dibrugarh, and a respected writer. Their influence continues to inspire her path of service and social responsibility.
            </p>
            <p>
              Beyond social activism, Samim is a passionate writer. Since childhood, writing has been her voice of expression. She has penned over 500 poems and is also a novelist, with a deep passion for literature and creative expression. Her poems have been appreciated by eminent Assamese literary personality Padmashree Awardee &amp; former president of Asom Sahitya Sabha, Assam, Imran Shah. Guided by the belief that &ldquo;Women must be like the sun that shines despite enduring heat,&rdquo; Samim advocates for women&apos;s empowerment and resilience. As a woman who has faced societal and personal struggles, she stands as a beacon of strength and inspiration.
            </p>
          </div>
        </div>
      </div>

      {/* READ MORE BUTTON (Mobile Only) */}
      <div className="mt-6 md:hidden">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center text-xs font-bold uppercase tracking-[0.15em] text-[#173F7A] hover:text-[#F4BA4E] transition-colors border-b-2 border-[#F4BA4E] pb-1"
          aria-expanded={isExpanded}
          aria-controls="founder-bio-expanded"
        >
          {isExpanded ? (
            <>READ LESS <span className="ml-2 font-sans">↑</span></>
          ) : (
            <>READ MORE <span className="ml-2 font-sans">→</span></>
          )}
        </button>
      </div>
    </div>
  );
}
