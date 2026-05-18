import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Marquee } from '@/components/Marquee';
import { CampusLife } from '@/components/CampusLife';
import { Programs } from '@/components/Programs';
import { LearningApproach } from '@/components/LearningApproach';
import { Testimonials } from '@/components/Testimonials';
import { Admissions } from '@/components/Admissions';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Marquee />
      <Programs />
      <CampusLife />
      <LearningApproach />
      <Testimonials />
      <Admissions />
      <Contact />
      <Footer />
    </main>
  );
}
