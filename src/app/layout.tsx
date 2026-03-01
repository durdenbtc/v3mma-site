import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "V3 MMA Gym & Fitness | Boxing, Kickboxing & MMA in Port St. Lucie, FL",
  description:
    "Port St. Lucie's most affordable semi-private MMA gym. Boxing, Kickboxing, Muay Thai, No-Gi BJJ & MMA Fitness classes coached by a pro fighter. Small classes, no experience needed. $129/month — no contracts.",
  keywords: [
    "MMA gym Port St. Lucie",
    "boxing classes Port St. Lucie",
    "kickboxing classes Port St. Lucie",
    "Muay Thai Port St. Lucie",
    "martial arts near me",
    "martial arts gym Port St. Lucie",
    "beginner MMA classes",
    "kids martial arts Port St. Lucie",
    "Brazilian Jiu Jitsu Port St. Lucie",
    "boxing gym near me",
    "kickboxing near me",
    "V3 MMA",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "V3 MMA Gym & Fitness | Boxing, Kickboxing & MMA in Port St. Lucie, FL",
    description:
      "Boxing, Kickboxing, Muay Thai & BJJ classes coached by a pro fighter. Small classes, no contracts. Starting at $129/month.",
    url: "https://v3mma.com",
    siteName: "V3 MMA Gym & Fitness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://v3mma.com/images/142dd1814f7b.jpg",
        width: 1200,
        height: 630,
        alt: "V3 MMA Gym — Boxing, MMA & Martial Arts in Port St. Lucie, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V3 MMA Gym & Fitness | Boxing, Kickboxing & MMA in Port St. Lucie, FL",
    description:
      "Boxing, Kickboxing, Muay Thai & BJJ classes coached by a pro fighter. Small classes, no contracts. Starting at $129/month.",
    images: ["https://v3mma.com/images/142dd1814f7b.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://v3mma.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I have no experience — can I still join V3 MMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Most of our members started with zero martial arts experience. Our classes in Port St. Lucie are designed to be beginner-friendly, and with a max of 15 people per class, you get real attention from the coach. We teach everything from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What does an MMA Fitness class involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MMA Fitness classes combine striking techniques like boxing, kickboxing, and Muay Thai with conditioning drills for a full-body workout. You'll learn real techniques while getting incredible cardio and strength training. No sparring required.",
      },
    },
    {
      "@type": "Question",
      name: "Does V3 MMA offer a free trial class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a free trial class so you can experience V3 MMA before committing. No obligations, no pressure. You can book online or just walk in during any scheduled class.",
      },
    },
    {
      "@type": "Question",
      name: "Are there contracts at V3 MMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No contracts. Memberships are month-to-month starting at $129/month and you can cancel anytime. We believe if you love the training, you'll stay.",
      },
    },
    {
      "@type": "Question",
      name: "What makes V3 MMA different from other gyms in Port St. Lucie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things: class size (max 15 people per session), price ($129/month for unlimited access to all disciplines), and coaching (Shane Mistretta is an active professional MMA fighter, not just a fitness instructor). V3 MMA is the most affordable semi-private MMA gym in Port St. Lucie and the only one where every class is coached by a verified pro fighter.",
      },
    },
    {
      "@type": "Question",
      name: "Where is V3 MMA located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "V3 MMA is located at 476 NW Peacock Blvd #108, Port St. Lucie, FL 34986. We're conveniently located near the Peacock Boulevard exit off I-95, making us easy to reach from anywhere in Port St. Lucie, Fort Pierce, or the Treasure Coast area. Free parking available.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "V3 MMA Gym & Fitness",
  description:
    "Semi-private MMA gym offering Boxing, Kickboxing, Muay Thai, No-Gi BJJ, and MMA Fitness classes in Port St. Lucie, FL.",
  url: "https://v3mma.com",
  telephone: "(772) 812-1499",
  email: "leon@v3mma.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "476 NW Peacock Blvd #108",
    addressLocality: "Port St. Lucie",
    addressRegion: "FL",
    postalCode: "34986",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.2939,
    longitude: -80.3718,
  },
  priceRange: "$129-$349/month",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "37",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Thursday"],
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Thursday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday"],
      opens: "16:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday"],
      opens: "11:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday"],
      opens: "19:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "11:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f1729" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YVK6K48KY2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YVK6K48KY2');
            gtag('config', 'AW-760719511');
          `}
        </Script>
        <Script
          src="https://app.gymdesk.com/js/widgets.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
