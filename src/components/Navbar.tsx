"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F8F5]/90 backdrop-blur-md border-b border-[#E5E5DF] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo showText size={40} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative py-2 text-sm font-medium tracking-wide uppercase transition-colors"
                  style={{ color: isActive ? "#1F2A22" : "#5B665E" }}
                >
                  <span className="hover:text-[#1F2A22] transition-colors duration-200">
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A96B]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="https://wa.me/917359224131?text=Hello%20TrustHire%2C%20I%20would%20like%20to%20verify%20a%20worker."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-semibold text-[#5B665E] hover:text-[#1F2A22] transition-colors"
            >
              Verify A Worker
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-[#1F2A22] border border-[#1F2A22] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#F8F8F5] transition-all duration-300 hover:bg-transparent hover:text-[#1F2A22]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book A Demo
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-[#C8A96B] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 z-0" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1F2A22] hover:text-[#C8A96B] transition-colors"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] z-40 bg-[#F8F8F5] border-t border-[#E5E5DF] flex flex-col px-8 py-12 md:hidden"
          >
            <nav className="flex flex-col gap-6 mb-12">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-serif tracking-wide block transition-colors ${
                        isActive ? "text-[#C8A96B]" : "text-[#1F2A22] hover:text-[#C8A96B]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-4 mt-auto border-t border-[#E5E5DF] pt-8"
            >
              <Link
                href="https://wa.me/917359224131?text=Hello%20TrustHire%2C%20I%20would%20like%20to%20verify%20a%20worker."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-[#1F2A22] text-[#1F2A22] hover:bg-[#1F2A22] hover:text-[#F8F8F5] transition-all duration-300 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                Verify A Worker
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#1F2A22] text-[#F8F8F5] hover:bg-[#C8A96B] transition-all duration-300 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                Book A Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
