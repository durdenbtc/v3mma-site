import type { Metadata } from "next";
import DisciplinePage from "@/components/DisciplinePage";

export const metadata: Metadata = {
  title: "Kids MMA & Martial Arts Classes in Port St. Lucie, FL | V3 MMA",
  description:
    "Kids martial arts and MMA classes in Port St. Lucie. Build confidence, discipline, and fitness in a safe, structured environment. Ages 6-15. Taught by a pro fighter. $149/month, no contracts.",
  keywords: [
    "kids martial arts Port St. Lucie",
    "kids MMA Port St. Lucie",
    "kids boxing classes Port St. Lucie",
    "martial arts for kids near me",
    "youth martial arts Port St. Lucie",
    "kids self defense classes",
    "children martial arts Port St. Lucie FL",
    "V3 MMA kids program",
  ],
  openGraph: {
    title: "Kids MMA & Martial Arts in Port St. Lucie | V3 MMA",
    description:
      "Kids martial arts taught by a pro fighter. Confidence, discipline, fitness. Ages 6-15. Free trial.",
    url: "https://v3mma.com/kids-mma-port-st-lucie",
  },
  alternates: {
    canonical: "https://v3mma.com/kids-mma-port-st-lucie",
  },
};

export default function KidsMMAPage() {
  return (
    <DisciplinePage
      discipline="Kids MMA"
      tagline="Build confidence, discipline, and real skills — not just participation trophies."
      heroDescription="Our Kids MMA program teaches children ages 6-15 real martial arts fundamentals in a safe, structured environment. Kids learn striking basics, grappling fundamentals, and self-defense skills while building the confidence, discipline, and physical fitness that carries over into everything else they do."
      imageSrc="/images/gym-6.jpg"
      imageAlt="Kids MMA and martial arts classes at V3 MMA in Port St. Lucie, FL"
      benefits={[
        {
          title: "Real Martial Arts, Not Daycare",
          description:
            "We teach actual technique — age-appropriate boxing, grappling, and self-defense. Kids learn skills they can use and build on, not just games with a martial arts theme.",
        },
        {
          title: "Confidence Through Competence",
          description:
            "Nothing builds a kid's confidence like learning they can handle themselves. Our students develop real self-assurance because they're developing real abilities.",
        },
        {
          title: "Discipline and Focus",
          description:
            "Martial arts training teaches kids to listen, follow instructions, push through challenges, and respect their training partners. Parents consistently tell us it carries over to school and home.",
        },
        {
          title: "Anti-Bullying Self-Defense",
          description:
            "Kids learn practical self-defense that emphasizes awareness, de-escalation, and physical techniques as a last resort. They gain the confidence to stand up for themselves without being aggressors.",
        },
        {
          title: "Pro Fighter Coaching",
          description:
            "Shane Mistretta brings the same expertise to kids classes that he brings to adults — scaled appropriately for young athletes. Kids get instruction from a real professional fighter, not a teen with a black belt.",
        },
        {
          title: "$149/Month — No Long-Term Contracts",
          description:
            "No belt testing fees, no equipment packages, no multi-year commitments. Just quality martial arts instruction for your child at a straightforward monthly price.",
        },
      ]}
      whatYouLearn={[
        "Basic boxing and striking technique (age-appropriate)",
        "Grappling fundamentals — takedowns, positions, escapes",
        "Self-defense awareness and practical techniques",
        "Balance, coordination, and agility drills",
        "Discipline, respect, and sportsmanship",
        "Physical fitness through martial arts conditioning",
        "Working with training partners safely",
        "Goal-setting and pushing through challenges",
      ]}
      classFormat={[
        { label: "Ages", detail: "6-15 years old — grouped by age and experience when possible" },
        { label: "Duration", detail: "45-60 minutes — warm-up, technique, drilling, and controlled practice" },
        { label: "Class Size", detail: "Small groups for safety and individual attention from the coach" },
        { label: "Safety", detail: "Controlled environment with appropriate gear — safety is the top priority" },
      ]}
      faqs={[
        {
          q: "What age can my child start MMA?",
          a: "Our Kids MMA program in Port St. Lucie accepts children ages 6-15. Kids are grouped by age and experience level when possible to ensure appropriate training partners and instruction.",
        },
        {
          q: "Is MMA safe for kids?",
          a: "Absolutely. Our kids program emphasizes technique, control, and safety above everything else. There's no unsupervised sparring or full-contact fighting. All activities are age-appropriate and closely monitored by our professional coach.",
        },
        {
          q: "Will martial arts make my child aggressive?",
          a: "The opposite, actually. Research consistently shows that martial arts training reduces aggression in children. Kids learn discipline, respect, and emotional control. They also learn that their skills come with responsibility — we emphasize that fighting is always a last resort.",
        },
        {
          q: "My child is shy / unathletic — is this right for them?",
          a: "Those are actually the kids who benefit most. Martial arts is individual progress, not team sports where less athletic kids get sidelined. Shy kids gain confidence through skill development, and unathletic kids build coordination and fitness at their own pace.",
        },
        {
          q: "How much are kids martial arts classes in Port St. Lucie?",
          a: "The V3 MMA Kids Program is $149/month with no contracts and no hidden fees. No belt testing fees, no required equipment purchases. We offer a free trial class so your child can experience it before you commit.",
        },
      ]}
      relatedDisciplines={[
        { name: "Boxing", href: "/boxing-port-st-lucie" },
        { name: "Kickboxing", href: "/kickboxing-port-st-lucie" },
        { name: "Muay Thai", href: "/muay-thai-port-st-lucie" },
        { name: "No-Gi BJJ", href: "/bjj-port-st-lucie" },
        { name: "MMA Fitness", href: "/mma-fitness-port-st-lucie" },
      ]}
    />
  );
}
