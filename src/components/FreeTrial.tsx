"use client";

import { useEffect, useRef } from "react";

export default function FreeTrial() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create the widget div with custom attr-* attributes that React can't render natively
      const widget = document.createElement("div");
      widget.className = "gymdesk-booking";
      widget.setAttribute("attr-gym", "A9NNR");
      widget.setAttribute("attr-schedule", "6zg8P");
      widget.setAttribute("attr-form", "Apey5");
      widget.setAttribute("attr-stepsvisibility", "visible");
      containerRef.current.appendChild(widget);

      // Re-trigger GymDesk widget initialization
      const w = window as unknown as Record<string, unknown>;
      if (w.GymDesk && typeof (w.GymDesk as Record<string, unknown>).init === "function") {
        (w.GymDesk as { init: () => void }).init();
      }
    }
  }, []);

  return (
    <section id="free-trial" className="py-16 sm:py-24 bg-[#0f1729]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Book Your Free Trial
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-3">
            30 minutes. No experience needed. No obligations. Just show up and see what V3 is all about.
          </p>
          <p className="text-blue-300/70 text-sm sm:text-base max-w-lg mx-auto">
            Don&apos;t want to book online? Feel free to just come by during any scheduled class — walk-ins are always welcome!
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div ref={containerRef} />
        </div>
      </div>
    </section>
  );
}
