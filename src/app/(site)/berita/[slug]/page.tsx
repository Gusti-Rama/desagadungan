import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../../keystatic.config";
import MarkdocRenderer from "@/components/MarkdocRenderer";

/**
 * Generate static params for all news articles at build time.
 * Required for `output: 'export'` to pre-render all dynamic routes.
 *
 * Uses direct filesystem access to be resilient during build.
 */
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src", "content", "news");

  try {
    if (!fs.existsSync(contentDir)) {
      return [];
    }
    const entries = fs.readdirSync(contentDir, { withFileTypes: true });
    const slugs = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => ({ slug: entry.name }));

    return slugs;
  } catch {
    return [];
  }
}

/**
 * Generate dynamic metadata (title, description) for each news article.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const reader = createReader(process.cwd(), keystaticConfig);
    const entry = await reader.collections.news.read(slug);
    if (!entry) return { title: "Berita Tidak Ditemukan" };

    const title = typeof entry.title === "string" ? entry.title : slug;
    return {
      title,
      description: `Baca berita: ${title} — Desa Gadungan`,
    };
  } catch {
    return { title: "Berita" };
  }
}

/**
 * Berita Detail Page — Renders a single news article.
 * Uses generateStaticParams to pre-render at build time.
 */
export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Read the news entry
  let entry;
  try {
    const reader = createReader(process.cwd(), keystaticConfig);
    entry = await reader.collections.news.read(slug);
  } catch {
    notFound();
  }

  if (!entry) {
    notFound();
  }

  const title = typeof entry.title === "string" ? entry.title : slug;
  const formattedDate = entry.date
    ? new Date(entry.date).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  // Get the raw content for Markdoc rendering
  let contentData: any = null;
  try {
    contentData = await entry.content();
  } catch {
    contentData = null;
  }

  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 0 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            Kembali ke Berita
          </Link>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Date */}
          {formattedDate && (
            <time className="mt-4 block text-sm text-emerald-200">
              {formattedDate}
            </time>
          )}
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Cover Image */}
          {entry.coverImage && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={entry.coverImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}

          {/* Markdoc Content */}
          {contentData ? (
            <MarkdocRenderer content={contentData} />
          ) : (
            <p className="italic text-gray-500">
              Konten berita belum tersedia.
            </p>
          )}

          {/* Bottom Navigation */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 0 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                  clipRule="evenodd"
                />
              </svg>
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
