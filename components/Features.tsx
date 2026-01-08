
import React from 'react';
import { 
  Bell, CreditCard, ShieldCheck, Newspaper, 
  Mail, BookOpen, Map, Users, Award
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "E-SURAT RESMI",
      desc: "Administrasi tanpa kertas. Kirim dan terima surat resmi organisasi secara instan dengan verifikasi digital yang sah.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "E-LEARNING SH",
      desc: "Akses materi ke-SH-an, teknik senam, dan dokumentasi sejarah PSHT langsung dari ponsel Anda kapan saja.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "MONITORING PETA",
      desc: "Visualisasi real-time persebaran warga dan siswa di seluruh Indonesia hingga mancanegara untuk pemetaan potensi.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "IURAN & DONASI",
      desc: "Kemudahan pembayaran iuran wajib dan donasi pembangunan secara transparan dengan laporan keuangan otomatis.",
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <section id="features" className="py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-red-600 font-black text-sm uppercase tracking-[0.4em] mb-4 block">EKOSISTEM TERPADU</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">FITUR DASHBOARD <br /> <span className="text-gray-400">MASA DEPAN</span></h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-8xl font-black text-gray-200/50">1922</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`p-10 md:p-14 rounded-[48px] flex flex-col justify-between h-[450px] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group bg-white border border-gray-100`}
            >
              <div>
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500 ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 leading-none group-hover:text-red-600 transition-colors">{f.title}</h3>
                <p className="text-lg leading-relaxed text-gray-500 font-medium">
                  {f.desc}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Integrasi Sistem v2.5</span>
                <button className="w-14 h-14 rounded-full flex items-center justify-center border border-gray-100 hover:bg-black hover:text-white transition-all duration-300">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Mini Features List */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Forum Warga', icon: <Users className="w-4 h-4"/> },
            { label: 'Sertifikasi Pelatih', icon: <Award className="w-4 h-4"/> },
            { label: 'E-Buletin Terate', icon: <Newspaper className="w-4 h-4"/> },
            { label: 'Notifikasi Real-time', icon: <Bell className="w-4 h-4"/> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-red-600">{item.icon}</div>
              <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
