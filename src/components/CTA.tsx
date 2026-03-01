export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#0f1729]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 border border-blue-500/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Start Your MMA Journey in Port St. Lucie
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-4 sm:mb-6">
            Book your free trial class or just walk in during any scheduled session — beginners are always welcome at V3 MMA.
          </p>
          <p className="text-blue-300/80 text-sm sm:text-base mb-6 sm:mb-8">
            No experience needed. No contracts. No obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#free-trial"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Book Your Free Trial
            </a>
            <a
              href="tel:7728121499"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all"
            >
              Call (772) 812-1499
            </a>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mt-6">
            476 NW Peacock Blvd #108, Port St. Lucie, FL 34986
          </p>

          {/* Direct signup nudge */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Already know you want in?
            </p>
            <a
              href="https://v3-mma.gymdesk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#0f1729] px-10 py-4 rounded-xl text-lg sm:text-xl font-black transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 hover:scale-105"
            >
              Join V3 MMA Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
