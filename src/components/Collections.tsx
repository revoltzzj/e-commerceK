import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { SHOPEE_LINK } from '../constants';

const products = [
  {
    id: 1,
    name: 'Hoodie Oversized Minimal',
    price: 'R$ 129,90',
    originalPrice: 'R$ 189,90',
    image: 'https://picsum.photos/seed/hoodie/600/800',
    rating: 4.9,
    reviews: 124,
    badge: 'Mais Vendido',
  },
  {
    id: 2,
    name: 'Camiseta Premium Cotton',
    price: 'R$ 79,90',
    originalPrice: 'R$ 99,90',
    image: 'https://picsum.photos/seed/tshirt/600/800',
    rating: 4.8,
    reviews: 89,
    badge: 'Lançamento',
  },
  {
    id: 3,
    name: 'Calça Cargo Urban Style',
    price: 'R$ 159,90',
    originalPrice: 'R$ 219,90',
    image: 'https://picsum.photos/seed/pants/600/800',
    rating: 5.0,
    reviews: 56,
  },
  {
    id: 4,
    name: 'Jaqueta Bomber Tech',
    price: 'R$ 249,90',
    originalPrice: 'R$ 299,90',
    image: 'https://picsum.photos/seed/jacket/600/800',
    rating: 4.7,
    reviews: 42,
    badge: 'Oferta',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <div className="absolute -top-12 -left-4 text-8xl font-black opacity-[0.03] select-none uppercase font-display">
              Items
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase mb-2 font-display relative z-10">
              Curation <span className="text-brand-accent italic">01.</span>
            </h2>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-text/40">
              Essential pieces for the urban explorer
            </p>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-[0.4em] border-b-2 border-brand-text pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
            View All Archives
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-bg mb-6 border border-black/5 group-hover:border-black/20 transition-all">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <span className="absolute top-0 left-0 bg-brand-accent text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-brand-accent">
                  <a
                    href={SHOPEE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3"
                  >
                    <ShoppingBag size={14} strokeWidth={3} />
                    Shop on Shopee
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xs font-bold uppercase tracking-tight text-brand-text group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star size={10} className="fill-brand-accent text-brand-accent" />
                    <span className="text-[9px] font-bold text-brand-text/40">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-brand-text">{product.price}</span>
                  <span className="text-[10px] text-brand-text/30 font-bold line-through tracking-wider">{product.originalPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
