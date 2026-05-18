'use client';

import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SCHOOL } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-ivory-cream/80">
      {/* grass / flower illustration on top */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full text-white"
        aria-hidden
      >
        <path
          d="M0 80 C 200 20, 360 80, 560 30 S 920 80, 1100 30 1320 80 1440 30 L1440 0 L0 0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-burgundy font-display text-xl font-semibold text-ivory-cream">
                C
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-ivory-cream">
                  Charmwood
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-soft">
                  International School
                </p>
              </div>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-cream/65">
              A warm, joyful, activity-based school in Dehradun. Nurturing
              minds and shaping futures since {SCHOOL.founded}.
            </p>
            <p className="mt-6 font-display text-sm italic text-gold-soft">
              “{SCHOOL.motto}”
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-burgundy"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ivory-cream">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-gold-soft" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ivory-cream">
              School Life
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-gold-soft" href="#programs">Curriculum</a></li>
              <li><a className="hover:text-gold-soft" href="#campus">Campus Gallery</a></li>
              <li><a className="hover:text-gold-soft" href="#approach">Our Approach</a></li>
              <li><a className="hover:text-gold-soft" href="#admissions">Admissions</a></li>
              <li><a className="hover:text-gold-soft" href="#contact">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ivory-cream">
              Find Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-soft" />
                <span>{SCHOOL.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold-soft" />
                <span>
                  {SCHOOL.phones.map((p) => (
                    <a key={p} className="block hover:text-gold-soft" href={`tel:${p.replace(/\s/g, '')}`}>
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-gold-soft" />
                <a className="break-all hover:text-gold-soft" href={`mailto:${SCHOOL.email}`}>
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ivory-cream/45 sm:flex-row">
          <p>© {SCHOOL.founded} – {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
          <p>Made with care in Dehradun.</p>
        </div>
      </div>

      {/* floating WhatsApp */}
      <a
        href={`https://wa.me/${SCHOOL.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow ring-4 ring-white/30 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6L0 24l6.18-1.62A12 12 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.86 0-3.68-.5-5.27-1.45l-.38-.22-3.66.96.97-3.56-.24-.39A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </footer>
  );
}
