import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profit Curve - Turning Media Into Profit",
  description:
    "Supercharge your business with Profit Curve. We help businesses automate workflows, scale faster, and turn media into profit with AI-powered solutions.",
  authors: [{ name: "Profit Curve" }],
  keywords: [
    "profit curve",
    "media marketing",
    "business automation",
    "AI",
    "digital marketing",
    "social media",
    "Raebareli",
  ],
  openGraph: {
    title: "Profit Curve - Turning Media Into Profit",
    description:
      "Supercharge your business with Profit Curve. We help businesses automate workflows, scale faster, and turn media into profit with AI-powered solutions.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15b817b6-67b0-453e-a1f3-769eb0dbc3a9/id-preview-b79d4913--c515af93-a482-465b-b28b-a42c0b71fec3.lovable.app-1775971269920.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Curve - Turning Media Into Profit",
    description:
      "Supercharge your business with Profit Curve. We help businesses automate workflows, scale faster, and turn media into profit with AI-powered solutions.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15b817b6-67b0-453e-a1f3-769eb0dbc3a9/id-preview-b79d4913--c515af93-a482-465b-b28b-a42c0b71fec3.lovable.app-1775971269920.png",
    ],
  },
  icons: {
    icon: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15b817b6-67b0-453e-a1f3-769eb0dbc3a9/id-preview-b79d4913--c515af93-a482-465b-b28b-a42c0b71fec3.lovable.app-1775971269920.png",
  },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
