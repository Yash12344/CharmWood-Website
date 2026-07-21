'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { ADMISSION_STEPS, ADMISSIONS_HEADER, SCHOOL } from '@/lib/data';
import { StickerText } from './StickerText';
import { Heart, Star, ScribbleArrow } from './Doodles';
import { Photo } from './Photo';

function MessageCircleIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6L0 24l6.18-1.62A12 12 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.86 0-3.68-.5-5.27-1.45l-.38-.22-3.66.96.97-3.56-.24-.39A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

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
              <Photo
                src={ADMISSIONS_HEADER.src}
                fallback={ADMISSIONS_HEADER.fallback}
                alt="A warm welcome"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <p className="absolute bottom-4 left-5 font-display text-2xl text-ivory-cream">
                Tell us about your little one.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const parent = String(data.get('parent') || '').trim();
                const phone = String(data.get('phone') || '').trim();
                const email = String(data.get('email') || '').trim();
                const grade = String(data.get('grade') || '').trim();
                const message = String(data.get('message') || '').trim();

                const lines = [
                  `Hello Charmwood,`,
                  ``,
                  `I would like to enquire about admission.`,
                  ``,
                  `*Parent Name:* ${parent}`,
                  `*Phone:* ${phone}`,
                  email ? `*Email:* ${email}` : '',
                  `*Applying for:* ${grade}`,
                  message ? `\n*Message:*\n${message}` : '',
                ].filter(Boolean);

                const text = encodeURIComponent(lines.join('\n'));
                const url = `https://wa.me/${SCHOOL.whatsapp}?text=${text}`;
                window.open(url, '_blank', 'noopener,noreferrer');

                setDone(true);
                setTimeout(() => setDone(false), 5000);
                form.reset();
              }}
              className="p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Parent Name">
                  <input
                    required
                    name="parent"
                    type="text"
                    placeholder="Your full name"
                    className="form-input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="form-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Applying for">
                  <select name="grade" defaultValue="Nursery" className="form-input">
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
                  name="message"
                  rows={3}
                  placeholder="Tell us a little about your child..."
                  className="form-input"
                />
              </Field>
              <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                {done ? (
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-nature">
                    <CheckCircle2 className="h-4 w-4" />
                    Opening WhatsApp — please tap Send to deliver your enquiry.
                  </p>
                ) : (
                  <p className="text-xs text-navy/50">
                    Submitting opens WhatsApp with your enquiry pre-filled.
                    You just tap Send.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircleIcon className="h-4 w-4" /> Send via WhatsApp
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
