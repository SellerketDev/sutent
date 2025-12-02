import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import InfluencerSection from './components/InfluencerSection';
import KOLSection from './components/KOLSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <InfluencerSection />
        <KOLSection />
      </main>
      <ContactSection />
    </div>
  );
}

export default App;


