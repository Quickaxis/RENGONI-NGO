import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Areas of Work | Rengoni – A Ray of Hope",
  description: "RENGONI's work is guided by its charitable, humanitarian and social-welfare objectives.",
};

const areasOfWork = [
  {
    title: "Child Welfare",
    focus: "Welfare, protection, education, health and development of orphaned, underprivileged, vulnerable and disadvantaged children."
  },
  {
    title: "Prevention of Child Labour",
    focus: "Awareness against child labour and support for children's education, protection, safety, health and healthy development."
  },
  {
    title: "Women's Empowerment & Rehabilitation",
    focus: "Dignity, safety, empowerment, independence and socio-economic development of women. Also support women facing financial hardship, adverse domestic/family circumstances, social vulnerability or difficult situations through appropriate guidance, counselling, awareness, livelihood assistance and opportunities for self-reliance."
  },
  {
    title: "Elderly Welfare",
    focus: "Assistance, care, support and welfare services for elderly, neglected and abandoned persons and support for old-age homes and similar charitable institutions."
  },
  {
    title: "Homeless & Socially Vulnerable Persons",
    focus: "Support for homeless, abandoned, neglected and socially vulnerable persons, including access where appropriate to shelter, food, clothing, healthcare, rehabilitation and other necessary support."
  },
  {
    title: "Mental Health & Psychosocial Vulnerability",
    focus: "Support for persons experiencing mental health or psychosocial vulnerability through appropriate humanitarian assistance, care, rehabilitation, referral and reintegration through qualified professionals and lawful institutions."
  },
  {
    title: "Animal Welfare",
    focus: "Welfare and protection of street dogs and other animals through lawful activities relating to food, rescue, veterinary treatment, vaccination, sterilisation, adoption, awareness, and responsible animal care."
  },
  {
    title: "Environmental Protection",
    focus: "Environmental protection, conservation, cleanliness, plantation, biodiversity, waste management awareness, and sustainable practices."
  },
  {
    title: "Disaster Relief & Humanitarian Assistance",
    focus: "Relief and assistance during floods, earthquakes, natural disasters, accidents, emergencies, epidemics, and other humanitarian situations, subject to applicable laws and permissions."
  },
  {
    title: "Healthcare & Awareness",
    focus: "Health camps, awareness programmes, screening programmes, and community-health initiatives in collaboration with qualified professionals, institutions, government authorities and other appropriate organisations."
  },
  {
    title: "Education & Skill Development",
    focus: "Education, vocational training, skill development, awareness, employment-oriented training, and livelihood opportunities for disadvantaged persons."
  },
  {
    title: "Fundraising & Charitable Assistance",
    focus: "Lawful fundraising programmes and receiving donations, grants, contributions and other permissible assistance for charitable objectives."
  },
  {
    title: "Collaboration",
    focus: "Collaboration with government departments, local authorities, educational institutions, hospitals, NGOs, charitable organisations, professionals, volunteers, and other lawful bodies for achieving the objects of the Society."
  },
  {
    title: "Other Charitable Activities",
    focus: "Other lawful charitable, humanitarian, social-welfare or public-benefit activities consistent with the objects of the Society."
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C]">
      
      {/* 1. HERO */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 px-6 relative border-b border-[#173F7A]/10">
        <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container-wide relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            THE SOCIETY&apos;S STATED OBJECTS
          </span>
          <h1 className="font-serif text-[40px] md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-[#173F7A] uppercase mb-8">
            Our Areas of Work
          </h1>
          <p className="text-lg md:text-xl text-[#3F3936] leading-relaxed max-w-2xl mx-auto">
            RENGONI&apos;s work is guided by its charitable, humanitarian and social-welfare objectives.
          </p>
        </div>
      </section>

      {/* 2. AREAS OF WORK LIST */}
      <section className="py-20 lg:py-32 bg-white relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasOfWork.map((area, index) => (
              <div key={index} className="bg-[#FBF7F4] rounded-[2rem] p-8 lg:p-10 border border-[#173F7A]/5 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <span className="text-[#F4BA4E] font-bold text-lg mb-4 opacity-50 block">{(index + 1).toString().padStart(2, '0')}</span>
                <h2 className="font-serif text-2xl lg:text-3xl text-[#173F7A] mb-4 leading-tight">
                  {area.title}
                </h2>
                <p className="text-[#3F3936] text-sm lg:text-base leading-relaxed mt-auto">
                  {area.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
