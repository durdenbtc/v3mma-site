import type { Metadata } from "next";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "No-Gi BJJ Classes in Port St. Lucie, FL | V3 MMA Gym & Fitness",
  description:
    "No-Gi Brazilian Jiu-Jitsu classes in Port St. Lucie. Learn submissions, sweeps, and ground control in small classes coached by a pro MMA fighter. Beginner-friendly, $129/month, no contracts.",
  keywords: [
    "BJJ classes Port St. Lucie",
    "Brazilian Jiu Jitsu Port St. Lucie",
    "no gi BJJ Port St. Lucie",
    "BJJ gym near me",
    "grappling classes Port St. Lucie",
    "jiu jitsu near me",
    "beginner BJJ classes",
    "V3 MMA BJJ",
  ],
  openGraph: {
    title: "No-Gi BJJ Classes in Port St. Lucie | V3 MMA",
    description:
      "Learn Brazilian Jiu-Jitsu from a pro fighter. No-gi grappling, small classes, free trial. $129/month.",
    url: "https://v3mma.com/bjj-port-st-lucie",
  },
  alternates: {
    canonical: "https://v3mma.com/bjj-port-st-lucie",
  },
};

export default function BJJPage() {
  return (
    <DisciplinePage
      discipline="No-Gi BJJ"
      tagline="Learn to control, submit, and dominate on the ground."
      heroDescription="Brazilian Jiu-Jitsu is the most effective ground fighting system in the world — and the great equalizer. Size and strength matter less when you know how to use leverage, position, and submissions. Our no-gi BJJ classes focus on practical grappling technique that works in competition and real-world situations."
      imageSrc="/images/gym-4.jpg"
      imageAlt="No-Gi BJJ classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "The Great Equalizer",
          description:
            "BJJ is built on the principle that a smaller, technical fighter can control and submit a larger opponent using leverage and technique. It's why BJJ changed martial arts forever.",
        },
        {
          title: "No-Gi = Practical Grappling",
          description:
            "No-gi BJJ doesn't rely on grabbing a uniform. You learn to control positions and submit opponents using underhooks, overhooks, and body mechanics — skills that transfer directly to MMA and self-defense.",
        },
        {
          title: "Small Classes, Real Instruction",
          description:
            "Max 15 per class. Your coach walks you through every technique, drills it with you, and watches your live rolling. No sitting on the sideline waiting for 5 minutes of attention.",
        },
        {
          title: "Saturday Open Mat",
          description:
            "Silver and Gold members get access to Saturday Open Mat — free rolling time to practice what you've learned with training partners at your level.",
        },
        {
          title: "MMA Fighter Coaching",
          description:
            "Shane Mistretta uses BJJ in professional MMA fights. He teaches the grappling that actually works under pressure — not just tournament-only moves that fall apart when someone's throwing punches.",
        },
        {
          title: "All-In at $129/Month",
          description:
            "Unlimited BJJ classes plus striking, MMA fitness, and everything else. No gi to buy, no belt test fees, no contracts. Just show up and train.",
        },
      ]}
      whatYouLearn={[
        "Fundamental positions — mount, guard, side control, back control",
        "Submissions — arm bars, triangles, guillotines, rear naked chokes",
        "Sweeps and reversals from bottom position",
        "Guard passing and top pressure",
        "Takedowns and takedown defense",
        "Escapes from bad positions",
        "Leg locks and lower body submissions",
        "Live rolling with partners at your level",
      ]}
      classFormat={[
        { label: "Duration", detail: "60 minutes — warm-up, technique instruction, positional drilling, live rolling" },
        { label: "Class Size", detail: "Max 15 students — plenty of mat space and coaching attention" },
        { label: "Equipment", detail: "No gi needed — wear a rash guard or t-shirt and shorts (no pockets or zippers)" },
        { label: "Level", detail: "All levels — structured drilling followed by rolling with appropriate partners" },
      ]}
      faqs={[
        {
          q: "What's the difference between gi and no-gi BJJ?",
          a: "In gi BJJ, you wear a heavy cotton uniform and can grab the fabric for control and submissions. In no-gi, you wear a rash guard and shorts — no grabbing clothes. No-gi relies more on body control and is more applicable to MMA and real-world self-defense. At V3 MMA in Port St. Lucie, we focus on no-gi.",
        },
        {
          q: "Do I need experience to start BJJ?",
          a: "Zero experience needed. BJJ has the steepest learning curve of any martial art — everyone struggles at first. Our classes in Port St. Lucie are designed so beginners learn fundamentals while more experienced grapplers work on advanced techniques in the same session.",
        },
        {
          q: "Is BJJ good for self-defense?",
          a: "BJJ is widely considered the most effective martial art for one-on-one self-defense situations. It teaches you to control an attacker, take them to the ground, and submit or restrain them without throwing strikes. It's the foundation of every MMA fighter's ground game.",
        },
        {
          q: "Where can I train BJJ in Port St. Lucie?",
          a: "V3 MMA offers no-gi BJJ at 476 NW Peacock Blvd #108, right off I-95 in Port St. Lucie. We're one of the most affordable BJJ programs in the area at $129/month for unlimited classes — plus you get access to striking classes too.",
        },
        {
          q: "How much does BJJ cost in Port St. Lucie?",
          a: "At V3 MMA, unlimited no-gi BJJ is $129/month — which includes every other class we offer. No gi to purchase, no belt testing fees, no contracts. We also offer Saturday Open Mat for additional rolling time. Free trial class available.",
        },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
      ]}
    />
  );
}
