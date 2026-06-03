"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Verification",
      price: "₹99",
      period: "per worker check",
      desc: "Essential identity checks for individual hires, house staff, or retail workers.",
      features: [
        "Aadhaar Identity Check",
        "PAN Identity Check",
        "Basic Verification Report (PDF)",
        "Standard 48-Hour Turnaround",
      ],
      ctaText: "Order Basic Check",
      popular: false,
      waText: "Hello Saman, I want to order the Basic Verification check (₹99 per worker).",
    },
    {
      name: "Professional Verification",
      price: "₹299",
      period: "per worker check",
      desc: "Robust screening ideal for offices, security agencies, and delivery fleets.",
      features: [
        "Identity Verification (Aadhaar & PAN)",
        "Address Verification (Digital Check)",
        "Reference Check (1 Past Employer)",
        "Comprehensive PDF Report",
        "3-Day Turnaround Time",
      ],
      ctaText: "Order Professional Check",
      popular: false,
      waText: "Hello Saman, I want to order the Professional Verification check (₹299 per worker).",
    },
    {
      name: "Business Verification",
      price: "₹999",
      period: "per worker check",
      desc: "Full comprehensive screening for critical hires, corporate staff, and executives.",
      features: [
        "Complete Background Check",
        "Identity & Address Verification",
        "Employment Check (Last 2 Employers)",
        "Reference Check (2 Professional References)",
        "Priority Support & Processing",
        "2-Day Expedited Turnaround",
      ],
      ctaText: "Order Business Check",
      popular: true,
      waText: "Hello Saman, I want to order the Business Verification check (₹999 per worker).",
    },
    {
      name: "Enterprise Solutions",
      price: "Custom",
      period: "bulk volume volume",
      desc: "Specialized packages and API access for factories, staffing bureaus, and contractors.",
      features: [
        "Custom Background Workflows",
        "Automated CSV Bulk Uploads",
        "Developer API Access",
        "Dedicated Account Representative",
        "Physical Field Audits",
        "SLA Guarantee (Under 24 Hours)",
      ],
      ctaText: "Contact Sales",
      popular: false,
      waText: "Hello Saman, I am interested in Enterprise Custom verification solutions for our organization.",
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <AnimatedLogoBg />

      {/* Header */}
      <section className="relative pt-20 pb-16 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Clear Value</span>
            <h1 className="font-serif text-5xl sm:text-7xl text-[#1F2A22] tracking-tight leading-none font-semibold">
              Simple, <br />
              <span className="italic text-[#C8A96B]">Transparent Pricing.</span>
            </h1>
            <p className="text-[#5B665E] text-lg leading-relaxed max-w-xl">
              Select a screening tier that aligns with your hiring volume. No setup fees, no hidden margins. 
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {plans.map((plan, index) => {
              const waLink = `https://wa.me/917359224131?text=${encodeURIComponent(plan.waText)}`;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`bg-white border p-8 flex flex-col justify-between relative transition-all ${
                    plan.popular
                      ? "border-[#C8A96B] shadow-md ring-1 ring-[#C8A96B]"
                      : "border-[#E5E5DF] hover:border-[#C8A96B]/50"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C8A96B] text-[#1F2A22] text-[9px] uppercase tracking-widest font-bold px-3 py-1">
                      Recommended
                    </span>
                  )}

                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-widest font-semibold text-[#5B665E]">
                        {plan.name}
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-2">
                        <span className="font-serif text-4xl sm:text-5xl text-[#1F2A22] font-semibold">
                          {plan.price}
                        </span>
                        <span className="text-xs text-[#5B665E]">/ {plan.period}</span>
                      </div>
                      <p className="text-xs text-[#5B665E] leading-relaxed mt-2">{plan.desc}</p>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#E5E5DF]" />

                    {/* Features list */}
                    <ul className="flex flex-col gap-4 text-xs">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-[#5B665E]">
                          <Check className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full mt-10 py-3.5 text-xs font-semibold uppercase tracking-widest text-center transition-all ${
                      plan.popular
                        ? "bg-[#1F2A22] text-[#F8F8F5] hover:bg-[#C8A96B] hover:text-[#1F2A22]"
                        : "border border-[#1F2A22] text-[#1F2A22] hover:bg-[#1F2A22] hover:text-[#F8F8F5]"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Footnote FAQ Callout */}
      <section className="relative z-10 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-[#E5E5DF] p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1F2A22]/5 flex items-center justify-center border border-[#C8A96B]/50 flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-[#C8A96B]" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-serif text-lg text-[#1F2A22] font-semibold">Have questions about bulk enterprise onboarding?</h4>
              <p className="text-xs text-[#5B665E]">We offer flexible options for seasonal hiring and deep API integration queries.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1F2A22] hover:text-[#C8A96B] transition-colors"
          >
            Ask Questions
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
