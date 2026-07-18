"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { umkmData } from "@/data/umkm";

/**
 * UMKM Catalog Page — Grid listing of village small businesses
 * with search filtering, photo placeholders, and detail page links.
 */
export default function UmkmPage() {
  const [search, setSearch] = useState("");

  const filtered = umkmData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.owner.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 py-16 sm:py-20">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Katalog UMKM
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            UMKM Desa Gadungan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Dukung pengusaha lokal Desa Gadungan, Kecamatan Wedi, Kabupaten
            Klaten. Temukan produk dan jasa berkualitas dari warga desa.
          </p>
        </div>
      </section>

      {/* ============================================
          SEARCH & CATALOG
          ============================================ */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <ScrollReveal variant="fade-up">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Katalog UMKM
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {filtered.length} usaha ditemukan
                </p>
              </div>
              <div className="relative w-full sm:w-80">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  id="search-umkm"
                  type="text"
                  placeholder="Cari UMKM..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* UMKM Grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, index) => (
                <ScrollReveal
                  key={item.slug}
                  variant="zoom"
                  delay={index * 80}
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:ring-emerald-200">
                    {/* Image / Placeholder */}
                    <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="h-10 w-10 text-gray-300"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                            />
                          </svg>
                          <span className="text-xs text-gray-400">
                            Tanpa Foto
                          </span>
                        </div>
                      )}
                      {/* Category Badge */}
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-700">
                        {item.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                        {item.shortDesc}
                      </p>

                      {/* Location */}
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3.5 w-3.5 shrink-0 text-gray-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.145c.182-.1.425-.247.717-.446.581-.4 1.328-.992 2.059-1.786C14.594 15.16 16 12.81 16 10a6 6 0 0 0-12 0c0 2.81 1.406 5.16 2.61 6.545.73.794 1.477 1.387 2.058 1.786.292.2.535.346.717.446a5.714 5.714 0 0 0 .299.154ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item.location}</span>
                      </div>

                      {/* Actions */}
                      <div className="mt-5 flex gap-3">
                        <a
                          href={`https://wa.me/${item.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-xl border border-gray-200 bg-white py-2.5 text-center text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
                        >
                          Hubungi
                        </a>
                        <Link
                          href={`/umkm/${item.slug}`}
                          className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md"
                        >
                          Profil Lengkap
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-sm ring-1 ring-gray-200/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="mb-4 h-16 w-16 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700">
                Tidak ada UMKM ditemukan
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Coba ubah kata kunci pencarian Anda.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
