import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "Women's Kickboxing Classes in Port St. Lucie, FL | V3 MMA Gym",
  description:
    "Kickboxing classes for women in Port St. Lucie at V3 MMA. Learn real striking technique, burn calories, and build confidence in a supportive environment. Max 15 per class, coached by a pro fighter. Free trial.",
  keywords: [
    "women kickboxing Port St. Lucie",
    "womens kickboxing classes near me",
    "kickboxing for women Port St. Lucie FL",
    "women self defense classes Port St. Lucie",
    "women fitness kickboxing Treasure Coast",
    "ladies boxing classes Port St. Lucie",
    "female martial arts Port St. Lucie",
  ],
  openGraph: {
    title: "Women's Kickboxing Classes in Port St. Lucie | V3 MMA",
    description:
      "Real kickboxing technique + serious fitness. Small classes coached by a pro. Free trial class.",
    url: "https://v3mma.com/women-kickboxing-port-st-lucie",
  },
  alternates: { canonical: "https://v3mma.com/women-kickboxing-port-st-lucie" },
};

export default function WomenKickboxingPage() {
  return (
    <SiteShell>
    <DisciplinePage
      discipline="Women's Kickboxing"
      tagline="Real technique. Real fitness. Not a dance class."
      heroDescription="V3 MMA's kickboxing classes aren't watered-down cardio kickboxing — you'll learn actual striking technique from a professional fighter while getting an incredible full-body workout. Our co-ed classes are welcoming and supportive, with women making up a growing part of our community. Max 15 per class means you get real coaching, not just someone yelling at you to keep moving."
      imageSrc="/images/01bfa571c65b.jpg"
      imageAlt="Women's kickboxing classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "Real Striking Technique",
          description: "Learn proper punches, kicks, elbows, and knees from a professional MMA fighter. You'll actually know how to throw a punch — not just flail at a bag.",
        },
        {
          title: "Serious Calorie Burn",
          description: "Kickboxing is one of the highest calorie-burning workouts out there — up to 800 calories per session. You'll build lean muscle, improve cardio, and see real body composition changes.",
        },
        {
          title: "Build Practical Confidence",
          description: "There's a difference between gym confidence and knowing-you-can-handle-yourself confidence. Training in martial arts builds the real kind — the kind that carries into every area of your life.",
        },
        {
          title: "Self-Defense Skills Built In",
          description: "Every kickboxing class teaches practical self-defense by default. You'll learn distance management, defensive movement, and striking techniques that work in real situations.",
        },
        {
          title: "Supportive, Welcoming Environment",
          description: "V3 is not a testosterone-fueled fight gym. Our members range from complete beginners to experienced athletes, and everyone supports each other. No egos, no judgment.",
        },
        {
          title: "Small Classes — You Won't Get Ignored",
          description: "With a max of 15 per class, our coach can actually watch your form, give corrections, and make sure you're progressing. It's like semi-private training at a group class price.",
        },
      ]}
      whatYouLearn={[
        "Proper boxing technique — jab, cross, hooks, uppercuts",
        "Kicks — front kicks, roundhouse kicks, push kicks",
        "Knee and elbow strikes from Muay Thai",
        "Defensive footwork and head movement",
        "Heavy bag combinations for power and cardio",
        "Partner pad drills for timing and accuracy",
        "Core conditioning and functional strength",
      ]}
      classFormat={[
        { label: "Warm-Up", detail: "Shadow boxing and dynamic stretching to get your heart rate up and body loose." },
        { label: "Technique Rounds", detail: "Focused instruction on striking combinations. Coach demonstrates, you practice with corrections." },
        { label: "Bag & Pad Work", detail: "Apply combinations on heavy bags and partner-held pads. Build power, speed, and cardio." },
        { label: "Conditioning", detail: "Short, intense finishing rounds — bodyweight circuits, core work, or partner drills." },
      ]}
      faqs={[
        { q: "Are the kickboxing classes women-only?", a: "Our classes are co-ed — men and women train together. The atmosphere is welcoming and supportive, and a growing number of our members are women. You'll never feel out of place." },
        { q: "I've never done any martial arts — is that OK?", a: "Most of our members started as complete beginners. Classes are designed to build skills progressively, and with only 15 people max, the coach works with you individually." },
        { q: "Will I actually learn to fight or is it just a workout?", a: "Both. You'll learn real kickboxing and Muay Thai technique — proper form, combinations, defensive skills. The workout is a byproduct of learning to actually fight. It's not choreographed cardio kickboxing." },
        { q: "What do I need to bring?", a: "Just workout clothes (leggings or shorts and a t-shirt). We have gloves and wraps available for beginners, plus free cold water and Gatorade." },
        { q: "How much does it cost?", a: "Memberships start at $129/month for unlimited classes — all disciplines included. No contracts, cancel anytime. Your first class is free." },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "Self-Defense", href: "/self-defense-classes-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
      ]}
    />
    </SiteShell>
  );
}
