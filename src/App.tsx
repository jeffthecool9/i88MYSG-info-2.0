
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FootballShowcase } from './components/FootballShowcase';
import { TrustSection } from './components/TrustSection';
import { FlowSection } from './components/FlowSection';
import { PromoSection } from './components/PromoSection';
import { OfficialLinks } from './components/OfficialLinks';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'showcase', 'safety', 'how-it-works', 'promos', 'official'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <ToastContainer />
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="showcase">
          <FootballShowcase />
        </section>
        
        <section id="safety">
          <TrustSection />
        </section>
        
        <section id="how-it-works">
          <FlowSection />
        </section>
        
        <section id="promos">
          <PromoSection />
        </section>
        
        <section id="official">
          <OfficialLinks />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
