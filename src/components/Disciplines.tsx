import Link from "next/link";

const disciplines = [
  {
    name: "Boxing",
    description: "Learn boxing technique, footwork, and combinations in Port St. Lucie. Great for fitness and self-defense at any level.",
    href: "/boxing-port-st-lucie",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
  },
  {
    name: "Kickboxing",
    description: "High-energy kickboxing classes combining punches and kicks. Build power, speed, and endurance with real coaching.",
    href: "/kickboxing-port-st-lucie",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Muay Thai",
    description: "Train the art of eight limbs — punches, kicks, elbows, and knees. Authentic Muay Thai classes on the Treasure Coast.",
    href: "/muay-thai-port-st-lucie",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    name: "No-Gi BJJ",
    description: "No-Gi Brazilian Jiu-Jitsu classes twice weekly. Learn submissions, sweeps, and ground control in Port St. Lucie.",
    href: "/bjj-port-st-lucie",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    name: "MMA Fitness",
    description: "Full-body MMA conditioning covering boxing, Muay Thai, kickboxing, and wrestling. Burn calories and build functional strength.",
    href: "/mma-fitness-port-st-lucie",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Kids MMA",
    description: "Kids martial arts classes in Port St. Lucie. Build confidence, discipline, and real skills in a safe, structured environment. Ages 6-15.",
    href: "/kids-mma-port-st-lucie",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-16 sm:py-24 bg-[#0f1729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Martial Arts Classes in Port St. Lucie
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            One membership, unlimited access to every discipline. Learn striking, grappling, and everything in between — all coached by a pro fighter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {disciplines.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-blue-500/30 rounded-xl p-6 sm:p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                {d.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{d.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
              <span className="text-blue-400 text-sm font-medium mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
