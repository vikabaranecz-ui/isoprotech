// src/app/realisaties/ProjectGallery.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/content/projects";
import { VIDEOS } from "@/lib/constants";

export function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showBefore, setShowBefore] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((selected + 1) % projects.length);
      if (e.key === "ArrowLeft") setSelected((selected - 1 + projects.length) % projects.length);
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => { setShowBefore(false); setSliderPos(50); }, [selected]);

  function handleSliderMove(e: React.MouseEvent | React.TouchEvent) {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  }

  const p = selected !== null ? projects[selected] : null;

  return (
    <>
      {/* Video section */}
      <div className="mb-12">
        <h2 className="text-xl font-extrabold text-teal-800 mb-6">Bekijk ons werk</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl overflow-hidden bg-black aspect-video">
            <iframe
              src={`${VIDEOS.mainShowreel}?rel=0&modestbranding=1`}
              title="ISOPROTECH — Gevelisolatie showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-black aspect-video">
            <iframe
              src={`${VIDEOS.projectHighlight}?rel=0&modestbranding=1`}
              title="ISOPROTECH — Project highlight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Before/after highlight */}
      <div className="mb-12">
        <h2 className="text-xl font-extrabold text-teal-800 mb-6">Voor en na</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter(pr => pr.beforePhoto).map((pr, i) => (
            <div
              key={pr.id}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
              onClick={() => setSelected(projects.indexOf(pr))}
            >
              <div className="grid grid-cols-2 h-48">
                <div className="relative">
                  <Image src={pr.beforePhoto!.src} alt={pr.beforePhoto!.alt} fill className="object-cover" sizes="25vw" />
                  <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">VOOR</span>
                </div>
                <div className="relative">
                  <Image src={pr.photo.src} alt={pr.photo.alt} fill className="object-cover" sizes="25vw" />
                  <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">NA</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-teal-800 text-sm mb-1">{pr.title}</h3>
                <div className="flex gap-2 mb-2">
                  {pr.workType.map(w => <span key={w} className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded">{w}</span>)}
                  <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{pr.location}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{pr.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Single-photo projects grid — only projects without a beforePhoto */}
      {projects.filter(pr => !pr.beforePhoto).length > 0 && (
        <>
          <h2 className="text-xl font-extrabold text-teal-800 mb-6">Meer realisaties</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(pr => !pr.beforePhoto).map((pr) => (
              <article
                key={pr.id}
                className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
                onClick={() => setSelected(projects.indexOf(pr))}
              >
                <div className="relative h-52">
                  <Image src={pr.photo.src} alt={pr.photo.alt} fill className="object-cover" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
                  {pr.videoUrl && (
                    <span className="absolute top-3 right-3 bg-teal-800/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">VIDEO</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 mb-1">{pr.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {pr.workType.map(w => <span key={w} className="text-xs font-semibold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">{w}</span>)}
                    <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{pr.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{pr.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Lightbox */}
      {selected !== null && p && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          {/* Close */}
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Sluiten">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          {/* Nav */}
          <button onClick={e => { e.stopPropagation(); setSelected((selected - 1 + projects.length) % projects.length); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Vorig">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); setSelected((selected + 1) % projects.length); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Volgend">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Image area */}
            <div className="relative flex-1 min-h-[300px] rounded-t-2xl overflow-hidden bg-black">
              {p.beforePhoto ? (
                // Before/after comparison slider
                <div
                  ref={sliderRef}
                  className="relative w-full h-full cursor-col-resize select-none"
                  onMouseMove={e => { if (e.buttons === 1) handleSliderMove(e); }}
                  onTouchMove={handleSliderMove}
                  onMouseDown={handleSliderMove}
                >
                  {/* After (full) */}
                  <Image src={p.photo.src} alt={p.photo.alt} fill className="object-contain" sizes="90vw" priority />
                  {/* Before (clipped) */}
                  <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                    <Image src={p.beforePhoto.src} alt={p.beforePhoto.alt} fill className="object-contain" sizes="90vw" />
                  </div>
                  {/* Slider line */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${sliderPos}%` }}>
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <svg className="h-5 w-5 text-teal-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6"/></svg>
                    </div>
                  </div>
                  {/* Labels */}
                  <span className="absolute top-3 left-3 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-lg">VOOR</span>
                  <span className="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-lg">NA</span>
                </div>
              ) : (
                <Image src={p.photo.src} alt={p.photo.alt} fill className="object-contain" sizes="90vw" priority />
              )}
            </div>
            {/* Info */}
            <div className="bg-white rounded-b-2xl p-5">
              <h3 className="font-bold text-teal-800 text-lg">{p.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2 mb-2">
                {p.workType.map(w => <span key={w} className="text-xs font-semibold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">{w}</span>)}
                <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{p.location}</span>
              </div>
              <p className="text-sm text-gray-600">{p.summary}</p>
              {p.beforePhoto && <p className="text-xs text-orange-500 font-bold mt-2">Sleep de schuifbalk om voor en na te vergelijken</p>}
              <p className="text-xs text-gray-400 mt-2">{selected + 1} / {projects.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
