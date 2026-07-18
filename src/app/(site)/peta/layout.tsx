import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peta Desa",
  description:
    "Peta lokasi, batas administrasi, dan sebaran UMKM Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten.",
};

export default function PetaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
