"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface BeforeAfterPair {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  label: string;
  city: string;
}

interface Props {
  pairs: BeforeAfterPair[];
}

export function BeforeAfterLightbox({ pairs }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (selected === null) return;
    setSliderPos(50);
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((s) => s !== null ? (s + 1) % pairs.length : null);
      if (e.key === "ArrowLeft") setSelected((s) => s !== null ? (s - 1 + pairs.length) % pairs.length : null);
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [selected, pairs.length]);

  function updateSlider(clientX: number) {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  }

  const p = selected !== null ? pairs[selected] : null;

  return (
    <>
      {/* Cards grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pairs.map((pair, i) => (
          <div
            key={pair.label + pair.city}
            className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md group"
            onClick={() => setSelected(i)}
          >
            <div className="relative grid grid-cols-2 h-52">
              <div className="relative">
                <Image src={pair.before.src} alt={pair.before.alt} fill className="object-cover" sizes="15vw" />
                <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
              </div>
              <div className="relative">
                <Image src={pair.after.src} alt={pair.after.alt} fill className="object-cover" sizes="15vw" />
                <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2">
                  <svg className="h-5 w-5 text-teal-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-3">
              <span className="text-sm font-bold text-teal-800">{pair.label}</span>
              <span className="text-xs text-gray-400 ml-2">{pair.city}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && p && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            aria-label="Sluiten"
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + pairs.length) % pairs.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            aria-label="Vorig"
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % pairs.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            aria-label="Volgend"
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="max-w-4xl w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Comparison slider */}
            <div className="relative h-[55vh] rounded-t-2xl overflow-hidden bg-black">
              <div
                ref={sliderRef}
                className="absolute inset-0 cursor-col-resize select-none"
                onMouseDown={(e) => { isDragging.current = true; updateSlider(e.clientX); }}
                onMouseMove={(e) => { if (isDragging.current) updateSlider(e.clientX); }}
                onMouseUp={() => { isDragging.current = false; }}
                onMouseLeave={() => { isDragging.current = false; }}
                onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
                onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
              >
                {/* After (full) */}
                <Image src={p.after.src} alt={p.after.alt} fill className="object-contain" sizes="90vw" priority />
                {/* Before (clipped) */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                  <Image src={p.before.src} alt={p.before.alt} fill className="object-contain" sizes="90vw" />
                </div>
                {/* Slider line */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none" style={{ left: `${sliderPos}%` }}>
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-teal-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
                    </svg>
                  </div>
                </div>
                {/* Labels */}
                <span className="absolute top-3 left-3 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none">VOOR</span>
                <span className="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none">NA</span>
              </div>
            </div>

            {/* Info */}
            <div className="bg-white rounded-b-2xl p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-teal-800 text-lg">{p.label}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{p.city}</p>
                <p className="text-xs text-orange-400 font-bold mt-2">Sleep de schuifbalk om voor en na te vergelijken</p>
              </div>
              <p className="text-xs text-gray-400 shrink-0 ml-4">{selected + 1} / {pairs.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
