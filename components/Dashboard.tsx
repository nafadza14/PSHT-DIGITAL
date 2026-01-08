
import React, { useState } from 'react';
import { MemberData, UserRole } from '../types';
import DigitalCard from './DigitalCard';
import IndonesiaMap from './IndonesiaMap';
import { 
  Download, Share2, LogOut, CheckCircle, 
  Users, UserPlus, Shield, Activity, 
  Map as MapIcon, Database, Bell, Settings,
  Briefcase, GraduationCap, ChevronRight,
  BookOpen, Newspaper, FileText, MessageSquare,
  BarChart2, PlayCircle, Award, Search, Filter,
  Mail, Send, Inbox, PlusCircle
} from 'lucide-react';

interface DashboardProps {
  member: MemberData;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ member, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mailTab, setMailTab] = useState('inbox');

  const navItems = [
    { id: 'overview', label: 'Ringkasan', icon: Activity, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'esurat', label: 'E-Surat', icon: Mail, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'pelatihan', label: 'Akses Pelatihan', icon: TrophyIcon, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'potensi', label: 'Kelola Potensi', icon: Briefcase, roles: ['ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'elearning', label: 'E-Learning', icon: BookOpen, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'buletin', label: 'E-Buletin', icon: Newspaper, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'dokumen', label: 'Dokumen', icon: FileText, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'forum', label: 'Forum Warga', icon: MessageSquare, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'polling', label: 'Polling', icon: BarChart2, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
    { id: 'berita', label: 'Berita', icon: Newspaper, roles: ['USER', 'ADMIN_CABANG', 'SUPER_ADMIN'] },
  ];

  function TrophyIcon(props: any) {
    return <Award {...props} />;
  }

  const renderSidebar = () => {
    return (
      <div className="bg-white p-6 rounded-[40px] shadow-sm border border-gray-100 sticky top-24 max-h-[85vh] overflow-y-auto custom-scrollbar">
        <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-100">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] font-black text-red-600 uppercase tracking-widest truncate">{member.role.replace('_', ' ')}</p>
            <h3 className="font-bold text-sm truncate">{member.fullName}</h3>
          </div>
        </div>

        <div className="space-y-1">
          {navItems.filter(item => item.roles.includes(member.role)).map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-3.5 rounded-2xl font-bold flex items-center transition-all ${activeTab === item.id ? 'bg-black text-white shadow-lg' : 'hover:bg-gray-50 text-gray-500'}`}
            >
              <item.icon className={`w-5 h-5 mr-4 ${activeTab === item.id ? 'text-red-500' : ''}`} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
          
          {member.role === 'SUPER_ADMIN' && (
            <button 
              onClick={() => setActiveTab('map')}
              className={`w-full text-left p-3.5 rounded-2xl font-bold flex items-center transition-all ${activeTab === 'map' ? 'bg-black text-white shadow-lg' : 'hover:bg-gray-50 text-gray-500'}`}
            >
              <MapIcon className="w-5 h-5 mr-4" />
              <span className="text-sm">Peta Nasional</span>
            </button>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <button 
            onClick={onLogout}
            className="w-full text-left p-3.5 rounded-2xl hover:bg-red-50 text-red-600 font-bold flex items-center transition-colors"
          >
            <LogOut className="w-5 h-5 mr-4" />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {renderStatsGrid()}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* User Personal Card */}
              <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-full flex justify-between items-center mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tight">KARTU DIGITAL SAYA</h2>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">Aktif</span>
                </div>
                <div className="transform scale-90 sm:scale-100 transition-transform">
                  <DigitalCard member={member} />
                </div>
                <div className="mt-8 w-full grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all text-sm">
                    <Download className="w-4 h-4" />
                    <span>Unduh PDF</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-200 px-4 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all text-sm">
                    <Share2 className="w-4 h-4" />
                    <span>Share NIA</span>
                  </button>
                </div>
              </div>

              {/* Organization Levels */}
              <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100">
                <h2 className="text-xl font-black uppercase tracking-tight mb-8">STRUKTUR ORGANISASI</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Pusat', val: 'Padepokan Agung Madiun', active: true },
                    { label: 'Daerah', val: 'Pengurus Daerah I', active: true },
                    { label: 'Cabang', val: member.cabang, active: true },
                    { label: 'Ranting', val: member.ranting, active: true },
                    { label: 'Rayon', val: 'Rayon Pusat', active: false }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black transition-colors">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-4 ${item.active ? 'bg-red-600' : 'bg-gray-300'}`}></div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">{item.label}</p>
                          <p className="font-bold text-sm">{item.val}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'esurat':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h2 className="text-3xl font-black uppercase italic">E-Surat Terate</h2>
                  <p className="text-gray-400 font-medium">Sistem persuratan digital resmi PSHT.</p>
                </div>
                <button className="bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-sm flex items-center shadow-lg hover:bg-red-700 transition-all">
                  <PlusCircle className="w-4 h-4 mr-2" /> Buat Surat Baru
                </button>
              </div>

              {/* Mail Tabs */}
              <div className="flex space-x-2 mb-8 p-1.5 bg-gray-100 rounded-2xl w-fit">
                {[
                  { id: 'inbox', label: 'Surat Masuk', icon: Inbox },
                  { id: 'sent', label: 'Surat Keluar', icon: Send },
                  { id: 'templates', label: 'Template', icon: FileText }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setMailTab(t.id)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-black flex items-center transition-all ${mailTab === t.id ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}
                  >
                    <t.icon className="w-4 h-4 mr-2" /> {t.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {mailTab === 'inbox' && [
                  { from: "Pusat Madiun", subject: "Instruksi Pelaksanaan Tes Calon Warga 2026", date: "12 Okt 2025", urgent: true },
                  { from: "Pengda Jatim", subject: "Undangan Rakorda Wilayah Timur", date: "10 Okt 2025", urgent: false },
                  { from: "Sekretariat Cabang", subject: "Update Data Anggota Ranting", date: "08 Okt 2025", urgent: false },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-3xl border border-transparent bg-gray-50 hover:border-black transition-all cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${s.urgent ? 'bg-red-600 animate-pulse' : 'bg-gray-300'}`}></div>
                      <div>
                        <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">{s.from}</p>
                        <h4 className="font-bold text-gray-800 group-hover:text-black">{s.subject}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">{s.date}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black" />
                  </div>
                ))}

                {mailTab === 'sent' && [
                  { to: "Pusat Madiun", subject: "Laporan Kegiatan Cabang Semester I", date: "05 Okt 2025", status: "Terkirim" },
                  { to: "Ranting Manguharjo", subject: "Pemberitahuan Jadwal Latihan Gabungan", date: "01 Okt 2025", status: "Dibaca" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-3xl border border-transparent bg-gray-50 hover:border-black transition-all cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                        <Send className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Kepada: {s.to}</p>
                        <h4 className="font-bold text-gray-800 group-hover:text-black">{s.subject}</h4>
                        <div className="flex items-center space-x-2">
                           <p className="text-[10px] text-gray-400 font-bold uppercase">{s.date}</p>
                           <span className="text-[8px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-black uppercase">{s.status}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black" />
                  </div>
                ))}

                {mailTab === 'templates' && [
                  { title: "Surat Undangan Resmi", cat: "Umum" },
                  { title: "Surat Izin Dispensasi Latihan", cat: "Personalia" },
                  { title: "Surat Mandat Wasit Juri", cat: "Kegiatan" },
                  { title: "Berita Acara Pengesahan", cat: "Pusat" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-3xl border border-gray-100 bg-white hover:shadow-lg transition-all cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                        <FileText className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 group-hover:text-black">{s.title}</h4>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Kategori: {s.cat}</p>
                      </div>
                    </div>
                    <button className="text-[10px] font-black text-red-600 uppercase tracking-widest hover:underline">Gunakan</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'pelatihan':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black mb-2 uppercase italic">Akses Pelatihan</h2>
              <p className="text-gray-400 font-medium mb-10">Tingkatkan kapasitas pendekar melalui sertifikasi resmi.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Sertifikasi Wasit Juri", level: "Nasional", date: "12-15 Nov 2025", status: "Open" },
                  { title: "Pelatihan Pelatih Cabang", level: "Wilayah", date: "20 Nov 2025", status: "Upcoming" },
                  { title: "Workshop IT Organisasi", level: "Pusat", date: "05 Des 2025", status: "Open" },
                  { title: "Diklat Keamanan (Pamter)", level: "Rayon", date: "10 Des 2025", status: "Closed" },
                ].map((p, i) => (
                  <div key={i} className="group p-6 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-black hover:text-white transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-white/10 p-3 rounded-2xl">
                        <Award className={`w-8 h-8 ${i === 0 ? 'text-yellow-500' : 'text-red-500'}`} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${p.status === 'Open' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-2">{p.title}</h3>
                    <div className="flex items-center space-x-4 text-sm opacity-60">
                      <span>{p.level}</span>
                      <span>•</span>
                      <span>{p.date}</span>
                    </div>
                    <button className="mt-8 w-full py-3 rounded-xl border border-current font-bold hover:bg-white hover:text-black transition-all">Daftar Sekarang</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'potensi':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h2 className="text-3xl font-black uppercase italic">Kelola Potensi Anggota</h2>
                  <p className="text-gray-400 font-medium">Monitoring skill dan kualifikasi warga {member.cabang}.</p>
                </div>
                <div className="flex space-x-2 w-full md:w-auto">
                  <div className="relative flex-grow md:w-64">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-black transition-all" placeholder="Cari nama/skill..." />
                  </div>
                  <button className="p-3 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100"><Filter className="w-5 h-5" /></button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Slamet Raharjo", skills: ["Wasit Juri", "Pelatih"], color: "bg-blue-50 text-blue-600" },
                  { name: "Doni Setiawan", skills: ["Pamter", "Security"], color: "bg-red-50 text-red-600" },
                  { name: "Indra Wijaya", skills: ["IT Support", "Admin"], color: "bg-green-50 text-green-600" },
                  { name: "Agus Santoso", skills: ["Hukum", "Advokat"], color: "bg-orange-50 text-orange-600" },
                  { name: "Bambang H.", skills: ["Atlit Tanding"], color: "bg-purple-50 text-purple-600" },
                  { name: "Yudi Prasetyo", skills: ["Penguji", "Pelatih"], color: "bg-yellow-50 text-yellow-600" },
                ].map((u, i) => (
                  <div key={i} className="p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="" />
                      </div>
                      <div>
                        <h4 className="font-bold">{u.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Warga Tingkat I</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {u.skills.map(s => (
                        <span key={s} className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase ${u.color}`}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'elearning':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                <h2 className="text-3xl font-black mb-8 uppercase italic">E-Learning & Materi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Filosofi Setia Hati", dur: "45 Min", type: "Video" },
                    { title: "Teknik Dasar Senam", dur: "120 Min", type: "Tutorial" },
                    { title: "Sejarah Berdirinya PSHT", dur: "30 Min", type: "E-Book" },
                  ].map((m, i) => (
                    <div key={i} className="overflow-hidden rounded-3xl border border-gray-100 group">
                      <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white/40 group-hover:text-red-500 transition-all scale-100 group-hover:scale-125" />
                        <span className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md">{m.dur}</span>
                      </div>
                      <div className="p-6">
                        <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">{m.type}</span>
                        <h3 className="text-lg font-bold mt-2">{m.title}</h3>
                        <button className="mt-6 text-sm font-black flex items-center text-gray-400 hover:text-black">
                          Mulai Belajar <ChevronRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        );

      case 'buletin':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black mb-10 uppercase italic">Arsip E-Buletin Terate</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { vol: "64", month: "Okt 2025", theme: "Kedaulatan" },
                  { vol: "63", month: "Sep 2025", theme: "Persaudaraan" },
                  { vol: "62", month: "Agu 2025", theme: "Sejarah" },
                  { vol: "61", month: "Jul 2025", theme: "Prestasi" },
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-full aspect-[3/4] bg-zinc-900 rounded-2xl shadow-xl mb-4 p-4 flex flex-col justify-end border-r-4 border-zinc-800 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 w-8 h-8 bg-red-600 flex items-center justify-center">
                         <Download className="w-4 h-4 text-white" />
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                       <div className="relative z-10 text-white">
                         <p className="text-[8px] font-bold uppercase opacity-60">Vol. {b.vol}</p>
                         <h4 className="text-sm font-black uppercase leading-tight">{b.theme}</h4>
                       </div>
                    </div>
                    <p className="text-xs font-bold">{b.month}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'dokumen':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black mb-8 uppercase italic">Repository Dokumen</h2>
              <div className="space-y-4">
                {[
                  { title: "AD / ART PSHT Hasil Parluh 2021", size: "2.4 MB", date: "Jan 2022" },
                  { title: "Pedoman Organisasi & Tata Kerja", size: "1.1 MB", date: "Mar 2022" },
                  { title: "SOP Penggunaan Atribut Organisasi", size: "850 KB", date: "Jun 2023" },
                  { title: "Juknis Pendaftaran Warga Baru Digital", size: "1.5 MB", date: "Agu 2024" },
                ].map((d, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-3xl border border-gray-50 bg-gray-50 hover:border-black transition-all">
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <FileText className="text-red-500 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{d.title}</h4>
                        <p className="text-xs text-gray-400 font-bold uppercase">{d.size} • Terakhir Diperbarui: {d.date}</p>
                      </div>
                    </div>
                    <button className="p-4 bg-black text-white rounded-2xl hover:scale-110 transition-transform">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'forum':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black uppercase italic">Forum Warga</h2>
                <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold text-sm">Buat Diskusi</button>
              </div>
              <div className="space-y-6">
                {[
                  { user: "Ki Heru", title: "Refleksi Parluh 2021 untuk 2026", replies: 42, time: "2 Jam lalu" },
                  { user: "Mas Guntur", title: "Persiapan Kejuaraan Cabang Desember", replies: 12, time: "5 Jam lalu" },
                  { user: "Mbak Sari", title: "Sharing Tips Latihan Pernapasan", replies: 89, time: "1 Hari lalu" },
                ].map((t, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-red-500 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <span className="text-sm font-bold">{t.user}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">{t.time}</span>
                    </div>
                    <h3 className="text-xl font-black mb-4 leading-tight">{t.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 font-bold">
                      <MessageSquare className="w-4 h-4 mr-2" /> {t.replies} Komentar
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'polling':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black mb-10 uppercase italic">Polling Organisasi</h2>
              <div className="p-8 rounded-[40px] bg-black text-white relative overflow-hidden">
                <div className="relative z-10">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block">Aktif</span>
                  <h3 className="text-2xl font-black mb-8 leading-tight">Penentuan Lokasi Pengesahan Masal Cabang {member.cabang} 2026</h3>
                  <div className="space-y-4 max-w-md">
                    {['Padepokan Cabang', 'Stadion Olahraga', 'Lapangan Terbuka'].map(opt => (
                      <button key={opt} className="w-full text-left p-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all flex justify-between items-center group">
                        <span className="font-bold">{opt}</span>
                        <div className="w-5 h-5 rounded-full border-2 border-white/20 group-hover:bg-red-600 group-hover:border-red-600 transition-all"></div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-red-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        );

      case 'berita':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black mb-10 uppercase italic">Berita Terate Terkini</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="md:col-span-2 group cursor-pointer">
                  <div className="aspect-video bg-zinc-900 rounded-[40px] mb-6 overflow-hidden relative">
                    <img src="https://www.krajan.id/wp-content/uploads/2025/01/psht-1.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="" />
                    <div className="absolute bottom-8 left-8 right-8">
                       <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase mb-4 inline-block">Headline</span>
                       <h3 className="text-4xl font-black text-white leading-none">MENGGAPAI 100 TAHUN PSHT: TRANSFORMASI MENUJU KEMANDIRIAN EKONOMI</h3>
                    </div>
                  </div>
                </div>
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex space-x-6 items-center group cursor-pointer">
                    <div className="w-32 h-32 rounded-3xl bg-gray-100 flex-shrink-0 overflow-hidden">
                       <img src={`https://picsum.photos/300/300?random=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Organisasi • 12 Okt 2025</span>
                      <h4 className="text-xl font-black mt-2 leading-tight group-hover:text-red-600 transition-colors">Kegiatan Donor Darah Serentak di Seluruh Cabang se-Indonesia</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'map':
        return <IndonesiaMap />;
      
      case 'members':
        return (
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black uppercase">DAFTAR ANGGOTA {member.cabang.toUpperCase()}</h2>
              <button className="bg-black text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center">
                <UserPlus className="w-4 h-4 mr-2" /> Tambah Warga
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Warga / Siswa</th>
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">NIA</th>
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ranting</th>
                    <th className="py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[1,2,3,4,5].map(i => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">Anggota Ke-{i}</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{i % 2 === 0 ? 'Warga' : 'Siswa'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-mono text-xs font-bold">1922-CAB-00{i}</td>
                      <td className="py-4 text-sm font-medium">{member.ranting}</td>
                      <td className="py-4">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase">Verified</span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-gray-400 hover:text-black"><ChevronRight className="w-5 h-5" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return <div>Section Under Construction</div>;
    }
  };

  const renderStatsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group hover:border-black transition-colors">
        <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
          <Users className="w-5 h-5" />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Warga</p>
        <p className="text-3xl font-black">1.2M+</p>
        <p className="text-[10px] text-green-500 font-bold mt-2 flex items-center">
          <Activity className="w-3 h-3 mr-1" /> +2.4% Bulan ini
        </p>
      </div>
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group hover:border-black transition-colors">
        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
          <GraduationCap className="w-5 h-5" />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Siswa</p>
        <p className="text-3xl font-black">342.1K</p>
        <p className="text-[10px] text-blue-500 font-bold mt-2 flex items-center">
          Dalam Proses Pengesahan
        </p>
      </div>
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group hover:border-black transition-colors">
        <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
          <Briefcase className="w-5 h-5" />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Cabang Aktif</p>
        <p className="text-3xl font-black">512</p>
        <p className="text-[10px] text-gray-500 font-bold mt-2">Tersebar di 38 Provinsi</p>
      </div>
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group hover:border-black transition-colors">
        <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
          <Activity className="w-5 h-5" />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Validasi Hari Ini</p>
        <p className="text-3xl font-black">1,402</p>
        <p className="text-[10px] text-green-500 font-bold mt-2">Real-time Sync</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Banner Role-based */}
      <div className="bg-black text-white pt-28 pb-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase">DASHBOARD <span className="text-red-600">{member.role.split('_').pop()}</span></h1>
            <p className="text-gray-400 font-medium text-lg">Sistem Informasi Keanggotaan Terpadu PSHT Digital.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/10 text-right">
               <p className="text-[10px] text-gray-400 uppercase font-black mb-1">Wilayah Kerja</p>
               <p className="font-black">{member.role === 'SUPER_ADMIN' ? 'Nasional (Pusat)' : member.cabang}</p>
             </div>
             <button className="bg-red-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Bell className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {renderSidebar()}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
             {renderContent()}
          </div>
        </div>
      </div>
      
      {/* Global CSS Inject for scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>
    </div>
  );
};

export default Dashboard;
