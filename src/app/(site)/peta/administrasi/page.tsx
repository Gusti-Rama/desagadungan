import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PetaTabs from "@/components/PetaTabs";

export const metadata: Metadata = {
  title: "Peta Administrasi",
  description:
    "Peta administrasi Desa Gadungan — batas wilayah, dusun, RT/RW, Kecamatan Wedi, Kabupaten Klaten.",
};

/**
 * Peta Administrasi Page — Placeholder until the actual administrative
 * boundary map/image is provided. Follows the same visual pattern as the
 * other /peta/* pages.
 */
export default function PetaAdministrasiPage() {
  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Lokasi & Wilayah
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Peta Administrasi
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Batas wilayah administratif Desa Gadungan, Kecamatan Wedi,
            Kabupaten Klaten, Jawa Tengah.
          </p>
          <div className="mt-8">
            <PetaTabs />
          </div>
        </div>
      </section>

      {/* ============================================
          PETA ADMINISTRASI (PLACEHOLDER)
          ============================================ */}
      <section id="peta-administrasi" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Administrasi
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Peta Wilayah Administrasi
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Peta batas dusun, RT, dan RW Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* TODO: Ganti dengan gambar/peta administrasi asli */}
          <ScrollReveal variant="zoom">
            <div className="flex h-[450px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 text-center shadow-sm ring-1 ring-gray-200/60">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-gray-700">
                  Peta Administrasi Belum Tersedia
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Gambar atau data peta administrasi akan ditambahkan melalui panel admin
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
