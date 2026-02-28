"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Video background — fills entire section */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="none"
      >
        {isVisible && (
          <source src="/videos/highlight.mp4" type="video/mp4" />
        )}
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Thinner top/bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0f1729] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />

      {/* Content overlay */}
      <div className="relative z-20 py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Step Inside
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            This Is V3 MMA
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto mb-12 sm:mb-16 drop-shadow-md">
            Port St. Lucie&apos;s only semi-private MMA gym — where every class is
            capped at 15 and coached by a pro fighter.
          </p>

          {/* SEO-rich feature grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">6</p>
              <p className="text-slate-300 text-xs sm:text-sm">Martial Arts Disciplines</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">15</p>
              <p className="text-slate-300 text-xs sm:text-sm">Max Class Size</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">$129</p>
              <p className="text-slate-300 text-xs sm:text-sm">/mo &bull; No Contracts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">All</p>
              <p className="text-slate-300 text-xs sm:text-sm">Levels Welcome</p>
            </div>
          </div>

          {/* Discipline keywords for SEO */}
          <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Boxing", "Muay Thai", "MMA", "BJJ", "Kickboxing", "Kids Martial Arts"].map((d) => (
              <span
                key={d}
                className="bg-white/5 border border-white/15 text-white/80 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
