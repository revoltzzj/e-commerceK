import { Instagram, Facebook, Twitter, Mail, MapPin, ShoppingBag } from 'lucide-react';
import { SHOPEE_LINK } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-bg pt-32 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <span className="text-3xl font-black tracking-tighter uppercase font-display leading-none">MODA.</span>
            <p className="text-xs uppercase font-bold tracking-widest text-brand-text/40 leading-loose">
              Refining urban aesthetics since 2018. Premium streetwear delivered via Shopee.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-brand-text/20 hover:border-brand-accent hover:text-brand-accent transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-text/30 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Collections', 'About', 'FAQ', 'Tracking'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs font-bold uppercase tracking-widest text-brand-text/60 hover:text-brand-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-text/30 mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent italic">Email Us</span>
                <span className="text-xs font-bold tracking-widest uppercase">studio@moda.com.br</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent italic">Location</span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-text/60">SÃO PAULO / BR</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-text/30 mb-8">Storefront</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-8 leading-relaxed">Access our official Shopee vault for exclusive limited drops.</p>
            <a
              href={SHOPEE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-accent text-white px-8 py-5 rounded-none text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-text transition-all w-full flex items-center justify-between shadow-xl"
            >
              <span>Shopee Store</span>
              <ShoppingBag size={16} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/30">
          <p>© {currentYear} MODA STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-text transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-text transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
