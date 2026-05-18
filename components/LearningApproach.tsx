'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { APPROACH } from '@/lib/data';
import { Sparkle as SparkleIcon, Flower, Leaf, Star } from './Doodles';
import { StickerText } from './StickerText';

export function LearningApproach() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP-style scroll parallax (no plugin to keep bundle tiny)
    const onScroll = () => {
      if (!ref.current) return;
      const els = ref.current.querySelectorAll<HTMLElement>('[data-parallax]');
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.1');
        const rect = el.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="approach"
      ref={ref}
      className="relative overflow-hidden bg-navy py-28 text-ivory-cream lg:py-36"
    >
      {/* decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-burgundy/30 blur-3xl" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky/20 blur-3xl" />
        <SparkleIcon
          data-parallax="0.15"
          className="absolute right-10 top-20 h-14 w-14 text-gold/80"
        />
        <Flower
          data-parallax="-0.2"
          className="absolute left-10 bottom-40 h-16 w-16 text-peach/80"
        />
        <Leaf
          data-parallax="0.25"
          className="absolute right-1/3 bottom-10 h-12 w-12 text-nature/80"
        />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="ribbon-eyebrow">Our Learning Approach</span>
          <h2 className="display mt-7 text-4xl text-ivory-cream md:text-5xl lg:text-[3.4rem]">
            Five ideas that{' '}
            <StickerText
              words={[
                { text: 'shape', color: '#F4C542', rotate: -3 },
                { text: 'every', color: '#A8D5E5', rotate: 2 },
                { text: 'day!', color: '#E0427A', rotate: -2 },
              ]}
            />
          </h2>
          <p className="mt-3 handwritten text-2xl text-gold-soft">
            our little philosophy ✦
          </p>
          <p className="mt-3 text-ivory-cream/70">
            Meet the child where they are, walk a little ahead of them,
            and never rush.
          </p>
        </div>
        <Star className="pointer-events-none absolute left-20 top-32 h-7 w-7 text-pop-pink animate-twinkle" />

        {/* curved timeline */}
        <div className="relative mt-20">
          <svg
            viewBox="0 0 1200 320"
            className="absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
          >
            <path
              d="M40 200 Q 260 40, 480 200 T 920 200 T 1160 120"
              fill="none"
              stroke="rgba(232,199,131,0.45)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a, i) => (
              <motion.div
                key={a.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-dark relative p-6 lg:p-7 ${
                  i % 2 ? 'lg:translate-y-12' : ''
                }`}
              >
                <span className="font-display text-5xl font-semibold text-gold-soft">
                  {a.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ivory-cream">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-cream/70">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
