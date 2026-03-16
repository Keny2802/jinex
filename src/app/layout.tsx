import type {
  Metadata
} from "next";
import {
  Kanit
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
})

export const metadata: Metadata = {
  title: "Široké stavební a zámečnické služby - Jiří Nesměrák | jinex.cz",
  description: "Široké služby v oblasti stavebních a zámečnických prací v západočeském regionu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanitFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
