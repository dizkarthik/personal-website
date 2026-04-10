import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { UTMTracker } from "@/components/ui/utm-tracker";

import "./globals.css";

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export const metadata: Metadata = {
  title: "Karthik M | Product Designer | Scalable Digital Products",
  description:
    "I’m a Product Designer focused on building and scaling digital products. I work on complex systems and collaborate with teams to deliver meaningful outcomes.",
  openGraph: {
    title: "Karthik M | Product Designer | Scalable Digital Products",
    description:
      "I’m a Product Designer focused on building and scaling digital products.",
    url: "https://www.dizkarthik.com",
    siteName: "Karthik Portfolio",
    images: [
      {
        url: "https://www.dizkarthik.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik M | Product Designer",
    description: "Product Designer building scalable digital products.",
    images: ["https://www.dizkarthik.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        {clarityProjectId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityProjectId}");`}
          </Script>
        ) : null}
        <UTMTracker />
        {children}
      </body>
    </html>
  );
}
