"use client";

import React from "react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";

export default function Privacy() {
  return (
    <div className="relative min-h-screen pb-20">
      <AnimatedLogoBg />

      <section className="relative pt-20 pb-16 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Legal Credentials</span>
            <h1 className="font-serif text-5xl text-[#1F2A22] tracking-tight leading-none font-semibold">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#5B665E]">Last Updated: June 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-[#1F2A22] flex flex-col gap-8 text-sm leading-relaxed">
          <p>
            At TrustHire, powered by Grevoo, we prioritize the protection and confidentiality of the background check information submitted by our clients and workers. This policy outlines how we handle data inputs, database processing, and report delivery.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            1. Information Collection
          </h3>
          <p>
            We collect names, government identity identifiers (Aadhaar, PAN), residential address details, employment histories, and reference contacts. This information is provided directly by employers or workers with explicit authorization.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            2. Data Security & Storage
          </h3>
          <p>
            All submitted details are encrypted in transit and at rest using enterprise-grade 256-bit SSL frameworks. Background database connections are restricted to authorized nodes only. We store reports securely and never rent, lease, or sell individual datasets.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            3. Consent & Indian Regulations
          </h3>
          <p>
            Under Indian digital laws and privacy declarations, workforce screenings require verified worker authorization. TrustHire guides clients to secure this consent prior to generating reports.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            4. Inquiries & Redresses
          </h3>
          <p>
            If you have questions about data records, deletions, or specific verification corrections, contact Saman Sunasara directly at <a href="mailto:samansunasara.39@gmail.com" className="text-[#C8A96B] hover:underline">samansunasara.39@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
