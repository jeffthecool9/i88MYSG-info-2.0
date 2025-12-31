import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

type WhyCard = { title: string; points: string[] };

export function SportsMoment() {
  const cards = useMemo<WhyCard[]>(
    () => [
      {
        title: "Fast deposit & withdrawal",
        points: ["Smooth flow", "No headache steps", "Try out and see see"],
      },
      {
        title: "Trusted by 500k+ users",
        points: ["MY & SG community", "Stable usage", "Official pages only"],
      },
      {
        title: "Operating since 2016",
        points: ["Long-term ops", "Not new", "Built for real users"],
      },
    ],
    []
  );

  return (
    <section className="relative py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/12">
        {/* “Sports image” — generated with gradients & motion, no external assets */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(30,160,255,0.22),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_78%_80%,rgba(0,102,255,0.18),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:64px_64px]" />

          {/* Team rush beams (left & right) */}
          <motion.div
            className="absolute left-[-18%] top-[34%] h-[240px] w-[560px] rotate-[-10deg] rounded-[999px] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-3xl"
            animate={{ x: ["0%", "22%", "0%"], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[-22%] top-[24%] h-[240px] w-[560px] rotate-[12deg] rounded-[999px] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-3xl"
            animate={{ x: ["0%", "-22%", "0%"], opacity: [0.28, 0.52, 0.28] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* The ball “kick” loop in the middle */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 ring-1 ring-white/15"
            animate={{
              x: ["-34%", "34%", "-34%"],
              y: ["10%", "-14%", "10%"],
              scale: [1, 1.12, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-2 rounded-full bg-white/10 ring-1 ring-white/15" />
            <div className="absolute inset-5 rounded-full bg-white/10 ring-1 ring-white/10" />
          </motion.div>

          {/* readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d1f]/30 via-[#050d1f]/55 to-[#050d1f]/85" />
        </div>

        {/* Content */}
        <div className="relative p-7 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-white/70">
                SPORTS MOMENT
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
                High-stakes football vibe
              </h2>
              <p className="mt-2 max-w-2xl text-white/75">
                Sports first. Motion on. Clean UI. The longer you stay, the more
                you feel the “kick” loop.
              </p>
            </div>
            <div className="text-xs text-white/60">
              Hover / tilt the cards 👇
            </div>
          </div>

          {/* Carousel “inside the image” */}
          <div className="mt-8 sm:mt-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2400, disableOnInteraction: false }}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {cards.map((c) => (
                <SwiperSlide key={c.title}>
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={10}
                    glareEnable
                    glareMaxOpacity={0.18}
                    glareColor="white"
                    glarePosition="all"
                    className="h-full"
                  >
                    <div className="h-full rounded-2xl bg-white/6 ring-1 ring-white/12 p-5 sm:p-6 backdrop-blur-xl">
                      <div className="text-sm font-extrabold">{c.title}</div>
                      <ul className="mt-3 space-y-2 text-sm text-white/75">
                        {c.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-300" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-300 to-blue-500"
                          animate={{ x: ["-30%", "130%"] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>
                    </div>
                  </Tilt>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Scroll hook */}
          <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              ↓
            </span>
            Next: how to spot fake pages (so you don’t get scammed).
          </div>
        </div>
      </div>
    </section>
  );
}
