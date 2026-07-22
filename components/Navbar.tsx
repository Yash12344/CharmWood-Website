'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SCHOOL } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-cream/85 backdrop-blur-xl shadow-pillow'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              if (!el.src.endsWith('logo.svg')) el.src = '/images/logo.svg';
            }}
            alt="Charmwood International School"
            className="h-14 w-14 object-contain drop-shadow-sm"
          />
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold text-navy">
              Charmwood
            </p>
            <p className="handwritten text-base leading-none text-pop-purple">
              International School
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-white/70 hover:text-burgundy xl:px-4"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SCHOOL.phones[0].replace(/\s/g, '')}`}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-navy md:inline-flex"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/20 text-burgundy">
              <Phone className="h-4 w-4" />
            </span>
            {SCHOOL.phones[0]}
          </a>
          <a href="#admissions" className="hidden btn-primary md:inline-flex">
            Book Admission
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft ring-1 ring-navy/10 lg:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="container-x pb-6">
              <div className="glass overflow-hidden p-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-navy hover:bg-white"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#admissions"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full justify-center"
                >
                  Book Admission
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
