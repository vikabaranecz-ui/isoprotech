// src/app/realisaties/ProjectGallery.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/content/projects";
import { VIDEOS } from "@/lib/constants";

export function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((s) => s !== null ? (s + 1) % projects.length : null);
      if (e.key === "ArrowLeft") setSelected((s) => s !== null ? (s - 1 + projects.length) % projects.length : null);
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [selected]);

  const p = selected !== null ? projects[selected] : null;

  return (
    <>
      {/* Videos */}
      <div className="mb-12">
        <h2 className="text-xl font-extrabold text-teal-800 mb-6">Bekijk ons werk</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl overflow-hidden bg-black aspect-video">
            <iframe
              src={`${VIDEOS.mainShowreel}?rel=0&modestbranding=1`}
              title="ISOPROTECH — Gevelisolatie showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen className="w-full h-full" loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-black aspect-video">
            <iframe
              src={`${VIDEOS.projectHighlight}?rel=0&modestbranding=1`}
              title="ISOPROTECH — Project highlight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen className="w-full h-full" loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Before/after cards */}
      <div className="mb-12">
        <h2 className="text-xl font-extrabold text-teal-800 mb-6">Voor en na</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter(pr => pr.beforePhoto).map((pr) => (
            <div
              key={pr.id}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
              onClick={() => setSelected(projects.indexOf(pr))}
            >
              <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                <div className="relative">
                  <Image
                    src={pr.beforePhoto!.src} alt={pr.beforePhoto!.alt}
                    width={pr.beforePhoto!.width} height={pr.beforePhoto!.height}
                    className="w-full h-auto object-cover" sizes="20vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">VOOR</span>
                </div>
                <div className="relative">
                  <Image
                    src={pr.photo.src} alt={pr.photo.alt}
                    width={pr.photo.width} height={pr.photo.height}
                    className="w-full h-auto object-cover" sizes="20vw"
                  />
                  <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">NA</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-teal-800 text-sm mb-1">{pr.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {pr.workType.map(w => <span key={w} className="text-[10px] font-bold text-orange-400 bg-orange-50 px-2 py-0.5 rounded">{w}</span>)}
                  <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{pr.location}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{pr.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Single-photo projects */}
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
                <Image src={pr.photo.src} alt={pr.photo.alt} width={pr.photo.width} height={pr.photo.height} className="w-full h-auto" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
                <div className="p-5">
                  <h3 className="font-bold text-teal-800 mb-1">{pr.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {pr.workType.map(w => <span key={w} className="text-xs font-semibold text-orange-400 bg-orange-50 px-2.5 py-1 rounded-md">{w}</span>)}
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
          <button onClick={e => { e.stopPropagation(); setSelected((selected - 1 + projects.length) % projects.length); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Vorig">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); setSelected((selected + 1) % projects.length); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Volgend">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            {/* Photos */}
            {p.beforePhoto ? (
              <div className="grid grid-cols-2 gap-1 rounded-t-2xl overflow-hidden">
                <div className="relative">
                  <Image src={p.beforePhoto.src} alt={p.beforePhoto.alt} width={p.beforePhoto.width} height={p.beforePhoto.height} className="w-full h-auto max-h-[60vh] object-cover" sizes="45vw" priority />
                  <span className="absolute top-3 left-3 bg-red-500/90 text-white text-sm font-bold px-3 py-1 rounded-lg">VOOR</span>
                </div>
                <div className="relative">
                  <Image src={p.photo.src} alt={p.photo.alt} width={p.photo.width} height={p.photo.height} className="w-full h-auto max-h-[60vh] object-cover" sizes="45vw" priority />
                  <span className="absolute top-3 right-3 bg-green-500/90 text-white text-sm font-bold px-3 py-1 rounded-lg">NA</span>
                </div>
              </div>
            ) : (
              <div className="rounded-t-2xl overflow-hidden">
                <Image src={p.photo.src} alt={p.photo.alt} width={p.photo.width} height={p.photo.height} className="w-full h-auto max-h-[65vh] object-contain" sizes="90vw" priority />
              </div>
            )}

            {/* Info */}
            <div className="bg-white rounded-b-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-teal-800 text-lg">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1.5 mb-2">
                  {p.workType.map(w => <span key={w} className="text-xs font-semibold text-orange-400 bg-orange-50 px-2.5 py-1 rounded-md">{w}</span>)}
                  <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{p.location}</span>
                </div>
                <p className="text-sm text-gray-600">{p.summary}</p>
              </div>
              <p className="text-xs text-gray-400 shrink-0">{selected + 1} / {projects.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
