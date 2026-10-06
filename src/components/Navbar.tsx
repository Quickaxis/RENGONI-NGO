"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const navigation = [
  { name: 'HOME', href: '/' },
  { 
    name: 'ABOUT', 
    children: [
      { name: 'About Rengoni', href: '/about' },
      { name: 'Our Founder', href: '/samim-akhtara-ali' },
    ]
  },
  {
    name: 'OUR WORK',
    children: [
      { name: 'Our Work (Stories)', href: '/our-work' },
      { name: 'Our Areas of Work', href: '/programs' },
      { name: 'Our Impact', href: '/impact' },
    ]
  },
  {
    name: 'GET INVOLVED',
    children: [
      { name: 'Membership', href: '/membership' },
      { name: 'Volunteer', href: '/volunteer' },
      { name: 'Contact', href: '/contact' },
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const isActiveGroup = (item: { href?: string; children?: { href: string }[] }) => {
    if (item.href === pathname) return true;
    if (item.children) {
      return item.children.some((child) => child.href === pathname);
    }
    return false;
  };

  return (
    <header className="relative lg:absolute mt-6 lg:mt-0 lg:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[1400px] z-50 transition-all duration-300">
      <div 
        className="rounded-full px-6 py-3 md:px-10 md:py-4 flex items-center justify-between"
        style={{
          background: 'rgba(251, 247, 244, 0.92)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: '1px solid rgba(251, 247, 244, 0.65)',
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.06)'
        }}
      >
        
        {/* Logo */}
        <Link href="/" aria-label="Rengoni - A Ray of Hope" className="flex items-center flex-shrink-0">
          <Image src="/logo/rengoni-logo.png" alt="Rengoni - A Ray of Hope" width={240} height={80} className="h-10 lg:h-12 w-auto object-contain" priority />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigation.map((item) => {
            const active = isActiveGroup(item);
            
            return (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center ${active ? 'text-[#173F7A] border-b-2 border-[#F4BA4E] pb-1' : 'text-[#392D2D] hover:text-[#F4BA4E] pb-1 border-b-2 border-transparent'}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div 
                    className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center cursor-default ${active ? 'text-[#173F7A] border-b-2 border-[#F4BA4E] pb-1' : 'text-[#392D2D] hover:text-[#F4BA4E] pb-1 border-b-2 border-transparent'}`}
                  >
                    {item.name} <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                )}
                
                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-[#FBF7F4] border border-[#173F7A]/10 shadow-lg rounded-xl py-3 min-w-[220px] flex flex-col">
                      {item.children.map(child => (
                        <Link 
                          key={child.name}
                          href={child.href}
                          className={`px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-[#F4BA4E]/10 transition-colors ${pathname === child.href ? 'text-[#F4BA4E]' : 'text-[#392D2D]'}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <WhatsAppCTA className="hidden md:inline-flex items-center justify-center px-8 py-3 text-[11px] font-bold tracking-[0.15em] text-[#173F7A] bg-[#F4BA4E] hover:bg-[#173F7A] hover:text-[#FBF7F4] rounded-full transition-colors shadow-sm uppercase whitespace-nowrap">
            MAKE A DIFFERENCE
          </WhatsAppCTA>
          
          <button 
            className="lg:hidden p-2 text-[#173F7A] hover:text-[#F4BA4E]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[calc(100%+1rem)] left-0 w-full bg-[#FBF7F4] border border-[#173F7A]/10 shadow-2xl rounded-[2rem] p-6 flex flex-col z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-[#173F7A]/10 last:border-0 py-2">
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-[15px] font-bold tracking-widest text-[#173F7A] uppercase py-3 hover:text-[#F4BA4E] transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="text-[15px] font-bold tracking-widest text-[#173F7A] uppercase py-3 flex items-center justify-between hover:text-[#F4BA4E] transition-colors w-full text-left"
                    >
                      {item.name}
                      {openDropdown === item.name ? <ChevronUp className="w-5 h-5 text-[#F4BA4E]" /> : <ChevronDown className="w-5 h-5 opacity-50" />}
                    </button>
                    
                    {openDropdown === item.name && item.children && (
                      <div className="flex flex-col pl-4 pb-3 pt-1 space-y-4">
                        {item.children.map(child => (
                          <Link 
                            key={child.name}
                            href={child.href}
                            className="text-[13px] font-bold tracking-widest text-[#392D2D] hover:text-[#F4BA4E] uppercase transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            
            <div className="pt-6 mt-4 border-t-2 border-[#173F7A]/10">
              <WhatsAppCTA className="flex items-center justify-center w-full px-8 py-4 text-[13px] font-bold tracking-[0.15em] text-[#173F7A] bg-[#F4BA4E] hover:bg-[#173F7A] hover:text-[#FBF7F4] rounded-full transition-colors uppercase text-center shadow-md">
                MAKE A DIFFERENCE
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
