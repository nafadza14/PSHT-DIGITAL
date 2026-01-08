
import React from 'react';

const AppShowcase: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Header Section */}
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8">
              SISTEM PENOMORAN <br/><span className="text-red-600">TERPUSAT NASIONAL</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-6">
              E-Kartu PSHT menggunakan standar NIA (Nomor Induk Anggota) yang terintegrasi secara nasional untuk menjamin kedaulatan data dan keaslian identitas setiap warga.
            </p>
          </div>

          {/* Numbering Explanation Box */}
          <div className="w-full bg-gray-50 border border-gray-100 rounded-[50px] p-8 md:p-12 space-y-8">
            <h4 className="text-sm font-black text-black uppercase tracking-[0.3em]">Bedah Struktur Kode NIA Digital</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { code: '02', label: 'Nomor Pusat', desc: 'Identitas Pusat Madiun' },
                { code: '00', label: 'Perwakilan Pusat', desc: 'Provinsi / Wilayah' },
                { code: '2131', label: 'Kode Cabang', desc: 'Kabupaten / Kota / Khusus' },
                { code: '21212', label: 'Identitas Diri', desc: 'Urutan Validasi Digital' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-all hover:border-red-600 group">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-red-600 font-black text-4xl group-hover:scale-110 transition-transform">{item.code}</span>
                    <span className="text-[10px] font-black text-black uppercase tracking-widest text-center">{item.label}</span>
                    <p className="text-[9px] text-gray-400 font-bold uppercase text-center mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="bg-black rounded-full px-8 py-3 flex items-center shadow-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <p className="text-[10px] text-white font-black uppercase tracking-widest">Database Terkoneksi Real-time</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-gray-400 leading-relaxed italic">
              Keamanan data adalah prioritas utama. Scan barcode kartu hanya valid jika dilakukan melalui aplikasi resmi PSHT Digital guna mencegah pemalsuan identitas.
            </p>
          </div>
          
          {/* Flat Download Image Link (Removed Card and Button Overlay) */}
          <div className="w-full max-w-[450px] pt-8">
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-6">Unduh Aplikasi Resmi:</p>
            <a 
              href="https://s3-alpha.figma.com/hub/file/5517710951/f56cbae9-e83b-4b83-9a95-71a78334ee66-cover.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group transition-all"
            >
              <img 
                src="https://s3-alpha.figma.com/hub/file/5517710951/f56cbae9-e83b-4b83-9a95-71a78334ee66-cover.png" 
                alt="PSHT Digital Mobile App" 
                className="w-full h-auto rounded-3xl shadow-lg group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500"
              />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
