import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import System from './components/System';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
