import Link from "next/link";

type Variant = "silver" | "gold" | "kids";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  variant: Variant;
  cta: string;
  badge?: string;
  learnMore?: { href: string; label: string };
};

const plans: Plan[] = [
  {
    name: "Silver Monthly",
    price: "$139",
    period: "/month",
    description: "The backbone of V3. Unlimited everything.",
    features: [
      "Unlimited group classes",
      "All disciplines included",
      "Saturday Open Mat",
      "No contracts — cancel anytime",
    ],
    variant: "silver",
    cta: "Get Started",
    badge: "MOST POPULAR",
  },
  {
    name: "Gold Monthly",
    price: "$349",
    period: "/month",
    description: "Everything in Silver plus private coaching.",
    features: [
      "Everything in Silver",
      "4 private 1-on-1 sessions/month",
      "Personalized training plan",
      "Priority scheduling",
    ],
    variant: "gold",
    cta: "Get Started",
  },
  {
    name: "Kids MMA",
    price: "$149",
    period: "/month",
    description: "Little warriors welcome. Big energy, zero attitude.",
    features: [
      "Mon & Wed, 5–6pm",
      "Confidence, focus & discipline",
      "Safe, structured, high-energy",
      "First class free",
    ],
    variant: "kids",
    cta: "Sign Up My Kid",
    badge: "LITTLE WARRIORS",
    learnMore: { href: "/kids-mma-port-st-lucie", label: "What do kids actually do in class? →" },
  },
];

/** Each tier is themed as its own metal/color: silver, gold, and green for kids. */
const theme: Record<Variant, {
  card: string;
  badge: string;
  check: string;
  price: string;
  cta: string;
  link: string;
}> = {
  silver: {
    card: "bg-gradient-to-br from-slate-300/20 via-slate-100/[0.07] to-slate-500/5 border-2 border-slate-300/50 shadow-xl shadow-slate-300/10 md:scale-[1.03]",
    badge: "bg-gradient-to-r from-slate-100 to-slate-400 text-[#0f1729] shadow-md shadow-slate-300/25",
    check: "text-slate-200",
    price: "bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent",
    cta: "bg-gradient-to-r from-slate-100 to-slate-300 hover:from-white hover:to-slate-200 text-[#0f1729] hover:shadow-lg hover:shadow-slate-300/30",
    link: "text-slate-300/80 hover:text-white",
  },
  gold: {
    card: "bg-gradient-to-b from-amber-500/15 to-orange-600/5 border-2 border-amber-400/40 hover:border-amber-400/70 shadow-xl shadow-amber-500/10",
    badge: "bg-amber-400 text-[#0f1729] shadow-md shadow-amber-400/30",
    check: "text-amber-400",
    price: "bg-gradient-to-b from-amber-100 to-amber-500 bg-clip-text text-transparent",
    cta: "bg-amber-400 hover:bg-amber-300 text-[#0f1729] hover:shadow-lg hover:shadow-amber-400/30",
    link: "text-amber-300/80 hover:text-amber-200",
  },
  kids: {
    card: "bg-gradient-to-b from-emerald-500/15 to-green-600/5 border-2 border-emerald-400/40 hover:border-emerald-400/70 shadow-xl shadow-emerald-500/10",
    badge: "bg-emerald-400 text-[#0f1729] shadow-md shadow-emerald-400/30",
    check: "text-emerald-400",
    price: "bg-gradient-to-b from-emerald-100 to-emerald-500 bg-clip-text text-transparent",
    cta: "bg-emerald-400 hover:bg-emerald-300 text-[#0f1729] hover:shadow-lg hover:shadow-emerald-400/30",
    link: "text-emerald-300/80 hover:text-emerald-200",
  },
};

export default function PricingPreview() {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => {
            const t = theme[plan.variant];
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${t.card}`}
              >
                {/* Decorative layers are clipped here so the card itself keeps overflow
                    visible — the badge hangs above the top edge. */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                  {plan.variant === "silver" && (
                    <span className="absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm animate-sheen" />
                  )}
                  {plan.variant === "kids" && (
                    <span className="absolute -right-3 -bottom-4 text-8xl select-none rotate-12 opacity-[0.12]">
                      🥋
                    </span>
                  )}
                </div>

                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black tracking-wide px-4 py-1 rounded-full whitespace-nowrap ${
                      plan.variant === "kids" ? "-rotate-3" : ""
                    } ${t.badge}`}
                  >
                    {plan.badge}
                  </div>
                )}

                <h3 className="relative text-white font-bold text-lg mb-1">{plan.name}</h3>
                <p className="relative text-slate-400 text-sm mb-4">{plan.description}</p>

                <div className="relative mb-6">
                  <span className={`text-4xl font-black ${t.price}`}>{plan.price}</span>
                  <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
                </div>

                <ul className="relative space-y-3 mb-8">
                  {plan.features.map((feature) => (
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
                  {plan.cta}
                </a>

                {plan.learnMore && (
                  <Link
                    href={plan.learnMore.href}
                    className={`relative block text-center text-xs font-medium mt-3 transition-colors ${t.link}`}
                  >
                    {plan.learnMore.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Also available: Private Training packages ($239/4 sessions)
        </p>
      </div>
    </section>
  );
}
