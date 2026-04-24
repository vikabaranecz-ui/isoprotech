// src/app/realisaties/ProjectGallery.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/content/projects";

export function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  // Close on Escape
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected]);

  function goNext() {
    if (selected === null) return;
    setSelected((selected + 1) % projects.length);
  }

  function goPrev() {
    if (selected === null) return;
    setSelected((selected - 1 + projects.length) % projects.length);
  }

  return (
    <>
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
            onClick={() => setSelected(i)}
          >
            <div className="relative h-56">
              <Image
                src={p.photo.src}
                alt={p.photo.alt}
                fill
                className="object-cover"
                sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-teal-900/0 hover:bg-teal-900/20 transition-colors flex items-center justify-center">
                <svg className="h-10 w-10 text-white opacity-0 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <h2 className="font-bold text-teal-800 mb-1">{p.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.workType.map((wt) => (
                  <span key={wt} className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md">{wt}</span>
                ))}
                <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{p.location}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{p.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Sluiten"
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Vorig project"
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Volgend project"
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Image + info */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 rounded-t-2xl overflow-hidden bg-black">
              <Image
                src={projects[selected].photo.src}
                alt={projects[selected].photo.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="bg-white rounded-b-2xl p-5">
              <h3 className="font-bold text-teal-800 text-lg">{projects[selected].title}</h3>
              <div className="flex flex-wrap gap-2 mt-2 mb-2">
                {projects[selected].workType.map((wt) => (
                  <span key={wt} className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md">{wt}</span>
                ))}
                <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{projects[selected].location}</span>
              </div>
              <p className="text-sm text-gray-600">{projects[selected].summary}</p>
              <p className="text-xs text-gray-400 mt-3">{selected + 1} / {projects.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
