'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Send, CheckCircle2 } from 'lucide-react';
import { ADMISSION_STEPS, SCHOOL } from '@/lib/data';
import { StickerText } from './StickerText';
import { Heart, Star, ScribbleArrow } from './Doodles';

export function Admissions() {
  const [done, setDone] = useState(false);

  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-gradient-to-b from-ivory-cream to-white py-24 lg:py-32"
    >
      <Heart className="pointer-events-none absolute right-12 top-20 h-8 w-8 text-pop-red animate-pop" />
      <Star className="pointer-events-none absolute left-12 top-40 h-7 w-7 text-pop-blue animate-twinkle" />
      <ScribbleArrow className="pointer-events-none absolute left-1/3 bottom-12 hidden h-20 w-20 text-burgundy/40 md:block" />

      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {/* left */}
        <div>
          <span className="ribbon-eyebrow">Admissions 2026 – 27</span>
          <h2 className="section-title mt-7">
            Come, meet{' '}
            <StickerText
              words={[
                { text: 'our', color: '#4DA64F', rotate: -2 },
                { text: 'school!', color: '#E97A2A', rotate: 3 },
              ]}
            />
          </h2>
          <p className="mt-3 handwritten text-2xl text-pop-purple">
            warm, unhurried & full of smiles ♥
          </p>
          <p className="mt-5 max-w-lg text-navy/70">
            Admissions are warm and unhurried at Charmwood. Four small steps,
            and you’ll know whether we are the right home for your child.
          </p>

          <ol className="relative mt-10 space-y-5 border-l-2 border-dashed border-gold/40 pl-6">
            {ADMISSION_STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[33px] grid h-8 w-8 place-items-center rounded-full bg-burgundy text-xs font-bold text-ivory-cream ring-4 ring-ivory-cream">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="text-sm text-navy/65">{s.desc}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${SCHOOL.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Calendar className="h-4 w-4" /> Schedule a Visit
            </a>
            <a href={`tel:${SCHOOL.phones[0].replace(/\s/g, '')}`} className="btn-outline">
              Call Admissions
            </a>
          </div>
        </div>

        {/* right: form */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-warm blur-2xl opacity-70" />
          <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-card ring-1 ring-white/70">
            <div className="relative h-40 overflow-hidden rounded-[1.6rem]">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
                alt="A warm welcome"
                fill
                sizes="(min-width:1024px) 540px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <p className="absolute bottom-4 left-5 font-display text-2xl text-ivory-cream">
                Tell us about your little one.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setTimeout(() => setDone(false), 4500);
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Parent Name">
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    placeholder="+91"
                    className="form-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Applying for">
                  <select className="form-input">
                    <option>Playgroup</option>
                    <option>Nursery</option>
                    <option>KG</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                    <option>Class 4</option>
                    <option>Class 5</option>
                    <option>Class 6</option>
                  </select>
                </Field>
              </div>
              <Field label="Message" className="mt-4">
                <textarea
                  rows={3}
                  placeholder="Tell us a little about your child..."
                  className="form-input"
                />
              </Field>
              <div className="mt-5 flex items-center justify-between gap-4">
                {done ? (
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-nature">
                    <CheckCircle2 className="h-4 w-4" /> Thank you! We will be in
                    touch soon.
                  </p>
                ) : (
                  <p className="text-xs text-navy/50">
                    By submitting you agree to be contacted by our admissions
                    team.
                  </p>
                )}
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" /> Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(16,35,62,.1);
          background: #FFF8EF;
          font-size: 14px;
          font-family: inherit;
          color: #10233E;
          transition: border-color .2s, background .2s, box-shadow .2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #D4A64A;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(212,166,74,.18);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
        {label}
      </span>
      {children}
    </label>
  );
}
