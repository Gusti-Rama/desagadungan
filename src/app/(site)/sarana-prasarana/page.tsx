import type { Metadata } from "next";
import FacilitiesCarousel from "@/components/FacilitiesCarousel";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sarana & Prasarana",
  description:
    "Sarana dan prasarana umum Desa Gadungan — fasilitas olahraga, ibadah, kesehatan, dan pendidikan.",
};

export default function SaranaPrasaranaPage() {
  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Fasilitas Desa
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Sarana & Prasarana
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Fasilitas umum yang tersedia untuk mendukung aktivitas warga Desa
            Gadungan.
          </p>
        </div>
      </section>

      {/* ============================================
          SARANA & PRASARANA
          ============================================ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Fasilitas Umum
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sarana & Prasarana
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Fasilitas yang tersedia untuk mendukung aktivitas warga
              </p>
            </div>
          </ScrollReveal>

          <FacilitiesCarousel />
        </div>
      </section>
    </>
  );
}
