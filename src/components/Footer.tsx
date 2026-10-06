import Link from "next/link";
import Image from "next/image";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Footer() {
  return (
    <footer className="bg-[#F4BA4E] border-t border-[#173F7A]/10 pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col">
            <Link href="/" aria-label="Rengoni - A Ray of Hope" className="flex flex-col mb-4 items-start group">
              <Image src="/logo/rengoni-logo.png" alt="Rengoni - A Ray of Hope" width={240} height={80} className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-[#3F3936] text-sm leading-relaxed mb-6">
              Helping people, animals and communities in need.
            </p>
            <div className="text-[#3F3936] text-xs leading-relaxed space-y-2 uppercase tracking-widest opacity-80">
              <p>M.R. Road, Naliapool<br/>Dibrugarh, Assam – 786001</p>
              <p>8638242054</p>
              <p className="mt-4 pt-4 border-t border-[#211D1C]/10 w-fit">Registration: Currently in process</p>
            </div>
          </div>
          
          {/* Column 2: EXPLORE */}
          <div>
            <h4 className="font-bold text-[#211D1C] uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">About Rengoni</Link></li>
              <li><Link href="/programs" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Our Work</Link></li>
              <li><Link href="/stories" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Our Story</Link></li>
            </ul>
          </div>
          
          {/* Column 3: GET INVOLVED */}
          <div>
            <h4 className="font-bold text-[#211D1C] uppercase tracking-widest text-xs mb-6">Get Involved</h4>
            <ul className="space-y-4">
              <li><Link href="/membership" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Membership</Link></li>
              <li><Link href="/volunteer" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Volunteer</Link></li>
              <li><WhatsAppCTA className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Make a Difference</WhatsAppCTA></li>
            </ul>
          </div>

          {/* Column 4: ABOUT / OFFICIAL */}
          <div>
            <h4 className="font-bold text-[#211D1C] uppercase tracking-widest text-xs mb-6">About & Official</h4>
            <ul className="space-y-4">
              <li><Link href="/samim-akhtara-ali" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Our Founder</Link></li>
              <li><Link href="/contact" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-[#3F3936] hover:text-[#211D1C] text-sm uppercase tracking-wider transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-[#211D1C]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-[#3F3936]">
          <p>© {new Date().getFullYear()} RENGONI – A RAY OF HOPE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
