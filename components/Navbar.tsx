
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8">
      <div className="flex items-center gap-2">
        <span className="text-xl font-extrabold tracking-tight">BioCharya</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-black transition-colors">About</a>
        <div className="group relative flex items-center gap-1 cursor-pointer">
          <span className="hover:text-black">Programs</span>
          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
        <a href="#" className="hover:text-black transition-colors">Resources</a>
      </div>
      
      <button className="px-6 py-2.5 bg-transparent border border-black/20 rounded-xl font-bold text-sm hover:bg-black hover:text-white transition-all duration-300">
        Get in touch
      </button>
    </nav>
  );
};
