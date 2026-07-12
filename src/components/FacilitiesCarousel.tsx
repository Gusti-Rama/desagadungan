"use client";

import { useRef } from "react";

const facilities = [
  {
    id: "gor",
    title: "Gedung Olahraga (GOR)",
    description:
      "Gedung serbaguna untuk berbagai kegiatan olahraga dan pertemuan warga.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
  },
  {
    id: "tenis",
    title: "Lapangan Tenis",
    description:
      "Fasilitas lapangan tenis outdoor untuk sarana olahraga dan rekreasi warga.",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 7.5h17.25c.621 0 1.125.504 1.125 1.125v7.5c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125-.504-1.125-1.125v-7.5c0-.621.504-1.125 1.125-1.125z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5v9M12 12h9"
        />
      </>
    ),
  },
  {
    id: "bulutangkis",
    title: "Bulu Tangkis",
    description:
      "Lapangan bulu tangkis yang dapat digunakan untuk latihan dan turnamen antar warga.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-5.428-1.59-1.59"
      />
    ),
  },
  {
    id: "studio",
    title: "Studio Band",
    description:
      "Fasilitas studio musik untuk menyalurkan bakat dan kreativitas pemuda desa.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19.5V15m6 4.5v-4.5M9 15l-3-3m3 3l3-3m3 3l-3-3m3 3l3-3M9 15v-9a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v9M3 15v-9a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v9"
      />
    ),
  },
  {
    id: "placeholder",
    title: "Fasilitas Baru",
    description:
      "Fasilitas lainnya yang akan segera ditambahkan di masa mendatang.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    ),
  },
];

export default function FacilitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340; // width of card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons (Desktop) */}
      <div className="mx-auto hidden max-w-7xl justify-end gap-3 px-4 sm:flex sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => scroll("left")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:bg-emerald-50 hover:text-emerald-600 hover:ring-1 hover:ring-emerald-200"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:bg-emerald-50 hover:text-emerald-600 hover:ring-1 hover:ring-emerald-200"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 lg:mx-auto lg:max-w-7xl"
      >
        {facilities.map((fac) => (
          <div
            key={fac.id}
            className="group relative flex w-[280px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md sm:w-[320px]"
          >
            {/* Image Placeholder */}
            <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center bg-gray-50 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="mb-2 h-10 w-10 text-gray-300 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-400">
                Foto {fac.title}
              </span>
            </div>

            {/* Content Area */}
            <div className="relative flex flex-1 flex-col p-6 pt-8">
              {/* Floating Icon */}
              <div className="absolute -top-6 right-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {fac.icon}
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-900">{fac.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{fac.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
