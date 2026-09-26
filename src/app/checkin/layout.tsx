import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trial Check-In | V3 MMA Gym",
  description: "In-gym kiosk for signing the V3 MMA participation waiver.",
  // Staff-facing kiosk — must never appear in search results.
  robots: { index: false, follow: false },
};

export default function CheckinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
