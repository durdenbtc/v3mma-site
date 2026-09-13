import Link from "next/link";

type Variant = "popular" | "default" | "kids";

const plans: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  variant: Variant;
  cta: string;
}[] = [
  {
    name: "Silver Monthly",
    price: "$129",
    period: "/month",
    description: "Our most popular membership. Unlimited everything.",
    features: [
      "Unlimited group classes",
      "All disciplines included",
      "Saturday Open Mat",
      "No contracts — cancel anytime",
    ],
    variant: "popular",
    cta: "Get Started",
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
    variant: "default",
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
  },
];

const cardStyle: Record<Variant, string> = {
  popular:
    "bg-gradient-to-b from-blue-600/20 to-blue-600/5 border-2 border-blue-500/50 shadow-xl shadow-blue-500/10 md:scale-[1.02]",
  default: "bg-white/[0.03] border border-white/10 hover:border-white/20",
  kids:
    "bg-gradient-to-b from-amber-500/15 to-orange-600/5 border-2 border-amber-400/40 hover:border-amber-400/70 shadow-xl shadow-amber-500/10",
};

const checkStyle: Record<Variant, string> = {
  popular: "text-blue-400",
  default: "text-blue-400",
  kids: "text-amber-400",
};

const ctaStyle: Record<Variant, string> = {
  popular: "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25",
  default: "bg-white/5 hover:bg-white/10 border border-white/10 text-white",
  kids: "bg-amber-400 hover:bg-amber-300 text-[#0f1729] hover:shadow-lg hover:shadow-amber-400/30",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${cardStyle[plan.variant]}`}
            >
              {plan.variant === "popular" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {plan.variant === "kids" && (
                <>
                  {/* Sticker-style age badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 bg-amber-400 text-[#0f1729] text-xs font-black tracking-wide px-4 py-1 rounded-full shadow-md shadow-amber-400/30">
                    AGES 4–8
                  </div>
                  {/* Big playful mark in the corner. Clipped by its own layer so the card
                      itself never needs overflow-hidden (which would hide the badge above). */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                    <span className="absolute -right-3 -bottom-4 text-8xl select-none rotate-12 opacity-[0.12]">
                      🥋
                    </span>
                  </div>
                </>
              )}

              <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 mt-0.5 shrink-0 ${checkStyle[plan.variant]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`relative block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${ctaStyle[plan.variant]}`}
              >
                {plan.cta}
              </a>

              {plan.variant === "kids" && (
                <Link
                  href="/kids-mma-port-st-lucie"
                  className="relative block text-center text-amber-300/80 hover:text-amber-200 text-xs font-medium mt-3 transition-colors"
                >
                  What do kids actually do in class? →
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Also available: Private Training packages ($239/4 sessions)
        </p>
      </div>
    </section>
  );
}
