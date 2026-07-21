'use client';

import { motion } from 'framer-motion';
import { CAMPUS_PHOTOS } from '@/lib/data';
import { CloudDivider, Heart, Star, Flower } from './Doodles';
import { StickerText } from './StickerText';
import { Photo } from './Photo';

// alternating tilt for the scrapbook feel
const TILTS = [-4, 3, -2, 5, -5, 2, -3, 4, -2, 3];

export function CampusLife() {
  return (
    <section id="campus" className="relative bg-white">
      <div className="text-ivory-cream">
        <CloudDivider />
      </div>

      <div className="relative overflow-hidden py-24 lg:py-32">
        <Heart className="pointer-events-none absolute left-8 top-24 h-8 w-8 text-pop-red animate-pop" />
        <Star className="pointer-events-none absolute right-12 top-32 h-9 w-9 text-pop-blue animate-twinkle" />
        <Flower className="pointer-events-none absolute right-1/3 bottom-12 h-12 w-12 text-peach animate-wiggle" />
        <Heart className="pointer-events-none absolute left-1/3 bottom-32 h-6 w-6 text-pop-pink animate-pop" />

        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src="/images/logo.png"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                if (!el.src.endsWith('logo.svg')) el.src = '/images/logo.svg';
              }}
              alt="Charmwood International School"
              className="mx-auto mb-6 h-24 w-24 object-contain drop-shadow-md"
            />
            <span className="ribbon-eyebrow">Campus Life</span>
            <h2 className="section-title mt-7">
              A school day, in{' '}
              <StickerText
                words={[{ text: 'colour!', color: '#E0427A', rotate: -3 }]}
              />
            </h2>
            <p className="mt-3 handwritten text-2xl text-pop-purple">
              every moment, a little memory ♥
            </p>
            <p className="mt-3 text-navy/60">
              Moments between the bells — yoga, sports, music, festivals,
              friendships and the unhurried joy of being five.
            </p>
          </div>

          {/* Scrapbook polaroid wall */}
          <div className="mt-16 columns-1 gap-7 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {CAMPUS_PHOTOS.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: TILTS[i % TILTS.length] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                className="polaroid relative mb-7 break-inside-avoid cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded ${
                    p.span === 'tall'
                      ? 'aspect-[3/4]'
                      : p.span === 'wide'
                        ? 'aspect-[4/3]'
                        : 'aspect-square'
                  }`}
                >
                  <Photo
                    src={p.src}
                    fallback={p.fallback}
                    alt={p.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <figcaption className="cap">{p.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
