import type { Metadata } from "next";
import DisciplinePage from "@/components/DisciplinePage";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Muay Thai Classes in Port St. Lucie, FL | V3 MMA Gym & Fitness",
  description:
    "Muay Thai training in Port St. Lucie with a professional MMA fighter coach. Learn the art of eight limbs — punches, kicks, elbows, knees, and clinch work. Small classes, $129/month, no contracts.",
  keywords: [
    "Muay Thai classes Port St. Lucie",
    "Muay Thai gym Port St. Lucie",
    "Muay Thai near me",
    "Thai boxing Port St. Lucie",
    "learn Muay Thai",
    "Muay Thai training Port St. Lucie FL",
    "beginner Muay Thai classes",
    "V3 MMA Muay Thai",
  ],
  openGraph: {
    title: "Muay Thai Classes in Port St. Lucie | V3 MMA",
    description:
      "Train Muay Thai with a pro fighter. Punches, kicks, elbows, knees. Small classes, free trial. $129/month.",
    url: "https://v3mma.com/muay-thai-port-st-lucie",
  },
  alternates: {
    canonical: "https://v3mma.com/muay-thai-port-st-lucie",
  },
};

export default function MuayThaiPage() {
  return (
    <SiteShell>
    <DisciplinePage
      discipline="Muay Thai"
      tagline="The art of eight limbs — taught by someone who's used them."
      heroDescription="Muay Thai is the most complete striking art in the world, using punches, kicks, elbows, and knees. Our classes teach you authentic Muay Thai technique — clinch work, devastating kicks, and the fight IQ that only comes from a coach who's competed professionally."
      imageSrc="/images/8835996ec94a.jpg"
      imageAlt="Muay Thai classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "The Complete Striking Art",
          description:
            "Muay Thai uses 8 points of contact — fists, elbows, knees, and shins. You'll build the most well-rounded striking game possible, which is why every MMA fighter trains Muay Thai.",
        },
        {
          title: "Authentic Training, Not Watered Down",
          description:
            "We teach real Muay Thai — clinch work, elbow strikes, knee strikes, and the Thai clinch. Not the stripped-down 'kickboxing with a Thai name' you find at chain gyms.",
        },
        {
          title: "Small Classes, Expert Coaching",
          description:
            "Max 15 students per class with a professional fighter coaching every session. You get hands-on correction and personalized feedback on your technique.",
        },
        {
          title: "Devastating Self-Defense",
          description:
            "Muay Thai is considered one of the most effective martial arts for real-world self-defense. The techniques are practical, direct, and battle-tested over centuries.",
        },
        {
          title: "Pro Fighter Instruction",
          description:
            "Coach Shane Mistretta uses Muay Thai in professional MMA competition. He teaches the same clinch entries, knee strikes, and kick setups he uses in the cage.",
        },
        {
          title: "$129/Month — All Disciplines Included",
          description:
            "Your membership covers Muay Thai plus boxing, kickboxing, BJJ, and every other class at V3 MMA. No contracts. Free trial available.",
        },
      ]}
      whatYouLearn={[
        "The Thai stance and guard fundamentals",
        "Roundhouse kicks — the most powerful kick in martial arts",
        "Elbow strikes — close-range devastating weapons",
        "Knee strikes and the Thai clinch",
        "Teeps (push kicks) for range control",
        "Combination striking with all 8 weapons",
        "Clinch offense and defense",
        "Pad work, heavy bag, and partner drills",
      ]}
      classFormat={[
        { label: "Duration", detail: "60 minutes — Thai warm-up, technique, pad rounds, clinch work, conditioning" },
        { label: "Class Size", detail: "Max 15 students — enough room to kick and get real coaching" },
        { label: "Equipment", detail: "Gloves and shin guards available for beginners — just bring yourself" },
        { label: "Level", detail: "All levels — beginners learn fundamentals while experienced students sharpen technique" },
      ]}
      faqs={[
        {
          q: "What's the difference between Muay Thai and kickboxing?",
          a: "Kickboxing uses punches and kicks. Muay Thai adds elbows, knees, and clinch fighting — giving you 8 weapons instead of 4. Muay Thai also includes clinch work, where you control your opponent and land devastating knees and elbows from close range. We teach both at V3 MMA.",
        },
        {
          q: "Is Muay Thai good for beginners?",
          a: "Absolutely. Our Muay Thai classes in Port St. Lucie are structured for all levels. Beginners learn stance, basic kicks, and simple combinations while more advanced students work on clinch entries and complex striking. Everyone trains together and learns at their own pace.",
        },
        {
          q: "Where can I train Muay Thai in Port St. Lucie?",
          a: "V3 MMA offers authentic Muay Thai training at 476 NW Peacock Blvd #108, right off I-95 in Port St. Lucie. We're the only gym in the area where Muay Thai is taught by a professional MMA fighter in small classes of 15 or fewer.",
        },
        {
          q: "Will I get hurt training Muay Thai?",
          a: "Safety is a priority. We drill technique on pads and bags before any partner contact. Sparring is always optional and controlled. Our small class sizes mean your coach can monitor everyone and ensure drills are done safely.",
        },
        {
          q: "How much does Muay Thai training cost in Port St. Lucie?",
          a: "At V3 MMA, unlimited Muay Thai classes are $129/month — and that includes access to every other discipline we offer. No contracts, cancel anytime. Book a free trial to try before you commit.",
        },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
        { name: "Kids MMA", href: "/kids-mma-port-st-lucie" },
      ]}
    />
    </SiteShell>
  );
}
