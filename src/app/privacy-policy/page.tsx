import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Privacy Policy | Rengoni – A Ray of Hope",
  description: "Privacy Policy for RENGONI – A RAY OF HOPE."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            LEGAL
          </span>
          <h1 className="font-serif text-[48px] md:text-5xl lg:text-[64px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#3F3936] text-sm uppercase tracking-widest font-bold">
            Last Updated: [DATE TO BE PROVIDED]
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5">
          <div className="prose prose-lg max-w-none text-[#3F3936] prose-headings:font-serif prose-headings:text-[#173F7A] prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-[#F4BA4E] hover:prose-a:text-[#173F7A]">
            
            <h2 id="introduction">1. Introduction</h2>
            <p>RENGONI – A RAY OF HOPE ("we", "our", or "us") is committed to respecting your privacy. This Privacy Policy explains how we may collect, use, and protect information when you visit our website.</p>

            <h2 id="information-collection">2. Information We May Collect</h2>
            <p>RENGONI may collect information that you voluntarily provide through forms on this website, such as your name, phone number, email address and other information required for the specific purpose of the form.</p>

            <h2 id="forms">3. Information Submitted Through Forms</h2>
            <p>When you contact us, apply for membership, or volunteer, the information you submit is used solely to respond to your inquiry and process your application.</p>

            <h2 id="donations">4. Donation Information</h2>
            <p>If you choose to donate, any information collected during that process is used to facilitate the transaction and maintain appropriate organisational records. Where third-party payment services are used, their handling of financial information may also be governed by their respective privacy policies.</p>

            <h2 id="membership">5. Membership Applications</h2>
            <p>Information submitted for membership applications will be used to review your eligibility and maintain our official register of members in accordance with our Constitution and applicable rules.</p>

            <h2 id="volunteers">6. Volunteer / Contact Enquiries</h2>
            <p>Information provided by prospective volunteers or general enquiries is used to communicate with you and coordinate relevant activities.</p>

            <h2 id="how-used">7. How Information Is Used</h2>
            <p>We may use the information we collect to communicate with you, process applications, facilitate donations, improve our website, and fulfil our charitable objectives.</p>

            <h2 id="data-sharing">8. Data Sharing</h2>
            <p>We do not sell your personal information. We may share information with trusted third-party service providers who assist us in operating our website or conducting our activities, provided they agree to keep such information confidential. We may also disclose information when required by law.</p>

            <h2 id="payment-info">9. Payment Information</h2>
            <p>Any financial information processed through our website for donations is handled securely. We rely on established third-party payment gateways for these transactions.</p>

            <h2 id="security">10. Data Security</h2>
            <p>We implement reasonable security measures to protect the information you provide. However, no method of transmission over the internet or electronic storage is completely secure.</p>

            <h2 id="cookies">11. Cookies and Analytics</h2>
            <p>Our website may use cookies and similar technologies to enhance user experience and analyse website traffic. You can choose to disable cookies through your browser settings.</p>

            <h2 id="third-party">12. Third-Party Services</h2>
            <p>Where third-party services are used on our website (such as analytics or payment processing), their handling of information may also be governed by their respective privacy policies.</p>

            <h2 id="children">13. Children's Privacy</h2>
            <p>We do not knowingly collect personal information from children without appropriate consent. If you believe we have inadvertently collected such information, please contact us.</p>

            <h2 id="retention">14. Data Retention</h2>
            <p>We retain personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy or as required by applicable laws.</p>

            <h2 id="rights">15. Your Rights</h2>
            <p>You may have certain rights regarding your personal information, such as requesting access to or deletion of the data you have provided to us. Please contact us to exercise these rights.</p>

            <h2 id="changes">16. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2 id="contact">17. Contact</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="bg-[#FBF7F4] p-6 rounded-2xl border border-[#173F7A]/10 mt-6 not-prose">
              <p className="font-bold text-[#173F7A] mb-2 uppercase tracking-widest text-sm">RENGONI – A RAY OF HOPE</p>
              <p className="text-[#3F3936] text-sm leading-relaxed">
                M.R. Road, Naliapool<br/>
                Dibrugarh, Assam – 786001<br/>
                Phone: 8638242054<br/>
                Email: [TO BE PROVIDED]
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
