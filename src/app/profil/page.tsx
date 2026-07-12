import type { Metadata } from "next";
import Demographics from "@/components/Demographics";

export const metadata: Metadata = {
  title: "Profil Desa",
  description:
    "Profil lengkap Desa Gadungan — statistik penduduk, informasi wilayah, dan lokasi desa di Kecamatan Wedi, Kabupaten Klaten.",
};

/**
 * Profil Desa Page — Village profile with hardcoded statistics,
 * and embedded Google Maps.
 *
 * All data here is placeholder — edit the values directly in this file or Demographics component.
 */
export default function ProfilDesaPage() {
  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Tentang Kami
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Profil Desa Gadungan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Mengenal lebih dekat Desa Gadungan, Kecamatan Wedi, Kabupaten
            Klaten, Jawa Tengah.
          </p>
        </div>
      </section>

      {/* ============================================
          STATISTIK DEMOGRAFI WARGA
          ============================================ */}
      <Demographics />

      {/* ============================================
          PETA LOKASI & PETA KHUSUS
          ============================================ */}
      <section id="peta-lokasi" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Lokasi & Wilayah
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Peta Desa Gadungan
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Jelajahi lokasi fisik, batas administrasi, dan potensi UMKM di Desa Gadungan.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200/60">
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

          {/* Peta Administrasi & UMKM (PDF Embeds) */}
          <div className="flex flex-col gap-12">
            {/* Peta Administrasi */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-200/60">
              <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
                <h3 className="font-bold text-gray-900">Peta Administrasi</h3>
              </div>
              {/* PDF Container - Large height for maps */}
              <div className="relative flex h-[600px] w-full flex-col items-center justify-center bg-gray-100/50 p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="mb-3 h-12 w-12 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  Area ini akan menampilkan dokumen PDF Peta Administrasi secara langsung.
                </p>
                {/* 
                  TODO: Ganti div ini dengan iframe di bawah saat PDF sudah siap dan ditaruh di folder public/ 
                  <iframe src="/peta-administrasi.pdf" className="absolute inset-0 w-full h-full" />
                */}
                <code className="rounded bg-emerald-50 px-2 py-1 text-xs text-emerald-600">
                  &lt;iframe src=&quot;/peta-administrasi.pdf&quot; /&gt;
                </code>
              </div>
            </div>

            {/* Peta UMKM */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-200/60">
              <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
                <h3 className="font-bold text-gray-900">Peta Potensi UMKM</h3>
              </div>
              {/* PDF Container - Large height for maps */}
              <div className="relative flex h-[600px] w-full flex-col items-center justify-center bg-gray-100/50 p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="mb-3 h-12 w-12 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  Area ini akan menampilkan dokumen PDF Peta UMKM secara langsung.
                </p>
                {/* 
                  TODO: Ganti div ini dengan iframe di bawah saat PDF sudah siap dan ditaruh di folder public/ 
                  <iframe src="/peta-umkm.pdf" className="absolute inset-0 w-full h-full" />
                */}
                <code className="rounded bg-emerald-50 px-2 py-1 text-xs text-emerald-600">
                  &lt;iframe src=&quot;/peta-umkm.pdf&quot; /&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
