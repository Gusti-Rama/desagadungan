import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// ============================================
// Global SEO Metadata
// ============================================
export const metadata: Metadata = {
  title: {
    default: "Desa Gadungan — Portal Resmi Desa",
    template: "%s | Desa Gadungan",
  },
  description:
    "Website resmi Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten, Jawa Tengah. Informasi desa, berita terkini, dan profil desa.",
  keywords: [
    "Desa Gadungan",
    "Wedi",
    "Klaten",
    "Jawa Tengah",
    "website desa",
    "portal desa",
  ],
  openGraph: {
    title: "Desa Gadungan — Portal Resmi Desa",
    description:
      "Website resmi Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten, Jawa Tengah.",
    type: "website",
    locale: "id_ID",
  },
};

// ============================================
// Root Layout
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakarta.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
