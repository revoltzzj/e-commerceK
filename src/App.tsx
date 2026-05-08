/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <About />
      </main>
      <Footer />
    </div>
  );
}
