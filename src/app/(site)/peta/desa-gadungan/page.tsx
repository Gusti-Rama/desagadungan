import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PetaTabs from "@/components/PetaTabs";

export const metadata: Metadata = {
  title: "Peta Desa Gadungan",
  description:
    "Peta lokasi Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten, Jawa Tengah.",
};

export default function PetaDesaGadunganPage() {
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
            Peta Desa Gadungan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Jelajahi lokasi fisik Desa Gadungan, Kecamatan Wedi, Kabupaten
            Klaten, Jawa Tengah.
          </p>
          <div className="mt-8">
            <PetaTabs />
          </div>
        </div>
      </section>

      {/* ============================================
          PETA LOKASI
          ============================================ */}
      <section id="peta-lokasi" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Lokasi
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Lokasi Desa Gadungan
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Peta interaktif lokasi Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* Google Maps Embed */}
          <ScrollReveal variant="zoom">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200/60">
              <iframe
                id="google-maps-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.5!2d110.58!3d-7.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3e6d24d2fcdf%3A0x7a5d3f76f0b1c5a0!2sGadungan%2C+Wedi%2C+Klaten!5e0!3m2!1sid!2sid!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Desa Gadungan"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
