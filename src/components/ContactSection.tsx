import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Ready to Work With Us?</h2>
            <p className="text-gray-400 mb-8">
              인플루언서 섭외, KOL 마케팅 제안 등 궁금한 점이 있으시다면 언제든 연락주세요.
              성공적인 비즈니스 파트너가 되어드리겠습니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center text-accent">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-semibold">02-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center text-accent">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold">contact@sutent.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center text-accent">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <p className="text-lg font-semibold">Seoul, Gangnam-gu, Teheran-ro 123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Company</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-black border border-gray-700 rounded p-3 focus:border-accent focus:outline-none text-white"></textarea>
              </div>
              <button type="button" className="w-full bg-accent text-black font-bold py-4 rounded hover:bg-white transition-colors">
                SEND MESSAGE
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


