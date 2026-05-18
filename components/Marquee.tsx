'use client';

const ITEMS = [
  'Activity-Based Learning',
  'Nature-Filled Campus',
  'ICSE Aligned',
  'Yoga & Mindfulness',
  'Music & Movement',
  'Story-Telling',
  'Art & Craft',
  'Sports Every Day',
  'Confidence Building',
  'Since 1998',
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-burgundy/10 bg-burgundy py-4 text-ivory-cream">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-lg italic text-ivory-cream/90"
          >
            <span>{item}</span>
            <span className="text-gold-soft">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
