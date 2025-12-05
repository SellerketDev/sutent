import { motion } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck, Zap, Mic, User, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.services.list[0].title,
      description: t.services.list[0].description,
      image: "/images/service_1.jpg"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: t.services.list[1].title,
      description: t.services.list[1].description,
      image: "/images/service_2.jpg"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t.services.list[2].title,
      description: t.services.list[2].description,
      image: "/images/service_3.webp"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t.services.list[3].title,
      description: t.services.list[3].description,
      image: "/images/service_4.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        {/* Top: Global Connect Visual Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-32"
        >
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-2 border border-accent/30 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 tracking-widest uppercase">
              {t.services.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight break-keep">
              {t.services.title_main}<br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.services.title_sub}</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed break-keep">
              <p>
                {t.services.intro_1}
              </p>
              <p>
                {t.services.intro_2}
              </p>
              <p className="text-gray-400 text-base border-l-2 border-accent pl-4 mt-6 italic">
                {t.services.quote}
              </p>
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main Visual Card */}
            <div className="relative z-10 bg-zinc-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-square overflow-hidden rounded-tl-xl group">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" alt="Model" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <div className="text-white font-bold text-sm flex items-center gap-2"><User size={16} className="text-accent" /> MODEL</div>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-tr-xl group">
                  <img src="/images/KOL1.png" alt="KOL" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <div className="text-white font-bold text-sm flex items-center gap-2"><Zap size={16} className="text-accent" /> KOL</div>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-bl-xl group">
                  <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop" alt="Voice Actor" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <div className="text-white font-bold text-sm flex items-center gap-2"><Mic size={16} className="text-accent" /> VOICE</div>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-br-xl group">
                  <img src="/images/Creator1.png" alt="Influencer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <div className="text-white font-bold text-sm flex items-center gap-2"><Video size={16} className="text-accent" /> CREATOR</div>
                  </div>
                </div>
              </div>
              
              {/* Center Connection Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/80 backdrop-blur-md rounded-full border border-accent/50 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <Globe2 className="text-accent w-10 h-10 animate-pulse" />
              </div>
            </div>

            {/* Decorative Circles behind */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* Existing Services List */}
        <div className="space-y-16 md:space-y-32 mt-24 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.services.core_title}</h3>
             <p className="text-gray-400">{t.services.core_desc}</p>
          </div>

          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-20`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-3/5">
                  <div className="relative aspect-video overflow-hidden rounded-2xl group border border-white/10">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Decorative overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 opacity-60" />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-2/5 text-center lg:text-left">
                  <div className={`inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4 md:mb-6 ${!isEven && 'lg:ml-auto'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 break-keep">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed break-keep">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
