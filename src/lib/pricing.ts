/**
 * Single source of truth for membership pricing.
 *
 * Change prices HERE and nowhere else — every card, FAQ answer, page
 * description and JSON-LD block on the site reads from this file.
 *
 * How a promotion works: each plan carries its regular `list` price plus an
 * optional `promo` price. While `PROMO.active` is true the promo price is what
 * members actually pay and what the site quotes everywhere; the list price is
 * shown struck through on the pricing card so the discount is visible. Flip
 * `PROMO.active` to false when it ends and the site reverts to list prices on
 * its own — no copy to hunt down.
 */

export const PROMO = {
  active: true,
  /** Shown on the discount badge. Keep it short — it sits in a pill. */
  name: "2-Year Anniversary",
  /** Longer form for body copy. */
  blurb: "2-Year Anniversary pricing",
  /** Informational: the site does not expire the promo on its own. */
  endsOn: "2027-03-31",
} as const;

type PlanKey = "silver" | "kids" | "gold";

type Plan = {
  name: string;
  /** Regular monthly price in whole dollars. */
  list: number;
  /** Promotional monthly price, if this plan is part of the current promo. */
  promo?: number;
};

export const PLANS: Record<PlanKey, Plan> = {
  silver: { name: "Silver Monthly", list: 169, promo: 145 },
  kids: { name: "Kids MMA", list: 179, promo: 155 },
  gold: { name: "Gold Monthly", list: 349 },
};

/** Non-membership pricing. */
export const PRIVATE_PACK = { sessions: 4, price: 239 };

export const usd = (n: number) => `$${n}`;

/** What a member actually pays today. */
export function effective(key: PlanKey): number {
  const plan = PLANS[key];
  return PROMO.active && plan.promo !== undefined ? plan.promo : plan.list;
}

/** True when this plan is currently discounted. */
export function isDiscounted(key: PlanKey): boolean {
  return PROMO.active && PLANS[key].promo !== undefined;
}

/** Dollars off per month, 0 when not discounted. */
export function savings(key: PlanKey): number {
  return isDiscounted(key) ? PLANS[key].list - effective(key) : 0;
}

/** Whole-percent discount, 0 when not discounted. Derived, never hardcoded. */
export function discountPct(key: PlanKey): number {
  if (!isDiscounted(key)) return 0;
  return Math.round((savings(key) / PLANS[key].list) * 100);
}

/* ---- Ready-made strings for prose, metadata and JSON-LD ---------------- */

export const silverPrice = usd(effective("silver"));
export const kidsPrice = usd(effective("kids"));
export const goldPrice = usd(effective("gold"));
export const privatePackPrice = usd(PRIVATE_PACK.price);

/** e.g. "$145-$349/month" — what schema.org priceRange expects. */
export const priceRange = `${silverPrice}-${goldPrice}/month`;
