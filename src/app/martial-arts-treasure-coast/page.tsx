import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "Martial Arts Classes on the Treasure Coast | V3 MMA — Port St. Lucie, FL",
  description:
    "The Treasure Coast's most affordable MMA gym. V3 MMA in Port St. Lucie offers boxing, kickboxing, Muay Thai, BJJ & MMA fitness. Right off I-95 — easy access from Fort Pierce, Stuart, Jensen Beach & PSL. Free trial class.",
  keywords: [
    "martial arts Treasure Coast",
    "MMA gym Treasure Coast",
    "boxing gym Fort Pierce",
    "kickboxing classes Stuart FL",
    "martial arts near me Treasure Coast",
    "MMA training Fort Pierce",
    "boxing classes Jensen Beach",
    "martial arts Port St. Lucie",
    "Treasure Coast MMA",
    "combat sports Treasure Coast Florida",
  ],
  openGraph: {
    title: "Martial Arts on the Treasure Coast | V3 MMA — Port St. Lucie",
    description:
      "Boxing, kickboxing, Muay Thai, BJJ & MMA. Right off I-95 in Port St. Lucie — easy access from Fort Pierce, Stuart & Jensen Beach. Free trial.",
    url: "https://v3mma.com/martial-arts-treasure-coast",
  },
  alternates: { canonical: "https://v3mma.com/martial-arts-treasure-coast" },
};

export default function TreasureCoastPage() {
  return (
    <SiteShell>
    <DisciplinePage
      discipline="Martial Arts"
      tagline="The Treasure Coast's best-kept secret in MMA training."
      seoLocation="the Treasure Coast"
      heroDescription="V3 MMA is located in Port St. Lucie right off I-95, making it the most accessible MMA gym for the entire Treasure Coast region. Whether you're coming from Fort Pierce, Stuart, Jensen Beach, or anywhere in St. Lucie County — you're 15-20 minutes from professional-level MMA training at $129/month. Six disciplines, one membership, no contracts."
      imageSrc="/images/142dd1814f7b.jpg"
      imageAlt="Martial arts gym serving the Treasure Coast — V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "6 Disciplines Under One Roof",
          description: "Boxing, kickboxing, Muay Thai, wrestling, No-Gi BJJ, and MMA Fitness — all included in a single membership. Most Treasure Coast gyms specialize in one discipline. V3 offers them all.",
        },
        {
          title: "Right Off I-95 — Easy Access",
          description: "Located at 476 NW Peacock Blvd #108, Port St. Lucie — right off the Peacock Boulevard exit. Free parking. Whether you're driving from Fort Pierce (12 min), Stuart (20 min), or Jensen Beach (18 min), we're an easy commute.",
        },
        {
          title: "Most Affordable on the Treasure Coast",
          description: "$129/month for unlimited access to every class and every discipline. No contracts, cancel anytime. Compare that to $150-250/month at other Treasure Coast martial arts gyms — most of which only offer one discipline.",
        },
        {
          title: "Pro Fighter Coaching",
          description: "Head coach Shane Mistretta is an active professional MMA fighter (4-3 pro, 10-4 amateur) who has competed on FFC and Combat Night. You're learning from someone who actually fights — not just teaches.",
        },
        {
          title: "Small Classes, Real Attention",
          description: "Max 15 students per class. You won't get lost in a room of 40 people. Every student gets hands-on corrections and personalized feedback from the coach.",
        },
        {
          title: "Beginner-Friendly, All Levels Welcome",
          description: "Most members started with zero experience. Whether you're 18 or 55, an athlete or a couch potato, our classes meet you where you are and build you up from there.",
        },
      ]}
      whatYouLearn={[
        "Boxing — stance, footwork, combinations, and defensive movement",
        "Kickboxing — punches, kicks, and powerful combinations",
        "Muay Thai — elbows, knees, clinch work, and eight-limb striking",
        "No-Gi BJJ — submissions, sweeps, guard passing, and ground control",
        "Wrestling fundamentals — takedowns and takedown defense",
        "MMA conditioning — functional fitness built through martial arts training",
        "Self-defense skills — practical techniques that work in real situations",
      ]}
      classFormat={[
        { label: "Schedule", detail: "Morning, afternoon, and evening classes throughout the week including Saturday open mat. Check our schedule for full details." },
        { label: "Class Size", detail: "Max 15 per class — small enough for real coaching, big enough for quality partner work." },
        { label: "Experience Level", detail: "All classes are open to beginners through advanced. Techniques are taught progressively and coach adapts to each student." },
        { label: "Guest Coaches", detail: "Monthly boxing sessions with Chad Ritter (3x amateur champion, pro fighter) and weekly BJJ with Santiago Garcia (purple belt under Igor Feliz)." },
      ]}
      faqs={[
        { q: "Where exactly is V3 MMA located?", a: "476 NW Peacock Blvd #108, Port St. Lucie, FL 34986. We're right off the Peacock Boulevard exit on I-95, with free parking. Easy access from anywhere on the Treasure Coast." },
        { q: "How far is it from Fort Pierce?", a: "About 12 minutes south on I-95. Take exit 121 (Peacock Blvd) and we're right there in the shopping plaza." },
        { q: "How far from Stuart or Jensen Beach?", a: "Stuart is about 20 minutes north on I-95, Jensen Beach about 18 minutes. Quick, easy drive with no traffic headaches." },
        { q: "Is there a free trial?", a: "Yes — your first class is completely free. No obligations, no sales pitch. Just show up, train, and see if V3 is right for you." },
        { q: "What makes V3 different from other martial arts gyms on the Treasure Coast?", a: "Three things: variety (6 disciplines under one roof), price ($129/month for unlimited everything), and coaching quality (every class coached by a verified professional fighter). Most Treasure Coast gyms offer one discipline at a higher price with larger class sizes." },
        { q: "Do you have kids classes?", a: "Yes! Our Kids MMA program is designed for ages 6-15 and teaches discipline, fitness, and real martial arts skills in a safe environment." },
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
