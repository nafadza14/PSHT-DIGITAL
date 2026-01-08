
import React from 'react';
import { MemberData } from '../types';
import { PSHT_LOGO, EMONEY_LOGO } from '../constants';

interface DigitalCardProps {
  member: MemberData;
}

const DigitalCard: React.FC<DigitalCardProps> = ({ member }) => {
  // Warga = Gold (yellow), Siswa = Silver
  const cardGradientClass = member.isWarga ? 'yellow-card-gradient' : 'silver-card-gradient';
  const cardTitle = member.isWarga ? 'KARTU WARGA TINGKAT I' : 'KARTU SISWA';
  
  // Format NIA to 02-00-2131-21212
  const formatNIA = (nia: string) => {
    const numbers = nia.replace(/\D/g, '');
    const pad = numbers.padEnd(13, '0');
    return `${pad.slice(0, 2)}-${pad.slice(2, 4)}-${pad.slice(4, 8)}-${pad.slice(8, 13)}`;
  };

  const formattedNIA = formatNIA(member.nia);

  // Dummy QR (using a reliable service for demo)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${member.nia}`;

  return (
    <div className={`relative w-[340px] h-[225px] sm:w-[500px] sm:h-[320px] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl ${cardGradientClass} font-sans border border-black/10 group transition-all duration-500`}>
      
      {/* Top Merah Putih Banner Accent */}
      <div className="absolute top-0 left-0 w-full h-8 sm:h-12 pointer-events-none z-0">
        <svg viewBox="0 0 500 40" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L500,0 L500,10 Q250,25 0,10 Z" fill="#ff0000" />
          <path d="M0,10 Q250,25 500,10 L500,20 Q250,35 0,20 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center h-full pt-1 sm:pt-2 px-4">
        
        {/* Header Title - Centered */}
        <h1 className="mt-1 sm:mt-2 text-[14px] sm:text-[22px] font-black text-black tracking-tight uppercase drop-shadow-sm text-center w-full">
          {cardTitle}
        </h1>

        {/* label "FALSAFAH" added below title */}
        <p className="text-[6px] sm:text-[8px] font-black text-black/60 uppercase tracking-[0.2em] mt-0.5 sm:mt-1">FALSAFAH</p>

        {/* Falsafah Section - Underline removed as requested */}
        <div className="text-center mt-0.5 sm:mt-1 px-2 sm:px-12">
          <p className="text-[6px] sm:text-[9.5px] font-black text-black leading-tight italic">
            "Manusia dapat dihancurkan, manusia dapat dimatikan, tetapi manusia tidak dapat dikalahkan selama manusia itu masih Setia kepada Hatinya sendiri atau ber SH pada dirinya sendiri."
          </p>
        </div>

        {/* Centerpiece: Large PSHT Logo Watermark */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-56 sm:h-56 opacity-[0.06] z-0 pointer-events-none">
          <img src={PSHT_LOGO} alt="" className="w-full h-full object-contain" />
        </div>

        {/* Middle Section: Photo (Left) & QR (Right) */}
        <div className="w-full flex justify-between items-start mt-1 sm:mt-3 px-4 sm:px-10 z-10">
          
          {/* Photo with Red Background */}
          <div className="flex flex-col items-center">
            <div className="w-[50px] h-[65px] sm:w-[85px] sm:h-[110px] bg-[#cc0000] border-2 border-black/15 p-1 shadow-lg">
               <img src={member.photoUrl} alt="Foto" className="w-full h-full object-cover" />
            </div>
            {member.isWarga && (
              <div className="mt-1 bg-white border border-gray-300 px-2 py-0.5 shadow-sm">
                <span className="text-[5px] sm:text-[8px] font-black text-black uppercase">Satria Anom</span>
              </div>
            )}
          </div>

          {/* QR Code Area */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-1 sm:p-2 border border-gray-100 shadow-md rounded-sm">
              <img src={qrUrl} alt="QR Code" className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px]" />
            </div>
            <p className="mt-1 text-[4px] sm:text-[7px] font-black text-black/60 uppercase text-center leading-none">
              Scan only via<br/>PSHT Digital App
            </p>
          </div>
        </div>

        {/* Identity Section: Name and NIA */}
        <div className="mt-1.5 sm:mt-3 text-center w-full px-4 z-20">
          <h3 className="text-[10px] sm:text-[18px] font-black text-black leading-none uppercase tracking-tight drop-shadow-sm mb-1">
            {member.fullName}
          </h3>
          <p className="text-[8px] sm:text-[14px] font-black text-black/80 leading-none tracking-[0.05em] font-mono">
            {formattedNIA}
          </p>
        </div>

        {/* Footer Card Section: e-Money Logo (Positioned at bottom right) */}
        {member.isWarga && (
          <div className="absolute bottom-3 right-6 sm:bottom-6 sm:right-10 z-10">
            <img src={EMONEY_LOGO} alt="e-Money" className="h-6 sm:h-10 object-contain drop-shadow-sm opacity-90 transition-transform hover:scale-110" />
          </div>
        )}

      </div>

      {/* Glossy Card Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-black/5 pointer-events-none"></div>
    </div>
  );
};

export default DigitalCard;
