"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/peta/desa-gadungan", label: "Peta Desa Gadungan" },
  { href: "/peta/administrasi", label: "Peta Administrasi" },
  { href: "/peta/potensi-umkm", label: "Peta Potensi UMKM" },
];

/**
 * PetaTabs — Simple tab navigation shown at the top of every /peta/* page
 * so visitors can switch between the different village maps.
 */
export default function PetaTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              active
                ? "bg-white text-emerald-800 shadow-sm"
                : "bg-white/10 text-emerald-100 ring-1 ring-white/20 hover:bg-white/20"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
