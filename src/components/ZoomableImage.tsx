"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ZoomableImage({
  src,
  alt,
  gallery = [],
  wrapperClassName = "group relative cursor-pointer overflow-hidden rounded-xl",
  imageClassName = "h-auto w-full rounded-xl object-contain shadow-sm transition-transform duration-300 group-hover:scale-[1.02]",
}: {
  src: string;
  alt: string;
  gallery?: readonly string[];
  wrapperClassName?: string;
  imageClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = [src, ...gallery].filter(Boolean);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  return (
    <>
      <div 
        className={wrapperClassName}
        onClick={() => {
          setCurrentIndex(0);
          setIsOpen(true);
        }}
      >
        <img
          src={src}
          alt={alt}
          className={imageClassName}
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
          <span className="rounded-full bg-white/90 p-3 text-gray-900 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
            </svg>
            {allImages.length > 1 && (
              <span className="text-sm font-bold pr-1">
                + {allImages.length - 1} Foto
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-2 sm:p-4 backdrop-blur-sm"
        >
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Prev button */}
            {allImages.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {/* Next button */}
            {allImages.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6 sm:h-8 sm:w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

            <TransformWrapper
              key={currentIndex}
              initialScale={1}
              minScale={0.5}
              maxScale={5}
              centerOnInit={true}
              wheel={{ step: 0.1 }}
            >
              <TransformComponent 
                wrapperClass="!w-full !h-full" 
                contentClass="!w-full !h-full flex items-center justify-center"
              >
                <img
                  src={allImages[currentIndex]}
                  alt={`${alt} - Image ${currentIndex + 1}`}
                  className="max-h-[100vh] max-w-[100vw] object-contain cursor-grab active:cursor-grabbing"
                  draggable={false}
                />
              </TransformComponent>
            </TransformWrapper>

            {/* Helper text & Progress */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              {allImages.length > 1 && (
                <div className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium tracking-widest text-white backdrop-blur-md">
                  {currentIndex + 1} / {allImages.length}
                </div>
              )}
              <div className="rounded-full bg-black/50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white backdrop-blur-md pointer-events-none whitespace-nowrap">
                Scroll / cubit untuk zoom
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
