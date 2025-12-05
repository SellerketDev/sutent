import { motion } from 'framer-motion';
import { Network, Lock, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function KOLSection() {
  const { t } = useLanguage();

  return (
    <section id="kol" className="py-32 relative overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      {/* Abstract Background - Tech/Nodes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-4">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                 src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop" 
                 alt="Blockchain Technology" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
               
               {/* Floating Data Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute top-4 left-4 sm:top-10 sm:left-10 bg-black/60 backdrop-blur-md border border-accent/30 p-3 sm:p-4 rounded-lg"
               >
                 <div className="flex items-center gap-2 sm:gap-3">
                   <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-xs sm:text-sm font-mono text-accent">NODE CONNECTED</span>
                 </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 bg-black/60 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-lg max-w-[160px] sm:max-w-xs"
               >
                 <p className="text-white font-bold mb-1 text-xs sm:text-base">ROI Analysis</p>
                 <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                   <div className="bg-accent w-[85%] h-full"></div>
                 </div>
                 <p className="text-right text-[10px] sm:text-xs text-accent mt-1">+245% Growth</p>
               </motion.div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 text-accent font-bold tracking-widest mb-4 text-sm sm:text-base">
              <Network className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t.kol.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-white break-keep">
              {t.kol.title_1}<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white block md:inline mt-2 md:mt-0">{t.kol.title_2}</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed break-keep">
              {t.kol.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 group-hover:border-accent transition-colors">
                   <Cpu className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t.kol.feature1_title}</h4>
                  <p className="text-sm text-gray-500">{t.kol.feature1_desc}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 group-hover:border-accent transition-colors">
                   <Lock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t.kol.feature2_title}</h4>
                  <p className="text-sm text-gray-500">{t.kol.feature2_desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-white text-black px-8 py-3 font-bold rounded-sm hover:bg-accent transition-colors flex items-center gap-2">
                {t.kol.btn} <span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
