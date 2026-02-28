import type { Metadata } from "next";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "Boxing Classes in Port St. Lucie, FL | V3 MMA Gym & Fitness",
  description:
    "Learn boxing in Port St. Lucie with a pro MMA fighter coach. Beginner-friendly boxing classes with small class sizes, proper technique training, and real sparring. Free trial class — $129/month, no contracts.",
  keywords: [
    "boxing classes Port St. Lucie",
    "boxing gym Port St. Lucie",
    "learn boxing near me",
    "beginner boxing classes",
    "boxing training Port St. Lucie FL",
    "adult boxing classes",
    "boxing lessons Port St. Lucie",
    "V3 MMA boxing",
  ],
  openGraph: {
    title: "Boxing Classes in Port St. Lucie | V3 MMA",
    description:
      "Learn boxing from a pro fighter. Small classes, real technique, free trial. Starting at $129/month.",
    url: "https://v3mma.com/boxing-port-st-lucie",
  },
  alternates: {
    canonical: "https://v3mma.com/boxing-port-st-lucie",
  },
};

export default function BoxingPage() {
  return (
    <DisciplinePage
      discipline="Boxing"
      tagline="Learn to box the right way — from a real fighter."
      heroDescription="Our boxing classes teach you proper stance, footwork, combinations, and defense from day one. Whether you want to get in shape, learn self-defense, or eventually step in the ring, you'll train with a professional MMA fighter who brings real fight IQ to every round."
      imageSrc="/images/gym-1.jpg"
      imageAlt="Boxing classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "Real Technique, Not Cardio Boxing",
          description:
            "This isn't a dance-around-with-gloves class. You'll learn actual boxing technique — jab, cross, hooks, uppercuts, head movement, and footwork drills used by competitive fighters.",
        },
        {
          title: "Small Classes, Real Coaching",
          description:
            "Max 15 people per class means your coach actually watches your form, corrects your mistakes, and pushes you to improve. No getting lost in a crowd of 40 people.",
        },
        {
          title: "Beginner-Friendly",
          description:
            "Never thrown a punch before? Perfect. Most of our members started with zero experience. We break everything down step by step and meet you where you are.",
        },
        {
          title: "Full-Body Workout",
          description:
            "Boxing is one of the best full-body workouts you can do. Expect to burn 500-800 calories per session while building core strength, coordination, and endurance.",
        },
        {
          title: "Coached by a Pro Fighter",
          description:
            "Shane Mistretta isn't a personal trainer who watched a YouTube course — he's a professional MMA fighter with a 4-3 pro record who's been in the ring and the cage.",
        },
        {
          title: "Affordable — $129/Month",
          description:
            "Unlimited boxing classes plus access to every other discipline at V3 MMA. No contracts, no sign-up fees, cancel anytime. That's less than most boxing-only gyms charge.",
        },
      ]}
      whatYouLearn={[
        "Proper boxing stance and guard",
        "Jab, cross, hook, and uppercut technique",
        "Defensive head movement and slipping",
        "Footwork and ring control",
        "Punch combinations and counter-punching",
        "Pad work and heavy bag drills",
        "Basic sparring (optional, when you're ready)",
        "Conditioning specific to boxing",
      ]}
      classFormat={[
        { label: "Duration", detail: "60 minutes — warm-up, technique, drills, conditioning" },
        { label: "Class Size", detail: "Max 15 students — you won't get lost in the crowd" },
        { label: "Equipment", detail: "Gloves and wraps available for beginners — just show up" },
        { label: "Level", detail: "All levels welcome — beginners train alongside experienced members" },
      ]}
      faqs={[
        {
          q: "Do I need boxing experience to join?",
          a: "Not at all. Most of our members in Port St. Lucie started with zero boxing experience. Our classes are structured so beginners learn proper fundamentals while more advanced students work on refining their skills.",
        },
        {
          q: "Will I have to spar?",
          a: "Sparring is always optional and only happens when you feel ready. Many of our members train boxing purely for fitness and self-defense without ever sparring.",
        },
        {
          q: "How is this different from other boxing gyms in Port St. Lucie?",
          a: "Two things: class size and coaching. Most boxing gyms pack 30-40 people into a class with one instructor. At V3 MMA, you train in groups of 15 or less with a professional MMA fighter who coaches every class personally. Plus, your membership includes access to kickboxing, Muay Thai, BJJ, and every other discipline — not just boxing.",
        },
        {
          q: "What should I bring to my first boxing class?",
          a: "Just comfortable workout clothes and water. We have gloves and wraps available for beginners. As you progress, we can help you pick out your own gear.",
        },
        {
          q: "How much do boxing classes cost in Port St. Lucie?",
          a: "At V3 MMA, unlimited boxing classes are included in our $129/month membership — which also gives you access to every other class we offer. No contracts, cancel anytime. We also offer a free 30-minute trial class so you can try before you commit.",
        },
      ]}
      relatedDisciplines={[
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
      ]}
    />
  );
}
