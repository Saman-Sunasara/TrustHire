"use client";

import React, { useState } from "react";
import { Send, PhoneCall, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<"whatsapp" | "email">("whatsapp");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `*TrustHire Verification Request*\n\n` +
      `*Business Name:* ${formData.businessName}\n` +
      `*Contact Person:* ${formData.contactPerson}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Requirements:* ${formData.requirements}`;

    if (selectedChannel === "whatsapp") {
      const waUrl = `https://wa.me/917359224131?text=${encodeURIComponent(formattedText)}`;
      window.open(waUrl, "_blank");
    } else {
      const emailSubject = `TrustHire Verification Request - ${formData.businessName}`;
      const emailBody = `TrustHire Verification Request\n\n` +
        `Business Name: ${formData.businessName}\n` +
        `Contact Person: ${formData.contactPerson}\n` +
        `Email: ${formData.email}\n` +
        `Phone Number: ${formData.phone}\n` +
        `Requirements:\n${formData.requirements}`;
      
      const mailtoUrl = `mailto:samansunasara.39@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F8F5] border border-[#E5E5DF] p-8 md:p-12 shadow-sm rounded-none relative overflow-hidden max-w-2xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 flex flex-col items-center justify-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#1F2A22]/5 flex items-center justify-center border border-[#C8A96B] mb-2">
            <svg
              className="w-8 h-8 text-[#C8A96B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-[#1F2A22] font-semibold">Thank You</h3>
          <p className="text-[#5B665E] text-sm max-w-md leading-relaxed">
            Your verification request has been prepared. If your WhatsApp or email client didn&apos;t open automatically, please click below to complete the connection.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-[#1F2A22] text-[#F8F8F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#C8A96B] hover:text-[#1F2A22] transition-colors"
            >
              Retry Connection
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 border border-[#E5E5DF] text-[#1F2A22] text-xs font-semibold uppercase tracking-widest hover:bg-[#E5E5DF] transition-colors"
            >
              Submit New Request
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-3xl text-[#1F2A22] font-medium tracking-tight">
              Start Verification
            </h3>
            <p className="text-sm text-[#5B665E]">
              Fill out the details below. We will direct you to connect instantly via WhatsApp or Email.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact Person */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contactPerson" className="text-xs uppercase tracking-widest font-semibold text-[#1F2A22]">
                Contact Person *
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                required
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="e.g. Saman Sunasara"
                className="w-full bg-white border border-[#E5E5DF] px-4 py-3 text-sm text-[#1F2A22] focus:border-[#C8A96B] focus:outline-none transition-colors rounded-none placeholder:text-gray-300"
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="businessName" className="text-xs uppercase tracking-widest font-semibold text-[#1F2A22]">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Grevoo"
                className="w-full bg-white border border-[#E5E5DF] px-4 py-3 text-sm text-[#1F2A22] focus:border-[#C8A96B] focus:outline-none transition-colors rounded-none placeholder:text-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-[#1F2A22]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@company.com"
                className="w-full bg-white border border-[#E5E5DF] px-4 py-3 text-sm text-[#1F2A22] focus:border-[#C8A96B] focus:outline-none transition-colors rounded-none placeholder:text-gray-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-[#1F2A22]">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 XXXXX XXXXX"
                className="w-full bg-white border border-[#E5E5DF] px-4 py-3 text-sm text-[#1F2A22] focus:border-[#C8A96B] focus:outline-none transition-colors rounded-none placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Verification Requirements */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="requirements" className="text-xs uppercase tracking-widest font-semibold text-[#1F2A22]">
              Verification Requirements *
            </label>
            <textarea
              id="requirements"
              name="requirements"
              required
              rows={4}
              value={formData.requirements}
              onChange={handleChange}
              placeholder="e.g. Identity and address check for 15 factory workers."
              className="w-full bg-white border border-[#E5E5DF] p-4 text-sm text-[#1F2A22] focus:border-[#C8A96B] focus:outline-none transition-colors rounded-none resize-none placeholder:text-gray-300"
            />
          </div>

          {/* Preferred Channel */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#1F2A22]">
              Submit Channel
            </span>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedChannel("whatsapp")}
                className={`flex items-center justify-center gap-2 py-3 border text-xs font-semibold uppercase tracking-widest transition-all ${
                  selectedChannel === "whatsapp"
                    ? "bg-[#1F2A22] text-[#F8F8F5] border-[#1F2A22]"
                    : "bg-white text-[#5B665E] border-[#E5E5DF] hover:border-[#1F2A22] hover:text-[#1F2A22]"
                }`}
              >
                <PhoneCall className="w-4 h-4" />
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setSelectedChannel("email")}
                className={`flex items-center justify-center gap-2 py-3 border text-xs font-semibold uppercase tracking-widest transition-all ${
                  selectedChannel === "email"
                    ? "bg-[#1F2A22] text-[#F8F8F5] border-[#1F2A22]"
                    : "bg-white text-[#5B665E] border-[#E5E5DF] hover:border-[#1F2A22] hover:text-[#1F2A22]"
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#C8A96B] border border-[#C8A96B] py-4 text-xs font-semibold uppercase tracking-widest text-[#1F2A22] hover:bg-[#1F2A22] hover:text-[#F8F8F5] hover:border-[#1F2A22] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Submit & Connect Instantly
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
