import type { Metadata } from "next";
import { reader } from "@/lib/reader";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "Berita",
  description:
    "Berita dan informasi terkini dari Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten.",
};

/**
 * Berita Page — Displays all news articles in a responsive grid.
 * Content is fetched from Keystatic at build time.
 */
export default async function BeritaPage() {
  // Fetch all news entries
  let allNews: Array<{
    slug: string;
    title: string;
    date: string;
    coverImage: string | null;
  }> = [];

  try {
    const allSlugs = await reader.collections.news.list();
    const entries = await Promise.all(
      allSlugs.map(async (slug) => {
        const entry = await reader.collections.news.read(slug);
        return entry ? { slug, ...entry } : null;
      })
    );

    allNews = entries
      .filter((n): n is NonNullable<typeof n> => n !== null)
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      })
      .map((n) => ({
        slug: n.slug,
        title: typeof n.title === "string" ? n.title : n.slug,
        date: n.date || new Date().toISOString(),
        coverImage: n.coverImage || null,
      }));
  } catch {
    // Content directory may not exist yet
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Informasi
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Berita Desa
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Kumpulan berita dan informasi terbaru seputar kegiatan dan
            perkembangan di Desa Gadungan.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {allNews.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allNews.map((news) => (
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
            // Empty State
            <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-16 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="mx-auto h-16 w-16 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Belum Ada Berita
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Berita akan muncul di sini setelah ditambahkan melalui panel
                admin Keystatic.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
