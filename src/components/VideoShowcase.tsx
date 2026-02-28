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
          // Start loading and playing when visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Autoplay blocked — user will see poster/first frame
            });
          }
        } else {
          // Pause when scrolled away to save resources
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 bg-[#0f1729] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            See What Training Looks Like
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Real sessions. Real members. No scripted nonsense.
          </p>
        </div>

        {/* Video container with rounded corners and subtle glow */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
          {/* Gradient overlay on top and bottom edges for polish */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster=""
          >
            {isVisible && (
              <source src="/videos/highlight.mp4" type="video/mp4" />
            )}
          </video>

          {/* Play indicator that fades out once video starts */}
          {!isVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Train with us at V3 MMA in Port St. Lucie — walk-ins welcome
        </p>
      </div>
    </section>
  );
}
