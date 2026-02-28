import Image from "next/image";

export default function Coach() {
  return (
    <section id="coach" className="py-20 sm:py-28 bg-[#0f1729]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Your Coach
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Trained by a <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Real Fighter</span>
          </h2>
        </div>

        {/* Coach card */}
        <div className="grid md:grid-cols-5 gap-0 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          {/* Photo — 2 cols */}
          <div className="md:col-span-2 relative min-h-[400px] md:min-h-[520px]">
            <Image
              src="/images/shane-mistretta.jpg"
              alt="Shane Mistretta — Head Coach at V3 MMA"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {/* Subtle gradient overlay at bottom on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f1729]/80 to-transparent md:hidden" />
          </div>

          {/* Bio — 3 cols */}
          <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              Shane Mistretta
            </h3>
            <p className="text-blue-400 font-semibold text-sm mb-6">
              Head Coach &bull; Pro MMA Fighter &bull; Featherweight
            </p>

            <p className="text-slate-300 leading-relaxed mb-5">
              Shane isn&apos;t just a coach who watched some YouTube videos &mdash; he&apos;s a
              professional MMA fighter with a <span className="text-white font-semibold">4-3 pro record</span> and
              a <span className="text-white font-semibold">10-4 amateur career</span>, competing
              on major regional circuits including FFC and Combat Night.
              He&apos;s been in the cage, taken the hits, and knows what it actually
              takes to fight.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              At V3 MMA, Shane coaches every class personally. Whether you&apos;re walking
              in for your first day or sharpening your skills for competition, you get
              real instruction from someone who&apos;s lived it &mdash; not a
              rotating cast of part-time trainers.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-white">14</p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Pro + Amateur Wins</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-white">27</p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Years Old</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-white">5+</p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Years Coaching</p>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Boxing", "Muay Thai", "No-Gi BJJ", "MMA", "Fight Strategy", "Strength & Conditioning"].map((s) => (
                <span
                  key={s}
                  className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Social / verification links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="https://www.tapology.com/fightcenter/fighters/287725-shane-mistretta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Tapology
              </a>
              <a
                href="https://www.sherdog.com/fighter/Shane-Mistretta-383529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Sherdog
              </a>
              <a
                href="https://www.instagram.com/shanemistretta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.youtube.com/watch?v=9fw3id3VTao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Fights
              </a>
            </div>
          </div>
        </div>

        {/* Bottom value prop */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Most gyms rotate instructors or hire trainers who&apos;ve never competed.
            At V3 MMA, you train with a verified professional fighter &mdash; every single class.
          </p>
        </div>
      </div>
    </section>
  );
}
