import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  slug: string;
  title: string;
  date: string;
  coverImage?: string | null;
}

/**
 * NewsCard — Displays a single news article preview with cover image,
 * title, date, and a hover effect with scale + shadow transition.
 */
export default function NewsCard({ slug, title, date, coverImage }: NewsCardProps) {
  // Format date to Indonesian locale
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/berita/${slug}`}
      id={`news-card-${slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 hover:ring-emerald-200"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder when no cover image
          <div className="flex h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-12 w-12 text-emerald-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
        )}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Date */}
        <time
          dateTime={date}
          className="text-xs font-medium tracking-wide text-emerald-600"
        >
          {formattedDate}
        </time>
        {/* Title */}
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700">
          {title}
        </h3>
        {/* Read More Arrow */}
        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-emerald-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Baca selengkapnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
