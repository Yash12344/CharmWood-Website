import type { Metadata } from 'next';
import { Poppins, Fraunces } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://charmwoodschool.com'),
  title: {
    default: 'Charmwood International School — Nurturing Minds. Shaping Futures.',
    template: '%s · Charmwood International School',
  },
  description:
    'A warm, joyful, activity-based school in Dehradun for children from Playgroup to Class 6. Nurturing minds, shaping futures since 1998.',
  keywords: [
    'Charmwood International School',
    'school in Dehradun',
    'best preschool Dehradun',
    'Dalanwala school',
    'ICSE primary Dehradun',
    'Nursery admission Dehradun',
  ],
  openGraph: {
    title: 'Charmwood International School',
    description: 'Nurturing Minds. Shaping Futures.',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
