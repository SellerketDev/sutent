import { motion } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Casting",
    description: "AI 기반 매칭 시스템으로 브랜드에 최적화된 인플루언서를 24시간 내 매칭합니다.",
    image: "/images/service_1.jfif"
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Global Reach",
    description: "국내뿐만 아니라 북미, 동남아시아 KOL 네트워크를 통한 글로벌 마케팅을 지원합니다.",
    image: "/images/service_2.jfif"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Analytics",
    description: "단순 노출이 아닌, 전환율(ROAS) 중심의 정밀한 성과 분석 리포트를 제공합니다.",
    image: "/images/service_3.jfif"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Risk Management",
    description: "인플루언서 리스크 모니터링 및 계약 관리로 안전한 마케팅 실행을 보장합니다.",
    image: "/images/service_4.jfif"
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

      <div className="container-custom relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Why SUT Ent?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            단순한 중개를 넘어, <span className="text-white font-bold">기술과 데이터</span>를 통해 가장 확실한 마케팅 솔루션을 제안합니다.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
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
                  <div className={`inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-6 ${!isEven && 'lg:ml-auto'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
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
