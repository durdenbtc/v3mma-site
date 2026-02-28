import type { Metadata } from "next";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "Kickboxing Classes in Port St. Lucie, FL | V3 MMA Gym & Fitness",
  description:
    "Kickboxing classes in Port St. Lucie taught by a pro MMA fighter. Learn real striking — punches, kicks, combos — in small classes. Beginner-friendly, $129/month, no contracts. Free trial class.",
  keywords: [
    "kickboxing classes Port St. Lucie",
    "kickboxing gym Port St. Lucie",
    "cardio kickboxing Port St. Lucie",
    "kickboxing near me",
    "beginner kickboxing classes",
    "kickboxing training Port St. Lucie FL",
    "adult kickboxing classes",
    "V3 MMA kickboxing",
  ],
  openGraph: {
    title: "Kickboxing Classes in Port St. Lucie | V3 MMA",
    description:
      "Real kickboxing from a pro fighter. Small classes, proper technique, free trial. $129/month.",
    url: "https://v3mma.com/kickboxing-port-st-lucie",
  },
  alternates: {
    canonical: "https://v3mma.com/kickboxing-port-st-lucie",
  },
};

export default function KickboxingPage() {
  return (
    <DisciplinePage
      discipline="Kickboxing"
      tagline="Real kickboxing technique — not a glorified cardio class."
      heroDescription="Our kickboxing classes combine punches and kicks into a high-energy, full-body workout that also teaches you real striking technique. You'll learn how to throw proper roundhouse kicks, check kicks, and put combinations together — all coached by a professional fighter who uses these skills in the cage."
      imageSrc="/images/gym-2.jpg"
      imageAlt="Kickboxing classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "Technique + Fitness Combined",
          description:
            "Unlike cardio kickboxing classes where you shadowbox to music, our program teaches you actual striking technique. You'll get an incredible workout AND learn a real skill.",
        },
        {
          title: "Kicks, Punches, and Combinations",
          description:
            "Learn roundhouse kicks, front kicks, teeps, and how to combine them with boxing to build a complete striking game. This is what real fighters train.",
        },
        {
          title: "Small Classes, Personal Attention",
          description:
            "Max 15 per class. Your coach watches your form, fixes your technique, and pushes you to improve — not just yells 'keep going!' from across the room.",
        },
        {
          title: "Burn 600-1,000 Calories Per Class",
          description:
            "Kickboxing is one of the highest calorie-burning workouts you can do. Our members see real body composition changes within the first month.",
        },
        {
          title: "Pro Fighter Coaching",
          description:
            "Shane Mistretta has used kickboxing in professional MMA fights. He teaches you the same techniques he uses in the cage — not watered-down fitness moves.",
        },
        {
          title: "All-Inclusive $129/Month",
          description:
            "Unlimited kickboxing plus boxing, Muay Thai, BJJ, and every other class we offer. No contracts, cancel anytime. Try us free first.",
        },
      ]}
      whatYouLearn={[
        "Proper kicking technique — roundhouse, front, and push kicks",
        "How to combine punches and kicks into effective combos",
        "Kick defense — checking, catching, and evading",
        "Distance management and timing",
        "Pad work and heavy bag drills for power",
        "Conditioning circuits specific to kickboxing",
        "Basic clinch work and knees",
        "Sparring fundamentals (optional, when ready)",
      ]}
      classFormat={[
        { label: "Duration", detail: "60 minutes — warm-up, technique drilling, pad/bag rounds, conditioning" },
        { label: "Class Size", detail: "Max 15 students — personal attention from your coach" },
        { label: "Equipment", detail: "Gloves provided for beginners — shin guards available when you're ready to spar" },
        { label: "Level", detail: "All levels — we scale intensity and complexity to your experience" },
      ]}
      faqs={[
        {
          q: "Is this cardio kickboxing or real kickboxing?",
          a: "Real kickboxing. You'll learn actual technique — proper kicks, punch combos, defense — not just shadowboxing to music. That said, you'll still burn a ton of calories because real kickboxing is an incredible workout.",
        },
        {
          q: "Do I need to be in shape to start kickboxing?",
          a: "No. Our kickboxing classes in Port St. Lucie are designed for all fitness levels. You'll build your conditioning as you learn. Most of our members were completely out of shape when they started.",
        },
        {
          q: "How is V3 MMA different from other kickboxing classes in Port St. Lucie?",
          a: "Most kickboxing classes in the area are cardio-focused with 30+ people and no real technique instruction. At V3, you train in small groups of 15 or fewer, coached by a professional MMA fighter who teaches you real striking. Plus your membership covers every discipline, not just kickboxing.",
        },
        {
          q: "What's the difference between kickboxing and Muay Thai?",
          a: "Kickboxing focuses on punches and kicks. Muay Thai adds elbows, knees, and clinch work — it's sometimes called 'the art of eight limbs.' We teach both at V3 MMA, and many members train in both to build a more complete striking game.",
        },
        {
          q: "How much are kickboxing classes in Port St. Lucie?",
          a: "Unlimited kickboxing at V3 MMA is $129/month — which includes every other class we offer too. No contracts, no hidden fees. We also offer a free trial class so you can experience it before committing.",
        },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
      ]}
    />
  );
}
