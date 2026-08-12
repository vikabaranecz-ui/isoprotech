// src/components/home/road-journey/icons.tsx
import type { RefObject } from "react";

/** Small "Isoprotech base" building the car pulls out of at the top of the route. */
export function BaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true">
      <path d="M4 26 L32 6 L60 26 Z" fill="#15353e" />
      <rect x="8" y="24" width="48" height="28" rx="2" fill="#1E4C59" />
      <rect x="26" y="34" width="12" height="18" fill="#F79448" />
      <rect x="13" y="30" width="9" height="8" rx="1" fill="#eef6f8" opacity="0.85" />
      <rect x="42" y="30" width="9" height="8" rx="1" fill="#eef6f8" opacity="0.85" />
    </svg>
  );
}

/** Isoprotech service vehicle. Wheels are separate groups so they can be rotated independently. */
export function CarIcon({
  className,
  frontWheelRef,
  rearWheelRef,
}: {
  className?: string;
  frontWheelRef: RefObject<SVGGElement>;
  rearWheelRef: RefObject<SVGGElement>;
}) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <ellipse cx="61" cy="52" rx="52" ry="4" fill="#15353e" opacity="0.12" />
      <path
        d="M8 40 L8 26 Q8 20 16 20 L34 20 L44 10 L86 10 Q94 10 94 18 L94 26 L108 26 Q114 26 114 32 L114 40 Z"
        fill="#1E4C59"
      />
      <path d="M46 14 L82 14 L88 22 L50 22 Z" fill="#cfe6ec" opacity="0.9" />
      <rect x="8" y="31" width="106" height="5" fill="#F79448" />
      <g ref={rearWheelRef}>
        <circle cx="26" cy="44" r="9" fill="#15353e" />
        <circle cx="26" cy="44" r="3.4" fill="#F79448" />
        <rect x="25.2" y="35.5" width="1.6" height="6" fill="#eef6f8" />
        <rect x="25.2" y="46.5" width="1.6" height="6" fill="#eef6f8" />
      </g>
      <g ref={frontWheelRef}>
        <circle cx="96" cy="44" r="9" fill="#15353e" />
        <circle cx="96" cy="44" r="3.4" fill="#F79448" />
        <rect x="95.2" y="35.5" width="1.6" height="6" fill="#eef6f8" />
        <rect x="95.2" y="46.5" width="1.6" height="6" fill="#eef6f8" />
      </g>
    </svg>
  );
}

/** Small floating badge with a magnifying-glass mark — used for the inspection stage. */
export function InspectBadge({
  label,
  innerRef,
  className,
}: {
  label: string;
  innerRef: RefObject<HTMLDivElement>;
  className?: string;
}) {
  return (
    <div
      ref={innerRef}
      className={`flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white py-1.5 pl-1.5 pr-2.5 opacity-0 shadow-md ring-1 ring-teal-900/10 ${className ?? ""}`}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-400/15">
        <svg viewBox="0 0 20 20" className="h-3 w-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M13 13 L17.5 17.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="hidden text-[10px] font-bold text-teal-800 xl:inline">{label}</span>
    </div>
  );
}

export interface HouseSceneRefs {
  roofOldRef: RefObject<SVGGElement>;
  roofNewRef: RefObject<SVGGElement>;
  wallsOldRef: RefObject<SVGGElement>;
  wallsNewRef: RefObject<SVGGElement>;
  scaffoldRef: RefObject<SVGGElement>;
}

/**
 * Layered house illustration: shared foundation, and old/new roof + facade
 * layers stacked on top of each other so the transformation is a cross-fade.
 */
export function HouseScene({ refs, className }: { refs: HouseSceneRefs; className?: string }) {
  const { roofOldRef, roofNewRef, wallsOldRef, wallsNewRef, scaffoldRef } = refs;
  return (
    <svg viewBox="0 0 120 150" className={className} aria-hidden="true">
      {/* ground shadow */}
      <ellipse cx="60" cy="141" rx="46" ry="5" fill="#15353e" opacity="0.1" />

      {/* ─ old facade ─ */}
      <g ref={wallsOldRef}>
        <rect x="20" y="58" width="80" height="78" fill="#cdc4b6" />
        <path d="M30 70 L34 100" stroke="#a89f8f" strokeWidth="1.4" fill="none" />
        <path d="M78 90 L84 118" stroke="#a89f8f" strokeWidth="1.4" fill="none" />
        <rect x="30" y="72" width="16" height="18" rx="1" fill="#8f8a7c" />
        <rect x="74" y="72" width="16" height="18" rx="1" fill="#8f8a7c" />
        <rect x="50" y="104" width="20" height="32" fill="#75705f" />
      </g>

      {/* ─ new facade (crepi) ─ */}
      <g ref={wallsNewRef} opacity="0">
        <rect x="20" y="58" width="80" height="78" fill="#f2e9dc" />
        <rect x="20" y="58" width="80" height="4" fill="#F79448" />
        <rect x="29" y="71" width="18" height="20" rx="1.5" fill="#eef6f8" stroke="#1E4C59" strokeWidth="1.5" />
        <rect x="73" y="71" width="18" height="20" rx="1.5" fill="#eef6f8" stroke="#1E4C59" strokeWidth="1.5" />
        <rect x="49" y="102" width="22" height="34" rx="1.5" fill="#1E4C59" />
        <rect x="58" y="112" width="3" height="3" rx="1.5" fill="#F79448" />
      </g>

      {/* ─ old roof ─ */}
      <g ref={roofOldRef}>
        <path d="M14 60 L60 20 L106 60 L96 60 L60 30 L24 60 Z" fill="#8a7f6d" />
        <path d="M55 34 L72 46 L64 50 L50 40 Z" fill="#6f665a" />
        <path d="M20 58 L30 51" stroke="#6f665a" strokeWidth="1.4" />
      </g>

      {/* ─ new roof ─ */}
      <g ref={roofNewRef} opacity="0">
        <path d="M14 60 L60 20 L106 60 L96 60 L60 30 L24 60 Z" fill="#15353e" />
        <path d="M30 55 L60 31" stroke="#1E4C59" strokeWidth="1.2" opacity="0.6" />
        <path d="M40 55 L60 38" stroke="#1E4C59" strokeWidth="1.2" opacity="0.6" />
        <path d="M90 55 L60 31" stroke="#1E4C59" strokeWidth="1.2" opacity="0.6" />
        <path d="M80 55 L60 38" stroke="#1E4C59" strokeWidth="1.2" opacity="0.6" />
        <rect x="56" y="20" width="8" height="3" fill="#F79448" />
      </g>

      {/* ─ scaffolding overlay ─ */}
      <g ref={scaffoldRef} opacity="0" stroke="#F79448" strokeWidth="1.6" fill="none">
        <line x1="14" y1="140" x2="14" y2="48" />
        <line x1="106" y1="140" x2="106" y2="48" />
        <line x1="14" y1="62" x2="106" y2="62" />
        <line x1="14" y1="90" x2="106" y2="90" />
        <line x1="14" y1="118" x2="106" y2="118" />
        <line x1="14" y1="118" x2="30" y2="90" />
        <line x1="106" y1="118" x2="90" y2="90" />
        <line x1="14" y1="90" x2="30" y2="62" />
        <line x1="106" y1="90" x2="90" y2="62" />
      </g>
    </svg>
  );
}
