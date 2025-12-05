import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! (Demo)");
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 pt-24 pb-10 overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black z-0"></div>

      <div className="container-custom px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 break-keep">{t.contact.title}</h2>
            <p className="text-sm md:text-base text-gray-400 mb-8 break-keep">
              {t.contact.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Phone</p>
                  <p className="text-base md:text-lg font-semibold">+82 2-6929-1994</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Email</p>
                  <p className="text-base md:text-lg font-semibold">contact@sutentr.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Office</p>
                  <p className="text-base md:text-lg font-semibold break-keep">Seoul, Guro-gu, Digital-ro 288</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-6 md:p-8 rounded-lg border border-white/10">
            <h3 className="text-lg md:text-xl font-bold mb-6">{t.contact.form_title}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.contact.labels.name}</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white text-sm md:text-base" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.contact.labels.company}</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white text-sm md:text-base" placeholder="Company Name" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t.contact.labels.email}</label>
                <input type="email" className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white text-sm md:text-base" placeholder="hello@example.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">{t.contact.labels.message}</label>
                <textarea rows={4} className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white text-sm md:text-base" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-black font-bold py-3 md:py-4 rounded hover:bg-white transition-colors text-sm md:text-base">
                {t.contact.labels.btn}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 SUT Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
