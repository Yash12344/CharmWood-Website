'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CAMPUS_PHOTOS } from '@/lib/data';
import { CloudDivider } from './Doodles';

export function CampusLife() {
  return (
    <section id="campus" className="relative bg-white">
      <div className="text-ivory-cream">
        <CloudDivider />
      </div>

      <div className="py-24 lg:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Campus Life</span>
            <h2 className="section-title mt-5">
              A school day, in{' '}
              <span className="italic text-burgundy">colour</span>.
            </h2>
            <p className="mt-5 text-navy/60">
              Moments between the bells — yoga, sports, music, festivals,
              friendships and the unhurried joy of being five.
            </p>
          </div>

          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {CAMPUS_PHOTOS.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-pillow ring-1 ring-navy/5"
              >
                <div
                  className={`relative ${
                    p.span === 'tall'
                      ? 'aspect-[3/4]'
                      : p.span === 'wide'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-5 bottom-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-ivory-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
                      {p.label}
                    </span>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
