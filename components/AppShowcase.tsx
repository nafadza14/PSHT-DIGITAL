
import React from 'react';
import { Zap, ShieldCheck, Fingerprint, Smartphone } from 'lucide-react';

const AppShowcase: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Header Section */}
          <div className="max-w-4xl">
            <span className="text-red-600 font-black text-sm uppercase tracking-[0.5em] mb-6 block">USER EXPERIENCE</span>
            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-8">
              KEMUDAHAN DALAM <br/><span className="text-red-600 text-shadow-glow">SATU GENGGAMAN</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
              PSHT DIGITAL dirancang untuk memangkas birokrasi dan memudahkan setiap warga dalam mengakses layanan organisasi dengan standar teknologi terkini.
            </p>
          </div>

          {/* Ease of Use Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              {
                icon: <Zap className="w-10 h-10 text-yellow-500" />,
                title: "PENDAFTARAN INSTAN",
                desc: "Hanya butuh 5 menit untuk mendaftar atau aktivasi kartu fisik. Validasi NIA dilakukan secara otomatis oleh sistem kecerdasan buatan."
              },
              {
                icon: <Fingerprint className="w-10 h-10 text-red-600" />,
                title: "VALIDASI SATU PINTU",
                desc: "Satu identitas digital untuk semua kebutuhan. Tak perlu lagi membawa berkas fisik saat pengesahan atau kegiatan nasional."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-blue-600" />,
                title: "ANTARMUKA MODERN",
                desc: "Desain intuitif yang mudah digunakan oleh seluruh generasi, dari warga senior hingga adik-adik siswa di pelosok daerah."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-12 rounded-[50px] text-left border border-gray-100 hover:bg-black hover:text-white transition-all duration-700 group">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-black mb-6 leading-tight uppercase italic">{item.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Numbering Explanation Box */}
          <div className="w-full bg-black rounded-[60px] p-10 md:p-20 space-y-12 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 text-left">
              <h4 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-4">STRUKTUR DATA NASIONAL</h4>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tighter">KEUNGGULAN NIA DIGITAL</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { code: '02', label: 'PUSAT MADIUN', desc: 'Identitas Kedaulatan Pusat' },
                  { code: '00', label: 'WILAYAH', desc: 'Provinsi & Perwakilan' },
                  { code: '2131', label: 'KODE CABANG', desc: 'Identitas Administratif' },
                  { code: '21212', label: 'URUTAN WARGA', desc: 'Validasi Individu' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 transition-all hover:bg-white/10 group">
                    <div className="flex flex-col space-y-3">
                      <span className="text-red-600 font-black text-5xl group-hover:scale-110 transition-transform">{item.code}</span>
                      <span className="text-[11px] font-black text-white uppercase tracking-widest">{item.label}</span>
                      <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8 relative z-10">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/40">
                  <ShieldCheck className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-white font-black text-lg">KEAMANAN BERLAPIS</p>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Enkripsi AES-256 Standar Militer</p>
                </div>
              </div>
              <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-gray-800 overflow-hidden shadow-xl">
                     <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="User" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-black bg-red-600 flex items-center justify-center text-[10px] font-black text-white">1M+</div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
              "Transformasi digital bukan sekadar mengubah kartu fisik menjadi layar, tapi tentang mendigitalisasi nilai-nilai luhur Persaudaraan untuk kedaulatan organisasi yang tak terbatas oleh ruang dan waktu."
            </p>
          </div>
          
          {/* Download Section */}
          <div className="w-full max-w-[500px] pt-12 group cursor-pointer">
            <div className="bg-gray-50 p-4 rounded-[40px] border border-gray-100 transition-all group-hover:shadow-2xl">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mb-6">UNDUH APLIKASI SEKARANG</p>
              <a 
                href="#" 
                className="block overflow-hidden rounded-[32px] relative"
              >
                <img 
                  src="https://s3-alpha.figma.com/hub/file/5517710951/f56cbae9-e83b-4b83-9a95-71a78334ee66-cover.png" 
                  alt="PSHT Digital Mobile App" 
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">Available on Playstore</span>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        .text-shadow-glow {
          text-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default AppShowcase;
