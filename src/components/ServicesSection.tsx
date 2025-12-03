import { motion } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Hyper-Speed Casting",
    description: "독자적인 AI 매칭 알고리즘으로 브랜드 페르소나에 완벽하게 부합하는 인플루언서를 단 24시간 내에 제안합니다. 속도가 곧 경쟁력입니다.",
    image: "/images/service_1.jpg"
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Borderless Expansion",
    description: "국경 없는 마케팅을 실현합니다. 북미, 동남아시아, 유럽 등 글로벌 현지 KOL 네트워크를 통해 귀사의 브랜드를 전 세계에 각인시킵니다.",
    image: "/images/service_2.jpg"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Precision Data Intelligence",
    description: "단순 노출 수치를 넘어섭니다. 전환율(CVR), ROAS, 참여도 등 실질적인 성과 지표를 정밀 분석하여 다음 스텝을 위한 명확한 인사이트를 제공합니다.",
    image: "/images/service_3.webp"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Zero-Risk Assurance",
    description: "체계적인 리스크 모니터링 시스템과 법적 보호 장치를 통해, 브랜드 이미지 손상 없는 가장 안전하고 투명한 마케팅 실행을 보장합니다.",
    image: "/images/service_4.jpg"
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
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 break-keep">Why Choose SUT Ent?</h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto break-keep leading-relaxed">
            우리는 단순한 대행사가 아닙니다. <span className="text-white font-bold">압도적인 데이터</span>와 <span className="text-white font-bold">글로벌 인프라</span>를 기반으로, 
            불확실한 마케팅 시장에서 <span className="text-accent font-bold">가장 확실한 성공 방정식</span>을 제시하는 비즈니스 파트너입니다.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
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
