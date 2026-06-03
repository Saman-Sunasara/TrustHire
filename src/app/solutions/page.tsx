"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fingerprint,
  MapPin,
  Briefcase,
  Users,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";

export default function Solutions() {
  const solutions = [
    {
      icon: <Fingerprint className="w-8 h-8 text-[#C8A96B]" />,
      title: "Identity Verification",
      tag: "Instant ID Check",
      desc: "Instant matching and verification of core government ID assets including Aadhaar, PAN, and Voter IDs. Protects businesses against fake documentation and synthetic identity creation.",
      features: [
        "Aadhaar OTP-based validation",
        "PAN validation via income tax API",
        "Real-time photo matching",
        "Voter ID authentication",
      ],
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#C8A96B]" />,
      title: "Address Verification",
      tag: "Location Validation",
      desc: "Robust residential confirmation using digital triangulation or physical on-site checks. Essential for factories and security operations tracking permanent addresses.",
      features: [
        "Physical site visitation reports",
        "GPS coordinate logging",
        "Digital utility bill crosscheck",
        "Neighbor interview confirmation",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#C8A96B]" />,
      title: "Employment Verification",
      tag: "Experience Check",
      desc: "Verify past employers, positions held, tenure length, and termination reasons. Minimizes resumes falsifications and ensures experience claims are genuine.",
      features: [
        "Corporate database checking",
        "Tenure and title matching",
        "Salary slip audit checks",
        "Direct HR head conversations",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-[#C8A96B]" />,
      title: "Reference Verification",
      tag: "Character Audit",
      desc: "Establish character, reliability, and past work behavior through detailed reference check questionnaires. Sourced from previous supervisors and professional colleagues.",
      features: [
        "Supervisor interview call transcripts",
        "Performance rating indicators",
        "Safety and trust questionnaires",
        "Custom metrics evaluation",
      ],
    },
    {
      icon: <HardHat className="w-8 h-8 text-[#C8A96B]" />,
      title: "Contractor Verification",
      tag: "Vendor Compliance",
      desc: "Comprehensive check workflows targeting contractor agencies and temporary workers. Ensures complete compliance with labor codes and industrial safety rules.",
      features: [
        "Sub-contractor agency audit",
        "EPF & ESIC documentation checks",
        "Bulk temporary worker screening",
        "Compliance certificate generation",
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C8A96B]" />,
      title: "Worker Verification",
      tag: "SME & Domestic Checks",
      desc: "Fast, budget-friendly checks designed for small offices, security teams, logistics agencies, and households. Brings enterprise-grade screening tools to small business owners.",
      features: [
        "Affordable ₹99 entry pricing",
        "WhatsApp-based submission",
        "Standardized basic matching",
        "Fast 24-48 hour turnaround",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background decoration */}
      <AnimatedLogoBg />

      {/* Header */}
      <section className="relative pt-20 pb-16 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Our Capabilities</span>
            <h1 className="font-serif text-5xl sm:text-7xl text-[#1F2A22] tracking-tight leading-none font-semibold">
              Verification <br />
              <span className="italic text-[#C8A96B]">Tailored for India.</span>
            </h1>
            <p className="text-[#5B665E] text-lg leading-relaxed max-w-xl">
              We leverage direct government API integrations and a national checking network to provide fast, reliable, and compliant workforce background checks.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((sol, index) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border border-[#E5E5DF] p-8 md:p-12 flex flex-col justify-between gap-10 hover:border-[#C8A96B] transition-colors"
              >
                <div className="flex flex-col gap-6">
                  {/* Top Line */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A96B] bg-[#F8F8F5] border border-[#E5E5DF] px-3 py-1">
                      {sol.tag}
                    </span>
                    <div className="w-12 h-12 bg-[#F8F8F5] border border-[#E5E5DF] flex items-center justify-center">
                      {sol.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4">
                    <h2 className="font-serif text-3xl text-[#1F2A22] font-semibold">{sol.title}</h2>
                    <p className="text-sm text-[#5B665E] leading-relaxed">{sol.desc}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-4 border-t border-[#E5E5DF] pt-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F2A22]">Included Checks</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sol.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#5B665E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
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
            <h3 className="font-serif text-3xl text-[#F8F8F5] font-semibold tracking-tight">Need a custom verification framework?</h3>
            <p className="text-[#5B665E] text-xs leading-relaxed">
              We build specialized verification flows for security agencies, construction sites, and staffing bureaus. Connect directly with our core development team.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto px-8 py-4 bg-[#C8A96B] text-[#1F2A22] text-xs font-semibold uppercase tracking-widest hover:bg-[#F8F8F5] hover:text-[#1F2A22] transition-colors text-center flex items-center justify-center gap-2"
          >
            Connect With Saman
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
