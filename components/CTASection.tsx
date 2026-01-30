
import React, { useRef } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const VIDEOS: YouTubeVideo[] = [
  { id: "9iT7h8P-Krk", title: "Decoding DNA Structure", thumbnail: "https://img.youtube.com/vi/9iT7h8P-Krk/maxresdefault.jpg" },
  { id: "9yW--vC8S-M", title: "The Cell: A Living City", thumbnail: "https://img.youtube.com/vi/9yW--vC8S-M/maxresdefault.jpg" },
  { id: "7Hk9jct2ozY", title: "Photosynthesis Explained", thumbnail: "https://img.youtube.com/vi/7Hk9jct2ozY/maxresdefault.jpg" },
  { id: "hfvR_mB273k", title: "Classroom Demo: Genetics", thumbnail: "https://img.youtube.com/vi/hfvR_mB273k/maxresdefault.jpg" },
  { id: "X6N9vHO671M", title: "Human Heart Functionality", thumbnail: "https://img.youtube.com/vi/X6N9vHO671M/maxresdefault.jpg" },
];

export const CTASection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-20">
      {/* Video Showcase Section */}
      <div className="bg-white rounded-[4rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-black/5">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] shimmer-grid pointer-events-none"></div>
         
         <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
               <div className="max-w-2xl text-left">
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-black">
                     Watch our <br />
                     <span className="text-[#FF9D66]">classroom</span> in action
                  </h2>
                  <p className="mt-6 text-gray-500 font-medium text-lg">
                     Watch our curated lessons and see how we simplify complex biology for thousands of students.
                  </p>
               </div>
               
               <div className="flex gap-4">
                  <button 
                    onClick={() => scroll('left')}
                    className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-md group"
                  >
                    <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => scroll('right')}
                    className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-md group"
                  >
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
               </div>
            </div>

            {/* Video Sliding Row */}
            <div 
               ref={scrollRef}
               className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar scrollbar-hide"
               style={{ scrollBehavior: 'smooth' }}
            >
               {VIDEOS.map((video) => (
                  <div 
                    key={video.id} 
                    className="flex-shrink-0 w-[300px] md:w-[450px] snap-start group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-black/5 bg-gray-100 shadow-lg mb-6">
                       <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                             <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                             </svg>
                          </div>
                       </div>
                    </div>
                    <div className="px-2">
                       <h3 className="text-xl md:text-2xl font-black text-black group-hover:text-[#FF9D66] transition-colors line-clamp-1">
                          {video.title}
                       </h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">BioCharya • YouTube</p>
                    </div>
                  </div>
               ))}
               
               {/* Final Card: Visit Channel */}
               <div className="flex-shrink-0 w-[300px] md:w-[450px] snap-start">
                  <div className="aspect-video rounded-[2.5rem] border-2 border-dashed border-black/10 flex flex-col items-center justify-center bg-gray-50/50 p-8 text-center group hover:bg-white hover:border-[#FF9D66] transition-all">
                     <div className="w-16 h-16 bg-[#FF9D66]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF9D66]/20">
                        <svg className="w-8 h-8 text-[#FF9D66]" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                     </div>
                     <h4 className="text-2xl font-black text-black">More on YouTube</h4>
                     <p className="text-sm font-medium text-gray-400 mt-2 mb-6">Join 50k+ subscribers learning biology the right way.</p>
                     <button className="px-8 py-3 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                        Subscribe Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Existing Subscription Footer Part */}
      <div className="mt-16 bg-black rounded-[3rem] p-12 md:p-16 text-white grid md:grid-cols-2 gap-12 items-center">
         <div>
            <div className="inline-flex flex-col gap-2">
               <span className="px-6 py-2 bg-orange-500 rounded-full font-black text-xl italic w-fit">Subscribe</span>
               <span className="px-6 py-2 border border-white rounded-full font-black text-xl w-fit">to our updates</span>
            </div>
            
            <div className="mt-8 flex bg-white/10 rounded-full p-1 border border-white/20 focus-within:border-white/50 transition-all">
               <input type="email" placeholder="Enter your email" className="bg-transparent flex-1 px-6 py-3 outline-none" />
               <button className="bg-white text-black px-6 py-3 rounded-full font-black hover:bg-gray-200 transition-colors">Send</button>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-8 text-sm font-bold opacity-80">
            <div className="space-y-4">
               <p className="uppercase text-[10px] tracking-widest text-white/40 mb-2">Company</p>
               <a href="#" className="block hover:text-orange-400">About</a>
               <a href="#" className="block hover:text-orange-400">Programs</a>
               <a href="#" className="block hover:text-orange-400">Resources</a>
            </div>
            <div className="space-y-4">
               <p className="uppercase text-[10px] tracking-widest text-white/40 mb-2">Support</p>
               <a href="#" className="block hover:text-orange-400">Contact</a>
               <a href="#" className="block hover:text-orange-400">Privacy Policy</a>
               <a href="#" className="block hover:text-orange-400">Careers</a>
            </div>
         </div>
      </div>
      
      <div className="py-12 flex items-center justify-between text-xs font-black uppercase tracking-widest opacity-30">
         <span>© 2024 BioCharya Institution</span>
         <div className="flex gap-6">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
         </div>
      </div>
    </footer>
  );
};
