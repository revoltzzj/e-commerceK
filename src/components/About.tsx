import { CheckCircle2, Truck, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Truck className="text-orange-600" />,
    title: 'Entrega Rápida',
    desc: 'Logística integrada Shopee para você receber suas peças no menor tempo possível.',
  },
  {
    icon: <ShieldCheck className="text-orange-600" />,
    title: 'Compra Segura',
    desc: 'Garantia Shopee: seu dinheiro protegido até que você receba e aprove o produto.',
  },
  {
    icon: <Zap className="text-orange-600" />,
    title: 'Qualidade Premium',
    desc: 'Todas as nossas peças passam por um rigoroso controle de qualidade antes do envio.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-brand-text text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 p-4 bg-white/5 border border-white/10 shadow-2xl skew-x-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/about-fashion/800/1000"
                  alt="Nossa História"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Design Element */}
            <div className="absolute -top-12 -left-12 select-none opacity-10">
              <p className="text-[120px] font-black uppercase tracking-tighter font-display leading-none">
                ABOUT
              </p>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-accent p-10 font-display italic">
              <p className="text-5xl font-black leading-none">Est. 2018</p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-brand-accent"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                Our Narrative
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 font-display leading-[0.9]">
              PURE <span className="text-brand-accent italic">AESTHETIC</span> <br/>
              URBAN SOUL.
            </h2>
            
            <p className="text-base text-gray-400 mb-12 leading-loose uppercase tracking-wide max-w-lg">
              We started with a simple belief: style is the soul of the city. Our mission is to deliver high-end streetwear aesthetics with the accessibility and trust of the Shopee platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[
                { label: 'DELIVERY', value: '48H' },
                { label: 'RATING', value: '5.0' },
                { label: 'CLIENTS', value: '5K+' },
              ].map((stat, i) => (
                <div key={i} className="border-t border-white/10 pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">{stat.label}</p>
                  <p className="text-3xl font-black font-display text-brand-accent italic">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
