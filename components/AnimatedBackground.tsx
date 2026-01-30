import React from 'react';

interface Props {
  mousePos: { x: number, y: number };
}

export const AnimatedBackground: React.FC<Props> = ({ mousePos }) => {
  const moveX = (mousePos.x / window.innerWidth - 0.5) * 40;
  const moveY = (mousePos.y / window.innerHeight - 0.5) * 40;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Shimmer */}
      <div className="absolute inset-0 shimmer-grid opacity-30" />
      
      {/* Soft Animated Gradient */}
      <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.2)_0%,rgba(59,130,246,0.1)_25%,transparent_50%)] animate-pulse" />
      
      {/* Light Field Beams */}
      <div 
        className="absolute w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full"
        style={{ 
          transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)`,
          transition: 'transform 0.8s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      />
      
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-400/5 blur-[150px] rounded-full animate-bounce" style={{ animationDuration: '10s' }} />

      {/* Parallax Abstract Shapes */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 border-2 border-black/5 rounded-full"
        style={{ transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-40 left-10 w-48 h-12 bg-green-500/10 rounded-full rotate-45"
        style={{ transform: `translate(${moveX * -0.3}px, ${moveY * -0.3}px)` }}
      />
      
      {/* Particle Drift (Simplified) */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-black/10 rounded-full particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};