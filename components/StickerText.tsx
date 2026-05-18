'use client';

import { motion } from 'framer-motion';

type Word = {
  text: string;
  color: string;
  rotate?: number;
};

export function StickerText({
  words,
  className = '',
  stagger = 0.08,
}: {
  words: Word[];
  className?: string;
  stagger?: number;
}) {
  return (
    <span className={`inline-flex flex-wrap items-end gap-x-3 gap-y-1 leading-[1.05] ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.85, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: w.rotate ?? 0,
          }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.55,
            delay: i * stagger,
            type: 'spring',
            stiffness: 180,
            damping: 14,
          }}
          whileHover={{ scale: 1.06, rotate: 0 }}
          className="sticker-word"
          style={{ color: w.color }}
        >
          {w.text}
        </motion.span>
      ))}
    </span>
  );
}
