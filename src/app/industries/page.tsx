"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  HardHat,
  ShieldAlert,
  Truck,
  ShoppingBag,
  Users2,
  Building2,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";

export default function Industries() {
  const industries = [
    {
      icon: <Factory className="w-6 h-6 text-[#C8A96B]" />,
      name: "Factories",
      desc: "Robust screening of floor workers, machine operators, and supervisors. Ensures full safety compliance, lowers work site accident liabilities, and reduces machinery tampering risks.",
      metric: "Industrial Safety",
    },
    {
      icon: <HardHat className="w-6 h-6 text-[#C8A96B]" />,
      name: "Construction",
      desc: "Instant onboarding check processes for high-turnover masonry, carpentry, and electrical laborers. Confirms native identity records and validates past safety references.",
      metric: "Labor Compliance",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#C8A96B]" />,
      name: "Security Agencies",
      desc: "Comprehensive background screening of security guards, field officers, and cash-in-transit custodians. Essential for maintaining clean criminal credentials.",
      metric: "Zero-Criminal Records",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#C8A96B]" />,
      name: "Logistics Companies",
      desc: "Fast address and driving record validation for last-mile delivery partners and heavy-vehicle drivers. Safeguards cargo integrity and ensures roadway safety.",
      metric: "Transit Reliability",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#C8A96B]" />,
      name: "Retail Businesses",
      desc: "In-store identity and character verification for cashier, sales, and warehouse inventory management staff. Curbs inventory pilferage and employee fraud.",
      metric: "Store Integrity",
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#C8A96B]" />,
      name: "Staffing Agencies",
      desc: "Enable fast, API-driven background reports to match client onboarding SLAs. Showcase verified worker profiles to command premium agency margins.",
      metric: "Rapid SLA Match",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#C8A96B]" />,
      name: "SMEs",
      desc: "Budget-friendly, digital-first verification credits for offices, boutiques, and emerging startups to screen employees with confidence without big budgets.",
      metric: "Affordable Growth",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#C8A96B]" />,
      name: "Service Businesses",
      desc: "Verify home service technicians, cleaning professionals, and consultants before customer interactions. Protects your company's consumer trust score.",
      metric: "Customer Safety",
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <AnimatedLogoBg />

      {/* Header */}
      <section className="relative pt-20 pb-16 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Tailored Industry Verticals</span>
            <h1 className="font-serif text-5xl sm:text-7xl text-[#1F2A22] tracking-tight leading-none font-semibold">
              Industries <br />
              <span className="italic text-[#C8A96B]">We Protect.</span>
            </h1>
            <p className="text-[#5B665E] text-lg leading-relaxed max-w-xl">
              Different industries face unique operational challenges. We build customized check bundles to secure your field forces, shop floors, and front offices.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-[#E5E5DF] p-8 flex flex-col justify-between gap-8 hover:border-[#C8A96B] transition-colors group"
              >
                <div className="flex flex-col gap-6">
                  {/* Top line with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#F8F8F5] border border-[#E5E5DF] flex items-center justify-center transition-colors group-hover:border-[#C8A96B] group-hover:bg-[#1F2A22]/5">
                      {ind.icon}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#C8A96B] bg-[#F8F8F5] px-2 py-0.5 border border-[#E5E5DF]">
                      {ind.metric}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-2xl text-[#1F2A22] font-semibold">{ind.name}</h3>
                    <p className="text-xs text-[#5B665E] leading-relaxed">{ind.desc}</p>
                  </div>
                </div>

                <div className="border-t border-[#E5E5DF] pt-4">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1F2A22] hover:text-[#C8A96B] transition-colors"
                  >
                    Setup Verification
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="relative z-10 px-6">
        <div className="max-w-5xl mx-auto bg-[#1F2A22] text-[#E5E5DF] p-12 md:p-16 border border-[#1F2A22] flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-4 max-w-lg">
            <h3 className="font-serif text-3xl text-[#F8F8F5] font-semibold tracking-tight">Need a custom vetting policy setup?</h3>
            <p className="text-[#5B665E] text-xs leading-relaxed">
              We help draft workforce compliance matrices matching Indian manufacturing standards, security certifications, and logistics guidelines. 
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto px-8 py-4 bg-[#C8A96B] text-[#1F2A22] text-xs font-semibold uppercase tracking-widest hover:bg-[#F8F8F5] hover:text-[#1F2A22] transition-colors text-center"
          >
            Draft With Saman
          </Link>
        </div>
      </section>
    </div>
  );
}
