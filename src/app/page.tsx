"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  DollarSign,
  Building,
  ArrowRight,
  Fingerprint,
  MapPin,
  Briefcase,
  Users,
  HardHat,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import AnimatedLogoBg from "@/components/AnimatedLogoBg";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: <Fingerprint className="w-6 h-6 text-[#C8A96B]" />,
      title: "Identity Verification",
      description: "Verify Aadhaar, PAN, and government-issued IDs instantly for official identity validation.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#C8A96B]" />,
      title: "Address Verification",
      description: "Perform physical or digital residence checks to verify current and permanent addresses.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#C8A96B]" />,
      title: "Employment Verification",
      description: "Validate past work history, duration of employment, and references to assure clean records.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#C8A96B]" />,
      title: "Reference Verification",
      description: "Conduct direct background discussions with professional and personal references.",
    },
    {
      icon: <HardHat className="w-6 h-6 text-[#C8A96B]" />,
      title: "Contractor Verification",
      description: "Ensure full compliance checks for temporary contractors and agency workers before onboarding.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C8A96B]" />,
      title: "Worker Verification",
      description: "Affordable, customized background screenings designed for small-to-medium enterprises and agencies.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Submit Worker Details",
      desc: "Provide basic information, ID numbers, or photos of your workers via our secure client portal or WhatsApp.",
    },
    {
      num: "02",
      title: "Verification Process",
      desc: "Our automated cross-referencing algorithms and verification experts instantly run government database checks.",
    },
    {
      num: "03",
      title: "Generate Report",
      desc: "Receive a clean, investor-grade PDF background report containing verified matches and safety indicators.",
    },
    {
      num: "04",
      title: "Hire With Confidence",
      desc: "Integrate verified workers into your factory floor, office, security network, or client jobs securely.",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Workers Verified" },
    { value: "1,200+", label: "Businesses Served" },
    { value: "100k+", label: "Reports Delivered" },
    { value: "99.9%", label: "Verification Accuracy" },
  ];

  const testimonials = [
    {
      quote: "TrustHire completely changed how we onboard workers in our textile unit. With Aadhaar and local address checks completed in less than 24 hours, our security standard has never been higher.",
      author: "Rajesh Mehta",
      role: "Factory Owner, Gujarat",
    },
    {
      quote: "As a contractor, maintaining the trust of our corporate clients is vital. Providing them with official TrustHire background reports gives us an immediate edge in securing premium contracts.",
      author: "Sanjay D&apos;Souza",
      role: "Contractor, Mumbai",
    },
    {
      quote: "Before TrustHire, verifying blue-collar workers was slow and expensive. Their SME-focused plans let us run quick, digital identity matches that are easy on our budget and incredibly fast.",
      author: "Aanya Sharma",
      role: "HR Manager, Bengaluru",
    },
    {
      quote: "Managing a workforce of 400+ security staff requires robust checks. TrustHire helps us verify past employment and reference details with zero hassle. Excellent service and support.",
      author: "Vikram Rathore",
      role: "Security Agency Owner, Delhi NCR",
    },
  ];

  const faqs = [
    {
      q: "How long does the verification process take?",
      a: "Our digital identity verification (Aadhaar, PAN) takes only a few minutes. Address and past employment checks are typically completed in 2 to 5 business days, depending on locations and response times.",
    },
    {
      q: "How accurate are TrustHire reports?",
      a: "TrustHire achieves a 99.9% accuracy rate. We cross-reference information directly with government databases, academic institutions, and physical checkers to guarantee absolute reliability.",
    },
    {
      q: "What are the pricing models? Do you support pay-as-you-go?",
      a: "Yes! We offer pay-as-you-go verification credits for SMEs, starting at just ₹99 per report. For larger agencies and contractors, we offer customized bulk packages and subscription plans.",
    },
    {
      q: "How is my business and worker data secured?",
      a: "Data security is our top priority. We use 256-bit encryption for all records and comply strictly with Indian privacy frameworks. Worker data is never shared with third parties without consent.",
    },
    {
      q: "Do you support bulk orders for seasonal hiring?",
      a: "Absolutely. We provide dedicated CSV upload templates and API integrations for factories, logistics hubs, and staffing agencies to verify hundreds of workers concurrently.",
    },
    {
      q: "How will I receive the verification reports?",
      a: "Completed reports are shared securely via our online dashboard, sent directly to your registered email in PDF format, or updated instantly in your WhatsApp chat thread.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 border-b border-[#E5E5DF] overflow-hidden">
        <AnimatedLogoBg />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start gap-8">
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="flex items-center gap-2 border border-[#E5E5DF] px-3.5 py-1 bg-white/50 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F2A22]">
                  India&apos;s Verification Infrastructure
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1F2A22] leading-[1.05]"
              >
                Hire With <br />
                <span className="italic text-[#C8A96B]">Confidence.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#5B665E] text-lg sm:text-xl max-w-xl leading-relaxed"
              >
                Verify workers, employees, and contractors before hiring. Fast, affordable, and trusted verification built for Indian businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-[#1F2A22] text-[#F8F8F5] text-xs font-semibold uppercase tracking-widest text-center transition-all duration-300 hover:bg-[#C8A96B] hover:text-[#1F2A22]"
                >
                  Verify A Worker
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-[#1F2A22] text-[#1F2A22] text-xs font-semibold uppercase tracking-widest text-center transition-all duration-300 hover:bg-[#1F2A22] hover:text-[#F8F8F5]"
                >
                  Book A Demo
                </Link>
              </motion.div>
            </div>

            {/* Quick Metrics Badge Card for Visual Balance */}
            <div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white border border-[#E5E5DF] p-8 shadow-sm flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-[#1F2A22]/5 flex items-center justify-center border border-[#C8A96B]/50">
                  <ShieldCheck className="w-6 h-6 text-[#C8A96B]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#5B665E]">Tagline</span>
                  <p className="font-serif text-2xl text-[#1F2A22] font-semibold leading-snug">
                    Verify Before You Hire.
                  </p>
                </div>
                <div className="border-t border-[#E5E5DF] pt-4 flex justify-between items-center text-xs text-[#5B665E]">
                  <span>Trusted Workers</span>
                  <span>Safer Businesses</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-white border-b border-[#E5E5DF] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2 border-l border-[#E5E5DF] pl-6">
              <div className="flex items-center gap-3 text-[#C8A96B]">
                <Zap className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#1F2A22]">Fast Verification</span>
              </div>
              <p className="text-xs text-[#5B665E]">Identity checks in minutes, background reports within days.</p>
            </div>
            <div className="flex flex-col gap-2 border-l border-[#E5E5DF] pl-6">
              <div className="flex items-center gap-3 text-[#C8A96B]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#1F2A22]">Secure Reports</span>
              </div>
              <p className="text-xs text-[#5B665E]">Full encrypted records matching government databases.</p>
            </div>
            <div className="flex flex-col gap-2 border-l border-[#E5E5DF] pl-6">
              <div className="flex items-center gap-3 text-[#C8A96B]">
                <DollarSign className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#1F2A22]">Affordable Pricing</span>
              </div>
              <p className="text-xs text-[#5B665E]">Cost-effective verification models starting at just ₹99.</p>
            </div>
            <div className="flex flex-col gap-2 border-l border-[#E5E5DF] pl-6">
              <div className="flex items-center gap-3 text-[#C8A96B]">
                <Building className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#1F2A22]">SME Focused</span>
              </div>
              <p className="text-xs text-[#5B665E]">Engineered specifically for small business owners and agencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Our Offerings</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1F2A22] font-semibold tracking-tight">
                Comprehensive Verification Services
              </h2>
            </div>
            <Link
              href="/solutions"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1F2A22] hover:text-[#C8A96B] transition-colors"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeInUp}
                className="bg-white border border-[#E5E5DF] p-8 transition-all duration-300 hover:shadow-md hover:border-[#C8A96B]/50 flex flex-col gap-6 group"
              >
                <div className="w-12 h-12 bg-[#F8F8F5] border border-[#E5E5DF] flex items-center justify-center transition-colors group-hover:border-[#C8A96B] group-hover:bg-[#1F2A22]/5">
                  {svc.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl text-[#1F2A22] font-semibold">{svc.title}</h3>
                  <p className="text-sm text-[#5B665E] leading-relaxed">{svc.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-xl flex flex-col gap-4 mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">The Process</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1F2A22] font-semibold tracking-tight">
              Streamlined Onboarding, Instant Results
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex flex-col gap-6 relative group">
                {/* Step number and connection line */}
                <div className="flex items-center gap-4">
                  <span className="font-serif text-5xl text-[#C8A96B]/30 group-hover:text-[#C8A96B] transition-colors font-medium">
                    {step.num}
                  </span>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-6 left-[20%] w-full h-[1px] bg-[#E5E5DF]" />
                  )}
                </div>

                <div className="flex flex-col gap-2 z-10">
                  <h3 className="font-serif text-lg text-[#1F2A22] font-bold">{step.title}</h3>
                  <p className="text-xs text-[#5B665E] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#1F2A22] text-[#E5E5DF] py-20 border-b border-[#1F2A22] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="font-serif text-4xl sm:text-6xl text-[#C8A96B] font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#5B665E]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 border-b border-[#E5E5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-xl flex flex-col gap-4 mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Success Stories</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1F2A22] font-semibold tracking-tight">
              Trusted by Leading Indian Proprietors
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E5DF] p-8 md:p-10 flex flex-col justify-between gap-8 hover:border-[#C8A96B]/50 transition-colors"
              >
                <p className="text-sm md:text-base text-[#1F2A22] italic font-serif leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex flex-col gap-1 border-t border-[#E5E5DF] pt-4">
                  <span className="text-sm font-semibold text-[#1F2A22]">{t.author}</span>
                  <span className="text-xs text-[#5B665E] uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 border-b border-[#E5E5DF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Frequently Asked Questions</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2A22] font-semibold tracking-tight">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#E5E5DF] pb-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-4 text-left font-serif text-lg text-[#1F2A22] hover:text-[#C8A96B] font-semibold transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C8A96B]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#5B665E]" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-[#5B665E] leading-relaxed pb-4 pt-1">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form / CTA Contact Section */}
      <section id="contact" className="py-24 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-8 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C8A96B]">Connect With Us</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1F2A22] font-semibold tracking-tight leading-tight">
                Secure Your Workforce Integrity Today
              </h2>
              <p className="text-[#5B665E] text-sm md:text-base leading-relaxed">
                Contact our customer support team to discuss custom integrations, bulk verification pricing, or automated worker checking capabilities. 
              </p>

              <div className="flex flex-col gap-6 mt-4 text-sm text-[#1F2A22]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#E5E5DF] flex items-center justify-center bg-white text-[#C8A96B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-[#5B665E]">Verified Infrastructure</span>
                    <span className="font-semibold">TrustHire by Grevoo</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#E5E5DF] flex items-center justify-center bg-white text-[#C8A96B]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-[#5B665E]">Contact Founder</span>
                    <span className="font-semibold">Saman Sunasara</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
