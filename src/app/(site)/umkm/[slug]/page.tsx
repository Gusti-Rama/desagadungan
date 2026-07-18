"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { umkmData } from "@/data/umkm";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

/**
 * UMKM Detail Page — Full profile of a single UMKM business.
 * Shows hero image, business description, contact info,
 * and action buttons (WhatsApp, Google Maps, Share).
 */
export default function UmkmDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = umkmData.find((u) => u.slug === slug);
  const [shareMsg, setShareMsg] = useState("");

  if (!item) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center py-20">
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
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <h2 className="text-xl font-bold text-gray-700">UMKM Tidak Ditemukan</h2>
        <p className="mt-2 text-gray-500">
          Usaha yang Anda cari tidak ada dalam katalog.
        </p>
        <Link
          href="/umkm"
          className="mt-6 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
        >
          Kembali ke Katalog
        </Link>
      </section>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Lihat profil UMKM "${item.name}" di Desa Gadungan: ${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: item.name, text, url });
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(url);
      setShareMsg("Link disalin!");
      setTimeout(() => setShareMsg(""), 2000);
    }
  };

  return (
    <>
      {/* Back Navigation */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/umkm"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            Kembali ke Katalog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 sm:h-96">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.8}
              stroke="currentColor"
              className="h-16 w-16 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
            <span className="text-sm text-gray-400">Belum Ada Foto</span>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute right-4 top-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm ${
              item.status === "Aktif Buka"
                ? "bg-emerald-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                item.status === "Aktif Buka" ? "bg-emerald-200 animate-pulse" : "bg-red-200"
              }`}
            />
            {item.status === "Aktif Buka" ? "✓ Aktif Buka" : "✕ Tutup Sementara"}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left Column — Profile Info */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fade-up">
                {/* Name & Share */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      {item.name}
                    </h1>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        Pemilik: {item.owner}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z"
                      />
                    </svg>
                    {shareMsg || "Bagikan"}
                  </button>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-100" />

                {/* Full Description */}
                <div>
                  <h2 className="mb-4 text-lg font-bold text-gray-900">
                    Profil Usaha
                  </h2>
                  <p className="leading-relaxed text-gray-600">
                    {item.fullDesc}
                  </p>
                </div>

                {/* Location Info */}
                <div className="mt-8">
                  <h2 className="mb-4 text-lg font-bold text-gray-900">
                    Lokasi
                  </h2>
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.145c.182-.1.425-.247.717-.446.581-.4 1.328-.992 2.059-1.786C14.594 15.16 16 12.81 16 10a6 6 0 0 0-12 0c0 2.81 1.406 5.16 2.61 6.545.73.794 1.477 1.387 2.058 1.786.292.2.535.346.717.446a5.714 5.714 0 0 0 .299.154ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{item.location}</p>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Desa Gadungan, Kecamatan Wedi, Kabupaten Klaten
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column — Contact Card */}
            <div className="lg:col-span-1">
              <ScrollReveal variant="fade-left">
                <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-500">
                    Informasi Kontak
                  </h3>

                  <div className="flex flex-col gap-3">
                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${item.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-600 hover:shadow-md"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.526 5.864L.05 23.5l5.8-1.523A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.626-.536-5.107-1.46l-.366-.216-3.792.994.997-3.648-.243-.387A9.713 9.713 0 0 1 2.25 12 9.75 9.75 0 1 1 12 21.75z" />
                      </svg>
                      WhatsApp Sekarang
                    </a>

                    {/* Google Maps Button */}
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.145c.182-.1.425-.247.717-.446.581-.4 1.328-.992 2.059-1.786C14.594 15.16 16 12.81 16 10a6 6 0 0 0-12 0c0 2.81 1.406 5.16 2.61 6.545.73.794 1.477 1.387 2.058 1.786.292.2.535.346.717.446a5.714 5.714 0 0 0 .299.154ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Buka di Google Maps
                    </a>
                  </div>

                  {/* Owner Info */}
                  <div className="mt-6 rounded-xl bg-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.owner}
                        </p>
                        <p className="text-xs text-gray-500">Pemilik Usaha</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
