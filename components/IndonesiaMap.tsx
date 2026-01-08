
import React, { useState } from 'react';
import { PROVINCE_STATS } from '../constants';
import { ProvinceStat } from '../types';
import { Globe } from 'lucide-react';

const IndonesiaMap: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<ProvinceStat | null>(null);

  return (
    <div className="relative w-full bg-white rounded-[40px] p-8 border border-gray-100 overflow-hidden min-h-[600px] shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div>
          <h3 className="text-3xl font-black tracking-tighter uppercase italic">Peta Persebaran Warga</h3>
          <p className="text-gray-400 font-medium">Monitoring Real-time Keanggotaan Nasional & Internasional</p>
        </div>
        {selectedProvince && (
          <div className="bg-black text-white p-6 rounded-[30px] animate-in fade-in slide-in-from-right-4 shadow-2xl min-w-[200px] border border-white/10 z-40">
            <h4 className="font-black text-sm uppercase text-red-600 mb-3 tracking-widest flex items-center">
              {selectedProvince.name === 'PSHT Luar Negeri' ? <Globe className="w-4 h-4 mr-2" /> : null}
              {selectedProvince.name}
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Warga</p>
                <p className="text-xl font-black">{selectedProvince.wargaCount.toLocaleString()}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Siswa</p>
                <p className="text-xl font-black">{selectedProvince.siswaCount.toLocaleString()}</p>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Cabang</p>
                <p className="text-lg font-black text-red-600">{selectedProvince.cabangCount}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full aspect-[2/1] bg-gray-50/50 rounded-[40px] overflow-hidden shadow-inner border border-gray-50 group">
        {/* Background Vector Map - Using object-fill to ensure percentage points match geographical pixels */}
        <div className="absolute inset-0">
          <img 
            src="https://www.nicepng.com/png/full/292-2923604_peta-indonesia-high-resolution-indonesia-map-vector.png" 
            alt="Peta Indonesia" 
            className="w-full h-full object-fill opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
          />
        </div>

        {/* Interaction Points Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {PROVINCE_STATS.map((prov) => {
            const isLuarNegeri = prov.name === 'PSHT Luar Negeri';
            return (
              <div
                key={prov.id}
                className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ left: `${prov.coords.x}%`, top: `${prov.coords.y}%` }}
              >
                <button
                  onClick={() => setSelectedProvince(prov)}
                  onMouseEnter={() => setSelectedProvince(prov)}
                  className="w-full h-full relative flex items-center justify-center group"
                >
                  <span className={`absolute inset-0 ${isLuarNegeri ? 'bg-yellow-500' : 'bg-red-600'} rounded-full animate-ping opacity-40`}></span>
                  <span className={`relative block w-3 h-3 ${isLuarNegeri ? 'bg-yellow-500' : 'bg-red-600'} border-2 border-white rounded-full shadow-lg group-hover:scale-150 transition-transform`}></span>
                  
                  {isLuarNegeri && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-yellow-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase whitespace-nowrap shadow-xl">
                      Luar Negeri
                    </div>
                  )}

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-[9px] px-2 py-1 rounded-lg whitespace-nowrap z-50 font-black uppercase tracking-wider shadow-2xl">
                    {prov.name}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-black transition-all">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Warga Global</p>
          <p className="text-3xl font-black tracking-tighter">1.3M+</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-black transition-all">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Siswa Aktif</p>
          <p className="text-3xl font-black tracking-tighter">346.3K</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-black transition-all">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Cabang Luar Negeri</p>
          <p className="text-3xl font-black tracking-tighter text-yellow-600">18</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-black transition-all">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Sinkronisasi Data</p>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <p className="text-sm font-black text-green-600 uppercase">Live</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndonesiaMap;
