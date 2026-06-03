"use client";

import React from "react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";

export default function Terms() {
  return (
    <div className="relative min-h-screen pb-20">
      <AnimatedLogoBg />

      <section className="relative pt-20 pb-16 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Legal Credentials</span>
            <h1 className="font-serif text-5xl text-[#1F2A22] tracking-tight leading-none font-semibold">
              Terms of Service
            </h1>
            <p className="text-xs text-[#5B665E]">Last Updated: June 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-[#1F2A22] flex flex-col gap-8 text-sm leading-relaxed">
          <p>
            Welcome to TrustHire, powered by Grevoo. By accessing our services, submitting worker details, or ordering background checking credits, you agree to comply with the following operational terms.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            1. Permitted Use of Service
          </h3>
          <p>
            TrustHire offers employment background screenings for genuine workforce verification. Clients must not use our service for stalking, unsolicited checks, or unauthorized personal investigation.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            2. Accuracy of Submitted Data
          </h3>
          <p>
            Clients are responsible for ensuring that Aadhaar, PAN, and address records uploaded are correct. Falsifying or uploading incorrect documents deliberately may lead to termination of verification credentials.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            3. Disclaimer of Liability
          </h3>
          <p>
            TrustHire cross-references public, government, and institutional records to report findings. We are not responsible for delays, errors in official registries, or decisions made by hiring managers based on background findings.
          </p>

          <h3 className="font-serif text-xl font-semibold border-b border-[#E5E5DF] pb-2 mt-4 text-[#1F2A22]">
            4. Service Delivery & Payments
          </h3>
          <p>
            All verification payments (credit packs or bulk SLAs) are non-refundable once the database checks have been initiated. Report files are delivered digitally in PDF format.
          </p>
        </div>
      </section>
    </div>
  );
}
