'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { SCHOOL } from '@/lib/data';
import { StickerText } from './StickerText';
import { Heart, Star } from './Doodles';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <Heart className="pointer-events-none absolute left-12 top-20 h-8 w-8 text-pop-red animate-pop" />
      <Star className="pointer-events-none absolute right-16 top-32 h-7 w-7 text-pop-blue animate-twinkle" />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="ribbon-eyebrow">Get in touch</span>
          <h2 className="section-title mt-7">
            We’d love to{' '}
            <StickerText
              words={[
                { text: 'hear', color: '#2D6CB0', rotate: -3 },
                { text: 'from', color: '#4DA64F', rotate: 2 },
                { text: 'you!', color: '#E0427A', rotate: -2 },
              ]}
            />
          </h2>
          <p className="mt-3 handwritten text-2xl text-pop-purple">
            drop in, call, or say hi ♥
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ContactCard icon={MapPin} title="Visit Us" lines={[SCHOOL.address]} accent="bg-burgundy/10 text-burgundy" />
          <ContactCard
            icon={Phone}
            title="Call Us"
            lines={SCHOOL.phones}
            accent="bg-nature/15 text-nature"
            hrefBase="tel:"
          />
          <ContactCard
            icon={Mail}
            title="Write to Us"
            lines={[SCHOOL.email]}
            accent="bg-gold/15 text-gold"
            hrefBase="mailto:"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass flex flex-col gap-4 p-7"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky/40 text-navy">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
                  School Hours
                </p>
                <p className="font-display text-lg text-navy">{SCHOOL.hours}</p>
              </div>
            </div>
            <p className="text-sm text-navy/65">
              Office is open until 3:30 PM. Visits are by prior appointment
              on any working day — please call before coming.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SCHOOL.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ background: '#25D366' }}
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={`tel:${SCHOOL.phones[0].replace(/\s/g, '')}`} className="btn-outline">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-card ring-1 ring-navy/10"
          >
            <iframe
              src="https://www.google.com/maps?q=Dalanwala,+Dehradun,+Uttarakhand&output=embed"
              loading="lazy"
              title="Charmwood location"
              className="h-[420px] w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  accent,
  hrefBase,
}: {
  icon: typeof Phone;
  title: string;
  lines: readonly string[];
  accent: string;
  hrefBase?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-ivory-cream p-7 ring-1 ring-navy/5 shadow-pillow"
    >
      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent}`}>
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
        {title}
      </p>
      <div className="mt-2 space-y-1 font-display text-lg text-navy">
        {lines.map((l) =>
          hrefBase ? (
            <a key={l} href={hrefBase + l.replace(/\s/g, '')} className="block hover:text-burgundy">
              {l}
            </a>
          ) : (
            <p key={l}>{l}</p>
          ),
        )}
      </div>
    </motion.div>
  );
}
