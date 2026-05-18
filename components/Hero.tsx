'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, PlayCircle } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/data';
import {
  FloatingDoodles,
  Flower,
  Sparkle as SparkleIcon,
  PaperPlane,
  Heart,
  Star,
  ScribbleArrow,
  Squiggle,
} from './Doodles';
import { StickerText } from './StickerText';

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

      {/* big blobs */}
      <div className="absolute -top-32 -right-32 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-warm blur-3xl opacity-70" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-sky blur-3xl opacity-70" />

      <div className="container-x grid gap-12 pb-24 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pt-16">
        {/* Text */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 0.1 }}
          >
            <span className="ribbon-eyebrow">
              ✨ Admissions Open · 2026 – 27 ✨
            </span>
          </motion.div>

          {/* Sticker headline */}
          <h1 className="mt-8 text-[3.2rem] leading-[1.02] sm:text-6xl lg:text-[5.4rem]">
            <StickerText
              words={[
                { text: 'Where', color: '#10233E', rotate: -2 },
                { text: 'Little', color: '#D43F4A', rotate: 2 },
              ]}
            />
            <br />
            <StickerText
              words={[
                { text: 'Dreams', color: '#2D6CB0', rotate: -3 },
                { text: 'Begin!', color: '#E0427A', rotate: 4 },
              ]}
              stagger={0.12}
            />
          </h1>

          {/* handwritten sub-tagline + banner tag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 inline-block"
          >
            <span className="handwritten text-2xl text-pop-purple md:text-3xl">
              Joyful learning, every single day.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-5"
          >
            <span className="banner-tag">
              Play · Discover · Imagine · Grow
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75"
          >
            A warm, joyful, activity-based school in the heart of Dehradun —
            nurturing minds and shaping futures with care since 1998.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#admissions" className="btn-primary">
              <Calendar className="h-4 w-4" /> Book Admission
            </a>
            <a href="#contact" className="btn-ghost">
              <PlayCircle className="h-4 w-4" /> Schedule a Visit
            </a>
          </motion.div>

          {/* social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
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
              <p className="handwritten text-base text-pop-purple">trust Charmwood with their little ones ♥</p>
            </div>
          </motion.div>

          {/* floating doodles around text */}
          <Flower className="absolute -left-8 bottom-10 h-12 w-12 text-peach animate-floatSlow" />
          <SparkleIcon className="absolute -right-2 top-2 h-10 w-10 text-gold/80 animate-float" />
          <Heart className="absolute left-44 -top-2 h-7 w-7 text-pop-red animate-pop hidden md:block" />
          <Star className="absolute right-12 top-32 h-8 w-8 text-pop-blue animate-twinkle hidden md:block" />
          <Squiggle className="absolute -bottom-2 left-0 h-5 w-32 text-pop-orange" />
        </div>

        {/* Image side — polaroid stack */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
            {/* back polaroid (decorative) */}
            <div
              className="absolute left-2 top-8 hidden h-44 w-36 rotate-[-12deg] sm:block"
              aria-hidden
            >
              <div className="polaroid h-full w-full">
                <div className="relative h-[calc(100%-44px)] w-full overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80"
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <span className="cap">art day 🎨</span>
              </div>
            </div>

            {/* back-right polaroid */}
            <div
              className="absolute -right-2 bottom-4 hidden h-40 w-32 rotate-[10deg] sm:block"
              aria-hidden
            >
              <div className="polaroid h-full w-full">
                <div className="relative h-[calc(100%-44px)] w-full overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1564429097439-e4d2e2854a35?auto=format&fit=crop&w=400&q=80"
                    alt=""
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <span className="cap">play time</span>
              </div>
            </div>

            {/* main blobby photo */}
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
                  <p className="mt-1 handwritten text-2xl leading-snug text-ivory-cream">
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

            <PaperPlane className="absolute -top-6 right-10 h-8 w-8 text-pop-blue animate-float" />
            <ScribbleArrow className="absolute -left-12 top-1/2 hidden h-20 w-20 -translate-y-1/2 text-burgundy/50 lg:block" />
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
