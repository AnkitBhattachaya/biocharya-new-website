import React from 'react';

export const ValueProp: React.FC = () => {
  return (
    <section className="bg-white/40 backdrop-blur-sm border border-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
           <div className="absolute -inset-4 bg-blue-500/5 rounded-[3rem] group-hover:scale-105 transition-transform"></div>
           <div className="relative space-y-4">
             {/* Featured Video Slot - Reliable CDN Link */}
             <div className="w-full h-80 bg-gray-900 rounded-[2rem] overflow-hidden border border-black/5 shadow-inner relative">
               <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
               >
                 <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=9d97036440c9d7c00e626e95b00c6a5a2283e743&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                 {/* Fallback image */}
                 <img src="https://images.unsplash.com/photo-1579154235602-3c2c2aa5d72e?auto=format&fit=crop&q=80&w=800" alt="Lab" className="w-full h-full object-cover" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
             </div>
             
             <div className="flex gap-4">
               <div className="flex-1 h-32 bg-orange-50 rounded-[2rem] border border-black/5 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400" alt="Microscope" className="w-full h-full object-cover opacity-80" />
               </div>
               <div className="flex-1 h-32 bg-black rounded-[2rem] flex flex-col items-center justify-center text-white p-4">
                  <span className="text-2xl font-black">10k+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Students Taught</span>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 border border-black/5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Science simplified. Results amplified.</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              We aren't just another coaching center. BioCharya is a sanctuary for biology lovers where complex concepts are broken down into visual stories.
            </p>
          </div>
          
          <ul className="space-y-4">
            {[
              "Personalized NEET mentorship",
              "Interactive 3D Visual Aids",
              "Doubt clearing sessions on-demand",
              "Proprietary Study Material"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-bold text-gray-700 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};