import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Welcome to V3 MMA! | V3 MMA Gym — Port St. Lucie, FL",
  description:
    "You're officially part of V3 MMA. Here's everything you need to know before your first class.",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Analytics + Ads base config */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YVK6K48KY2"
        strategy="afterInteractive"
      />
      <Script id="gtag-thankyou" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YVK6K48KY2');
          gtag('config', 'AW-760719511');
        `}
      </Script>
      {/* Google Ads Conversion — fires on page load */}
      <Script id="gads-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'conversion', {
            'send_to': 'AW-760719511/egixCKX0kYwZEJfR3uoC',
            'value': 129.0,
            'currency': 'USD'
          });
        `}
      </Script>
      {children}
    </>
  );
}
