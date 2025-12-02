import { motion } from 'framer-motion';
import { Network, Lock, Cpu } from 'lucide-react';

export default function KOLSection() {
  return (
    <section id="kol" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Abstract Background - Tech/Nodes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
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
                 className="absolute top-10 left-10 bg-black/60 backdrop-blur-md border border-accent/30 p-4 rounded-lg"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-sm font-mono text-accent">NODE CONNECTED</span>
                 </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 className="absolute bottom-10 right-10 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg max-w-xs"
               >
                 <p className="text-white font-bold mb-1">ROI Analysis</p>
                 <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                   <div className="bg-accent w-[85%] h-full"></div>
                 </div>
                 <p className="text-right text-xs text-accent mt-1">+245% Growth</p>
               </motion.div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 text-accent font-bold tracking-widest mb-4">
              <Network className="w-5 h-5" />
              <span>WEB3 & BLOCKCHAIN</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Strategic Marketing for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Decentralized Future</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              블록체인 및 핀테크 프로젝트는 일반적인 마케팅 접근법으로는 성공하기 어렵습니다. 
              SUT Ent.는 프로젝트의 기술적 이해도를 갖춘 <span className="text-white font-semibold">KOL(Key Opinion Leader)</span>들과 함께 
              진정성 있는 커뮤니티를 구축합니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 group-hover:border-accent transition-colors">
                   <Cpu className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Deep Tech Understanding</h4>
                  <p className="text-sm text-gray-500">DeFi, NFT, Layer1/2 등 각 섹터에 대한 깊은 이해를 바탕으로 한 콘텐츠 기획</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 group-hover:border-accent transition-colors">
                   <Lock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Trust Building</h4>
                  <p className="text-sm text-gray-500">검증된 리더들의 보이스를 통해 프로젝트의 신뢰도(Trustworthiness) 확보</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-white text-black px-8 py-3 font-bold rounded-sm hover:bg-accent transition-colors flex items-center gap-2">
                CONSULTING REQUEST <span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
