'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sprout, Users } from 'lucide-react';
import { STATS } from '@/lib/data';
import { Counter } from './Counter';
import { Leaf, Flower, Heart as HeartDoodle, Star } from './Doodles';
import { StickerText } from './StickerText';

const PILLARS = [
  {
    icon: Heart,
    title: 'Emotional Growth',
    desc: 'A school where feelings are named, understood and honoured.',
    color: 'text-burgundy',
    bg: 'bg-burgundy/10',
  },
  {
    icon: Sprout,
    title: 'Holistic Learning',
    desc: 'Head, heart and hand — each given room to grow.',
    color: 'text-nature',
    bg: 'bg-nature/15',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    desc: 'CCTV, secure gates and watchful, caring adults.',
    color: 'text-navy',
    bg: 'bg-sky/40',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    desc: 'Patient educators trained in primary pedagogy.',
    color: 'text-gold',
    bg: 'bg-gold/15',
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory-cream py-24 lg:py-32">
      <Leaf className="pointer-events-none absolute -left-6 top-20 h-20 w-20 text-nature/30 animate-floatSlow" />
      <Flower className="pointer-events-none absolute right-6 top-10 h-14 w-14 text-peach animate-wiggle" />
      <HeartDoodle className="pointer-events-none absolute right-24 top-36 h-8 w-8 text-pop-red animate-pop" />
      <Star className="pointer-events-none absolute left-24 bottom-20 h-9 w-9 text-pop-blue animate-twinkle" />

      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        {/* Left: image collage */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36%_64%_38%_62%/52%_42%_58%_48%] shadow-glow animate-blob">
            <Image
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80"
              alt="Children learning at Charmwood"
              fill
              sizes="(min-width:1024px) 500px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 hidden h-44 w-44 overflow-hidden rounded-3xl ring-8 ring-ivory-cream shadow-card md:block">
            <Image
              src="https://images.unsplash.com/photo-1564429097439-e4d2e2854a35?auto=format&fit=crop&w=600&q=80"
              alt="Outdoor play"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute -left-4 top-8 hidden md:block"
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold text-navy">
                🏆
              </span>
              <div className="text-xs">
                <p className="font-semibold text-navy">Est. 1998</p>
                <p className="text-navy/60">27+ years of trust</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: copy */}
        <div>
          <span className="ribbon-eyebrow">About Charmwood</span>
          <h2 className="section-title mt-7 leading-[1.05]">
            A school that begins with the{' '}
            <StickerText
              words={[{ text: 'child.', color: '#D43F4A', rotate: -3 }]}
              className="ml-1"
            />
          </h2>
          <p className="mt-3 handwritten text-2xl text-pop-purple">
            small steps, big hearts ♥
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
            For over two decades, Charmwood has been a steady, sunlit presence
            in Dehradun — a place where small hands learn to hold pencils,
            small voices learn to ask big questions, and small hearts learn
            kindness as a daily habit.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-navy/60">
            We are deliberately a primary school. The years from Playgroup to
            Class 6 demand smaller spaces, slower pace and gentler hands, and
            our entire campus is built around that idea.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                className="group rounded-3xl bg-white/80 p-5 ring-1 ring-navy/5 shadow-pillow transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-2xl ${p.bg} ${p.color}`}
                >
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/65">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-semibold text-burgundy">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
