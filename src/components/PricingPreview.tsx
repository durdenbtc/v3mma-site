import Link from "next/link";

const plans = [
  {
    name: "Two Week Starter",
    price: "$59",
    period: "one-time",
    description: "Perfect for trying us out. Full access for 2 weeks.",
    features: ["Unlimited classes for 2 weeks", "All disciplines included", "No commitment"],
    popular: false,
  },
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
    popular: true,
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
    popular: false,
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f1729] to-[#111d35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Just affordable training with world-class coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-600/20 to-blue-600/5 border-2 border-blue-500/50 shadow-xl shadow-blue-500/10 scale-[1.02]"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
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
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://v3-mma.gymdesk.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Also available: Kids MMA Program ($149/mo) and Private Training packages ($239/4 sessions)
        </p>
      </div>
    </section>
  );
}
