
import React from 'react';
import { MOCK_WARGA } from '../constants';
import DigitalCard from './DigitalCard';

interface HeroProps {
  onStart: () => void;
  isLoggedIn: boolean;
  onDashboard: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, isLoggedIn, onDashboard }) => {
  return (
    <div className="relative pt-20">
      <div className="bg-[#0c0c0c] rounded-b-[80px] md:rounded-b-[160px] pt-24 pb-48 md:pb-80 overflow-hidden relative">
        {/* Background Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 blur-[180px] rounded-full -mr-80 -mt-80"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-600/5 blur-[150px] rounded-full -ml-80 -mb-40"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <span className="text-red-600 font-black text-xs sm:text-sm uppercase tracking-[0.6em] mb-8 block">ESTABLISHED 1922</span>
              <h1 className="text-white font-black text-huge mb-6 leading-[0.75]">
                TRANSFORMASI <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-50 to-gray-400">DIGITAL PSHT</span>
              </h1>
              <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-20 leading-relaxed">
                Membangun ekosistem digital yang modern dan terintegrasi untuk memperkuat persaudaraan serta kedaulatan organisasi di era teknologi informasi.
              </p>
            </div>
          </div>
          
          {/* Infinite Scrolling Track */}
          <div className="relative w-full overflow-hidden py-10">
            <div className="animate-scroll flex gap-8">
              {/* Double the array for infinite feel */}
              {[...MOCK_WARGA, ...MOCK_WARGA].map((member, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 animate-float" 
                  style={{ '--rot': idx % 2 === 0 ? '1deg' : '-1deg' } as any}
                >
                  <div className="card-shadow rounded-[32px]">
                    <DigitalCard member={member} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered CTA */}
          <div className="flex flex-col items-center mt-24">
            <button 
              onClick={isLoggedIn ? onDashboard : onStart}
              className="bg-white w-44 h-44 rounded-full flex flex-col items-center justify-center group hover:scale-110 transition-all duration-500 shadow-2xl relative z-40 border-[12px] border-[#0c0c0c]"
            >
              <div className="absolute inset-0 rounded-full border border-gray-100 group-hover:scale-150 transition-all duration-700 opacity-20"></div>
              {isLoggedIn ? (
                <>
                  <span className="text-black font-black text-xs uppercase tracking-[0.2em] mb-1">BUKA</span>
                  <span className="text-black font-black text-sm uppercase tracking-[0.2em]">PANEL</span>
                </>
              ) : (
                <>
                  <span className="text-black font-black text-xs uppercase tracking-[0.2em] mb-1">MULAI</span>
                  <span className="text-black font-black text-sm uppercase tracking-[0.2em]">DAFTAR</span>
                </>
              )}
              <div className="mt-4 animate-bounce text-red-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
              </div>
            </button>
            <div className="mt-10 flex items-center space-x-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px]">Security System v2.5 Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
