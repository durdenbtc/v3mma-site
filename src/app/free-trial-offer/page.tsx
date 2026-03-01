"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function FreeTrialOffer() {
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookingRef.current && bookingRef.current.childElementCount === 0) {
      const widget = document.createElement("div");
      widget.className = "gymdesk-booking";
      widget.setAttribute("attr-gym", "A9NNR");
      widget.setAttribute("attr-schedule", "6zg8P");
      widget.setAttribute("attr-form", "Apey5");
      widget.setAttribute("attr-stepsvisibility", "visible");
      bookingRef.current.appendChild(widget);

      const w = window as unknown as Record<string, unknown>;
      if (
        w.GymDesk &&
        typeof (w.GymDesk as Record<string, unknown>).init === "function"
      ) {
        (w.GymDesk as { init: () => void }).init();
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1729] text-white">
      {/* Minimal top bar — logo only, no nav distractions */}
      <div className="w-full bg-[#0f1729] border-b border-white/5 py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center">
          <a href="https://v3mma.com" className="flex items-center gap-2.5">
            <Image
              src="/images/website-logo.png"
              alt="V3 MMA"
              width={500}
              height={378}
              className="w-auto h-9"
            />
            <div>
              <span className="text-white font-bold text-lg leading-tight">
                V3 MMA
              </span>
              <span className="block text-[9px] text-slate-500 tracking-[0.2em] uppercase -mt-0.5">
                Gym & Fitness
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/142dd1814f7b.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0f1729]/85" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-xs sm:text-sm font-semibold">
              Limited Spots — Max 15 Per Class
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
            Try a Free MMA Class
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              in Port St. Lucie
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Boxing, kickboxing, Muay Thai, BJJ & MMA fitness — all coached by a
            professional fighter. No experience needed. No obligations.
          </p>

          <p className="text-sm sm:text-base text-slate-400 mb-8">
            Just pick a class, show up, and see if V3 is right for you.
          </p>

          <a
            href="#book"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Book Your Free Trial Below
          </a>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-[#111d35] border-y border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-slate-300">
              <strong className="text-white">5.0</strong> on Google (37 Reviews)
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Pro Fighter Coaching
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            From $129/mo — No Contracts
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-14 sm:py-20 bg-[#0f1729]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
            What to Expect at Your Free Trial
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Pick a Class",
                text: "Choose from boxing, kickboxing, Muay Thai, MMA fitness, BJJ, or kids MMA. All skill levels welcome.",
              },
              {
                step: "2",
                title: "Show Up & Train",
                text: "Wear comfortable clothes. We have gloves and gear for beginners. Free water and Gatorade provided.",
              },
              {
                step: "3",
                title: "Decide If You're In",
                text: "No pressure. No sales pitch. If you love it, memberships start at $129/mo with no contracts.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking widget */}
      <section id="book" className="py-14 sm:py-20 bg-[#111d35]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              Book Your Free Class Now
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
              Pick a date and time that works. Walk-ins are also welcome during
              any scheduled class.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div ref={bookingRef} />
          </div>
        </div>
      </section>

      {/* Reviews strip */}
      <section className="py-14 sm:py-20 bg-[#0f1729]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
            Don&apos;t Take Our Word for It
          </h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                name: "Steve O.",
                text: "This is by far the best Dojo I have ever trained in. The atmosphere is very conducive to learning and growing.",
              },
              {
                name: "Jeremiah D.",
                text: "This gym is amazing and very beginner friendly, the trainers go over everything with great detail and work with you very well.",
              },
              {
                name: "Emeric M.",
                text: "I've been searching around for an affordable gym where they can teach you the basics and I must say V3 is where it's at.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-white/[0.03] border border-white/5 rounded-xl p-5"
              >
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-white font-semibold text-xs">{r.name}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/SbsqVHBDRVMEy7Gg8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              See all 37 reviews on Google &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Final CTA + location */}
      <section className="py-14 sm:py-20 bg-[#111d35] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Still Thinking About It?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-3">
            Your first class is completely free. No credit card. No
            commitment. Just show up in workout clothes and we&apos;ll handle the
            rest.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            476 NW Peacock Blvd #108, Port St. Lucie, FL 34986 — Right off I-95
            with free parking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#book"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Book Your Free Trial
            </a>
            <a
              href="tel:7728121499"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
            >
              Call (772) 812-1499
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-[#0a0f1e] border-t border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} V3 MMA Gym & Fitness. All rights
            reserved.
          </p>
          <a
            href="https://v3mma.com"
            className="hover:text-slate-400 transition-colors"
          >
            v3mma.com
          </a>
        </div>
      </footer>
    </div>
  );
}
