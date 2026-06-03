"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, Landmark } from "lucide-react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";
import ContactForm from "@/components/ContactForm";

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

function ContactPageContent() {
  const searchParams = useSearchParams();
  const industryParam = searchParams.get("industry") || "";

  return (
    <div className="relative min-h-screen pb-20">
      <AnimatedLogoBg />

      {/* Header */}
      <section className="relative pt-20 pb-16 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Direct Access</span>
            <h1 className="font-serif text-5xl sm:text-7xl text-[#1F2A22] tracking-tight leading-none font-semibold">
              Begin a <br />
              <span className="italic text-[#C8A96B]">Relationship.</span>
            </h1>
            <p className="text-[#5B665E] text-lg leading-relaxed max-w-xl">
              Connect with our founder or send your requirements. We typically establish your verification accounts in under 4 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Grid containing details and form */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Company Credentials</span>
                <h3 className="font-serif text-3xl text-[#1F2A22] font-semibold">TrustHire by Grevoo</h3>
                <p className="text-xs text-[#5B665E] leading-relaxed">
                  TrustHire operates under the parent company Grevoo, delivering premium digital and physical verification infrastructure.
                </p>
              </div>

              {/* Grid of contact credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {/* Founder */}
                <div className="bg-white border border-[#E5E5DF] p-6 flex flex-col gap-4">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#C8A96B]">Founder</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1F2A22]">Saman Sunasara</span>
                    <span className="text-xs text-[#5B665E]">Grevoo Ecosystem Founder</span>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:samansunasara.39@gmail.com"
                  className="bg-white border border-[#E5E5DF] p-6 flex flex-col gap-4 hover:border-[#C8A96B] transition-colors group"
                >
                  <div className="flex items-center justify-between text-[#C8A96B]">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#C8A96B]">Email Contact</span>
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#1F2A22] group-hover:text-[#C8A96B] transition-colors break-all">
                    samansunasara.39@gmail.com
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917359224131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#E5E5DF] p-6 flex flex-col gap-4 hover:border-[#C8A96B] transition-colors group"
                >
                  <div className="flex items-center justify-between text-[#C8A96B]">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#C8A96B]">WhatsApp Hotline</span>
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#1F2A22] group-hover:text-[#C8A96B] transition-colors">
                    +91 7359224131
                  </span>
                </a>
              </div>

              {/* Socials card */}
              <div className="bg-white border border-[#E5E5DF] p-6 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#5B665E]">Social Identity</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/saman-sunasara-59072228b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#E5E5DF] flex items-center justify-center text-[#5B665E] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/_sxmann._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#E5E5DF] flex items-center justify-center text-[#5B665E] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F5]">
        <div className="font-serif text-lg text-[#5B665E] animate-pulse">Loading Contact Form...</div>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
