// src/components/home/road-journey/ScrollJourney.tsx
"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { JOURNEY_IDS, journeyAssets } from "@/lib/journeyAssets";

let pluginsRegistered = false;

const SCROLL_STOP_DELAY = 150; // ms of no scroll before the vehicle turns to face the visitor
const FRONT_LOCK_PROGRESS = 0.96; // near the end of the journey, stay front-facing beside the new house
const RESIZE_DEBOUNCE = 250;

/**
 * Transparent, full-page overlay: a single vehicle travels one continuous
 * GSAP MotionPath down the right-hand side of the real homepage content
 * (no reserved column, no white background, no pinning). While the user is
 * actively scrolling it shows the driving artwork; once scrolling stops for
 * a beat it crossfades to the front-facing artwork, as if the vehicle
 * turned to face the visitor. The warehouse / old house / new house images
 * are NOT part of this overlay — they live in their own homepage sections
 * (see page.tsx) so they stay anchored to those sections instead of
 * following the vehicle.
 */
export function ScrollJourney({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const carDrivingRef = useRef<HTMLImageElement>(null);
  const carFrontRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const car = carRef.current;
    const driving = carDrivingRef.current;
    const front = carFrontRef.current;
    if (!wrapper || !car || !driving || !front) return;

    if (!pluginsRegistered) {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
      pluginsRegistered = true;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          all: true,
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1199px)",
        },
        (context) => {
          const { reduceMotion, isMobile, isTablet } = context.conditions as {
            reduceMotion: boolean;
            isMobile: boolean;
            isTablet: boolean;
          };

          if (reduceMotion) {
            gsap.set(car, { autoAlpha: 0 });
            return () => {};
          }

          const edgeInset = isMobile ? 30 : isTablet ? 64 : 100;
          const curveInset = isMobile ? 64 : isTablet ? 130 : 210;

          function toPath(points: { x: number; y: number }[]) {
            // Convert to an absolute SVG path string — MotionPathPlugin treats
            // string paths as literal page coordinates, whereas a raw array of
            // {x,y} points is instead interpreted relative to the target's own
            // resting position, which isn't what we want here.
            const rawPath = MotionPathPlugin.arrayToRawPath(points, { curviness: 0.65 });
            return MotionPathPlugin.rawPathToString(rawPath);
          }

          // MotionPath paces itself by arc length within a single call, so one
          // long path across the whole page would let the (very long) middle
          // stretch eat almost the entire scroll budget, squeezing the old
          // house and new house arrivals into an imperceptible sliver of
          // scroll. Splitting the journey into phases — each its own tween
          // with an explicit scroll-time share — keeps every story beat
          // visible regardless of how many page-pixels it physically spans.
          function buildPhases() {
            const width = wrapper!.offsetWidth;
            const wrapperTop = wrapper!.getBoundingClientRect().top + window.scrollY;
            const totalHeight = wrapper!.offsetHeight;

            const heroEl = document.getElementById(JOURNEY_IDS.hero);
            const oldHouseEl = document.getElementById(JOURNEY_IDS.oldHouse);
            const contactEl = document.getElementById(JOURNEY_IDS.contact);

            const heroBottom = heroEl
              ? heroEl.getBoundingClientRect().bottom + window.scrollY - wrapperTop
              : 400;
            const oldHouseTop = oldHouseEl
              ? oldHouseEl.getBoundingClientRect().top + window.scrollY - wrapperTop
              : heroBottom + 600;
            const oldHouseBottom = oldHouseEl
              ? oldHouseEl.getBoundingClientRect().bottom + window.scrollY - wrapperTop
              : oldHouseTop + 400;
            const contactTop = contactEl
              ? contactEl.getBoundingClientRect().top + window.scrollY - wrapperTop
              : totalHeight - 500;

            const rightX = width - edgeInset;
            const curveX = width - curveInset;

            const longStart = oldHouseBottom + 80;
            const longEnd = contactTop - 550;
            const longSpan = Math.max(longEnd - longStart, 100);

            const parkedY = Math.min(contactTop + 260, totalHeight - 80);

            return {
              // Phase 1 — leaves the warehouse, drives toward the old house.
              approach: [
                { x: rightX, y: Math.max(heroBottom - 100, 30) },
                { x: rightX, y: heroBottom + (oldHouseTop - heroBottom) * 0.5 },
                { x: curveX, y: oldHouseTop + (oldHouseBottom - oldHouseTop) * 0.3 },
              ],
              // Phase 2 — the old house moment, then the long middle stretch.
              journey: [
                { x: curveX, y: oldHouseTop + (oldHouseBottom - oldHouseTop) * 0.3 },
                { x: curveX - 15, y: oldHouseTop + (oldHouseBottom - oldHouseTop) * 0.62 },
                { x: rightX, y: oldHouseBottom + 80 },
                { x: rightX, y: longStart + longSpan * 0.35 },
                { x: curveX + 25, y: longStart + longSpan * 0.65 },
                { x: rightX, y: longEnd },
              ],
              // Phase 3 — arrives at the new house and parks.
              arrival: [
                { x: rightX, y: longEnd },
                { x: curveX, y: contactTop - 20 },
                { x: curveX - 20, y: parkedY },
              ],
              // Real scroll-pixel boundaries — used so each phase's timeline
              // duration matches the actual page distance it covers, instead
              // of an arbitrary ratio that would drift out of sync with where
              // the old house / new house actually sit on the page.
              phase1End: Math.max(oldHouseTop, 200),
              phase2End: Math.max(longEnd, oldHouseTop + 200),
              parkedY,
            };
          }

          gsap.set(driving, { autoAlpha: 0, scale: 0.97 });
          gsap.set(front, { autoAlpha: 1, scale: 1 });

          let driveTl: gsap.core.Timeline | null = null;
          let resizeTimer: ReturnType<typeof setTimeout> | null = null;

          function setupPath() {
            driveTl?.scrollTrigger?.kill();
            driveTl?.kill();
            const { approach, journey, arrival, phase1End, phase2End, parkedY } = buildPhases();
            const scrollTotal = parkedY + 250;

            // Timeline "time" units are made to equal scroll pixels 1:1, so
            // each phase's duration is exactly the real page distance it
            // spans — keeping the old house / new house arrivals synced to
            // where those sections actually are, regardless of how much of
            // the path's total arc length each phase happens to occupy.
            driveTl = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: `+=${scrollTotal}`,
                scrub: 0.15,
              },
            });
            driveTl
              .to(car, {
                motionPath: { path: toPath(approach), curviness: 0.65, autoRotate: false },
                duration: phase1End,
              })
              .to(car, {
                motionPath: { path: toPath(journey), curviness: 0.65, autoRotate: false },
                duration: phase2End - phase1End,
              })
              .to(car, {
                motionPath: { path: toPath(arrival), curviness: 0.65, autoRotate: false },
                duration: scrollTotal - phase2End,
              });

            // A child tween sitting at exactly time 0 inside a fresh timeline
            // doesn't render its motionPath position until nudged off zero
            // (a GSAP/motionPath quirk) — so the vehicle appears at the right
            // spot immediately instead of only after the first scroll event.
            driveTl.progress(0.0001);
          }
          setupPath();

          function onResize() {
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setupPath, RESIZE_DEBOUNCE);
          }
          window.addEventListener("resize", onResize);

          // ---- driving / front-facing crossfade, driven by scroll activity ----
          let stopTimer: ReturnType<typeof setTimeout> | null = null;
          let isDriving = false;

          function showDriving() {
            if (isDriving) return;
            isDriving = true;
            gsap.to(driving!, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.2, overwrite: true });
            gsap.to(front!, { autoAlpha: 0, scale: 0.97, duration: 0.2, overwrite: true });
          }

          function showFront() {
            if (!isDriving) return;
            isDriving = false;
            gsap.to(driving!, { autoAlpha: 0, scale: 0.97, duration: 0.22, overwrite: true });
            gsap.to(front!, { autoAlpha: 1, scale: 1, duration: 0.22, overwrite: true });
          }

          function onScroll() {
            const progress = driveTl?.scrollTrigger?.progress ?? 0;
            if (progress >= FRONT_LOCK_PROGRESS) {
              showFront();
              return;
            }
            showDriving();
            if (stopTimer) clearTimeout(stopTimer);
            stopTimer = setTimeout(showFront, SCROLL_STOP_DELAY);
          }
          window.addEventListener("scroll", onScroll, { passive: true });

          return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);
            if (resizeTimer) clearTimeout(resizeTimer);
            if (stopTimer) clearTimeout(stopTimer);
            driveTl?.scrollTrigger?.kill();
            driveTl?.kill();
          };
        }
      );

      return () => mm.revert();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {children}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        <div ref={carRef} className="absolute left-0 top-0 w-14 will-change-transform md:w-16 xl:w-20">
          <div className="relative aspect-[3/2]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={carFrontRef}
              src={journeyAssets.carFront}
              alt=""
              loading="eager"
              className="absolute inset-0 h-full w-full object-contain drop-shadow-md"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={carDrivingRef}
              src={journeyAssets.carDriving}
              alt=""
              loading="eager"
              className="absolute inset-0 h-full w-full object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
