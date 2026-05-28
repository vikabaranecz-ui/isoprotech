"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PhotoPair {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  label: string;
  city: string;
}

interface Props {
  pairs: PhotoPair[];
}

export function BeforeAfterGallery({ pairs }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? null : (i - 1 + pairs.length) % pairs.length)), [pairs.length]);
  const next = useCallback(() => setActive((i) => (i === null ? null : (i + 1) % pairs.length)), [pairs.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pairs.map((pair, i) => (
          <button
            key={pair.label + pair.city}
            onClick={() => setActive(i)}
            className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all text-left cursor-zoom-in"
            aria-label={`Bekijk ${pair.label} voor en na`}
          >
            <div className="grid grid-cols-2 h-52 relative">
              <div className="relative">
                <Image src={pair.before.src} alt={pair.before.alt} fill className="object-cover" sizes="20vw" />
                <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
              </div>
              <div className="relative">
                <Image src={pair.after.src} alt={pair.after.alt} fill className="object-cover" sizes="20vw" />
                <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
              </div>
              {/* hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2.5 shadow-lg">
                  <svg className="h-5 w-5 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-sm font-bold text-teal-800">{pair.label}</span>
              <span className="text-xs text-gray-400">{pair.city}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={close}
        >
          {/* Modal panel */}
          <div
            className="relative w-full max-w-4xl bg-teal-950 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div>
                <span className="font-bold text-white text-sm">{pairs[active].label}</span>
                <span className="text-white/50 text-xs ml-2">{pairs[active].city}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-xs">{active + 1} / {pairs.length}</span>
                <button
                  onClick={close}
                  className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Sluiten"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-0.5 bg-white/5">
              <div className="relative aspect-[3/4] max-h-[70vh]">
                <Image
                  src={pairs[active].before.src}
                  alt={pairs[active].before.alt}
                  fill
                  className="object-contain"
                  sizes="50vw"
                  priority
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  <span>VOOR</span>
                </div>
              </div>
              <div className="relative aspect-[3/4] max-h-[70vh]">
                <Image
                  src={pairs[active].after.src}
                  alt={pairs[active].after.alt}
                  fill
                  className="object-contain"
                  sizes="50vw"
                  priority
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  <span>NA</span>
                </div>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors shadow-lg"
              aria-label="Vorige"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors shadow-lg"
              aria-label="Volgende"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 py-3">
              {pairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-orange-400" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
                  aria-label={`Ga naar project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
