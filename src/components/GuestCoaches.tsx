import Image from "next/image";

const coaches = [
  {
    name: "Chad Ritter",
    role: "Guest Boxing Coach",
    schedule: "1st Monday of every month — Evening",
    image: "/images/chad-ritter.jpg",
    bio: `Chad has been in combat sports since he was 12 and started coaching
      at 14 — that's not a typo. He's a 3× amateur champion in boxing and
      kickboxing, went undefeated in amateur MMA, and has five professional
      bouts to his name. He brings real fight IQ and a no-nonsense striking
      approach to every session.`,
    specialties: ["Boxing", "Kickboxing", "MMA Striking"],
    links: {
      instagram: "https://www.instagram.com/chadalanritter/",
      tapology:
        "https://www.tapology.com/fightcenter/fighters/142023-zchad-ritter",
    },
  },
  {
    name: "Santiago Garcia",
    role: "BJJ Coach",
    schedule: "Every Tuesday — Evening",
    image: "/images/santiago-garcia.jpg",
    bio: `Santiago grew up between Buenos Aires, Mexico City, and Port St. Lucie —
      and started training jiu-jitsu while studying psychology at Florida State.
      He's a purple belt under Igor Feliz with a ground game built on
      patience, technique, and relentless pressure. Fluent in Spanish.`,
    specialties: ["No-Gi BJJ", "Gi BJJ", "Submissions"],
    links: {
      instagram: "https://www.instagram.com/santigb.bjj/",
      tapology: null,
    },
  },
];

export default function GuestCoaches() {
  return (
    <div className="mt-12 sm:mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Guest &amp; Specialty Coaches
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-64 sm:h-72">
                <Image
                  src={coach.image}
                  alt={`${coach.name} — ${coach.role} at V3 MMA`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f1729] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white mb-0.5">
                  {coach.name}
                </h3>
                <p className="text-blue-400 font-semibold text-xs mb-1">
                  {coach.role}
                </p>
                <p className="text-slate-500 text-xs mb-4">
                  {coach.schedule}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {coach.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {coach.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 text-sm">
                  {coach.links.tapology && (
                    <a
                      href={coach.links.tapology}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Tapology
                    </a>
                  )}
                  {coach.links.instagram && (
                    <a
                      href={coach.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
