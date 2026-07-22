import testimonialsJson from '@/content/testimonials.json';

export const SCHOOL = {
  name: 'Charmwood International School',
  short: 'Charmwood',
  tagline: 'Nurturing Minds. Shaping Futures.',
  motto: 'Satya · Sneh · Sahas · Sanyam',
  founded: 1998,
  address: '4, Laxmi Road, Dalanwala, Dehradun – 248001, Uttarakhand',
  phones: ['+91 98974 05255', '+91 89799 00866'],
  email: 'charmwoodinternational@gmail.com',
  whatsapp: '919897405255',
  hours: 'Mon – Sat · 8:00 AM – 2:30 PM',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100064209091843',
    instagram: 'https://www.instagram.com/charmwoodinternational',
    youtube: 'https://www.youtube.com/@CharmwoodInternationalSchool',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'Approach', href: '#approach' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

/* -------------------------------------------------------------
 * PHOTOS
 * -------------------------------------------------------------
 * Every entry points to a local file inside /public/images/...
 * with a `fallback` remote URL. If the local file doesn't exist,
 * the site shows the fallback so nothing looks broken. The client
 * only needs to drop matching filenames into /public/images/ to
 * replace any photo.  See /public/images/README.txt for a full
 * folder map.
 * ------------------------------------------------------------- */

export const HERO_SLIDES = [
  {
    src: '/images/01-hero/slide-1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=80',
    headline: 'Where Little Dreams Begin',
    sub: 'A warm, sunlit campus where every child is met with joy and patience.',
  },
  {
    src: '/images/01-hero/slide-2.jpg',
    fallback:
      'https://images.unsplash.com/photo-1587653263995-422546a7a569?auto=format&fit=crop&w=2000&q=80',
    headline: 'Learning with Joy, Growing with Confidence',
    sub: 'Activity-based learning rooted in curiosity, art and play.',
  },
  {
    src: '/images/01-hero/slide-3.jpg',
    fallback:
      'https://images.unsplash.com/photo-1564429097439-e4d2e2854a35?auto=format&fit=crop&w=2000&q=80',
    headline: 'Every Child Shines at Charmwood',
    sub: 'Small classes. Caring teachers. Big imaginations.',
  },
];

/** Small round avatars beside "450+ happy families" in the hero. */
export const HERO_FAMILIES = [
  {
    src: '/images/01-hero/family-1.jpg',
    fallback:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    src: '/images/01-hero/family-2.jpg',
    fallback:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    src: '/images/01-hero/family-3.jpg',
    fallback:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80',
  },
  {
    src: '/images/01-hero/family-4.jpg',
    fallback:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
];

/** Two small tilted polaroids behind the hero photo. */
export const HERO_POLAROIDS = {
  art: {
    src: '/images/01-hero/polaroid-art.jpg',
    fallback:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80',
  },
  play: {
    src: '/images/01-hero/polaroid-play.jpg',
    fallback:
      'https://images.unsplash.com/photo-1564429097439-e4d2e2854a35?auto=format&fit=crop&w=600&q=80',
  },
};

/** About section photos. */
export const ABOUT_PHOTOS = {
  main: {
    src: '/images/02-about/main.jpg',
    fallback:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80',
  },
  secondary: {
    src: '/images/02-about/secondary.jpg',
    fallback:
      'https://images.unsplash.com/photo-1564429097439-e4d2e2854a35?auto=format&fit=crop&w=800&q=80',
  },
};

/** Admissions form header photo. */
export const ADMISSIONS_HEADER = {
  src: '/images/05-admissions/form-header.jpg',
  fallback:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
};

export const FEATURES = [
  {
    title: 'Smart Classrooms',
    desc: 'Bright, tech-enabled rooms built around how young minds learn.',
    grad: 'from-sky/70 to-white',
    accent: '#10233E',
  },
  {
    title: 'Activity-Based Learning',
    desc: 'Concepts taught through play, projects, stories and discovery.',
    grad: 'from-peach/70 to-white',
    accent: '#8E1F1F',
  },
  {
    title: 'Safe Campus',
    desc: 'CCTV, closed-gate policy and trained staff at every transition.',
    grad: 'from-nature/60 to-white',
    accent: '#7BAE7F',
  },
  {
    title: 'Experienced Faculty',
    desc: 'Patient, child-first educators with years of primary expertise.',
    grad: 'from-sun/60 to-white',
    accent: '#D4A64A',
  },
  {
    title: 'Creative Learning',
    desc: 'Art, craft, clay and storytelling held as seriously as Maths.',
    grad: 'from-sky/60 to-peach/40',
    accent: '#A8D5E5',
  },
  {
    title: 'Sports & Fitness',
    desc: 'Daily outdoor games, yoga and athletics for happy, healthy bodies.',
    grad: 'from-nature/60 to-sun/40',
    accent: '#7BAE7F',
  },
  {
    title: 'Arts & Music',
    desc: 'Vocals, instruments, dance and theatre as part of every week.',
    grad: 'from-burgundy/30 to-peach/50',
    accent: '#8E1F1F',
  },
  {
    title: 'Personality Development',
    desc: 'Confidence, kindness and communication — taught and practised.',
    grad: 'from-gold/40 to-ivory-cream',
    accent: '#D4A64A',
  },
];

export const CAMPUS_PHOTOS = [
  {
    src: '/images/03-campus-life/01-classroom.jpg',
    fallback:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=80',
    label: 'Classroom mornings',
    span: 'tall' as const,
  },
  {
    src: '/images/03-campus-life/02-outdoor.jpg',
    fallback:
      'https://images.unsplash.com/photo-1564429097439-e4d2e2854a35?auto=format&fit=crop&w=1100&q=80',
    label: 'Outdoor play',
  },
  {
    src: '/images/03-campus-life/03-story-circle.jpg',
    fallback:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80',
    label: 'Story circle',
  },
  {
    src: '/images/03-campus-life/04-art-craft.jpg',
    fallback:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1100&q=80',
    label: 'Art & craft',
    span: 'wide' as const,
  },
  {
    src: '/images/03-campus-life/05-group-projects.jpg',
    fallback:
      'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?auto=format&fit=crop&w=1100&q=80',
    label: 'Group projects',
  },
  {
    src: '/images/03-campus-life/06-free-play.jpg',
    fallback:
      'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?auto=format&fit=crop&w=1100&q=80',
    label: 'Free play',
  },
  {
    src: '/images/03-campus-life/07-festivals.jpg',
    fallback:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80',
    label: 'Festivals & celebrations',
    span: 'tall' as const,
  },
  {
    src: '/images/03-campus-life/08-reading.jpg',
    fallback:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1100&q=80',
    label: 'Reading hour',
  },
  {
    src: '/images/03-campus-life/09-annual-day.jpg',
    fallback:
      'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?auto=format&fit=crop&w=1100&q=80',
    label: 'Annual day',
  },
  {
    src: '/images/03-campus-life/10-show-tell.jpg',
    fallback:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=80',
    label: 'Show & tell',
  },
];

export const PROGRAMS = [
  {
    name: 'Playgroup',
    age: 'Ages 2 – 3',
    blurb: 'A gentle first taste of school — songs, sand, stories and lots of cuddles.',
    color: 'from-peach to-ivory-cream',
    ring: 'ring-peach',
    icon: '🌸',
  },
  {
    name: 'Nursery',
    age: 'Ages 3 – 4',
    blurb: 'Phonics, number sense and friendship-making, all through play.',
    color: 'from-sky to-ivory-cream',
    ring: 'ring-sky',
    icon: '🎈',
  },
  {
    name: 'Kindergarten',
    age: 'Ages 4 – 5',
    blurb: 'Letters become words, words become wonder. Confidence begins here.',
    color: 'from-sun/80 to-ivory-cream',
    ring: 'ring-sun',
    icon: '🌟',
  },
  {
    name: 'Primary School',
    age: 'Classes 1 – 6',
    blurb: 'An ICSE-aligned core, taught with warmth and a wide co-curricular life.',
    color: 'from-nature/70 to-ivory-cream',
    ring: 'ring-nature',
    icon: '📚',
  },
];

export const APPROACH = [
  {
    step: '01',
    title: 'Experiential Learning',
    desc: 'We start with the real, the touchable, the doable — and only then move to symbols and abstractions.',
  },
  {
    step: '02',
    title: 'Creativity at the Core',
    desc: 'Drawing, music, theatre and free play sit beside Maths and Language, not behind them.',
  },
  {
    step: '03',
    title: 'Confidence Building',
    desc: 'Daily speaking, presenting and leadership opportunities — every child, every week.',
  },
  {
    step: '04',
    title: 'Communication Skills',
    desc: 'Language lab work, debates, storytelling and reading aloud build clear, kind speakers.',
  },
  {
    step: '05',
    title: 'Curiosity-Driven',
    desc: 'Questions are celebrated. Wrong answers are stepping stones. Curiosity is protected, fiercely.',
  },
];

/* -------------------------------------------------------------
 * TESTIMONIALS
 * -------------------------------------------------------------
 * The actual reviews live in /content/testimonials.json so the
 * school can add/edit them without touching code. Photos go in
 * /public/images/04-testimonials/ and are referenced by filename
 * from the JSON. See /content/README.txt for instructions.
 * ------------------------------------------------------------- */

// Neutral portrait placeholders shown while a parent photo is missing.
const TESTIMONIAL_FALLBACKS = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
];

export const TESTIMONIALS = testimonialsJson.map((t, i) => ({
  quote: t.quote,
  name: t.name,
  role: t.role,
  img: t.photo
    ? `/images/04-testimonials/${t.photo}`
    : TESTIMONIAL_FALLBACKS[i % TESTIMONIAL_FALLBACKS.length],
  fallback: TESTIMONIAL_FALLBACKS[i % TESTIMONIAL_FALLBACKS.length],
}));

export const ADMISSION_STEPS = [
  { title: 'Enquire', desc: 'Send us a short enquiry or simply call. We will respond within a working day.' },
  { title: 'Visit', desc: 'Walk the campus, meet teachers and watch a real morning at Charmwood.' },
  { title: 'Interaction', desc: 'A warm, unhurried conversation with the child and parents.' },
  { title: 'Welcome', desc: 'Receive your offer, complete the formalities and join our family.' },
];

export const STATS = [
  { value: 27, suffix: '+', label: 'Years of Trust' },
  { value: 450, suffix: '+', label: 'Happy Students' },
  { value: 35, suffix: '', label: 'Devoted Teachers' },
  { value: 15, suffix: '+', label: 'Co-curricular Pursuits' },
];
