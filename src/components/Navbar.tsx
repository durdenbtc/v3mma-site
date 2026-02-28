"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#disciplines", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1729]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/website-logo.png"
              alt="V3 MMA"
              width={500}
              height={378}
              className="w-auto h-10 sm:h-12"
            />
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-tight">V3 MMA</span>
              <span className="block text-[10px] text-slate-400 tracking-[0.2em] uppercase -mt-1">
                Gym & Fitness
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#free-trial"
              className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              FREE TRIAL
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#free-trial"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all"
            >
              FREE TRIAL
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0f1729]/98 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-6 -mt-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#free-trial"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all"
            >
              BOOK FREE TRIAL
            </a>
            <a
              href="tel:7728121499"
              className="text-slate-400 text-sm hover:text-white transition-colors"
            >
              (772) 812-1499
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
