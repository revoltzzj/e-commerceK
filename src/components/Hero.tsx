import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { SHOPEE_LINK } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-brand-bg">
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h2 className="text-[18vw] lg:text-[22vw] font-black leading-none tracking-tighter opacity-[0.03] text-brand-text/50 uppercase font-display whitespace-nowrap">
          URBANISM
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-brand-accent"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-text/40">
                Collection 001 // SUMMER 2024
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl lg:text-[140px] font-black text-brand-text leading-[0.85] tracking-tighter mb-10 uppercase font-display">
              STREET<br />
              <span className="text-brand-accent italic">SOUL.</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a
                href={SHOPEE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between bg-brand-accent text-white px-10 py-6 rounded-none text-lg font-black uppercase tracking-tighter hover:bg-brand-text transition-all group gap-8 shadow-2xl"
                id="hero-cta-button"
              >
                Comprar na Shopee
                <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center border-b-2 border-brand-text pb-2 text-[10px] uppercase font-bold tracking-[0.3em] hover:text-brand-accent hover:border-brand-accent transition-all self-center"
                id="hero-secondary-button"
              >
                View Collections
              </a>
            </div>
            
            <div className="flex items-center gap-8 border-t border-black/5 pt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 max-w-[120px]">
                Quality guaranteed by Shopee platform
              </p>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg bg-gray-200"></div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 bg-white p-4 shadow-2xl border border-black/5 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://picsum.photos/seed/urban-soul/800/1000"
                  alt="Moda Urbana Hero"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white uppercase tracking-widest text-[10px] font-bold italic">
                  Premium Apparel // 2024
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
