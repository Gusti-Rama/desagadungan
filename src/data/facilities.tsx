import React from "react";

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const facilities: Facility[] = [
  {
    id: "gor",
    title: "Gedung Olahraga (GOR)",
    description:
      "Gedung serbaguna untuk berbagai kegiatan olahraga dan pertemuan warga.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
  },
  {
    id: "tenis",
    title: "Lapangan Tenis",
    description:
      "Fasilitas lapangan tenis outdoor untuk sarana olahraga dan rekreasi warga.",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 7.5h17.25c.621 0 1.125.504 1.125 1.125v7.5c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125-.504-1.125-1.125v-7.5c0-.621.504-1.125 1.125-1.125z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5v9M12 12h9"
        />
      </>
    ),
  },
  {
    id: "bulutangkis",
    title: "Bulu Tangkis",
    description:
      "Lapangan bulu tangkis yang dapat digunakan untuk latihan dan turnamen antar warga.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-5.428-1.59-1.59"
      />
    ),
  },
  {
    id: "studio",
    title: "Studio Band",
    description:
      "Fasilitas studio musik untuk menyalurkan bakat dan kreativitas pemuda desa.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19.5V15m6 4.5v-4.5M9 15l-3-3m3 3l3-3m3 3l-3-3m3 3l-3-3M9 15v-9a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v9M3 15v-9a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v9"
      />
    ),
  },
  {
    id: "masjid",
    title: "Masjid Desa",
    description:
      "Tempat ibadah utama bagi warga desa Gadungan yang juga menjadi pusat kegiatan keagamaan.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 2.25a7.5 7.5 0 017.5 7.5c0 4.142-3.358 7.5-7.5 7.5a7.5 7.5 0 01-7.5-7.5c0-4.142 3.358-7.5 7.5-7.5zM12 6a6 6 0 100 12 6 6 0 000-12z"
      />
    ),
  },
];
