import React, { useState, useRef, useEffect } from 'react';

interface StudentStory {
  id: number;
  name: string;
  rank: string;
  quote: string;
  image: string;
  color: string;
}

const STORIES: StudentStory[] = [
  { id: 1, name: "Ishan Gupta", rank: "NEET 2024 (AIR 31)", quote: "The mentorship at BioCharya was the game changer. Teachers knew exactly when to push me and when to calm me down. That balance helped me clear NEET with confidence.", image: "https://i.pravatar.cc/300?u=1", color: "bg-orange-100" },
  { id: 2, name: "Aman Sinha", rank: "NEET 2024 (AIR 91)", quote: "The focused study environment and regular tests made challenging concepts like Genetics manageable. Mentor guidance ensured I stayed on track every single day.", image: "https://i.pravatar.cc/300?u=2", color: "bg-blue-100" },
  { id: 3, name: "Hardik Agarwal", rank: "NEET 2024 (AIR 93)", quote: "BioCharya's structured approach turned my weak subjects into strengths. Regular mentor guidance and 3D visual aids helped me stay ahead of the competition.", image: "https://i.pravatar.cc/300?u=3", color: "bg-green-100" },
  { id: 4, name: "Ananya Rai", rank: "NEET 2023 (AIR 12)", quote: "The conceptual clarity I got here is unmatched. I stopped memorizing and started visualizing biology. It made the exam feel like a breeze.", image: "https://i.pravatar.cc/300?u=4", color: "bg-purple-100" },
  { id: 5, name: "Rahul Varma", rank: "NEET 2024 (AIR 105)", quote: "Mock tests here are closer to the real exam than anywhere else. The analysis after each test helped me fix my silly mistakes permanently.", image: "https://i.pravatar.cc/300?u=5", color: "bg-orange-50" },
  { id: 6, name: "Sanya Malhotra", rank: "NEET 2023 (AIR 45)", quote: "I was struggling with Zoology until I joined the revision course. The simplified notes are literally lifesavers for last-minute prep.", image: "https://i.pravatar.cc/300?u=6", color: "bg-pink-100" },
  { id: 7, name: "Vikram Shah", rank: "NEET 2024 (AIR 210)", quote: "Being part of the Foundation batch gave me a massive head start. By Class 11, I already knew most core concepts better than my peers.", image: "https://i.pravatar.cc/300?u=7", color: "bg-cyan-100" },
  { id: 8, name: "Sneha Kapur", rank: "NEET 2024 (AIR 18)", quote: "The doubt clearing sessions are incredible. No matter how basic or complex the question was, the teachers always took the time to explain.", image: "https://i.pravatar.cc/300?u=8", color: "bg-rose-100" },
  { id: 9, name: "Aryan Dev", rank: "NEET 2023 (AIR 67)", quote: "Revision notes from BioCharya were my primary study material. They are concise, accurate, and perfectly aligned with the NEET syllabus.", image: "https://i.pravatar.cc/300?u=9", color: "bg-teal-100" },
  { id: 10, name: "Kriti Sanon", rank: "NEET 2024 (AIR 88)", quote: "The atmosphere here is very motivating. Seeing everyone work so hard pushed me to give my best every day. Truly a sanctuary for biology lovers.", image: "https://i.pravatar.cc/300?u=10", color: "bg-orange-50" },
  { id: 11, name: "Rohan Mehra", rank: "NEET 2024 (AIR 156)", quote: "The focus on NCERT lines at BioCharya is what really matters for NEET. They make you master every word of the textbook.", image: "https://i.pravatar.cc/300?u=11", color: "bg-indigo-100" },
  { id: 12, name: "Priya Das", rank: "NEET 2023 (AIR 221)", quote: "From Class 9 foundation to NEET, my journey with BioCharya has been transformational. Best biology coaching hands down.", image: "https://i.pravatar.cc/300?u=12", color: "bg-lime-100" },
  { id: 13, name: "Kabir Singh", rank: "NEET 2024 (AIR 302)", quote: "Plant Anatomy was my nightmare, but the 3D visualizations made it so interesting. I actually enjoyed studying it for once!", image: "https://i.pravatar.cc/300?u=13", color: "bg-amber-100" },
  { id: 14, name: "Ishita Roy", rank: "NEET 2024 (AIR 54)", quote: "The mock exam series gave me the stamina needed for the actual 3-hour grind. I never felt tired during the real NEET exam.", image: "https://i.pravatar.cc/300?u=14", color: "bg-violet-100" },
  { id: 15, name: "Aditya Roy", rank: "NEET 2023 (AIR 112)", quote: "Mentors here are like family. They guide you not just in studies but also in managing stress and time. Highly recommended.", image: "https://i.pravatar.cc/300?u=15", color: "bg-emerald-100" },
  { id: 16, name: "Zoya Akhtar", rank: "NEET 2024 (AIR 25)", quote: "BioCharya's revision course is a must-have for anyone serious about a top rank. It filters out the noise and focuses on what's vital.", image: "https://i.pravatar.cc/300?u=16", color: "bg-sky-100" },
  { id: 17, name: "Samir Kochhar", rank: "NEET 2024 (AIR 415)", quote: "I improved my score by 150 points just by following the test analysis methods taught here. Data-driven learning at its best.", image: "https://i.pravatar.cc/300?u=17", color: "bg-fuchsia-100" },
  { id: 18, name: "Meera Nair", rank: "NEET 2023 (AIR 198)", quote: "The Botany faculty is world-class. They make even the most boring topics feel like a fascinating story about life.", image: "https://i.pravatar.cc/300?u=18", color: "bg-stone-200" },
  { id: 19, name: "Varun Dhawan", rank: "NEET 2024 (AIR 120)", quote: "I joined for the mock papers but stayed for the incredible mentorship. It's more than a coaching center; it's a community.", image: "https://i.pravatar.cc/300?u=19", color: "bg-red-50" },
  { id: 20, name: "Deepika P.", rank: "NEET 2024 (AIR 09)", quote: "The way they connect biology concepts to real-world medical applications is amazing. It kept my dream of becoming a doctor alive.", image: "https://i.pravatar.cc/300?u=20", color: "bg-slate-200" },
];

export const ProofSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeStudent = STORIES[activeIndex];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="text-center mb-20 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-none reveal flex flex-wrap justify-center items-center gap-y-4">
          <span className="mr-4">Stories that</span>
          <span className="inline-flex items-center justify-center px-10 py-3 bg-[#FF9D66] rounded-full shadow-sm text-black">
            inspire
          </span>
        </h2>
      </div>

      {/* Featured Spotlight Card */}
      <div className="mb-12 transition-all duration-700 reveal">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
          {/* Student Photo Frame */}
          <div className={`w-full md:w-1/3 aspect-square rounded-[2.5rem] overflow-hidden ${activeStudent.color} transition-colors duration-500 relative group`}>
             <img 
               src={activeStudent.image} 
               alt={activeStudent.name} 
               className="w-full h-full object-cover mix-blend-multiply opacity-90 scale-105"
             />
             <div className="absolute inset-0 border-[12px] border-white/30 rounded-[2.5rem]"></div>
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 space-y-8 relative">
            <div className="absolute -top-10 -right-4 opacity-10">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="#22224d" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V13.5M3.01693 21L3.01693 18C3.01693 16.8954 3.91236 16 5.01693 16H8.01693C8.56921 16 9.01693 15.5523 9.01693 15V9C9.01693 8.44772 8.56921 8 8.01693 8H4.01693C3.46465 8 3.01693 8.44772 3.01693 9V13.5" stroke="#22224d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            
            <p className="text-lg md:text-2xl font-medium text-gray-600 leading-relaxed italic">
              "{activeStudent.quote}"
            </p>
            
            <div className="pt-4 border-t border-black/5">
              <h4 className="text-2xl font-black text-[#1a1a1a]">{activeStudent.name}</h4>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">
                {activeStudent.rank}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {STORIES.map((student, idx) => (
            <div 
              key={student.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-[300px] snap-start cursor-pointer transition-all duration-500 rounded-[2rem] p-6 border-2 group/card
                ${activeIndex === idx 
                  ? 'bg-white border-black shadow-xl -translate-y-2' 
                  : 'bg-white/60 border-transparent hover:border-black/10 hover:bg-white'
                }`}
            >
              <p className="text-sm text-gray-500 line-clamp-3 mb-6 font-medium leading-relaxed">
                {student.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/5 bg-gray-50">
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-black text-sm text-[#1a1a1a]">{student.name}</h5>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{student.rank}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators (Dots) */}
        <div className="flex justify-center gap-2 mt-8">
           {STORIES.map((_, idx) => (
             <button
               key={idx}
               onClick={() => {
                 setActiveIndex(idx);
                 const scrollContainer = scrollRef.current;
                 if (scrollContainer) {
                   const cardWidth = 324; // width + gap
                   scrollContainer.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                 }
               }}
               className={`h-2 transition-all duration-300 rounded-full ${activeIndex === idx ? 'w-8 bg-black' : 'w-2 bg-black/10 hover:bg-black/20'}`}
             />
           ))}
        </div>
      </div>
      
      {/* Existing Achievement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-24">
         <div className="bg-[#22224d] text-white p-12 rounded-[3.5rem] flex items-center justify-between group overflow-hidden relative">
            <div className="relative z-10">
               <div className="text-6xl font-black mb-2 group-hover:scale-110 transition-transform origin-left duration-500">98%</div>
               <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">Board Exam Success Rate</p>
            </div>
            <div className="absolute top-0 right-0 w-48 h-full bg-white/5 skew-x-[-20deg] translate-x-12"></div>
         </div>
         <div className="bg-orange-100 text-black p-12 rounded-[3.5rem] flex items-center justify-between group overflow-hidden relative border border-orange-200 shadow-lg">
            <div className="relative z-10">
               <div className="text-6xl font-black mb-2 group-hover:scale-110 transition-transform origin-left duration-500">2.5k+</div>
               <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-xs">NEET Qualifications</p>
            </div>
            <div className="absolute bottom-0 right-10 w-32 h-32 border-[20px] border-orange-500/5 rounded-full translate-y-12 translate-x-12"></div>
         </div>
      </div>
    </section>
  );
};