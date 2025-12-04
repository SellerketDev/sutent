import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-widest text-white">
            SUT <span className="text-accent">Ent.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest">
            <a href="#services" className="hover:text-accent transition-colors">SERVICES</a>
            <a href="#models" className="hover:text-accent transition-colors">MODELS</a>
            <a href="#kol" className="hover:text-accent transition-colors">KOL & BLOCKCHAIN</a>
            <a href="#contact" className="hover:text-accent transition-colors">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-4 text-center">
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-accent">SERVICES</a>
            <a href="#models" onClick={() => setIsOpen(false)} className="hover:text-accent">MODELS</a>
            <a href="#kol" onClick={() => setIsOpen(false)} className="hover:text-accent">KOL</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-accent">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
}


