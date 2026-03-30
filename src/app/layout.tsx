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
  authors: [
    {
      name: "Jiří Nesměrák",
      url: "https://www.jinex.cz"
    }
  ],
  title: "Široké stavební a zámečnické služby - Jiří Nesměrák | jinex.cz",
  description: "Jsme tým zkušených lidí ve stavebnictví, kteří Vám poskytnou stavební práce od A do Z.",
  icons: {
    icon: {
      url: "/favicon-32x32.png",
      type: "image/png"
    }
  },
  keywords: [
    "Zemní práce",
    "Výkopové práce",
    "Stavební a zámečnické konstrukce",
    "Společné prostory bytových prostorů",
    "Rekonstrukce a odizolování základů a kanalizace",
    "Rekonstrukce fasád a lodžií",
    "Rekonstrukce sociálních bytů",
    "Ploty a terasy",
    "Koupelny",
    "stavebnictví",
    "rekonstrukce",
    "fasáda",
    "fasády",
    "sociální byty",
    "zámečnictví",
    "zámečnické konstrukce",
    "terasy",
  ],
  openGraph: {
    title: "Široké stavební a zámečnické služby - Jiří Nesměrák | jinex.cz",
    description: "Jsme tým zkušených lidí ve stavebnictví, kteří Vám poskytnou stavební práce od A do Z.",
    images: [
      {
        height: 1200,
        width: 630,
        url: "/sluzby/vykopove-prace/vykopove-prace-1.avif",
        type: "image/avif"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
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
        className={`${fontSpaceGrotesk.variable} ${kanitFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
