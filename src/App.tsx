import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import System from './components/System';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-cyan selection:text-black font-pretendard">
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <Intro />
        </div>
        <div id="system">
          <System />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-white/10">
        <a
          href="tel:01023033778"
          className="flex-1 bg-brand-obsidian/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-lg border-r border-white/10 active:bg-brand-gold/20 transition-colors"
        >
          <Phone size={20} className="text-brand-gold" />
          전화문의
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-brand-obsidian/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-lg active:bg-brand-gold/20 transition-colors"
        >
          <MessageSquare size={20} className="text-brand-purple-light" />
          문자문의
        </a>
      </div>
    </div>
  );
}

export default App;
