// src/components/home/road-journey/RoadJourney.tsx
"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BaseIcon, CarIcon, HouseScene, InspectBadge } from "./icons";
import { OFFERTE_ANCHOR_ID, TRANSFORMATION_STAGE_ID } from "@/lib/roadJourney";

let gsapPluginsRegistered = false;

const NAV_CLEARANCE = 80; // px — keeps the rail below the fixed navbar

/**
 * Wraps the entire homepage. Renders the vertical "route" rail on tablet/desktop
 * (md+): the Isoprotech vehicle drives down alongside the content, then the
 * house-transformation scene sticks in view for the duration of the
 * #transformation-stage section before releasing back into normal scroll.
 *
 * Below md, the rail is not rendered — TransformationJourney renders its own
 * compact mobile version inline instead.
 */
export function RoadJourney({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const driveCarRef = useRef<HTMLDivElement>(null);
  const driveFrontWheel = useRef<SVGGElement>(null);
  const driveRearWheel = useRef<SVGGElement>(null);

  const stageZoneRef = useRef<HTMLDivElement>(null);
  const stageVisualRef = useRef<HTMLDivElement>(null);
  const stageCarRef = useRef<HTMLDivElement>(null);
  const stageFrontWheel = useRef<SVGGElement>(null);
  const stageRearWheel = useRef<SVGGElement>(null);

  const roofOldRef = useRef<SVGGElement>(null);
  const roofNewRef = useRef<SVGGElement>(null);
  const wallsOldRef = useRef<SVGGElement>(null);
  const wallsNewRef = useRef<SVGGElement>(null);
  const scaffoldRef = useRef<SVGGElement>(null);
  const badgeRoofRef = useRef<HTMLDivElement>(null);
  const badgeGevelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (!gsapPluginsRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      gsapPluginsRegistered = true;
    }

    const ctx = gsap.context(() => {
      function measureStageZone() {
        const stage = document.getElementById(TRANSFORMATION_STAGE_ID);
        const zone = stageZoneRef.current;
        if (!stage || !zone || !wrapper) return;
        const wrapperTop = wrapper.getBoundingClientRect().top;
        const stageRect = stage.getBoundingClientRect();
        zone.style.top = `${stageRect.top - wrapperTop}px`;
        zone.style.height = `${stage.offsetHeight}px`;
      }
      measureStageZone();

      const mm = gsap.matchMedia();

      mm.add(
        {
          isRail: `(min-width: 768px)`,
          reduceMotion: `(prefers-reduced-motion: reduce)`,
        },
        (context) => {
          const { isRail, reduceMotion } = context.conditions as {
            isRail: boolean;
            reduceMotion: boolean;
          };

          if (!isRail || reduceMotion) {
            gsap.set([roofNewRef.current, wallsNewRef.current], { opacity: 1 });
            gsap.set([roofOldRef.current, wallsOldRef.current, scaffoldRef.current], { opacity: 0 });
            gsap.set([badgeRoofRef.current, badgeGevelRef.current], { opacity: 0 });
            gsap.set(ctaRef.current, { opacity: 1, y: 0 });
            gsap.set(driveCarRef.current, { opacity: 0 });
            gsap.set(stageCarRef.current, { opacity: 1 });
            return;
          }

          const START_TOP = 148;

          function railTravel() {
            const car = driveCarRef.current;
            const zone = stageZoneRef.current;
            if (!car || !zone) return 0;
            const zoneTop = parseFloat(zone.style.top || "0");
            return Math.max(zoneTop - START_TOP - car.offsetHeight - 32, 0);
          }

          gsap.set(driveCarRef.current, { y: 0, opacity: 0 });
          gsap.set(stageCarRef.current, { opacity: 0 });

          const driveTl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
          driveTl
            // 0 – 10%: pulls out of the Isoprotech base
            .to(driveCarRef.current, { opacity: 1, duration: 10, ease: "power1.out" }, 0)
            .to(driveCarRef.current, { y: () => railTravel() * 0.08, duration: 10, ease: "power1.out" }, 0)
            // 10 – 90%: main descent down the route (slight ease at edges)
            .to(driveCarRef.current, { y: () => railTravel() * 0.96, duration: 80, ease: "power1.inOut" }, 10)
            // 90 – 100%: hand off to the parked stage vehicle
            .to(driveCarRef.current, { opacity: 0, duration: 10 }, 90)
            .to(stageCarRef.current, { opacity: 1, duration: 10 }, 90);

          ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            endTrigger: `#${TRANSFORMATION_STAGE_ID}`,
            end: `top top+=${NAV_CLEARANCE}`,
            scrub: 0.6,
            invalidateOnRefresh: true,
            animation: driveTl,
            onUpdate: (self) => {
              const rotation = self.progress * 1600;
              gsap.set([driveFrontWheel.current, driveRearWheel.current], {
                rotation,
                transformOrigin: "50% 50%",
              });
            },
          });

          // Stage phase: house transformation, pinned in view via CSS sticky
          // while #transformation-stage scrolls through its own height.
          const stageTl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
          stageTl
            // 45 – 60% of the whole journey ≈ 0 – 27% of the local stage
            .fromTo(
              badgeRoofRef.current,
              { opacity: 0, y: 8, scale: 0.85 },
              { opacity: 1, y: 0, scale: 1, duration: 8 },
              4
            )
            .fromTo(
              badgeGevelRef.current,
              { opacity: 0, y: 8, scale: 0.85 },
              { opacity: 1, y: 0, scale: 1, duration: 8 },
              15
            )
            // 60 – 75% ≈ 27 – 54%: scaffolding + roof swap
            .to(scaffoldRef.current, { opacity: 1, duration: 6 }, 27)
            .to(roofOldRef.current, { opacity: 0, duration: 10 }, 33)
            .to(roofNewRef.current, { opacity: 1, duration: 10 }, 33)
            .to([badgeRoofRef.current, badgeGevelRef.current], { opacity: 0, duration: 6 }, 46)
            // 75 – 90% ≈ 54 – 81%: facade swap, scaffolding removed
            .to(wallsOldRef.current, { opacity: 0, duration: 10 }, 56)
            .to(wallsNewRef.current, { opacity: 1, duration: 10 }, 56)
            .to(scaffoldRef.current, { opacity: 0, duration: 6 }, 74)
            // 90 – 100% ≈ 81 – 100%: reveal CTA
            .fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 16 }, 84);

          // The visual stays visible (via CSS sticky) for
          // stageHeight − visualHeight − navClearance px — scrub the
          // content timeline over exactly that same range so the transformation
          // finishes right as the scene is about to scroll away, not sooner.
          ScrollTrigger.create({
            trigger: `#${TRANSFORMATION_STAGE_ID}`,
            start: `top top+=${NAV_CLEARANCE}`,
            end: () => {
              const stage = document.getElementById(TRANSFORMATION_STAGE_ID);
              const visual = stageVisualRef.current;
              const distance = stage && visual ? stage.offsetHeight - visual.offsetHeight - NAV_CLEARANCE : 0;
              return `+=${Math.max(distance, 200)}`;
            },
            scrub: 0.6,
            invalidateOnRefresh: true,
            animation: stageTl,
          });
        }
      );

      const resizeObserver = new ResizeObserver(() => {
        measureStageZone();
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(wrapper);
      window.addEventListener("load", measureStageZone);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("load", measureStageZone);
        mm.revert();
      };
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative md:pr-[90px] xl:pr-[140px]">
      {children}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[90px] md:block xl:w-[140px]"
      >
        {/* road */}
        <div
          className="absolute bottom-5 left-1/2 top-[168px] w-[3px] -translate-x-1/2 rounded-full opacity-25"
          style={{
            background:
              "repeating-linear-gradient(to bottom, #1E4C59 0, #1E4C59 14px, transparent 14px, transparent 26px)",
          }}
        />

        {/* base */}
        <div className="absolute left-1/2 top-24 -translate-x-1/2">
          <BaseIcon className="h-9 w-11 xl:h-11 xl:w-14" />
        </div>

        {/* driving car */}
        <div
          ref={driveCarRef}
          className="absolute left-1/2 top-[148px] -translate-x-1/2 opacity-0 will-change-transform"
        >
          <CarIcon
            className="h-8 w-16 xl:h-10 xl:w-20"
            frontWheelRef={driveFrontWheel}
            rearWheelRef={driveRearWheel}
          />
        </div>

        {/* transformation stage — height/top set via JS to match #transformation-stage */}
        <div ref={stageZoneRef} className="absolute left-0 right-0">
          <div ref={stageVisualRef} className="sticky flex flex-col items-center gap-2" style={{ top: NAV_CLEARANCE }}>
            <div ref={stageCarRef} className="opacity-0 will-change-transform">
              <CarIcon
                className="h-8 w-16 xl:h-10 xl:w-20"
                frontWheelRef={stageFrontWheel}
                rearWheelRef={stageRearWheel}
              />
            </div>

            <div className="relative mt-1 flex flex-col items-center gap-1.5">
              <InspectBadge label="Dakinspectie" innerRef={badgeRoofRef} />
              <InspectBadge label="Gevelinspectie" innerRef={badgeGevelRef} />
              <HouseScene
                className="mt-1 h-28 w-24 xl:h-36 xl:w-32"
                refs={{ roofOldRef, roofNewRef, wallsOldRef, wallsNewRef, scaffoldRef }}
              />
            </div>

            <div
              ref={ctaRef}
              className="pointer-events-auto mt-2 w-[84px] shrink-0 rounded-xl bg-white p-2 text-center opacity-0 shadow-xl ring-1 ring-teal-900/10 xl:w-[132px] xl:p-3"
            >
              <p className="text-[9px] font-bold leading-snug text-teal-800 xl:text-[11px]">
                Klaar om uw woning te transformeren?
              </p>
              <Link
                href={`#${OFFERTE_ANCHOR_ID}`}
                className="mt-1.5 block rounded-lg bg-orange-400 px-1.5 py-1.5 text-[8px] font-bold text-white transition-colors hover:bg-orange-300 xl:text-[10px]"
              >
                Plan gratis inspectie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
