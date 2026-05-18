'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PlayCircle, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/data';
import {
  FloatingDoodles,
  Flower,
  Sparkle as SparkleIcon,
  PaperPlane,
} from './Doodles';

export function Hero() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % HERO_SLIDES.length),
      6000,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const slide = HERO_SLIDES[idx];

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-gradient-hero pt-24"
    >
      <FloatingDoodles />

      {/* big blob */}
      <div className="absolute -top-32 -right-32 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-warm blur-3xl opacity-70" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-sky blur-3xl opacity-70" />

      <div className="container-x grid gap-12 pb-24 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pt-16">
        {/* Text */}
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" /> Admissions Open · 2026 – 27
          </motion.span>

          <h1 className="display mt-6 text-[2.6rem] leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="block"
            >
              Where little
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              <span className="underline-wave italic text-burgundy">
                dreams
              </span>{' '}
              begin.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70"
          >
            A warm, joyful, activity-based school in the heart of Dehradun —
            nurturing minds and shaping futures with care since 1998.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#admissions" className="btn-primary">
              <Calendar className="h-4 w-4" /> Book Admission
            </a>
            <a href="#contact" className="btn-ghost">
              <PlayCircle className="h-4 w-4" /> Schedule a Visit
            </a>
          </motion.div>

          {/* tiny social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
                'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
              ].map((u, i) => (
                <span
                  key={i}
                  className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-4 ring-ivory-cream"
                >
                  <Image src={u} alt="" fill sizes="40px" className="object-cover" />
                </span>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-navy">450+ happy families</p>
              <p className="text-navy/60">trust Charmwood with their children.</p>
            </div>
          </motion.div>

          {/* floating doodle bits behind text */}
          <Flower className="absolute -left-6 bottom-10 h-12 w-12 text-peach/90 animate-floatSlow" />
          <SparkleIcon className="absolute -right-2 top-2 h-10 w-10 text-gold/70 animate-float" />
        </div>

        {/* Image slider */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
            {/* curved frame */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-6 rounded-blob bg-gradient-gold animate-blob" />
            <div className="absolute inset-0 -z-10 -translate-x-6 -translate-y-2 rounded-[42%_58%_44%_56%/52%_42%_58%_48%] bg-gradient-nature opacity-80 animate-blob" />

            <div className="relative h-full w-full overflow-hidden rounded-[42%_58%_44%_56%/52%_42%_58%_48%] shadow-glow ring-1 ring-white/40 animate-blob">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.headline}
                    fill
                    priority
                    sizes="(min-width:1024px) 460px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* slide caption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cap-${idx}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-x-6 bottom-6 text-ivory-cream"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
                    Glimpse of school life
                  </p>
                  <p className="mt-1 font-display text-xl leading-snug">
                    {slide.sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* slide dots */}
            <div className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === i ? 'w-8 bg-burgundy' : 'w-2.5 bg-navy/20'
                  }`}
                />
              ))}
            </div>

            {/* floating badges */}
            <motion.div
              className="absolute -left-8 top-8 hidden md:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-nature/30 text-nature">
                  🌱
                </span>
                <div className="text-xs">
                  <p className="font-semibold text-navy">Nature-filled</p>
                  <p className="text-navy/60">sunlit campus</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-6 bottom-16 hidden md:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-sun/40 text-burgundy">
                  ⭐
                </span>
                <div className="text-xs">
                  <p className="font-semibold text-navy">Activity-based</p>
                  <p className="text-navy/60">child-first learning</p>
                </div>
              </div>
            </motion.div>

            <PaperPlane className="absolute -top-6 right-10 h-8 w-8 text-burgundy/80 animate-float" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-navy/40 p-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span className="h-2 w-1 rounded-full bg-navy/50" />
        </motion.div>
      </div>
    </section>
  );
}
