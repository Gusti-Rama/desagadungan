import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./(site)/globals.css";

// ============================================
// Font Configuration
// ============================================
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Desa Gadungan — Portal Resmi Desa",
    template: "%s | Desa Gadungan",
  },
  description:
    "Website resmi Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten, Jawa Tengah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
