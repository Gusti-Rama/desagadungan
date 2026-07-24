import Link from "next/link";
import Script from "next/script";
import { reader } from "@/lib/reader";
import NewsCard from "@/components/NewsCard";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

/**
 * Beranda (Home Page) — The main landing page for Desa Gadungan.
 *
 * Sections:
 * 1. Hero — Welcome banner with gradient background
 * 2. Berita Terbaru — 3 most recent news articles
 * 3. Galeri Instagram — Elfsight widget placeholder
 */
export default async function HomePage() {
  // Fetch all news entries and sort by date (newest first)
  let latestNews: Array<{
    slug: string;
    title: string;
    date: string;
    coverImage: string | null;
  }> = [];

  try {
    const allSlugs = await reader.collections.news.list();
    const allNews = await Promise.all(
      allSlugs.map(async (slug) => {
        const entry = await reader.collections.news.read(slug);
        return entry ? { slug, ...entry } : null;
      })
    );

    latestNews = allNews
      .filter((n): n is NonNullable<typeof n> => n !== null)
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 3)
      .map((n) => ({
        slug: n.slug,
        title: typeof n.title === "string" ? n.title : n.slug,
        date: n.date || new Date().toISOString(),
        coverImage: n.coverImage || null,
      }));
  } catch {
    // Content directory may not exist yet — show empty state
  }

  let formattedFacilities: Array<{
    slug: string;
    name: string;
    deskripsi: string;
    foto: string | null;
  }> = [];

  try {
    const fasilitasSlugs = await reader.collections.fasilitas.list();
    const fasilitasData = await Promise.all(
      fasilitasSlugs.map(async (slug) => {
        const entry = await reader.collections.fasilitas.read(slug);
        return entry ? { slug, ...entry } : null;
      })
    );

    formattedFacilities = fasilitasData
      .filter((f): f is NonNullable<typeof f> => f !== null)
      .map((fac) => ({
        slug: fac.slug,
        name: fac.name,
        deskripsi: fac.deskripsi,
        foto: fac.foto,
      }));
  } catch {
    // Content directory may not exist yet
  }

  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        id="hero"
        className="relative overflow-hidden bg-emerald-950"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
        </video>

        {/* Overlays to ensure text readability and maintain emerald theme */}
        <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Selamat Datang di{" "}
              <span className="bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text text-transparent">
                Desa Gadungan
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100/90 sm:text-xl">
              Desa yang asri dan sejahtera di Kecamatan Wedi, Kabupaten Klaten,
              Jawa Tengah. Bersama membangun desa yang maju, mandiri, dan
              berbudaya.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-wrap gap-4">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:bg-emerald-50 hover:shadow-xl hover:-translate-y-0.5"
              >
                Profil Desa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Baca Berita
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>


      {/* ============================================
          VISI & MISI SECTION
          ============================================ */}
      <section id="visi-misi" className="py-16 sm:py-20 lg:py-24 bg-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Arah Tujuan
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Visi & Misi
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Mewujudkan Desa Gadungan yang mandiri, sejahtera, dan berbudaya
              </p>
            </div>
          </ScrollReveal>

          {/* Visi */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mb-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-emerald-100 transition-all hover:shadow-md sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-lg leading-relaxed italic text-gray-700">
                &quot;Terwujudnya pelayanan publik yang transparan, akuntabilitas menuju masyarakat desa Gadungan yang maju, mandiri dan berdaya saing.&quot;
              </p>
            </div>
          </ScrollReveal>

          {/* Misi */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="rounded-3xl bg-emerald-600 p-8 text-white shadow-md ring-1 ring-emerald-500 sm:p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>

              <ol className="space-y-6 text-emerald-50">
                {/* Misi 1 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">1</span>
                  <span>Meningkatkan sumber daya manusia yang berkualitas dan kwantitas yang agamis yang nyaman dengan memakmurkan tempat peribatan di Desa Gadungan.</span>
                </li>

                {/* Misi 2 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">2</span>
                  <span>Memprogramkan peningkatan kwalitas Sumber Daya Manusia.</span>
                </li>

                {/* Misi 3 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">3</span>
                  <span>Memaksimalkan program pemerintah bidang pendidikan sehingga terwujud masyarakat yang cerdas.</span>
                </li>

                {/* Misi 4 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">4</span>
                  <div>
                    <span>Pemberdayaan potensi yang ada ditengah masyarakat Desa Gadungan.</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Pemberdayaan SDM terutama perempuan dan kerakyatan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Pemberdayaan SDA dengan mengedepankan pemberdayaan ekonomi kerakyatan.</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Misi 5 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">5</span>
                  <div>
                    <span>Mengoptimalkan penyelenggaraan pemerintah desa Gadungan meliputi:</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Pemerintah yang transparan, adil, cepat, tepat, dan benar.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Pelaksanaan pembangunan Desa Gadungan yang berkesinambungan dan mengedepankan masyarakat dengan gotong royong.</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Misi 6 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">6</span>
                  <span>Melanjutkan program-program pemerintah Desa Gadungan sebelumnya sebagaimana yang tercantum pada data dokumen RPJMDes Desa Gadungan.</span>
                </li>

                {/* Misi 7 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">7</span>
                  <div>
                    <span>Menciptakan kondisi masyarakat Desa Gadungan yang aman, tertib, rukun dalam bermasyarakat dengan mengedepankan prinsip-prinsip:</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Saling bersinergi dengan bergotong royong.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Menjunjung prinsip transparansi pemerintah desa Gadungan.</span>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Misi 8 */}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">8</span>
                  <div>
                    <span>Optimalisasi penyelenggaraan pemerintah Desa Gadungan yang meliputi:</span>
                    <ul className="mt-2 space-y-1.5 pl-2 text-sm text-emerald-100">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">a.</span>
                        <span>Pemerintahan yang akuntabilitas dan keterbukaan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">b.</span>
                        <span>Pelayanan kepada masyarakat yang prima, cepat, benar pada sasaran tanpa bayar.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">c.</span>
                        <span>Pelaksanaan pembangunan yang berkesinambungan dengan mengedepankan semangat gotong royong.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-300">d.</span>
                        <span>Mewujudkan masyarakat yang berkepribadian dalam kebudayaan.</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          LAYANAN INFORMASI
          ============================================ */}
      <section id="layanan-informasi" className="border-t border-gray-200/60 bg-gray-50/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Layanan Informasi
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Akses cepat ke berbagai informasi penting di desa kami.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Profil Desa Card */}
            <ScrollReveal variant="fade-up" delay={100}>
              <Link href="/profil" className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Profil Desa</h3>
                <p className="mb-8 flex-1 text-gray-600">
                  Transparansi data kependudukan, mencakup jumlah warga, sebaran jenis kelamin, dan statistik keluarga secara *real-time*.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                  Lihat Statistik
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

            {/* Peta Desa Card */}
            <ScrollReveal variant="fade-up" delay={200}>
              <Link href="/peta" className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Peta Desa</h3>
                <p className="mb-8 flex-1 text-gray-600">
                  Visualisasi batas wilayah, letak fasilitas umum, dan jalan desa untuk mempermudah pencarian lokasi.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors group-hover:text-amber-700">
                  Buka Peta
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

            {/* UMKM Card */}
            <ScrollReveal variant="fade-up" delay={300}>
              <Link href="/umkm" className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">UMKM</h3>
                <p className="mb-8 flex-1 text-gray-600">
                  Mendukung pengusaha lokal dengan menampilkan produk, jasa, dan kontak langsung warga Desa Gadungan.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700">
                  Cari UMKM
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          SARANA & PRASARANA SECTION
          ============================================ */}
      <section id="sarana-prasarana" className="border-t border-gray-200/60 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="mb-8 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Fasilitas Desa
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sarana & Prasarana
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Fasilitas publik yang tersedia untuk mendukung kegiatan masyarakat Desa Gadungan
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Facilities Grid */}
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {formattedFacilities.slice(0, 3).map((fac) => (
              <div
                key={fac.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center bg-emerald-50 overflow-hidden">
                  {fac.foto ? (
                    <Image
                      src={fac.foto}
                      alt={fac.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-12 w-12 text-emerald-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="relative flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-700">{fac.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/sarana-prasarana"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 ring-1 ring-emerald-500/50 transition-all duration-300 hover:bg-emerald-500 hover:shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1 hover:scale-105"
            >
              Lihat Semua Fasilitas
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          BERITA TERBARU SECTION
          ============================================ */}
      <section id="berita-terbaru" className="border-t border-gray-200/60 bg-gray-50/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Informasi Terkini
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Berita Terbaru
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Kabar dan informasi terbaru dari Desa Gadungan
              </p>
            </div>
          </ScrollReveal>

          {/* News Grid */}
          {latestNews.length > 0 ? (
            <div className="mt-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {latestNews.map((news) => (
                  <NewsCard
                    key={news.slug}
                    slug={news.slug}
                    title={news.title}
                    date={news.date}
                    coverImage={news.coverImage}
                  />
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-10 flex justify-center">
                <Link
                  href="/berita"
                  className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 ring-1 ring-emerald-500/50 transition-all duration-300 hover:bg-emerald-500 hover:shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1 hover:scale-105"
                >
                  Lihat Semua Berita
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            // Empty state
            <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-12 text-center mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="mx-auto h-12 w-12 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              <p className="mt-4 text-sm text-gray-500">
                Belum ada berita. Berita akan muncul di sini setelah
                ditambahkan melalui panel admin.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          GALERI INSTAGRAM SECTION
          ============================================ */}
      <section
        id="galeri-instagram"
        className="border-t border-gray-200/60 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Media Sosial
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Galeri Instagram
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Ikuti kami di Instagram untuk informasi terbaru
              </p>
            </div>
          </ScrollReveal>

          <div
            id="instagram-widget-container"
            className="min-h-[300px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/60"
          >
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-d0903fd9-95b1-4ba0-b068-213aa46cbc71" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
    </>
  );
}
