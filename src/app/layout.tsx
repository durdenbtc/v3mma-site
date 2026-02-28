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
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://v3mma.com",
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
