import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free MMA Trial Class | V3 MMA Gym — Port St. Lucie, FL",
  description:
    "Try a free MMA class in Port St. Lucie. Boxing, kickboxing, Muay Thai & BJJ coached by a pro fighter. Max 15 per class, no experience needed, no obligations. Book your free trial now.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://v3mma.com/free-trial-offer" },
  openGraph: {
    title: "Free MMA Trial Class | V3 MMA Gym — Port St. Lucie, FL",
    description:
      "Try a free class — boxing, kickboxing, Muay Thai & BJJ coached by a pro fighter. No experience needed.",
    url: "https://v3mma.com/free-trial-offer",
    siteName: "V3 MMA Gym & Fitness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://v3mma.com/images/142dd1814f7b.jpg",
        width: 1200,
        height: 630,
        alt: "V3 MMA Gym — Free Trial Class in Port St. Lucie, FL",
      },
    ],
  },
};

export default function FreeTrialOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // gtag + GymDesk widgets are already loaded by the root layout.
  return children;
}
