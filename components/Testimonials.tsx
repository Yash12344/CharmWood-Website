'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { StickerText } from './StickerText';
import { Heart, Star } from './Doodles';
import { Photo } from './Photo';

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-ivory-cream py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-peach/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky/40 blur-3xl" />
      </div>

      <Heart className="pointer-events-none absolute left-10 top-20 h-8 w-8 text-pop-red animate-pop" />
      <Star className="pointer-events-none absolute right-12 top-32 h-9 w-9 text-pop-blue animate-twinkle" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="ribbon-eyebrow">Parents Speak</span>
          <h2 className="section-title mt-7">
            What families say about{' '}
            <StickerText
              words={[{ text: 'us!', color: '#D43F4A', rotate: 4 }]}
            />
          </h2>
          <p className="mt-3 handwritten text-2xl text-pop-purple">
            real words, real love ♥
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Featured */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-blob bg-gradient-gold opacity-80 animate-blob" />
            <AnimatePresence mode="wait">
              <motion.div
                key={t.img}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full overflow-hidden rounded-blob shadow-card animate-blob"
              >
                <Photo
                  src={t.img}
                  fallback={t.fallback}
                  alt={t.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <span className="absolute -top-4 -left-4 grid h-14 w-14 place-items-center rounded-2xl bg-burgundy text-ivory-cream shadow-card">
              <Quote className="h-6 w-6" />
            </span>
          </div>

          {/* Glass card slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 lg:p-10"
              >
                <p className="font-display text-2xl leading-snug text-navy lg:text-3xl">
                  “{t.quote}”
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-burgundy text-lg font-semibold text-ivory-cream">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-sm text-navy/60">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, j) => (
                  <button
                    key={j}
                    aria-label={`Go to testimonial ${j + 1}`}
                    onClick={() => setI(j)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === j ? 'w-10 bg-burgundy' : 'w-2.5 bg-navy/20'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-pillow ring-1 ring-navy/10 transition hover:bg-burgundy hover:text-ivory-cream"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="grid h-11 w-11 place-items-center rounded-full bg-burgundy text-ivory-cream shadow-card transition hover:bg-[#a52828]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
