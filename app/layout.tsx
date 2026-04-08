import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
