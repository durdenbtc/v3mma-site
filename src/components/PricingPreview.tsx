import Link from "next/link";
import {
  PLANS,
  PROMO,
  PRIVATE_PACK,
  effective,
  isDiscounted,
  savings,
  discountPct,
  usd,
  privatePackPrice,
} from "@/lib/pricing";

type Variant = "silver" | "kids" | "gold";

type Card = {
  key: Variant;
  description: string;
  features: string[];
  cta: string;
  badge?: string;
  learnMore?: { href: string; label: string };
};

/** Ordered cheapest first. Prices themselves live in @/lib/pricing. */
const cards: Card[] = [
  {
    key: "silver",
    description: "The backbone of V3. Unlimited everything.",
    features: [
      "Unlimited group classes",
      "All disciplines included",
      "Saturday Open Mat",
      "No contracts — cancel anytime",
    ],
    cta: "Get Started",
    badge: "MOST POPULAR",
  },
  {
    key: "kids",
    description: "Little warriors welcome. Big energy, zero attitude.",
    features: [
      "Mon & Wed, 5–6pm",
      "Confidence, focus & discipline",
      "Safe, structured, high-energy",
      "First class free",
    ],
    cta: "Sign Up My Kid",
    badge: "LITTLE WARRIORS",
    learnMore: { href: "/kids-mma-port-st-lucie", label: "What do kids actually do in class? →" },
  },
  {
    key: "gold",
    description: "Everything in Silver plus private coaching.",
    features: [
      "Everything in Silver",
      "4 private 1-on-1 sessions/month",
      "Personalized training plan",
      "Priority scheduling",
    ],
    cta: "Get Started",
  },
];

/** Each tier is themed as its own metal/colour. */
const theme: Record<
  Variant,
  { card: string; badge: string; check: string; price: string; cta: string; link: string; save: string }
> = {
  silver: {
    card: "bg-gradient-to-br from-slate-300/20 via-slate-100/[0.07] to-slate-500/5 border-2 border-slate-300/50 shadow-xl shadow-slate-300/10 md:scale-[1.03]",
    badge: "bg-gradient-to-r from-slate-100 to-slate-400 text-[#0f1729] shadow-md shadow-slate-300/25",
    check: "text-slate-200",
    price: "bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent",
    cta: "bg-gradient-to-r from-slate-100 to-slate-300 hover:from-white hover:to-slate-200 text-[#0f1729] hover:shadow-lg hover:shadow-slate-300/30",
    link: "text-slate-300/80 hover:text-white",
    save: "bg-slate-200/15 text-slate-100 border border-slate-200/30",
  },
  kids: {
    card: "bg-gradient-to-b from-emerald-500/15 to-green-600/5 border-2 border-emerald-400/40 hover:border-emerald-400/70 shadow-xl shadow-emerald-500/10",
    badge: "bg-emerald-400 text-[#0f1729] shadow-md shadow-emerald-400/30",
    check: "text-emerald-400",
    price: "bg-gradient-to-b from-emerald-100 to-emerald-500 bg-clip-text text-transparent",
    cta: "bg-emerald-400 hover:bg-emerald-300 text-[#0f1729] hover:shadow-lg hover:shadow-emerald-400/30",
    link: "text-emerald-300/80 hover:text-emerald-200",
    save: "bg-emerald-400/15 text-emerald-200 border border-emerald-400/30",
  },
  gold: {
    card: "bg-gradient-to-b from-amber-500/15 to-orange-600/5 border-2 border-amber-400/40 hover:border-amber-400/70 shadow-xl shadow-amber-500/10",
    badge: "bg-amber-400 text-[#0f1729] shadow-md shadow-amber-400/30",
    check: "text-amber-400",
    price: "bg-gradient-to-b from-amber-100 to-amber-500 bg-clip-text text-transparent",
    cta: "bg-amber-400 hover:bg-amber-300 text-[#0f1729] hover:shadow-lg hover:shadow-amber-400/30",
    link: "text-amber-300/80 hover:text-amber-200",
    save: "bg-amber-400/15 text-amber-200 border border-amber-400/30",
  },
};

export default function PricingPreview() {
  const anyDiscount = cards.some((c) => isDiscounted(c.key));
  const topSaving = Math.max(...cards.map((c) => savings(c.key)));

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f1729] to-[#111d35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Affordable MMA Gym Memberships
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. The most affordable MMA, boxing, and kickboxing training in Port St. Lucie.
          </p>

          {anyDiscount && (
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-amber-400/10 border border-amber-400/30 rounded-full px-5 py-2">
              <span className="text-amber-300 font-black text-xs tracking-[0.15em] uppercase">
                {PROMO.name}
              </span>
              <span className="text-amber-200/75 text-sm">
                — save up to {usd(topSaving)}/month while it lasts
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6 max-w-5xl mx-auto items-start">
          {cards.map((card) => {
            const t = theme[card.key];
            const plan = PLANS[card.key];
            const discounted = isDiscounted(card.key);

            return (
              <div
                key={card.key}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${t.card}`}
              >
                {/* Decorative layers are clipped here so the card itself keeps
                    overflow visible — the badge hangs above the top edge. */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                  {card.key === "silver" && (
                    <span className="absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm animate-sheen" />
                  )}
                  {card.key === "kids" && (
                    <span className="absolute -right-3 -bottom-4 text-8xl select-none rotate-12 opacity-[0.12]">
                      🥋
                    </span>
                  )}
                </div>

                {card.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black tracking-wide px-4 py-1 rounded-full whitespace-nowrap ${
                      card.key === "kids" ? "-rotate-3" : ""
                    } ${t.badge}`}
                  >
                    {card.badge}
                  </div>
                )}

                <h3 className="relative text-white font-bold text-lg mb-1">{plan.name}</h3>
                <p className="relative text-slate-400 text-sm mb-4">{card.description}</p>

                <div className="relative mb-6">
                  {discounted && (
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-slate-500 line-through text-lg font-semibold">
                        {usd(plan.list)}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${t.save}`}
                      >
                        Save {usd(savings(card.key))}/mo · {discountPct(card.key)}% off
                      </span>
                    </div>
                  )}
                  <span className={`text-4xl font-black ${t.price}`}>{usd(effective(card.key))}</span>
                  <span className="text-slate-400 text-sm ml-1">/month</span>
                </div>

                <ul className="relative space-y-3 mb-8">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className={`w-5 h-5 mt-0.5 shrink-0 ${t.check}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://v3-mma.gymdesk.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${t.cta}`}
                >
                  {card.cta}
                </a>

                {card.learnMore && (
                  <Link
                    href={card.learnMore.href}
                    className={`relative block text-center text-xs font-medium mt-3 transition-colors ${t.link}`}
                  >
                    {card.learnMore.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Also available: Private Training packages ({privatePackPrice}/{PRIVATE_PACK.sessions} sessions)
        </p>
      </div>
    </section>
  );
}
