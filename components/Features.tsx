
import React from 'react';
import { Bell, CreditCard, ShieldCheck, Newspaper } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "NOTIFIKASI AKTIVITAS",
      desc: "Terima pemberitahuan instan untuk setiap pengesahan, kegiatan ranting, dan info penting pusat."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "IURAN & DONASI",
      desc: "Lakukan pembayaran iuran bulanan atau donasi pembangunan gedung dengan berbagai pilihan metode."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "KEAMANAN DATA",
      desc: "Privasi data Anda adalah prioritas kami. Semua data warga dienkripsi dengan standar militer."
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "MAJALAH DIGITAL",
      desc: "Akses eksklusif ke arsip majalah Terate dan dokumen sejarah organisasi secara digital."
    }
  ];

  return (
    <section id="features" className="py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-6xl font-black tracking-tighter">FITUR <br /> UNGGULAN</h2>
          <div className="hidden md:block text-right">
            <span className="text-6xl font-black text-gray-200">01/04</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`p-12 rounded-[40px] flex flex-col justify-between h-[400px] transition-all hover:-translate-y-2 hover:shadow-2xl ${i === 1 ? 'bg-black text-white' : 'bg-white border border-gray-100'}`}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${i === 1 ? 'bg-white/10' : 'bg-gray-50 text-red-600'}`}>
                  {f.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 leading-none">{f.title}</h3>
                <p className={`text-lg leading-relaxed ${i === 1 ? 'text-gray-400' : 'text-gray-500'}`}>
                  {f.desc}
                </p>
              </div>
              <div className="flex justify-end">
                <button className={`w-12 h-12 rounded-full flex items-center justify-center border ${i === 1 ? 'border-white/20 hover:bg-white/10' : 'border-gray-100 hover:bg-gray-50'}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
