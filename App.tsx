import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Topics } from './components/Topics';
import { ProofSection } from './components/ProofSection';
import { CTASection } from './components/CTASection';
import { AnimatedBackground } from './components/AnimatedBackground';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-black overflow-hidden selection:bg-orange-100">
      <AnimatedBackground mousePos={mousePos} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="space-y-24 pb-20">
          <Hero mousePos={mousePos} />
          
          <ValueProp />
          
          <Topics />
          
          <ProofSection />
          
          <CTASection />
        </main>
      </div>
      
      {/* Scroll to Top / Floating Element */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl group"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;