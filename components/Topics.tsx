
import React, { useEffect, useRef, useState } from 'react';

type Category = 'Foundation' | 'Class 11 & 12' | 'NEET';

const TOPICS_DATA = [
  // Foundation
  { 
    id: 1, 
    category: 'Foundation', 
    title: "Class 9 biology", 
    lessons: 18, 
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?auto=format&fit=crop&q=80&w=800", 
    sub: "Core Path" 
  },
  { 
    id: 2, 
    category: 'Foundation', 
    title: "Class 10 biology", 
    lessons: 22, 
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800", 
    sub: "Core Path" 
  },
  { 
    id: 3, 
    category: 'Foundation', 
    title: "Mock tests Papers", 
    lessons: 15, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", 
    sub: "Assessment" 
  },
  
  // Class 11 & 12
  { 
    id: 4, 
    category: 'Class 11 & 12', 
    title: "Class 11", 
    lessons: 45, 
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", 
    sub: "Core Path" 
  },
  { 
    id: 5, 
    category: 'Class 11 & 12', 
    title: "Class 12", 
    lessons: 48, 
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800", 
    sub: "Core Path" 
  },
  { 
    id: 6, 
    category: 'Class 11 & 12', 
    title: "Revision course", 
    lessons: 30, 
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", 
    sub: "Crash Course" 
  },
  { 
    id: 7, 
    category: 'Class 11 & 12', 
    title: "Revision notes", 
    lessons: 25, 
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800", 
    sub: "Study Material" 
  },
  { 
    id: 8, 
    category: 'Class 11 & 12', 
    title: "Mock exam papers", 
    lessons: 20, 
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=800", 
    sub: "Assessment" 
  },
  
  // NEET
  { 
    id: 9, 
    category: 'NEET', 
    title: "Zoology", 
    lessons: 60, 
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800", 
    sub: "Exam Prep" 
  },
  { 
    id: 10, 
    category: 'NEET', 
    title: "Botany", 
    lessons: 55, 
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800", 
    sub: "Exam Prep" 
  },
  { 
    id: 11, 
    category: 'NEET', 
    title: "Mock tests", 
    lessons: 40, 
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800", 
    sub: "Assessment" 
  },
];

export const Topics: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Class 11 & 12');
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const cards = sectionRef.current?.querySelectorAll('.topic-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredTopics = TOPICS_DATA.filter(topic => topic.category === activeCategory);

  return (
    <section ref={sectionRef} className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-20 border border-black/5 shadow-inner overflow-hidden">
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gray-50 border border-black/5 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-4 shadow-sm opacity-60">
          Curriculum
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#1a1a1a] mb-6 md:mb-8">Master your focus</h2>
        
        {/* Filter Bar - Optimized for Mobile */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="inline-flex flex-wrap md:flex-nowrap items-center bg-[#f7f7f7] border border-black/5 p-1 rounded-2xl shadow-sm max-w-full overflow-x-auto no-scrollbar">
            {(['Foundation', 'Class 11 & 12', 'NEET'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 min-w-[100px] md:min-w-[140px] whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-[#22224d] text-white shadow-lg scale-105' 
                  : 'text-gray-500 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid container: Horizontal scroll on mobile, Grid on desktop */}
      <div 
        ref={scrollContainerRef}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar"
      >
        {filteredTopics.map((topic, index) => (
          <div 
            key={topic.id}
            onMouseEnter={() => setHovered(topic.id)}
            onMouseLeave={() => setHovered(null)}
            className={`topic-card flex-shrink-0 w-[85vw] md:w-auto snap-center bg-[#fbfbf9] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 transition-all duration-500 cursor-pointer border-2 group ${hovered === topic.id ? 'border-black md:-translate-y-2 shadow-2xl' : 'border-transparent shadow-md'} reveal`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="relative h-48 md:h-64 rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden mb-6 md:mb-8 border border-black/5 bg-gray-100">
              <img 
                src={topic.image} 
                alt={topic.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-lg">
                {topic.lessons} Lessons
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg md:text-2xl font-black tracking-tight text-[#1a1a1a]">{topic.title}</h3>
                <p className="text-[9px] md:text-[10px] text-gray-400 font-black uppercase mt-1 md:mt-2 tracking-widest">{topic.sub}</p>
              </div>
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${hovered === topic.id ? 'bg-black border-black text-white rotate-[135deg]' : 'bg-white border-black/5 text-black'}`}>
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll indicator for mobile */}
      <div className="flex md:hidden justify-center gap-1.5 mt-2">
         {filteredTopics.map((_, i) => (
           <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeCategory === activeCategory ? 'bg-black/20' : 'bg-black/5'}`} />
         ))}
      </div>

      <div className="mt-12 md:mt-20 text-center">
         <button className="bg-black text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:scale-105 hover:bg-gray-800 transition-all shadow-xl active:scale-95 w-full md:w-auto">
           Unlock {activeCategory} curriculum
         </button>
      </div>
    </section>
  );
};
