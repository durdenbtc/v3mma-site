"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
}

interface DisciplinePageProps {
  discipline: string;
  tagline: string;
  heroDescription: string;
  imageSrc: string;
  imageAlt: string;
  benefits: { title: string; description: string }[];
  whatYouLearn: string[];
  classFormat: { label: string; detail: string }[];
  faqs: FAQ[];
  relatedDisciplines: { name: string; href: string }[];
  seoLocation?: string;
}

export default function DisciplinePage({
  discipline,
  tagline,
  heroDescription,
  imageSrc,
  imageAlt,
  benefits,
  whatYouLearn,
  classFormat,
  faqs,
  relatedDisciplines,
  seoLocation = "Port St. Lucie",
}: DisciplinePageProps) {
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookingRef.current && bookingRef.current.children.length === 0) {
      const widget = document.createElement("div");
      widget.className = "gymdesk-booking";
      widget.setAttribute("attr-gym", "A9NNR");
      widget.setAttribute("attr-schedule", "6zg8P");
      widget.setAttribute("attr-form", "Apey5");
      widget.setAttribute("attr-stepsvisibility", "visible");
      bookingRef.current.appendChild(widget);

      const initGymDesk = () => {
        const w = window as unknown as Record<string, unknown>;
        if (w.GymDesk && typeof (w.GymDesk as Record<string, unknown>).init === "function") {
          (w.GymDesk as { init: () => void }).init();
        }
      };

      // If GymDesk script is already loaded, just re-init
      const w = window as unknown as Record<string, unknown>;
      if (w.GymDesk) {
        initGymDesk();
      } else {
        // Script may not have loaded yet on direct page visit — load it manually
        const script = document.createElement("script");
        script.src = "https://app.gymdesk.com/js/widgets.js";
        script.async = true;
        script.onload = () => {
          // GymDesk auto-inits on load, but give it a moment
          setTimeout(initGymDesk, 500);
        };
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Link href="/" className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors mb-4 inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Back to V3 MMA
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 mb-4">
                {discipline} Classes
                <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mt-2">in {seoLocation}, FL</span>
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl mb-3 font-medium">{tagline}</p>
              <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">{heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#book" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-center">
                  Book a Free Trial Class
                </a>
                <a href="tel:7728121499" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all text-center">
                  Call (772) 812-1499
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  5.0 on Google (37 Reviews)
                </span>
                <span>Max 15 Per Class</span>
                <span>No Experience Needed</span>
              </div>
            </div>
            <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-[#0f1729]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 text-center">
            Why Train {discipline} at V3 MMA?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            {seoLocation}&apos;s most affordable {discipline.toLowerCase()} program — coached by an active professional fighter.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 sm:py-24 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                What You&apos;ll Learn
              </h2>
              <div className="space-y-3">
                {whatYouLearn.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Class Format
              </h2>
              <div className="space-y-4">
                {classFormat.map((item) => (
                  <div key={item.label} className="bg-white/[0.03] border border-white/5 rounded-lg p-4">
                    <span className="text-blue-400 font-semibold text-sm">{item.label}</span>
                    <p className="text-slate-300 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Callout */}
      <section className="py-16 sm:py-20 bg-[#0f1729]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Your Coach</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Coached by a Pro Fighter
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            Shane Mistretta (4-3 pro, 10-4 amateur) coaches every {discipline.toLowerCase()} class personally. He&apos;s competed on FFC and Combat Night, and brings real fight experience to every session — not just textbook technique.
          </p>
          <p className="text-slate-500 text-sm">
            V3 MMA is the only gym in {seoLocation} where every class is led by a verified professional fighter.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 text-center">
            {discipline} FAQs
          </h2>
          <p className="text-slate-400 text-center mb-12">Common questions about our {discipline.toLowerCase()} program in {seoLocation}.</p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-semibold hover:bg-white/[0.02] transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-slate-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-16 sm:py-24 bg-[#0f1729]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Try {discipline} Free
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              30-minute trial class. No experience needed. No obligations. Just show up and train.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div ref={bookingRef} />
          </div>
        </div>
      </section>

      {/* Related Disciplines */}
      <section className="py-12 sm:py-16 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400 text-sm mb-4">Also available at V3 MMA:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedDisciplines.map((d) => (
              <Link key={d.name} href={d.href} className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-blue-500/30 text-slate-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all">
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
