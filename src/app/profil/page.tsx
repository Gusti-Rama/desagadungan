import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Desa",
  description:
    "Profil lengkap Desa Gadungan — statistik penduduk, informasi wilayah, dan lokasi desa di Kecamatan Wedi, Kabupaten Klaten.",
};

/**
 * Profil Desa Page — Village profile with hardcoded statistics,
 * welcome message, and embedded Google Maps.
 *
 * All data here is placeholder — edit the values directly in this file.
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
          SAMBUTAN KEPALA DESA
          ============================================ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Photo Placeholder */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-lg">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="mx-auto h-16 w-16 text-emerald-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <p className="mt-3 text-sm text-emerald-500">
                      Foto Kepala Desa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="lg:col-span-3">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Sambutan Kepala Desa
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                {/* TODO: Ganti dengan nama Kepala Desa */}
                Kepala Desa Gadungan
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Assalamu&apos;alaikum Warahmatullahi Wabarakatuh,
                </p>
                <p>
                  Puji syukur kehadirat Tuhan Yang Maha Esa, atas terselenggaranya
                  website resmi Desa Gadungan. Website ini merupakan sarana
                  komunikasi dan informasi antara pemerintah desa dengan
                  masyarakat Desa Gadungan dan masyarakat luas pada umumnya.
                </p>
                <p>
                  Melalui website ini, kami berharap dapat memberikan informasi
                  yang akurat dan terkini mengenai kegiatan pemerintahan,
                  pembangunan, dan kemasyarakatan di Desa Gadungan.
                </p>
                <p>
                  Kami mengundang seluruh warga dan masyarakat umum untuk aktif
                  memberikan masukan dan saran demi kemajuan Desa Gadungan yang
                  kita cintai bersama.
                </p>
                <p className="font-medium text-gray-900">
                  Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATISTIK DESA
          ============================================ */}
      <section
        id="statistik-desa"
        className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Data & Statistik
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Statistik Desa
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Data demografis dan informasi umum Desa Gadungan
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat Card: Jumlah Penduduk */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121ZM19.573 15.905a.563.563 0 0 0 .373.486l.115.04c.65.22 1.174.645 1.433 1.245a7.066 7.066 0 0 0-.495-1.633.563.563 0 0 0-.486-.373l-.121.01a8.287 8.287 0 0 0-.82.225Z" />
                </svg>
              </div>
              {/* TODO: Ganti dengan data asli */}
              <p className="mt-4 text-3xl font-bold text-gray-900">2.500</p>
              <p className="mt-1 text-sm text-gray-500">Jumlah Penduduk</p>
            </div>

            {/* Stat Card: Jumlah RT/RW */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a.752.752 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </div>
              {/* TODO: Ganti dengan data asli */}
              <p className="mt-4 text-3xl font-bold text-gray-900">15 / 5</p>
              <p className="mt-1 text-sm text-gray-500">Jumlah RT / RW</p>
            </div>

            {/* Stat Card: Luas Wilayah */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
              </div>
              {/* TODO: Ganti dengan data asli */}
              <p className="mt-4 text-3xl font-bold text-gray-900">~200 Ha</p>
              <p className="mt-1 text-sm text-gray-500">Luas Wilayah</p>
            </div>

            {/* Stat Card: Mata Pencaharian */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:ring-emerald-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
              </div>
              {/* TODO: Ganti dengan data asli */}
              <p className="mt-4 text-xl font-bold text-gray-900">Pertanian</p>
              <p className="mt-1 text-sm text-gray-500">Mata Pencaharian Utama</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PETA LOKASI / GOOGLE MAPS
          ============================================ */}
      <section id="peta-lokasi" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Lokasi
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Peta Desa Gadungan
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Gadungan, Wedi, Kabupaten Klaten, Jawa Tengah
            </p>
          </div>

          {/* Google Maps Embed */}
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
        </div>
      </section>
    </>
  );
}
