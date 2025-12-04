import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import InfluencerSection from './components/InfluencerSection';
import KOLSection from './components/KOLSection';
import ContactSection from './components/ContactSection';
import RecruitSection from './components/RecruitSection';
import ThreeBackground from './components/ThreeBackground';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SmoothScroll />
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black">
          <ThreeBackground />
          <Navbar />
          <main>
            <Hero />
            <ServicesSection />
            <InfluencerSection />
            <KOLSection />
            <RecruitSection />
          </main>
          <ContactSection />
        </div>
      )}
    </>
  );
}

export default App;
