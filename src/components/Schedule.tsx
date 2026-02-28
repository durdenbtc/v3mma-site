"use client";

import { useEffect, useRef } from "react";

export default function Schedule() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const widget = document.createElement("div");
      widget.className = "gymdesk-schedule";
      widget.setAttribute("attr-gym", "A9NNR");
      widget.setAttribute("attr-visible_schedule", "AR09J");
      widget.setAttribute("attr-default_schedule", "all");
      widget.setAttribute("attr-program", "all");
      containerRef.current.appendChild(widget);

      const w = window as unknown as Record<string, unknown>;
      if (w.GymDesk && typeof (w.GymDesk as Record<string, unknown>).init === "function") {
        (w.GymDesk as { init: () => void }).init();
      }
    }
  }, []);

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-gradient-to-b from-[#111d35] to-[#0f1729]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Class Schedule
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Find a class near you that fits your schedule. All skill levels welcome at our Port St. Lucie gym.
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-8 overflow-hidden">
          <div ref={containerRef} />
        </div>
      </div>
    </section>
  );
}
