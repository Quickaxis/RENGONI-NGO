"use client";

import { useState } from "react";

// [VERIFIED CONTENT REQUIRED: Replace with actual official Rengoni WhatsApp number]
const RENGONI_WHATSAPP_NUMBER = "";

export default function VolunteerClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    cityLocation: "",
    professionOccupation: "",
    areasToContribute: "",
    whyVolunteer: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile Number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.areasToContribute.trim()) newErrors.areasToContribute = "This field is required";
    if (!formData.whyVolunteer.trim()) newErrors.whyVolunteer = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello Rengoni,

I would like to apply as a volunteer.

VOLUNTEER APPLICATION

Full Name: ${formData.fullName}
Mobile Number: ${formData.mobileNumber}
Email: ${formData.email}
City / Location: ${formData.cityLocation || "N/A"}
Profession / Occupation: ${formData.professionOccupation || "N/A"}

Areas Where I Would Like to Contribute:
${formData.areasToContribute}

Why I Would Like to Volunteer With Rengoni:
${formData.whyVolunteer}

Thank you.`;

    const encodedMessage = encodeURIComponent(message);

    if (RENGONI_WHATSAPP_NUMBER) {
      window.open(`https://wa.me/${RENGONI_WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    } else {
      window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
    }

    setSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
      {/* Volunteer Responsibilities */}
      <div className="w-full lg:w-1/3 space-y-8">
        <h2 className="font-serif text-3xl lg:text-4xl text-[#173F7A] mb-8 uppercase">Responsibilities</h2>
        <div className="bg-[#EAE5DF] rounded-[2rem] p-8 border border-[#173F7A]/5">
          <p className="font-bold text-[#173F7A] uppercase tracking-widest text-sm mb-6 pb-4 border-b border-[#173F7A]/10">
            EVERY VOLUNTEER SHOULD:
          </p>
          <ul className="space-y-4 text-[#3F3936] text-sm lg:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Participate sincerely in NGO programmes, campaigns, and community activities.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Treat every individual with respect, dignity, and compassion.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Work responsibly with the REGONI team and follow the instructions of coordinators.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Maintain discipline, honesty, and professionalism while representing the organisation.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Help spread awareness about REGONI's initiatives and encourage positive community participation.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Protect the privacy and dignity of beneficiaries, especially children and vulnerable individuals.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Inform the team in advance if unable to attend an assigned activity.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Volunteers must not misuse the name, identity, logo, or reputation of REGONI – A Ray of Hope for any personal, commercial, political, or unauthorized purpose.
            </li>
            <li className="flex gap-3">
              <span className="text-[#F4BA4E] font-bold">•</span> Uphold the values and reputation of REGONI – A Ray of Hope at all times.
            </li>
          </ul>
        </div>
      </div>

      {/* Application Form */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#173F7A] mb-8 uppercase">Volunteer Application</h2>
          
          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl">
              Your application message has been prepared in WhatsApp.
            </div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-[#FBF7F4] border ${errors.fullName ? "border-red-500" : "border-[#173F7A]/10"} rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={`w-full bg-[#FBF7F4] border ${errors.mobileNumber ? "border-red-500" : "border-[#173F7A]/10"} rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all`}
                />
                {errors.mobileNumber && <p className="text-red-500 text-xs mt-2">{errors.mobileNumber}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#FBF7F4] border ${errors.email ? "border-red-500" : "border-[#173F7A]/10"} rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                  City / Location
                </label>
                <input
                  type="text"
                  name="cityLocation"
                  value={formData.cityLocation}
                  onChange={handleChange}
                  className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                Profession / Occupation
              </label>
              <input
                type="text"
                name="professionOccupation"
                value={formData.professionOccupation}
                onChange={handleChange}
                className="w-full bg-[#FBF7F4] border border-[#173F7A]/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                Areas where you would like to contribute
              </label>
              <textarea
                name="areasToContribute"
                value={formData.areasToContribute}
                onChange={handleChange}
                className={`w-full bg-[#FBF7F4] border ${errors.areasToContribute ? "border-red-500" : "border-[#173F7A]/10"} rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all min-h-[100px]`}
              ></textarea>
              {errors.areasToContribute && <p className="text-red-500 text-xs mt-2">{errors.areasToContribute}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#173F7A]/70 mb-3">
                Why would you like to volunteer with RENGONI?
              </label>
              <textarea
                name="whyVolunteer"
                value={formData.whyVolunteer}
                onChange={handleChange}
                className={`w-full bg-[#FBF7F4] border ${errors.whyVolunteer ? "border-red-500" : "border-[#173F7A]/10"} rounded-xl px-5 py-4 focus:outline-none focus:border-[#F4BA4E] focus:ring-1 focus:ring-[#F4BA4E] transition-all min-h-[120px]`}
              ></textarea>
              {errors.whyVolunteer && <p className="text-red-500 text-xs mt-2">{errors.whyVolunteer}</p>}
            </div>

            <div className="pt-4 border-t border-[#173F7A]/10">
              <button
                type="submit"
                className="bg-[#173F7A] text-white font-bold tracking-[0.15em] uppercase text-sm px-10 py-5 rounded-full hover:bg-[#F4BA4E] hover:text-[#173F7A] transition-colors w-full md:w-auto shadow-md"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
