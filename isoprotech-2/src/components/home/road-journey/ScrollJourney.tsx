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

          function buildPath() {
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

            const longStart = oldHouseBottom + 60;
            const longSpan = Math.max(contactTop - 100 - longStart, 100);

            const parkedY = Math.min(contactTop + 110, totalHeight - 50);

            const points = [
              { x: rightX, y: Math.max(heroBottom - 100, 30) }, // warehouse departure
              { x: rightX, y: heroBottom + (oldHouseTop - heroBottom) * 0.45 }, // services
              { x: curveX, y: oldHouseTop + (oldHouseBottom - oldHouseTop) * 0.35 }, // approach old house
              { x: curveX - 15, y: oldHouseTop + (oldHouseBottom - oldHouseTop) * 0.62 }, // old house moment
              { x: rightX, y: oldHouseBottom + 80 }, // leaves old house
              { x: rightX, y: longStart + longSpan * 0.22 }, // calculator / realisaties
              { x: curveX + 25, y: longStart + longSpan * 0.55 }, // werkgebied curve
              { x: rightX, y: longStart + longSpan * 0.82 }, // blog
              { x: curveX, y: contactTop - 60 }, // new house entering
              { x: curveX - 10, y: parkedY }, // parked
            ];

            // Convert to an absolute SVG path string — MotionPathPlugin treats
            // string paths as literal page coordinates, whereas a raw array of
            // {x,y} points is instead interpreted relative to the target's own
            // resting position, which isn't what we want here.
            const rawPath = MotionPathPlugin.arrayToRawPath(points, { curviness: 1.2 });

            // The journey (and its scroll range) ends once the vehicle parks —
            // not at the bottom of the tall Contact/form section — so it stays
            // visible next to the new house for the rest of that section instead
            // of scrolling off screen above the viewport.
            return { path: MotionPathPlugin.rawPathToString(rawPath), endOffset: parkedY + 120 };
          }

          gsap.set(driving, { autoAlpha: 0, scale: 0.97 });
          gsap.set(front, { autoAlpha: 1, scale: 1 });

          let carTween: gsap.core.Tween | null = null;
          let resizeTimer: ReturnType<typeof setTimeout> | null = null;

          function setupPath() {
            carTween?.scrollTrigger?.kill();
            carTween?.kill();
            const { path, endOffset } = buildPath();
            carTween = gsap.to(car, {
              motionPath: {
                path,
                curviness: 1.2,
                autoRotate: false,
              },
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: `+=${endOffset}`,
                scrub: 0.15,
              },
            });
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
            const progress = carTween?.scrollTrigger?.progress ?? 0;
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
            carTween?.scrollTrigger?.kill();
            carTween?.kill();
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
