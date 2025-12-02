import { motion } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Casting",
    description: "AI 기반 매칭 시스템으로 브랜드에 최적화된 인플루언서를 24시간 내 매칭합니다."
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Global Reach",
    description: "국내뿐만 아니라 북미, 동남아시아 KOL 네트워크를 통한 글로벌 마케팅을 지원합니다."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data Analytics",
    description: "단순 노출이 아닌, 전환율(ROAS) 중심의 정밀한 성과 분석 리포트를 제공합니다."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Risk Management",
    description: "인플루언서 리스크 모니터링 및 계약 관리로 안전한 마케팅 실행을 보장합니다."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why SUT Ent?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            단순한 중개를 넘어, <span className="text-white font-bold">기술과 데이터</span>를 통해 가장 확실한 마케팅 솔루션을 제안합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

