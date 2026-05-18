'use client';

import { motion } from 'framer-motion';
import { PROGRAMS } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { StickerText } from './StickerText';
import { ScribbleArrow, Star, Heart } from './Doodles';

export function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-gradient-to-b from-white via-ivory-cream to-white py-24 lg:py-32"
    >
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <span className="ribbon-eyebrow">Our Programs</span>
            <h2 className="section-title mt-7">
              From first steps to{' '}
              <StickerText
                words={[
                  { text: 'confident', color: '#2D6CB0', rotate: -3 },
                  { text: 'kids!', color: '#E97A2A', rotate: 3 },
                ]}
              />
            </h2>
            <p className="mt-3 handwritten text-2xl text-pop-purple">
              Playgroup ✦ Nursery ✦ KG ✦ Primary
            </p>
          </div>
          <p className="max-w-xl text-navy/65 lg:justify-self-end">
            We welcome children from Playgroup through Class 6 — the years
            when minds and habits are most beautifully shaped.
          </p>
        </div>
        <Star className="pointer-events-none absolute right-10 top-16 h-9 w-9 text-pop-blue animate-twinkle" />
        <Heart className="pointer-events-none absolute left-10 bottom-20 h-7 w-7 text-pop-red animate-pop" />
        <ScribbleArrow className="pointer-events-none absolute right-1/4 top-32 hidden h-20 w-20 text-burgundy/40 md:block" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${p.color} p-7 ring-1 ring-white/60 shadow-pillow transition-all`}
            >
              <span
                className={`grid h-16 w-16 place-items-center rounded-2xl bg-white text-3xl ring-4 ${p.ring}/40 shadow-soft`}
              >
                {p.icon}
              </span>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy/60">
                {p.age}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-navy">
                {p.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {p.blurb}
              </p>

              <a
                href="#admissions"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-burgundy transition-all hover:gap-3"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </a>

              {/* decorative blob */}
              <span className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
