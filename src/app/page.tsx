import Link from "next/link";
import Script from "next/script";
import { reader } from "@/lib/reader";
import NewsCard from "@/components/NewsCard";

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

  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-emerald-100 backdrop-blur-sm ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Portal Resmi Desa
            </div>

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

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Visi */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-emerald-100 transition-all hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Visi</h3>
              <p className="text-lg leading-relaxed italic text-gray-700">
                &quot;Terwujudnya masyarakat Desa Gadungan yang sejahtera, agamis, mandiri, dan berbudaya melalui tata kelola pemerintahan yang bersih dan inovatif.&quot;
              </p>
            </div>

            {/* Misi */}
            <div className="rounded-3xl bg-emerald-600 p-8 text-white shadow-md ring-1 ring-emerald-500 transition-all hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-6 text-2xl font-bold">Misi</h3>
              <ul className="space-y-4 text-emerald-50">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">1</span>
                  <span>Meningkatkan kualitas pelayanan publik pemerintahan desa yang transparan dan akuntabel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">2</span>
                  <span>Mendorong pertumbuhan ekonomi kerakyatan berbasis potensi lokal pertanian.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">3</span>
                  <span>Meningkatkan pembangunan infrastruktur desa yang merata dan tepat sasaran.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">4</span>
                  <span>Membina kehidupan masyarakat yang harmonis, agamis, dan melestarikan gotong royong.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          BERITA TERBARU SECTION
          ============================================ */}
      <section id="berita-terbaru" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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

          {/* News Grid */}
          {latestNews.length > 0 ? (
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
          ) : (
            // Empty state
            <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-12 text-center">
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

          {/* View All Link */}
          {latestNews.length > 0 && (
            <div className="mt-10 text-center">
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-100"
              >
                Lihat Semua Berita
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
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          GALERI INSTAGRAM SECTION
          ============================================ */}
      <section
        id="galeri-instagram"
        className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
