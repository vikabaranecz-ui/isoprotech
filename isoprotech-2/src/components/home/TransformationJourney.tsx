// src/components/home/TransformationJourney.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFERTE_ANCHOR_ID, TRANSFORMATION_STAGE_ID } from "@/lib/roadJourney";

const stages = [
  { n: "01", title: "Gratis inspectie", desc: "Wij beoordelen dak en gevel en stellen vast wat er nodig is." },
  { n: "02", title: "Steiger & voorbereiding", desc: "Veilige opbouw, bescherming van tuin en omgeving." },
  { n: "03", title: "Dak- en gevelwerk", desc: "Nieuwe isolatie, dakbedekking en crepi-afwerking." },
  { n: "04", title: "Oplevering", desc: "Vernieuwd, geïsoleerd en klaar — met 10 jaar garantie." },
];

let pluginRegistered = false;

export function TransformationJourney() {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
  const mobileCarRef = useRef<HTMLDivElement>(null);
  const mobileToolsRef = useRef<HTMLDivElement>(null);
  const mobileHouseRef = useRef<HTMLDivElement>(null);
  const mobileCaptionRef = useRef<HTMLParagraphElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginRegistered = true;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop/tablet: highlight the active stage in the left-hand list as the
      // pinned house scene (rendered by RoadJourney) progresses through it.
      mm.add(
        { isRail: "(min-width: 768px)", reduceMotion: "(prefers-reduced-motion: reduce)" },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };
          if (reduceMotion) {
            listRefs.current[3]?.classList.add("is-active");
            return;
          }

          ScrollTrigger.create({
            trigger: `#${TRANSFORMATION_STAGE_ID}`,
            start: "top top+=80",
            end: "bottom bottom",
            scrub: 0.6,
            onUpdate: (self) => {
              const p = self.progress * 100;
              const index = p < 27 ? 0 : p < 54 ? 1 : p < 81 ? 2 : 3;
              listRefs.current.forEach((el, i) => el?.classList.toggle("is-active", i === index));
            },
          });
        }
      );

      // Mobile: compact 3-state strip (car departs → work in progress → ready).
      mm.add(
        { isMobile: "(max-width: 767px)", reduceMotion: "(prefers-reduced-motion: reduce)" },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };
          const car = mobileCarRef.current;
          const tools = mobileToolsRef.current;
          const house = mobileHouseRef.current;
          const caption = mobileCaptionRef.current;
          if (!car || !tools || !house || !caption) return;

          if (reduceMotion) {
            gsap.set(car, { opacity: 0 });
            gsap.set(tools, { opacity: 0 });
            gsap.set(house, { opacity: 1 });
            caption.textContent = "Klaar — vernieuwd dak en gevel.";
            return;
          }

          gsap.set(car, { opacity: 1 });
          gsap.set([tools, house], { opacity: 0 });

          const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
          tl.to(car, { opacity: 0, duration: 1 }, 1)
            .to(tools, { opacity: 1, duration: 1 }, 1)
            .to(tools, { opacity: 0, duration: 1 }, 2.4)
            .to(house, { opacity: 1, duration: 1 }, 2.4)
            .call(() => (caption.textContent = "Auto onderweg naar uw woning."), [], 0)
            .call(() => (caption.textContent = "Dak- en gevelwerken in uitvoering."), [], 1.3)
            .call(() => (caption.textContent = "Klaar — vernieuwd dak en gevel."), [], 2.6);

          ScrollTrigger.create({
            trigger: mobileSectionRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.6,
            animation: tl,
          });
        }
      );

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id={TRANSFORMATION_STAGE_ID} className="section-padding md:min-h-[1300px] xl:min-h-[1500px]">
      <div className="container-wide">
        <div className="mb-10 max-w-xl md:mb-14">
          <span className="section-label">Transformatie</span>
          <h2 className="section-heading">Van verwaarloosd dak en gevel tot vernieuwde woning</h2>
          <p className="mt-3 text-gray-500">
            Volg het traject: onze wagen rijdt uit, inspecteert, en het dak en de gevel worden stap voor stap
            vernieuwd — tot de woning volledig getransformeerd is.
          </p>
        </div>

        {/* Desktop/tablet: stage list, highlighted in sync with the pinned scene */}
        <ol className="hidden max-w-md space-y-6 md:block">
          {stages.map((s, i) => (
            <li
              key={s.n}
              ref={(el) => {
                listRefs.current[i] = el;
              }}
              className="journey-stage flex gap-4 rounded-xl border border-transparent p-3 transition-colors duration-300"
            >
              <span className="journey-stage-num flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-teal-800 shadow-sm ring-1 ring-gray-100 transition-colors duration-300">
                {s.n}
              </span>
              <div>
                <h3 className="journey-stage-title font-bold text-teal-800 transition-colors duration-300">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile: compact 3-state strip, replaces the side rail entirely */}
        <div ref={mobileSectionRef} className="md:hidden">
          <div className="relative flex h-40 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
            <div ref={mobileCarRef} className="absolute" aria-hidden="true">
              <svg viewBox="0 0 120 60" className="h-14 w-28">
                <path
                  d="M8 40 L8 26 Q8 20 16 20 L34 20 L44 10 L86 10 Q94 10 94 18 L94 26 L108 26 Q114 26 114 32 L114 40 Z"
                  fill="#1E4C59"
                />
                <path d="M46 14 L82 14 L88 22 L50 22 Z" fill="#cfe6ec" opacity="0.9" />
                <rect x="8" y="31" width="106" height="5" fill="#F79448" />
                <circle cx="26" cy="44" r="9" fill="#15353e" />
                <circle cx="96" cy="44" r="9" fill="#15353e" />
              </svg>
            </div>
            <div ref={mobileToolsRef} className="absolute opacity-0" aria-hidden="true">
              <svg viewBox="0 0 64 64" className="h-14 w-14">
                <rect x="28" y="8" width="8" height="40" rx="3" fill="#F79448" transform="rotate(20 32 28)" />
                <circle cx="20" cy="14" r="9" fill="none" stroke="#1E4C59" strokeWidth="4" />
                <rect x="34" y="38" width="8" height="22" rx="2" fill="#1E4C59" transform="rotate(-25 38 49)" />
              </svg>
            </div>
            <div ref={mobileHouseRef} className="absolute opacity-0" aria-hidden="true">
              <svg viewBox="0 0 120 90" className="h-16 w-20">
                <path d="M14 50 L60 15 L106 50 L96 50 L60 24 L24 50 Z" fill="#15353e" />
                <rect x="24" y="48" width="72" height="34" fill="#f2e9dc" />
                <rect x="24" y="48" width="72" height="3.5" fill="#F79448" />
                <rect x="32" y="58" width="14" height="16" rx="1.5" fill="#eef6f8" stroke="#1E4C59" strokeWidth="1.4" />
                <rect x="70" y="58" width="14" height="16" rx="1.5" fill="#eef6f8" stroke="#1E4C59" strokeWidth="1.4" />
              </svg>
            </div>
          </div>
          <p ref={mobileCaptionRef} className="mt-3 text-center text-sm font-semibold text-teal-800">
            Auto onderweg naar uw woning.
          </p>

          <ol className="mt-8 space-y-4">
            {stages.map((s) => (
              <li key={s.n} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-teal-800 shadow-sm ring-1 ring-gray-100">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-teal-800">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex justify-center" aria-hidden="true">
            <svg viewBox="0 0 120 90" className="h-32 w-28">
              <path d="M14 50 L60 15 L106 50 L96 50 L60 24 L24 50 Z" fill="#15353e" />
              <rect x="24" y="48" width="72" height="34" fill="#f2e9dc" />
              <rect x="24" y="48" width="72" height="3.5" fill="#F79448" />
              <rect x="32" y="58" width="14" height="16" rx="1.5" fill="#eef6f8" stroke="#1E4C59" strokeWidth="1.4" />
              <rect x="70" y="58" width="14" height="16" rx="1.5" fill="#eef6f8" stroke="#1E4C59" strokeWidth="1.4" />
            </svg>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Klaar om uw woning te transformeren?{" "}
            <Link href={`#${OFFERTE_ANCHOR_ID}`} className="font-bold text-orange-500 hover:text-orange-600">
              Plan uw gratis inspectie
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .journey-stage.is-active {
          background: rgba(247, 148, 72, 0.06);
          border-color: rgba(247, 148, 72, 0.25);
        }
        .journey-stage.is-active .journey-stage-num {
          background: #f79448;
          color: white;
        }
        .journey-stage.is-active .journey-stage-title {
          color: #f79448;
        }
      `}</style>
    </section>
  );
}
