import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Terms of Use | Rengoni – A Ray of Hope",
  description: "Terms of Use for the RENGONI – A RAY OF HOPE website."
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4] font-sans text-[#211D1C] overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#211D1C 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="pt-40 pb-20 lg:pt-48 lg:pb-32 container-wide relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="text-[#F4BA4E] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            LEGAL
          </span>
          <h1 className="font-serif text-[48px] md:text-5xl lg:text-[64px] text-[#173F7A] uppercase leading-[1.05] tracking-tight mb-6">
            Terms of Use
          </h1>
          <p className="text-[#3F3936] text-sm uppercase tracking-widest font-bold">
            [LEGAL REVIEW / ORGANISATIONAL APPROVAL RECOMMENDED]
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#173F7A]/5">
          <div className="prose prose-lg max-w-none text-[#3F3936] prose-headings:font-serif prose-headings:text-[#173F7A] prose-headings:font-normal prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-[#F4BA4E] hover:prose-a:text-[#173F7A]">
            
            <h2 id="website-purpose">1. Website Purpose</h2>
            <p>This website is operated by RENGONI – A RAY OF HOPE for the purpose of providing information about our charitable, humanitarian, and social-welfare activities, and to facilitate engagement with supporters, volunteers, and potential members.</p>

            <h2 id="acceptable-use">2. Acceptable Use</h2>
            <p>By using this website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party.</p>

            <h2 id="intellectual-property">3. Intellectual Property</h2>
            <p>The content, layout, design, data, graphics and trademarks on this website are protected by intellectual property laws. You may not reproduce, modify, or distribute any material from this website without prior permission from RENGONI – A RAY OF HOPE.</p>

            <h2 id="external-links">4. External Links</h2>
            <p>Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites, and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>

            <h2 id="information-accuracy">5. Information Accuracy</h2>
            <p>While we endeavour to ensure that the information on this website is correct and up to date, we do not warrant its completeness or accuracy. The information is provided on an &quot;as is&quot; basis.</p>

            <h2 id="donation-disclaimer">6. Contribution Disclaimer</h2>
            <p>Any contributions coordinated through this website are voluntary to support our charitable objects.</p>

            <h2 id="membership-disclaimer">7. Membership Application Disclaimer</h2>
            <p>Submitting a membership application through this website does not guarantee acceptance. All membership applications are subject to review and approval in accordance with the Society&apos;s Constitution, Rules, and Regulations.</p>

            <h2 id="limitation-liability">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, RENGONI – A RAY OF HOPE shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of this website.</p>

            <h2 id="changes-website">9. Changes to Website and Terms</h2>
            <p>We reserve the right to modify, suspend, or discontinue any aspect of this website at any time. We may also revise these Terms of Use from time to time. By continuing to use the website after such changes are posted, you agree to be bound by the revised terms.</p>

            <h2 id="contact">10. Contact Information</h2>
            <p>If you have any questions regarding these Terms of Use, please contact us at:</p>
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
