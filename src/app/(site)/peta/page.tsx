"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const tabs = [
  { id: "desa", label: "Peta Desa Gadungan" },
  { id: "administrasiumkm", label: "Peta Administrasi dan UMKM" },
  { id: "arahaliranairtanah", label: "Peta Arah Aliran Air Tanah" },
  { id: "administrasidusunbeku", label: "Peta Administrasi Dusun Beku" },
] as const;

type TabId = (typeof tabs)[number]["id"];

/**
 * Peta Page — Dedicated map page with tabbed navigation
 * between three different map views: village location,
 * administrative boundaries, and UMKM distribution.
 */
export default function PetaPage() {
  const [activeTab, setActiveTab] = useState<TabId>("desa");

  return (
    <>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 py-16 sm:py-20">
        {/* Decorative background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-sm ring-1 ring-white/20">
            Lokasi & Wilayah
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Peta Desa Gadungan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
            Jelajahi lokasi fisik, batas administrasi, dan potensi UMKM di Desa
            Gadungan, Kecamatan Wedi, Kabupaten Klaten.
          </p>

          {/* Tab Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-white text-emerald-800 shadow-lg shadow-emerald-900/30"
                      : "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 hover:ring-white/30"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          MAP CONTENT
          ============================================ */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Peta Desa Gadungan — Google Maps */}
          {activeTab === "desa" && (
            <ScrollReveal variant="fade" key="desa">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/60">
                <div className="border-b border-gray-100 bg-white px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Peta Desa Gadungan</h2>
                      <p className="text-sm text-gray-500">Lokasi Desa Gadungan di Google Maps</p>
                    </div>
                  </div>
                </div>
                <iframe
                  id="google-maps-embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.5!2d110.58!3d-7.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3e6d24d2fcdf%3A0x7a5d3f76f0b1c5a0!2sGadungan%2C+Wedi%2C+Klaten!5e0!3m2!1sid!2sid!4v1700000000000"
                  width="100%"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Desa Gadungan"
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Peta Administrasi & UMKM — PDF Embed */}
          {activeTab === "administrasiumkm" && (
            <ScrollReveal variant="fade" key="administrasiumkm">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/60">
                <div className="border-b border-gray-100 bg-white px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Peta Administrasi dan UMKM</h2>
                      <p className="text-sm text-gray-500">Batas wilayah administrasi dan sebaran lokasi UMKM Desa Gadungan</p>
                    </div>
                  </div>
                </div>
                {/* PDF Container */}
                <div className="relative flex h-[650px] w-full flex-col items-center justify-center bg-gray-50 p-0 text-center">
                  <iframe src="/peta/PETA_ADMINISTRASI_DAN_UMKM_GADUNGAN.pdf" className="absolute inset-0 w-full h-full border-0" title="Peta Administrasi dan UMKM Desa Gadungan" />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Peta Arah Aliran Air Tanah — PDF Embed */}
          {activeTab === "arahaliranairtanah" && (
            <ScrollReveal variant="fade" key="arahaliranairtanah">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/60">
                <div className="border-b border-gray-100 bg-white px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Peta Arah Aliran Air Tanah</h2>
                      <p className="text-sm text-gray-500">Peta arah aliran air tanah Desa Gadungan</p>
                    </div>
                  </div>
                </div>
                {/* PDF Container */}
                <div className="relative flex h-[650px] w-full flex-col items-center justify-center bg-gray-50 p-0 text-center">
                  <iframe src="/peta/PETA_ARAH_ALIRAN_AIR_TANAH.pdf" className="absolute inset-0 w-full h-full border-0" title="Peta Arah Aliran Air Tanah Desa Gadungan" />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Peta Administrasi Dusun Beku — PDF Embed */}
          {activeTab === "administrasidusunbeku" && (
            <ScrollReveal variant="fade" key="administrasidusunbeku">
              <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/60">
                <div className="border-b border-gray-100 bg-white px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Peta Administrasi Dusun Beku</h2>
                      <p className="text-sm text-gray-500">Batas wilayah administrasi Dusun Beku</p>
                    </div>
                  </div>
                </div>
                {/* PDF Container */}
                <div className="relative flex h-[650px] w-full flex-col items-center justify-center bg-gray-50 p-0 text-center">
                  <iframe src="/peta/Peta_Administrasi_Dusun_Beku.pdf" className="absolute inset-0 w-full h-full border-0" title="Peta Administrasi Dusun Beku" />
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
