import type { Metadata } from "next";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "MMA Fitness Classes in Port St. Lucie, FL | V3 MMA Gym & Fitness",
  description:
    "MMA-style fitness classes in Port St. Lucie. Full-body conditioning using real martial arts techniques — boxing, kickboxing, and grappling drills. No fighting required. $129/month, no contracts.",
  keywords: [
    "MMA fitness Port St. Lucie",
    "MMA gym Port St. Lucie",
    "martial arts fitness classes",
    "MMA workout near me",
    "combat fitness Port St. Lucie",
    "martial arts gym Port St. Lucie",
    "fitness kickboxing Port St. Lucie",
    "V3 MMA fitness",
  ],
  openGraph: {
    title: "MMA Fitness Classes in Port St. Lucie | V3 MMA",
    description:
      "Train like a fighter, no fighting required. MMA-style fitness classes. Free trial. $129/month.",
    url: "https://v3mma.com/mma-fitness-port-st-lucie",
  },
  alternates: {
    canonical: "https://v3mma.com/mma-fitness-port-st-lucie",
  },
};

export default function MMAFitnessPage() {
  return (
    <DisciplinePage
      discipline="MMA Fitness"
      tagline="Train like a fighter. No fighting required."
      heroDescription="MMA Fitness takes the conditioning that professional fighters use and packages it into an accessible, high-energy class anyone can do. You'll hit pads, work the heavy bag, do bodyweight circuits, and build functional strength and cardio — all while learning real martial arts techniques along the way."
      imageSrc="/images/def064c56ca4.jpg"
      imageAlt="MMA Fitness classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "The Most Fun Workout You'll Ever Do",
          description:
            "Forget the treadmill. You'll throw punches, kick heavy bags, and do fighter conditioning circuits. Our members say MMA Fitness is the first workout they actually look forward to.",
        },
        {
          title: "Real Techniques, Not Just Exercise",
          description:
            "Unlike generic 'boot camp' classes, you'll learn actual boxing, kickboxing, and grappling techniques as part of your workout. You build fitness AND skills at the same time.",
        },
        {
          title: "No Sparring, No Contact",
          description:
            "MMA Fitness is 100% no-contact. You'll work on pads, bags, and conditioning drills. It's perfect if you want the fighter workout without any of the fighting.",
        },
        {
          title: "Burn 700-1,000 Calories",
          description:
            "MMA-style training is one of the highest calorie-burning workouts available. Full-body movements, constant variety, and intensity that you control.",
        },
        {
          title: "Coached by a Pro",
          description:
            "Even in a fitness-focused class, having a real fighter coach makes the difference. Shane ensures your technique is correct so you get maximum benefit from every movement.",
        },
        {
          title: "$129/Month — Everything Included",
          description:
            "MMA Fitness is included in your membership along with boxing, kickboxing, Muay Thai, and BJJ. Many members start with MMA Fitness and eventually try the technique classes too.",
        },
      ]}
      whatYouLearn={[
        "Boxing fundamentals — jab, cross, hook combinations",
        "Kick technique — roundhouse kicks, push kicks on the bag",
        "Heavy bag rounds — building power, speed, and endurance",
        "Pad work — accuracy and timing drills with a partner",
        "Fighter conditioning — bodyweight circuits used by pros",
        "Core strengthening — functional core work, not just crunches",
        "Flexibility and mobility — essential for martial arts movement",
        "Mental toughness — pushing through rounds builds real grit",
      ]}
      classFormat={[
        { label: "Duration", detail: "60 minutes — warm-up, technique intro, timed rounds, conditioning finisher" },
        { label: "Class Size", detail: "Max 15 students — your coach adapts the workout to your fitness level" },
        { label: "Equipment", detail: "Everything provided — just bring workout clothes and water" },
        { label: "Contact", detail: "Zero contact — all work is on pads, bags, and bodyweight" },
      ]}
      faqs={[
        {
          q: "Do I need to be in shape to start MMA Fitness?",
          a: "Not at all. Our MMA Fitness classes in Port St. Lucie are designed for all fitness levels. You go at your own pace, and our coach scales the intensity to where you are. Most of our members were completely out of shape when they started.",
        },
        {
          q: "Is there any fighting or sparring in MMA Fitness?",
          a: "No. MMA Fitness is 100% non-contact. All work is done on heavy bags, pads, and bodyweight exercises. It's the fighter workout without any actual fighting — perfect for anyone who wants the fitness benefits of martial arts training.",
        },
        {
          q: "How is this different from a regular gym or CrossFit?",
          a: "Three things: you learn real techniques (not just random exercises), you're coached by a professional fighter who ensures proper form, and class sizes are capped at 15 people. It's also way more fun than staring at a wall on a treadmill.",
        },
        {
          q: "Can I eventually transition to real martial arts classes?",
          a: "Absolutely — and many members do. Your MMA Fitness membership at V3 MMA includes access to every class we offer. When you feel ready, you can jump into boxing, kickboxing, Muay Thai, or BJJ with the fundamentals you've already built.",
        },
        {
          q: "How much does MMA Fitness cost in Port St. Lucie?",
          a: "At V3 MMA, unlimited MMA Fitness classes are $129/month — which also gives you access to every other class including boxing, kickboxing, Muay Thai, and BJJ. No contracts, cancel anytime. Free trial class available.",
        },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
      ]}
    />
  );
}
