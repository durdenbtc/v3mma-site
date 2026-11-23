import { PLANS, effective, usd } from "@/lib/pricing";

/**
 * Black Friday 2026 — sign-up discount on Silver and Kids, first payment only.
 *
 * Mirrors the "Black Friday 2026" discount in GymDesk. Changing a value here
 * does not change what GymDesk charges, so keep the two in step.
 */
export const BLACK_FRIDAY = {
  code: "BLACKFRIDAY",
  percentOff: 60,
  /** GymDesk's "Limited Use" on the code, shared by both plans. */
  spots: 20,
  /** Flip to true once GymDesk shows the code fully used. The site cannot tell on its own. */
  soldOut: false as boolean,
  /** End of day Nov 30 in Port St. Lucie (EST). The section hides itself after this. */
  endsAt: "2026-12-01T00:00:00-05:00",
  endsLabel: "Nov 30",
} as const;

/** GymDesk's own ids for the eligible plans, from its public signup form. */
const GYMDESK_MEMBERSHIP = { silver: "103263", kids: "123254" } as const;

export type BlackFridayPlan = keyof typeof GYMDESK_MEMBERSHIP;

/** Signup link with the code filled in and the plan already selected. */
export function claimUrl(key: BlackFridayPlan): string {
  return `https://v3-mma.gymdesk.com/signup?discount_code=${BLACK_FRIDAY.code}&membership=${GYMDESK_MEMBERSHIP[key]}`;
}

/** Prices before tax: what the first month costs, and what it returns to. */
export function blackFridayPrice(key: BlackFridayPlan) {
  const regular = effective(key);
  const off = Math.round(regular * BLACK_FRIDAY.percentOff) / 100;
  return {
    name: PLANS[key].name,
    regular: usd(regular),
    first: usd(regular - off),
    saved: usd(off),
  };
}
