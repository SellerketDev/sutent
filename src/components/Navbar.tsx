import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-widest text-white">
            SUT <span className="text-accent">Ent.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest">
            <a href="#services" className="hover:text-accent transition-colors">{t.nav.services}</a>
            <a href="#models" className="hover:text-accent transition-colors">{t.nav.models}</a>
            <a href="#kol" className="hover:text-accent transition-colors">{t.nav.kol}</a>
            <a href="#contact" className="hover:text-accent transition-colors">{t.nav.contact}</a>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <Globe size={14} />
              <span className={`font-bold ${language === 'ko' ? 'text-accent' : 'text-gray-500'}`}>KO</span>
              <span className="text-gray-600">|</span>
              <span className={`font-bold ${language === 'en' ? 'text-accent' : 'text-gray-500'}`}>EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-white font-bold text-xs border border-white/20 px-2 py-1 rounded"
            >
              {language.toUpperCase()}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-4 text-center text-sm tracking-widest">
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-accent">{t.nav.services}</a>
            <a href="#models" onClick={() => setIsOpen(false)} className="hover:text-accent">{t.nav.models}</a>
            <a href="#kol" onClick={() => setIsOpen(false)} className="hover:text-accent">{t.nav.kol}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-accent">{t.nav.contact}</a>
          </div>
        </div>
      )}
    </nav>
  );
}
