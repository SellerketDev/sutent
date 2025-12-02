import { motion } from 'framer-motion';

const influencers = [
  {
    id: 1,
    name: "Kim Ji-soo",
    category: "Fashion & Beauty",
    followers: "250K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    tags: ["#Luxury", "#Chic", "#Trend"]
  },
  {
    id: 2,
    name: "Lee Min-woo",
    category: "Lifestyle & Travel",
    followers: "180K",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    tags: ["#Vlog", "#Trip", "#Mood"]
  },
  {
    id: 3,
    name: "Park Ha-eun",
    category: "Cosmetics",
    followers: "320K",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop",
    tags: ["#Pure", "#SkinCare", "#Daily"]
  },
  {
    id: 4,
    name: "Choi Joon",
    category: "Tech & Blockchain",
    followers: "150K",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    tags: ["#Review", "#Crypto", "#Tech"]
  }
];

export default function InfluencerSection() {
  return (
    <section id="models" className="py-32 bg-black">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 px-4"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              EXCLUSIVE<br />
              <span className="text-zinc-800">INFLUENCERS</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0">
            각 분야에서 가장 영향력 있는 목소리.<br />
            SUT Ent.의 전속 크리에이터를 만나보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {influencers.map((model, index) => (
            <motion.div 
              key={model.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="overflow-hidden mb-2">
                  <p className="text-accent font-bold tracking-wider text-sm transform translate-y-[150%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {model.category}
                  </p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{model.name}</h3>
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {model.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-300 border border-white/20 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div>
                    <span className="block text-xs text-gray-400">Followers</span>
                    <span className="text-xl font-bold text-white">{model.followers}</span>
                  </div>
                  <button className="bg-white text-black rounded-full p-3 hover:bg-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
