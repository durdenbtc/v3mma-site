import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "Self-Defense Classes in Port St. Lucie, FL | V3 MMA Gym & Fitness",
  description:
    "Learn practical self-defense in Port St. Lucie at V3 MMA. Our MMA-based classes teach boxing, kickboxing, Muay Thai & BJJ techniques that actually work. Beginner-friendly, coached by a pro fighter. Free trial class.",
  keywords: [
    "self defense classes Port St. Lucie",
    "self defense Port St. Lucie FL",
    "women self defense classes Port St. Lucie",
    "learn self defense near me",
    "self defense training Treasure Coast",
    "martial arts self defense Port St. Lucie",
    "V3 MMA self defense",
  ],
  openGraph: {
    title: "Self-Defense Classes in Port St. Lucie | V3 MMA",
    description:
      "MMA-based self-defense classes taught by a pro fighter. Boxing, Muay Thai, BJJ — techniques that actually work. Free trial.",
    url: "https://v3mma.com/self-defense-classes-port-st-lucie",
  },
  alternates: { canonical: "https://v3mma.com/self-defense-classes-port-st-lucie" },
};

export default function SelfDefensePage() {
  return (
    <SiteShell>
    <DisciplinePage
      discipline="Self-Defense"
      tagline="Real self-defense skills — not theory, not choreography."
      heroDescription="Our classes teach practical self-defense through real martial arts disciplines: boxing for striking, Muay Thai for close-range fighting, and Brazilian Jiu-Jitsu for ground control. You'll learn to defend yourself standing and on the ground — skills that actually work in real situations. Every class is coached by Shane Mistretta, an active professional MMA fighter."
      imageSrc="/images/142dd1814f7b.jpg"
      imageAlt="Self-defense classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "Techniques That Actually Work",
          description: "No choreographed scenarios. You'll learn the same striking, grappling, and defensive skills used by real fighters — adapted for practical self-defense situations.",
        },
        {
          title: "Build Confidence & Awareness",
          description: "Training in a combat environment builds genuine confidence. You'll learn to stay calm under pressure and develop situational awareness that carries over into daily life.",
        },
        {
          title: "Full-Body Fitness Included",
          description: "Self-defense training at V3 doubles as a serious workout. You'll build strength, cardio endurance, and functional fitness while learning to protect yourself.",
        },
        {
          title: "Coached by a Pro Fighter",
          description: "Shane Mistretta (4-3 pro, 10-4 amateur) has tested these techniques in real fights. He teaches what works — not what looks good on YouTube.",
        },
        {
          title: "Small Classes, Real Attention",
          description: "Max 15 per class means you actually get coached. No getting lost in a crowd. Every student gets hands-on corrections and personalized feedback.",
        },
        {
          title: "Safe for All Levels",
          description: "Most members start with zero experience. Classes are structured so beginners learn fundamentals while more experienced students continue progressing.",
        },
      ]}
      whatYouLearn={[
        "Boxing fundamentals — jab, cross, hooks, and defensive movement",
        "Kick defense and clinch techniques from Muay Thai",
        "How to control and escape from the ground (BJJ)",
        "Distance management and situational awareness",
        "How to defend against common attacks (grabs, chokes, takedowns)",
        "De-escalation awareness and when to engage vs. disengage",
        "Conditioning and stamina for high-stress situations",
      ]}
      classFormat={[
        { label: "Warm-Up", detail: "10 minutes of movement drills and shadow boxing to get your body ready." },
        { label: "Technique", detail: "20-25 minutes of focused technique work — striking combinations, defensive drills, and grappling fundamentals." },
        { label: "Partner Drills", detail: "15-20 minutes of controlled partner work to apply techniques in realistic scenarios." },
        { label: "Cool Down", detail: "5 minutes of stretching and recovery." },
      ]}
      faqs={[
        { q: "Do I need martial arts experience for self-defense classes?", a: "Not at all. Most members start with zero experience. Our classes are designed to teach practical techniques from the ground up, with small class sizes so you get real coaching." },
        { q: "Is this different from the regular MMA classes?", a: "Our MMA Fitness classes ARE practical self-defense training. You'll learn boxing, kickboxing, Muay Thai, and wrestling techniques that are the foundation of real-world self-defense. We also offer dedicated BJJ classes twice weekly." },
        { q: "Are the self-defense classes safe?", a: "Absolutely. There's no forced sparring. Partner drills are controlled and progressive. You go at your own pace and our coach ensures a safe, respectful training environment." },
        { q: "How quickly will I learn to defend myself?", a: "Within your first few classes you'll learn fundamental strikes, defensive movement, and basic positioning. Consistency is key — most students feel significantly more confident within 4-6 weeks of regular training." },
        { q: "What should I wear to class?", a: "Comfortable workout clothes — athletic shorts or leggings and a t-shirt. We have gloves and wraps available for beginners. Free water and Gatorade provided." },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
      ]}
    />
    </SiteShell>
  );
}
