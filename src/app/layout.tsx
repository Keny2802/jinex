import type {
  Metadata
} from "next";
import {
  Kanit,
  Space_Grotesk
} from "next/font/google";
import "./globals.css";

const kanitFont = Kanit({
  variable: "--font-kanit",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  subsets: ["latin", "thai"]
});

const fontSpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Široké stavební a zámečnické služby - Jiří Nesměrák | jinex.cz",
  description: "Široké služby v oblasti stavebních a zámečnických prací v západočeském regionu.",
  icons: {
    icon: {
      url: "/favicon-32x32.png",
      type: "image/png"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSpaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
