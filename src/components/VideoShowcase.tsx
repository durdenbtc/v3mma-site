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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] sm:h-[60vh] md:h-[50vh] overflow-hidden"
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

      {/* Dark overlay so text reads well */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0f1729] to-transparent z-10" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />

      {/* Centered text overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
          Step Inside
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
          This Is V3 MMA
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-md drop-shadow-md">
          Real training. Real fighters. Port St. Lucie.
        </p>
      </div>
    </section>
  );
}
