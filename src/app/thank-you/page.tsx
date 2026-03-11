import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0f1729] text-white">
      {/* Minimal top bar */}
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

      {/* Hero confirmation */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0f1729] to-[#111d35]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 mb-8">
            <svg
              className="w-10 h-10 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            You&apos;re In!
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-3">
            Welcome to V3 MMA, and thanks for signing up.
          </p>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            You should receive a confirmation email shortly. Here&apos;s
            everything you need to know before your first class.
          </p>
        </div>
      </section>

      {/* What to know */}
      <section className="py-14 sm:py-20 bg-[#111d35]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10">
            Before You Come In
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-7 h-7 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                ),
                title: "What to Bring",
                text: "Comfortable workout clothes, water, and a good attitude. We provide gloves, wraps, and Gatorade for free.",
              },
              {
                icon: (
                  <svg
                    className="w-7 h-7 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Arrive 10 Min Early",
                text: "Come a few minutes before class so we can get you set up with gear and show you around the gym.",
              },
              {
                icon: (
                  <svg
                    className="w-7 h-7 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                ),
                title: "Where to Go",
                text: "476 NW Peacock Blvd #108, Port St. Lucie, FL 34986. Right off I-95, Peacock Blvd exit. Free parking.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
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

      {/* Quick links */}
      <section className="py-14 sm:py-20 bg-[#0f1729]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-8">
            Helpful Links
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="https://v3-mma.gymdesk.com/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              View Class Schedule
            </a>
            <a
              href="https://maps.app.goo.gl/SbsqVHBDRVMEy7Gg8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5"
            >
              Get Directions
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/v3mmagym/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="V3 MMA on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="tel:7728121499"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              (772) 812-1499
            </a>
            <a
              href="mailto:leon@v3mma.com"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              leon@v3mma.com
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
