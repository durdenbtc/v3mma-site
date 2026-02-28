"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const widget = document.createElement("div");
      widget.className = "maonrails-form";
      widget.setAttribute("attr-ref", "Arn1O");
      widget.setAttribute("attr-gym", "A9NNR");
      formRef.current.appendChild(widget);

      const w = window as unknown as Record<string, unknown>;
      if (w.GymDesk && typeof (w.GymDesk as Record<string, unknown>).init === "function") {
        (w.GymDesk as { init: () => void }).init();
      }
    }
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0f1729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Questions? Drop us a message or just swing by the gym.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>
            <div ref={formRef} />
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-6">Visit Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Address</p>
                    <p className="text-slate-400 text-sm">476 NW Peacock Blvd #108<br />Port St. Lucie, FL 34986</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Phone</p>
                    <a href="tel:7728121499" className="text-slate-400 hover:text-white text-sm transition-colors">(772) 812-1499</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <a href="mailto:leon@v3mma.com" className="text-slate-400 hover:text-white text-sm transition-colors">leon@v3mma.com</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.8!2d-80.3718!3d27.2939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d93f8c8c8c8c8d%3A0x0!2s476+NW+Peacock+Blvd+%23108%2C+Port+St.+Lucie%2C+FL+34986!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="V3 MMA Gym Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
