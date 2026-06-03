import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone } from "lucide-react";

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2A22] text-[#E5E5DF] border-t border-[#1F2A22] pt-16 pb-12 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Overview */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Logo showText theme="dark" size={48} />
            <p className="text-[#5B665E] max-w-sm text-sm leading-relaxed">
              India&apos;s trusted workforce verification platform helping businesses, contractors, agencies, and SMEs verify workers before hiring. 
            </p>
            <div className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold">
              Powered by Grevoo
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F8F8F5] text-xs uppercase tracking-widest font-semibold">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/" className="text-[#5B665E] hover:text-[#C8A96B] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/solutions" className="text-[#5B665E] hover:text-[#C8A96B] transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#5B665E] hover:text-[#C8A96B] transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/industries" className="text-[#5B665E] hover:text-[#C8A96B] transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#5B665E] hover:text-[#C8A96B] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Founder & Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F8F8F5] text-xs uppercase tracking-widest font-semibold">Founder & Office</h4>
            <div className="flex flex-col gap-1 text-sm text-[#5B665E]">
              <span className="text-[#E5E5DF] font-medium">Saman Sunasara</span>
              <span>Founder, TrustHire</span>
              <span>Grevoo Ecosystem</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/grevoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#5B665E]/30 flex items-center justify-center text-[#5B665E] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/grevoo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#5B665E]/30 flex items-center justify-center text-[#5B665E] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:samansunasara.39@gmail.com"
                className="w-8 h-8 rounded-full border border-[#5B665E]/30 flex items-center justify-center text-[#5B665E] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917359224131"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#5B665E]/30 flex items-center justify-center text-[#5B665E] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5B665E]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B665E]">
          <p>© {currentYear} TrustHire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#C8A96B]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C8A96B]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
