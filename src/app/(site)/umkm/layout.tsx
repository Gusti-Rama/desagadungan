import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UMKM",
  description:
    "Katalog UMKM Desa Gadungan — Temukan produk dan jasa berkualitas dari pengusaha lokal di Kecamatan Wedi, Kabupaten Klaten.",
};

export default function UmkmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
