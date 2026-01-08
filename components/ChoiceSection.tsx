
import React from 'react';
import { UserCheck, UserPlus } from 'lucide-react';

interface ChoiceSectionProps {
  onRegister: () => void;
}

const ChoiceSection: React.FC<ChoiceSectionProps> = ({ onRegister }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Option Already Member */}
          <div className="bg-black rounded-[50px] p-12 text-white relative group cursor-pointer overflow-hidden border-4 border-black transition-all hover:bg-zinc-900">
             <div className="relative z-10">
               <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                 <UserCheck className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-4xl font-black mb-4">SUDAH MEMILIKI KARTU FISIK?</h3>
               <p className="text-gray-400 text-lg mb-10">Lakukan aktivasi akun digital Anda dengan memasukkan Nomor Induk Anggota (NIA) dan verifikasi data lama.</p>
               <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center group-hover:translate-x-2 transition-transform">
                 Aktivasi Digital
                 <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </button>
             </div>
             <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform">
               <img src="https://i.pinimg.com/736x/22/e8/70/22e87061ac466c7741e0e8b2174679f6.jpg" className="w-64 h-64 grayscale" alt="" />
             </div>
          </div>

          {/* Option New Member */}
          <div className="bg-[#f2f2f2] rounded-[50px] p-12 text-black relative group cursor-pointer border-4 border-transparent hover:border-black transition-all" onClick={onRegister}>
             <div className="relative z-10">
               <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                 <UserPlus className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-4xl font-black mb-4">BELUM MEMILIKI KARTU?</h3>
               <p className="text-gray-500 text-lg mb-10">Ajukan pendaftaran warga baru melalui sistem online. Pastikan Anda sudah mengikuti pengesahan secara resmi.</p>
               <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center group-hover:translate-x-2 transition-transform">
                 Daftar Sekarang
                 <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSection;
