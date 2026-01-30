import React from 'react';

export const LearningMethods: React.FC = () => {
  const methods = [
    { name: "Home\ntraining", color: "bg-white", size: "w-36 h-36 md:w-52 md:h-52", pos: "top-[15%] left-[8%] md:left-[15%]" },
    { name: "Face-to-face\nseminars", color: "bg-white", size: "w-44 h-44 md:w-64 md:h-64", pos: "bottom-[10%] left-[20%]" },
    { name: "Learn more", color: "bg-black text-white", size: "w-36 h-36 md:w-52 md:h-52", pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { name: "Online\nseminars", color: "bg-white", size: "w-36 h-36 md:w-52 md:h-52", pos: "top-[10%] right-[28%]" },
    { name: "Development\nprograms", color: "bg-white", size: "w-44 h-44 md:w-64 md:h-64", pos: "bottom-[12%] right-[18%]" },
    { name: "Business\ncoaching", color: "bg-white", size: "w-36 h-36 md:w-48 md:h-48", pos: "top-[20%] right-[8%]" },
  ];

  return (
    <section className="bg-[#41a366] rounded-[4rem] p-12 md:p-24 relative overflow-hidden min-h-[850px] shadow-[0_50px_100px_-20px_rgba(65,163,102,0.3)] border-b-8 border-orange-100">
      {/* Background organic noise/squiggles */}
      <div className="absolute top-[30%] right-[12%] opacity-15 pointer-events-none">
        <svg width="150" height="100" viewBox="0 0 150 100" stroke="black" strokeWidth="2.5" fill="none">
           <path d="M10 20 Q 75 60 140 20" />
           <path d="M10 40 Q 75 80 140 40" />
        </svg>
      </div>

      {/* Brush Stroke Header */}
      <div className="absolute top-16 left-16 z-20">
        <div className="relative inline-block px-8 py-2">
          <div className="absolute inset-0 bg-[#FF9D66] transform -rotate-1 skew-x-[-15deg] rounded-sm shadow-md" style={{ clipPath: 'polygon(2% 0%, 100% 3%, 98% 97%, 0% 100%)' }}></div>
          <h2 className="relative font-black text-3xl md:text-4xl tracking-tight italic text-black">learning type</h2>
        </div>
      </div>
      
      {/* Interactive Methods Grid with Spikes */}
      <div className="relative w-full h-[650px] mt-16">
        {methods.map((m, i) => (
          <div 
            key={i}
            className={`absolute ${m.pos} ${m.size} ${m.color} rounded-full flex items-center justify-center p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-700 hover:scale-110 hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] group z-10`}
          >
            {/* The Spiked Edge (Refined Radial Lines) */}
            <div className="absolute inset-[-14px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
               <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                  <g>
                    {[...Array(60)].map((_, idx) => (
                      <line 
                        key={idx}
                        x1="100" 
                        y1="5" 
                        x2="100" 
                        y2="15" 
                        stroke="black" 
                        strokeWidth="1.5" 
                        transform={`rotate(${idx * 6} 100 100)`}
                      />
                    ))}
                  </g>
               </svg>
            </div>

            <span className="font-bold text-sm md:text-xl leading-none tracking-tight whitespace-pre-line text-[#1a1a1a] transition-transform group-hover:scale-105">
              {m.name}
            </span>

            {/* Accent curves for specific circles */}
            {m.name === "Learn more" && (
               <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDuration: '3s' }}>
                 <svg width="80" height="30" viewBox="0 0 80 30" stroke="black" fill="none" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M10 15 Q 40 5 70 15" />
                 </svg>
               </div>
            )}
          </div>
        ))}
      </div>

      {/* Book stack decorative element */}
      <div className="absolute top-10 right-16 opacity-70 hidden lg:block scale-125">
        <svg width="45" height="55" viewBox="0 0 45 55" fill="none" stroke="black" strokeWidth="2.5">
           <rect x="5" y="35" width="35" height="10" rx="3" />
           <rect x="5" y="24" width="35" height="10" rx="3" />
           <rect x="5" y="13" width="35" height="10" rx="3" />
           <path d="M22 2 L 22 10 M 18 5 L 26 5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating abstract organic shapes */}
      <div className="absolute bottom-16 left-16 opacity-20 hidden md:block">
         <svg width="100" height="50" viewBox="0 0 100 50" fill="none" stroke="black" strokeWidth="2.5">
            <path d="M10 40 Q 50 10 90 40" />
         </svg>
      </div>
    </section>
  );
};