
import React, { useState } from 'react';
// Added Settings icon import from lucide-react
import { Settings } from 'lucide-react';
import { CABANG_LIST } from '../constants';
import { MemberData, UserRole } from '../types';

interface RegistrationProps {
  onSuccess: (data: MemberData) => void;
  onCancel: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onSuccess, onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<MemberData>>({
    fullName: '',
    nia: '',
    birthPlace: '',
    birthDate: '',
    address: '',
    cabang: '',
    ranting: '',
    yearOfValidation: '',
    photoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheSLHqqX9u1FNvTsQDMk1sr6ZJxayHZ0fPrkQkoDVNqx0X8S1U03K0iFiKvoFkrFlKQ7kuiAUI5oCN0SibhlDFGwvrfzdouU7b-werj70OwcwieZzPsO6uEvLfWwDXFrvHuW_vjqVFND-sO6PtwhDpYGdNPEOBUpxxbmZqI_KL3J4hf6KRShsM3nE59Q/s600/Warga%20PSHT%20itu%20Dipercaya%20Ketua%20IPSI%20Lampung%20Barat%202022-2026.jpg',
    status: 'APPROVED',
    isWarga: true,
    role: 'USER'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.name === 'isWarga' ? (e.target as HTMLSelectElement).value === 'true' : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(formData as MemberData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[50px] shadow-2xl border border-gray-100 overflow-hidden">
          {/* Progress Header */}
          <div className="bg-black p-12 text-white flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tighter">PENDAFTARAN <br/><span className="text-red-600">ANGGOTA BARU</span></h2>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase font-bold text-gray-500 block mb-2">Progress</span>
              <div className="flex space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-2 w-8 rounded-full ${step >= i ? 'bg-red-600' : 'bg-gray-800'}`}></div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-16">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-black uppercase tracking-tight">Data Personal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Pilih Role (Untuk Demo)</label>
                    <select 
                      name="role" value={formData.role} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all font-bold"
                    >
                      <option value="USER">User (Hanya Lihat Kartu)</option>
                      <option value="ADMIN_CABANG">Admin Cabang (Kelola Anggota Cabang)</option>
                      <option value="SUPER_ADMIN">Super Admin (Akses Peta Nasional)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Nama Lengkap</label>
                    <input 
                      type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                      placeholder="Input nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Status</label>
                    <select 
                      name="isWarga" value={String(formData.isWarga)} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all font-bold"
                    >
                      <option value="true">Warga</option>
                      <option value="false">Siswa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Tempat Lahir</label>
                    <input 
                      type="text" name="birthPlace" required value={formData.birthPlace} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Tanggal Lahir</label>
                    <input 
                      type="date" name="birthDate" required value={formData.birthDate} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <button 
                    type="button" onClick={() => setStep(2)}
                    className="w-full bg-black text-white py-5 rounded-3xl font-black text-xl hover:bg-gray-800 transition-all shadow-xl"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-black uppercase tracking-tight">Afiliasi Cabang</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Cabang</label>
                    <select 
                      name="cabang" required value={formData.cabang} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                    >
                      <option value="">Pilih Cabang</option>
                      {CABANG_LIST.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Ranting/Rayon</label>
                    <input 
                      type="text" name="ranting" required value={formData.ranting} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                      placeholder="Contoh: Manguharjo"
                    />
                  </div>
                  {formData.isWarga && (
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Tahun Pengesahan</label>
                      <input 
                        type="number" name="yearOfValidation" required value={formData.yearOfValidation} onChange={handleChange}
                        className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">NIA (Jika ada)</label>
                    <input 
                      type="text" name="nia" value={formData.nia} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:border-black outline-none transition-all"
                      placeholder="Otomatis digenerate jika kosong"
                    />
                  </div>
                </div>
                <div className="pt-8 flex gap-4">
                  <button 
                    type="button" onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-100 py-5 rounded-3xl font-black text-xl hover:bg-gray-50 transition-all"
                  >
                    Kembali
                  </button>
                  <button 
                    type="button" onClick={() => setStep(3)}
                    className="flex-1 bg-black text-white py-5 rounded-3xl font-black text-xl hover:bg-gray-800 transition-all shadow-xl"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-black uppercase tracking-tight">Konfirmasi Akhir</h3>
                <div className="flex flex-col items-center justify-center p-12 border-4 border-dashed border-gray-100 rounded-[40px] bg-gray-50">
                   <div className="relative group cursor-pointer">
                    <div className="w-32 h-44 bg-white rounded-2xl overflow-hidden border-4 border-black shadow-xl">
                      <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-2 rounded-xl shadow-lg">
                      <Settings className="w-5 h-5" />
                    </div>
                   </div>
                   <p className="mt-8 font-bold text-center text-gray-400 max-w-xs">Data Anda akan segera divalidasi oleh sistem pusat setelah pendaftaran.</p>
                </div>

                <div className="p-8 bg-red-50 border border-red-100 rounded-3xl">
                   <p className="text-sm text-red-700 font-bold leading-relaxed italic text-center">
                     "Saya bersumpah demi Sang Pencipta bahwa data yang saya masukkan adalah benar sesuai jati diri saya sebagai bagian dari Persaudaraan Setia Hati Terate."
                   </p>
                </div>

                <div className="pt-8 flex gap-4">
                  <button 
                    type="button" onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-100 py-5 rounded-3xl font-black text-xl hover:bg-gray-50 transition-all"
                  >
                    Kembali
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-red-600 text-white py-5 rounded-3xl font-black text-xl hover:bg-red-700 transition-all shadow-2xl"
                  >
                    Simpan & Masuk
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
