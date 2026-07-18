"use client";

import { useRef } from "react";
import { facilities } from "../data/facilities";

interface FacilitiesCarouselProps {
  limit?: number;
}

export default function FacilitiesCarousel({ limit }: FacilitiesCarouselProps) {
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

  const displayFacilities = limit ? facilities.slice(0, limit) : facilities;

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
        {displayFacilities.map((fac) => (
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
