import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "MMA Classes for Beginners | V3 MMA Gym — Port St. Lucie, FL",
  description:
    "Never done MMA? Start here. V3 MMA in Port St. Lucie offers beginner-friendly boxing, kickboxing, Muay Thai & BJJ classes with max 15 students. Coached by a pro fighter who teaches you from scratch. Free trial class.",
  keywords: [
    "MMA classes for beginners",
    "beginner MMA classes Port St. Lucie",
    "beginner martial arts classes near me",
    "MMA for beginners",
    "first time MMA class",
    "no experience MMA gym Port St. Lucie",
    "adult beginner martial arts Port St. Lucie",
    "start MMA training",
  ],
  openGraph: {
    title: "MMA Classes for Beginners | V3 MMA — Port St. Lucie",
    description:
      "Never trained before? Most of our members started the same way. Small classes, real coaching, no pressure. Free trial.",
    url: "https://v3mma.com/mma-classes-for-beginners",
  },
  alternates: { canonical: "https://v3mma.com/mma-classes-for-beginners" },
};

export default function BeginnerMMAPage() {
  return (
    <SiteShell>
    <DisciplinePage
      discipline="Beginner MMA"
      tagline="Never trained before? Neither had most of our members."
      heroDescription="V3 MMA is built for people starting from zero. Our classes cover boxing, kickboxing, Muay Thai, wrestling, and BJJ — and every single one is designed to be accessible to complete beginners. With a max of 15 people per class, you won't get lost in a crowd. Coach Shane Mistretta (professional MMA fighter) teaches every technique from scratch and personally corrects your form."
      imageSrc="/images/142dd1814f7b.jpg"
      imageAlt="Beginner MMA classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "Designed for Day One",
          description: "Every class starts with fundamentals. You'll never be thrown into something you're not ready for. Our progressive teaching style means you build skills week over week.",
        },
        {
          title: "Small Classes = Real Coaching",
          description: "Max 15 per class. Your coach actually watches you, corrects your form, and makes sure you're learning properly. It's like semi-private training at a fraction of the cost.",
        },
        {
          title: "Learn Multiple Disciplines",
          description: "Boxing, kickboxing, Muay Thai, wrestling, and BJJ — all included in one membership. Find what you love or train them all. No extra fees.",
        },
        {
          title: "No Pressure, No Judgment",
          description: "We're not a hardcore fight gym full of pros looking to spar. V3 is a community of regular people learning martial arts together. Everyone was a beginner once.",
        },
        {
          title: "Get in Incredible Shape",
          description: "MMA training is one of the most effective full-body workouts available. You'll build cardio, strength, flexibility, and coordination while learning a real skill.",
        },
        {
          title: "Most Affordable in the Area",
          description: "$129/month gets you unlimited access to every class and every discipline. No contracts, no hidden fees. Try before you buy with a free trial class.",
        },
      ]}
      whatYouLearn={[
        "Basic boxing stance, guard, and fundamental punches",
        "How to throw and defend kicks (kickboxing & Muay Thai)",
        "Clinch work and knee strikes",
        "Takedown defense and basic wrestling positions",
        "Ground control fundamentals from BJJ",
        "How to combine striking and grappling",
        "Fitness conditioning through martial arts drills",
      ]}
      classFormat={[
        { label: "Who It's For", detail: "Complete beginners to intermediate students. No experience, athletic background, or fitness level required." },
        { label: "Class Structure", detail: "Warm-up, technique instruction with demonstration, partner drills at your pace, and conditioning. Coach guides you every step." },
        { label: "What to Bring", detail: "Comfortable workout clothes. We provide gloves and wraps for beginners. Free water and Gatorade included." },
        { label: "Class Size", detail: "Max 15 students per class. Small enough that the coach can give you real, individualized attention." },
      ]}
      faqs={[
        { q: "I'm completely out of shape — can I still start?", a: "Yes. Many members joined V3 specifically to get in shape. Classes are scalable — you work at your own pace, and your fitness improves naturally as you train. There's no minimum fitness requirement." },
        { q: "Will I have to spar or fight anyone?", a: "No. Sparring is never required. Partner drills are cooperative and controlled. You'll work with a partner on technique, but nobody is trying to hurt each other." },
        { q: "How often should a beginner train?", a: "We recommend starting with 2-3 classes per week. This gives your body time to recover while building skills consistently. Many members increase to 4-5 sessions as they get more comfortable." },
        { q: "What age do you accept?", a: "Adults of any age are welcome in our regular classes. We also have a dedicated Kids MMA program for ages 6-15." },
        { q: "What if I don't like it?", a: "No problem at all. Your first class is completely free with no obligations. And memberships are month-to-month with no contracts — you can cancel anytime." },
        { q: "How is V3 different from other gyms for beginners?", a: "Three things: class size (max 15 vs. 30-40 at most gyms), coaching (an active pro fighter, not a fitness instructor), and price ($129/month for unlimited everything). Most gyms charge more for worse instruction and bigger classes." },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
        { name: "Self-Defense", href: "/self-defense-classes-port-st-lucie" },
      ]}
    />
    </SiteShell>
  );
}
