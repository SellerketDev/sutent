import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function RecruitSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-black relative border-t border-zinc-900">
      <div className="container-custom px-4 relative z-10">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-16 overflow-hidden relative border border-white/10">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-30">
             <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Text Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 text-accent mb-4 font-bold tracking-wider uppercase text-sm">
                <Star size={16} fill="currentColor" />
                <span>{t.recruit.badge}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight break-keep">
                {t.recruit.title}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed break-keep">
                {t.recruit.desc}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Voice Actor', 'Influencer', 'KOL', 'Model', 'Creator'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-black/30 border border-white/20 rounded-full text-sm text-gray-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-bold text-lg hover:bg-accent hover:text-black transition-all shadow-lg shadow-white/10"
                onClick={() => window.location.href = 'mailto:recruit@sutent.com'}
              >
                <span>{t.recruit.btn}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
