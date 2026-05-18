'use client';
import { motion } from 'framer-motion';

export function FloatingDoodles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* sun */}
      <motion.div
        className="absolute top-6 right-[6%] hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <SmilingSun className="h-24 w-24 text-sun" />
      </motion.div>
      {/* cloud */}
      <motion.div
        className="absolute top-32 left-[4%] hidden md:block"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cloud className="h-20 w-20 text-white drop-shadow-md" />
      </motion.div>
      {/* leaf */}
      <motion.div
        className="absolute bottom-24 left-[8%]"
        animate={{ y: [0, -14, 0], rotate: [-8, 6, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Leaf className="h-14 w-14 text-nature/80" />
      </motion.div>
      {/* star */}
      <motion.div
        className="absolute top-[44%] right-[10%]"
        animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Star className="h-10 w-10 text-pop-blue animate-twinkle" />
      </motion.div>
      {/* paper plane */}
      <motion.div
        className="absolute top-44 right-[28%] hidden lg:block"
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      >
        <PaperPlane className="h-10 w-10 text-pop-blue" />
      </motion.div>
      {/* heart */}
      <motion.div
        className="absolute bottom-32 right-[14%]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Heart className="h-9 w-9 text-pop-red" />
      </motion.div>
      {/* dashed swirl arrow */}
      <ScribbleArrow className="absolute top-32 right-[20%] hidden h-24 w-24 text-burgundy/40 md:block" />
    </div>
  );
}

export function CloudDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-12 w-full ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path
        d="M0 40 C 160 80, 280 0, 440 40 S 760 80, 920 40 1240 0 1440 40 L1440 80 L0 80 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Blob({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute -z-10 animate-blob bg-gradient-warm blur-3xl opacity-60 ${className}`}
    />
  );
}

/* ---------- icons (doodle-style) ---------- */
export function SmilingSun({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className}>
      <circle cx="40" cy="40" r="16" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 40 + Math.cos(a) * 24;
        const y1 = 40 + Math.sin(a) * 24;
        const x2 = 40 + Math.cos(a) * 34;
        const y2 = 40 + Math.sin(a) * 34;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
      {/* smiley */}
      <circle cx="35" cy="38" r="1.6" fill="#10233E" />
      <circle cx="45" cy="38" r="1.6" fill="#10233E" />
      <path
        d="M34 44 Q 40 49 46 44"
        stroke="#10233E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Sun({ className = '' }: { className?: string }) {
  return <SmilingSun className={className} />;
}

export function Cloud({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className}>
      <path
        d="M20 45 Q5 45 5 32 Q5 22 18 22 Q22 10 36 12 Q44 0 56 6 Q70 0 76 16 Q92 14 92 30 Q92 45 78 45 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Leaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M10 54 C 10 20 28 8 54 10 C 56 36 38 56 10 54 Z"
        fill="currentColor"
      />
      <path
        d="M14 50 C 30 38 42 24 50 14"
        stroke="rgba(0,0,0,.2)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M32 4 L37 27 L60 32 L37 37 L32 60 L27 37 L4 32 L27 27 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PaperPlane({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path d="M4 32 L60 6 L48 58 L30 38 Z" fill="currentColor" />
      <path d="M30 38 L60 6" stroke="rgba(0,0,0,.15)" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function Pencil({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="8" y="24" width="44" height="16" transform="rotate(-20 8 24)" fill="currentColor" />
      <polygon points="52,24 64,32 52,40" fill="#1F1F1F" />
    </svg>
  );
}

export function Flower({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <g fill="currentColor">
        <circle cx="32" cy="16" r="9" />
        <circle cx="16" cy="32" r="9" />
        <circle cx="48" cy="32" r="9" />
        <circle cx="32" cy="48" r="9" />
      </g>
      <circle cx="32" cy="32" r="6" fill="#F4C542" />
    </svg>
  );
}

export function Heart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M32 56 C 6 38 6 18 20 14 C 28 12 32 20 32 22 C 32 20 36 12 44 14 C 58 18 58 38 32 56 Z"
        fill="currentColor"
        stroke="#fff"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function Star({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M32 4 L40 24 L62 26 L46 40 L52 60 L32 49 L12 60 L18 40 L2 26 L24 24 Z"
        fill="currentColor"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScribbleArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <path
        d="M8 70 C 10 30, 30 14, 50 26 C 60 32, 56 50, 40 48 C 28 46, 28 30, 40 24"
        className="scribble-arrow"
      />
      <path d="M44 18 L40 24 L48 28" className="scribble-arrow" />
    </svg>
  );
}

export function Squiggle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none">
      <path
        d="M2 14 Q 15 2, 28 14 T 56 14 T 84 14 T 112 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
