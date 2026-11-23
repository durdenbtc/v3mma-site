"use client";

import { useState, useSyncExternalStore } from "react";
import { BLACK_FRIDAY, blackFridayPrice, claimUrl, type BlackFridayPlan } from "@/lib/blackFriday";

const DEADLINE = new Date(BLACK_FRIDAY.endsAt).getTime();

const cards: {
  key: BlackFridayPlan;
  emoji: string;
  tag: string;
  pitch: string;
  cta: string;
  style: { card: string; tag: string; price: string; cta: string };
}[] = [
  {
    key: "silver",
    emoji: "🥊",
    tag: "Adults",
    pitch: "Unlimited group classes. Go punch off the pie.",
    cta: "Claim Silver",
    style: {
      card: "from-slate-300/20 to-slate-500/5 border-slate-300/50",
      tag: "text-slate-200",
      price: "from-white to-slate-400",
      cta: "from-slate-100 to-slate-300 hover:from-white hover:to-slate-200",
    },
  },
  {
    key: "kids",
    emoji: "🥋",
    tag: "Little warriors",
    pitch: "Somewhere for all that holiday sugar to go. You're welcome.",
    cta: "Claim Kids",
    style: {
      card: "from-emerald-400/20 to-emerald-600/5 border-emerald-400/50",
      tag: "text-emerald-300",
      price: "from-emerald-100 to-emerald-400",
      cta: "from-emerald-300 to-emerald-400 hover:from-emerald-200 hover:to-emerald-300",
    },
  },
];

/* A one-second clock. Null on the server so the static HTML carries no time. */
const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};
const nowInSeconds = () => Math.floor(Date.now() / 1000);
const noServerTime = () => null;

function Tape() {
  const run = BLACK_FRIDAY.soldOut
    ? `Black Friday ★ Sold out ★ All ${BLACK_FRIDAY.spots} spots claimed ★ `
    : `Black Friday ★ ${BLACK_FRIDAY.percentOff}% off your first month ★ Only ${BLACK_FRIDAY.spots} spots ★ Code ${BLACK_FRIDAY.code} ★ `;
  return (
    <div className="bg-yellow-400 text-black overflow-hidden py-2" aria-hidden="true">
      {/* Two identical halves, so sliding by 50% loops without a seam. */}
      <div className="flex w-max animate-bf-tape">
        {[0, 1].map((half) => (
          <span key={half} className="shrink-0 whitespace-pre text-xs sm:text-sm font-black uppercase tracking-widest">
            {run.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}

function RoundClock({ secondsLeft }: { secondsLeft: number | null }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const units =
    secondsLeft === null
      ? [["--", "days"], ["--", "hrs"], ["--", "min"], ["--", "sec"]]
      : [
          [String(Math.floor(secondsLeft / 86400)), "days"],
          [pad(Math.floor(secondsLeft / 3600) % 24), "hrs"],
          [pad(Math.floor(secondsLeft / 60) % 60), "min"],
          [pad(secondsLeft % 60), "sec"],
        ];

  return (
    <div role="timer" aria-label={`Offer ends ${BLACK_FRIDAY.endsLabel}`}>
      <p className="text-red-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
        Time left in the round
      </p>
      <div className="flex justify-center gap-2 sm:gap-3">
        {units.map(([value, label]) => (
          <div key={label} className="w-16 sm:w-20 bg-white/5 border border-white/10 rounded-xl py-2.5 sm:py-3">
            <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">{value}</div>
            <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeChip() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BLACK_FRIDAY.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked. The code is on screen, and the claim links carry it anyway.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-3 border-2 border-dashed border-yellow-400/60 hover:border-yellow-400 bg-yellow-400/10 rounded-xl px-5 py-3 transition-colors"
    >
      <span className="text-yellow-300 text-lg sm:text-xl font-black tracking-widest">{BLACK_FRIDAY.code}</span>
      <span className="text-slate-300 text-xs font-semibold w-20 whitespace-nowrap text-left" aria-live="polite">
        {copied ? "Copied! ✓" : "Tap to copy"}
      </span>
    </button>
  );
}

function SoldOut() {
  return (
    <section id="black-friday" className="relative bg-black overflow-hidden">
      <Tape />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <h2 className="text-5xl sm:text-7xl font-black tracking-tight pb-1 bg-gradient-to-b from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Sold out
        </h2>
        <p className="text-slate-300 text-base sm:text-xl mt-4 mb-8">
          All {BLACK_FRIDAY.spots} Black Friday spots went the distance. Your first class is still free, though.
        </p>
        <a
          href="#free-trial"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold transition-all hover:shadow-xl hover:shadow-blue-500/30"
        >
          Book Your Free Class
        </a>
      </div>
    </section>
  );
}

export default function BlackFriday() {
  const now = useSyncExternalStore(subscribe, nowInSeconds, noServerTime);
  const secondsLeft = now === null ? null : Math.floor(DEADLINE / 1000) - now;

  // Never advertise a code GymDesk will reject.
  if (secondsLeft !== null && secondsLeft <= 0) return null;
  if (BLACK_FRIDAY.soldOut) return <SoldOut />;

  return (
    <section id="black-friday" className="relative bg-black overflow-hidden">
      <Tape />

      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[44rem] h-[30rem] rounded-full bg-red-600/25 blur-[120px] animate-bf-glow" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full bg-yellow-500/15 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <p className="text-yellow-400 text-xs sm:text-sm font-black uppercase tracking-[0.2em] mb-3">
          Black Friday &middot; Through {BLACK_FRIDAY.endsLabel}
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-8">
          <span className="text-4xl sm:text-7xl animate-bf-jab-left" aria-hidden="true">🥊</span>
          <h2 className="font-black text-white leading-none tracking-tight">
            <span className="block whitespace-nowrap pb-1 text-5xl sm:text-8xl lg:text-9xl bg-gradient-to-b from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-bf-punch">
              {BLACK_FRIDAY.percentOff}% off
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl mt-1 sm:mt-2">your first month</span>
          </h2>
          <span className="text-4xl sm:text-7xl animate-bf-jab-right" aria-hidden="true">🥊</span>
        </div>

        <p className="text-slate-300 text-base sm:text-xl max-w-xl mx-auto mt-5 mb-8">
          Everyone else is fighting over TVs. Come learn how to actually fight.
        </p>

        <p className="inline-block -rotate-2 bg-red-600 text-white text-base sm:text-xl font-black uppercase tracking-wide px-5 py-2 rounded-lg mb-8 shadow-lg shadow-red-600/30">
          Only {BLACK_FRIDAY.spots} spots
        </p>

        <RoundClock secondsLeft={secondsLeft} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mt-10 text-left">
          {cards.map(({ key, emoji, tag, pitch, cta, style }) => {
            const price = blackFridayPrice(key);
            return (
              <div
                key={key}
                className={`relative flex flex-col rounded-2xl border-2 bg-gradient-to-br p-6 transition-transform duration-300 hover:-translate-y-1 ${style.card}`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                  <span className="absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm animate-sheen" />
                  <span className="absolute -right-2 -bottom-3 text-8xl rotate-12 opacity-15 select-none">{emoji}</span>
                </div>

                <p className={`relative text-xs font-black uppercase tracking-[0.15em] mb-1 ${style.tag}`}>{tag}</p>
                <h3 className="relative text-white font-bold text-xl mb-1">{price.name}</h3>
                <p className="relative text-slate-300 text-sm mb-4">{pitch}</p>

                <div className="relative flex items-end gap-3 mb-1 mt-auto">
                  <span className={`text-6xl font-black leading-none bg-gradient-to-b bg-clip-text text-transparent ${style.price}`}>
                    {price.first}
                  </span>
                  <span className="pb-1 leading-tight">
                    <s className="block text-slate-400 text-lg font-semibold">{price.regular}</s>
                    <span className="block text-yellow-300 text-xs font-black uppercase">Save {price.saved}</span>
                  </span>
                </div>
                <p className="relative text-slate-400 text-sm mb-5">
                  first month, then {price.regular}/month
                </p>

                <a
                  href={claimUrl(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block text-center bg-gradient-to-r text-[#0f1729] py-4 rounded-xl text-base font-black transition-all hover:shadow-lg hover:shadow-white/10 ${style.cta}`}
                >
                  {cta} &rarr;
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-slate-400 text-sm">The buttons fill in your code. Signing up another way?</p>
          <CodeChip />
        </div>

        <p className="text-slate-500 text-xs max-w-2xl mx-auto mt-8 leading-relaxed">
          New sign-ups only. {BLACK_FRIDAY.percentOff}% off the first monthly payment on Silver Monthly or Kids MMA with
          code {BLACK_FRIDAY.code} through {BLACK_FRIDAY.endsLabel}, 2026, or until {BLACK_FRIDAY.spots} spots are claimed,
          whichever comes first. Renews at the regular monthly price shown. Plus
          tax. No contracts, cancel anytime.
        </p>
      </div>
    </section>
  );
}
