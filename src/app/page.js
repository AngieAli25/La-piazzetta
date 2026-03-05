import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Brands from '@/components/Brands/Brands';
import Reviews from '@/components/Reviews/Reviews';
import Events from '@/components/Events/Events';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Brands />
      <Reviews />
      <Events />
      <Footer />
    </main>
  );
}
