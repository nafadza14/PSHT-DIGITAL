
import React from 'react';
import { PSHT_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="flex items-center">
              <div className="w-16 h-16 overflow-hidden border border-white/20">
                <img src={PSHT_LOGO} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="ml-5 font-black text-4xl tracking-tighter uppercase">PSHT DIGITAL</span>
            </div>
            <p className="text-gray-500 text-xl max-w-md leading-relaxed">
              Transformasi digital untuk mempererat persaudaraan. Membangun masa depan organisasi yang lebih modern, transparan, dan terintegrasi.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-black text-lg uppercase tracking-widest text-red-600">Navigasi</h4>
            <ul className="space-y-4 text-gray-500 text-lg font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fitur Aplikasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Daftar Warga</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-lg uppercase tracking-widest text-red-600">Kontak Kami</h4>
            <ul className="space-y-4 text-gray-500 text-lg">
              <li className="leading-relaxed">Jl. Merak No. 10, Nambangan Kidul, Kec. Manguharjo, Kota Madiun</li>
              <li className="font-black text-white">info@psht.or.id</li>
              <li>0351 - 1234567</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 font-medium">
          <p>© 2025 PERSAUDARAAN SETIA HATI TERATE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10 mt-8 md:mt-0 uppercase text-xs tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Youtube</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
