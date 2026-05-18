'use client';

import { motion } from 'framer-motion';
import {
  MonitorPlay,
  Puzzle,
  ShieldCheck,
  GraduationCap,
  Palette,
  Dumbbell,
  Music,
  Smile,
} from 'lucide-react';
import { FEATURES } from '@/lib/data';

const ICONS = [
  MonitorPlay,
  Puzzle,
  ShieldCheck,
  GraduationCap,
  Palette,
  Dumbbell,
  Music,
  Smile,
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-ivory-cream to-white py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Charmwood</span>
          <h2 className="section-title mt-5">
            A school built around how children{' '}
            <span className="italic text-burgundy">actually learn</span>.
          </h2>
          <p className="mt-5 text-navy/60">
            Eight everyday promises we make to every family that joins us.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i] || Smile;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-4xl bg-gradient-to-br ${f.grad} p-6 ring-1 ring-white/70 shadow-pillow transition-all`}
              >
                <span
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
                  style={{ background: f.accent }}
                />
                <span
                  className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-navy/5"
                  style={{ color: f.accent }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy/70">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
