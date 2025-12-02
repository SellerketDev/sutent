import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent font-bold tracking-[0.3em] mb-6 uppercase text-sm md:text-base"
          >
            Premium Influencer & KOL Agency
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight"
          >
            SUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">ENTERTAINMENT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-light leading-relaxed"
          >
            우리는 단순한 마케팅을 하지 않습니다.<br className="hidden md:block" />
            <strong className="text-white">데이터</strong>에 기반한 전략과 <strong className="text-white">크리에이티브</strong>한 감각으로<br className="hidden md:block" />
            브랜드의 가치를 극대화하는 <span className="text-accent">하이엔드 파트너</span>입니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-accent text-black font-bold rounded-sm overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">START PROJECT</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a 
              href="#models" 
              className="px-8 py-4 border border-white/30 text-white rounded-sm hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white hover:scale-105"
            >
              VIEW OUR MODELS
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
}
