
import { MemberData, ProvinceStat } from './types';

export const PSHT_LOGO = "https://i.pinimg.com/736x/22/e8/70/22e87061ac466c7741e0e8b2174679f6.jpg";
export const PSHT_HERO_IMAGE = "https://www.krajan.id/wp-content/uploads/2025/01/psht-1.jpg";
export const APP_MOCKUP_IMAGE = "https://www.krajan.id/wp-content/uploads/2025/01/psht-1.jpg";
export const EMONEY_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLGR4mhvbeXpy5qUahtlasxnoXdyOyUbEzw&s";

export const PROVINCE_STATS: ProvinceStat[] = [
  // Sumatra (Kordinat diperbaiki untuk Sumatra)
  { id: '1', name: 'Aceh', wargaCount: 12400, siswaCount: 3500, cabangCount: 23, coords: { x: 4.5, y: 14 } },
  { id: '2', name: 'Sumatera Utara', wargaCount: 25000, siswaCount: 8200, cabangCount: 33, coords: { x: 9, y: 26 } },
  { id: '10', name: 'Kep. Riau', wargaCount: 4200, siswaCount: 900, cabangCount: 7, coords: { x: 26, y: 30 } },
  { id: '4', name: 'Riau', wargaCount: 18900, siswaCount: 5600, cabangCount: 12, coords: { x: 17, y: 36 } },
  { id: '3', name: 'Sumatera Barat', wargaCount: 15600, siswaCount: 4100, cabangCount: 19, coords: { x: 13, y: 46 } },
  { id: '5', name: 'Jambi', wargaCount: 9800, siswaCount: 2200, cabangCount: 11, coords: { x: 21, y: 50 } },
  { id: '9', name: 'Kep. Bangka Belitung', wargaCount: 5400, siswaCount: 1100, cabangCount: 7, coords: { x: 29.5, y: 55 } },
  { id: '7', name: 'Bengkulu', wargaCount: 7600, siswaCount: 1800, cabangCount: 10, coords: { x: 18.5, y: 59 } },
  { id: '6', name: 'Sumatera Selatan', wargaCount: 22100, siswaCount: 6700, cabangCount: 17, coords: { x: 25, y: 61 } },
  { id: '8', name: 'Lampung', wargaCount: 34500, siswaCount: 12000, cabangCount: 15, coords: { x: 28.5, y: 73 } },

  // Jawa (Kordinat diperbaiki untuk Jawa)
  { id: '16', name: 'Banten', wargaCount: 32000, siswaCount: 9800, cabangCount: 8, coords: { x: 31.5, y: 81 } },
  { id: '11', name: 'DKI Jakarta', wargaCount: 45000, siswaCount: 15600, cabangCount: 5, coords: { x: 34.5, y: 81 } },
  { id: '12', name: 'Jawa Barat', wargaCount: 89000, siswaCount: 25400, cabangCount: 27, coords: { x: 37.5, y: 84 } },
  { id: '13', name: 'Jawa Tengah', wargaCount: 156000, siswaCount: 42000, cabangCount: 35, coords: { x: 43, y: 85 } },
  { id: '14', name: 'DI Yogyakarta', wargaCount: 42000, siswaCount: 11200, cabangCount: 5, coords: { x: 44, y: 88 } },
  { id: '15', name: 'Jawa Timur', wargaCount: 450000, siswaCount: 125000, cabangCount: 38, coords: { x: 49, y: 85 } },

  // Kalimantan (Kordinat diperbaiki untuk Kalimantan)
  { id: '20', name: 'Kalimantan Barat', wargaCount: 18700, siswaCount: 5600, cabangCount: 14, coords: { x: 40, y: 40 } },
  { id: '21', name: 'Kalimantan Tengah', wargaCount: 14500, siswaCount: 3900, cabangCount: 14, coords: { x: 45.5, y: 50 } },
  { id: '22', name: 'Kalimantan Selatan', wargaCount: 21000, siswaCount: 6200, cabangCount: 13, coords: { x: 50, y: 58 } },
  { id: '23', name: 'Kalimantan Timur', wargaCount: 28600, siswaCount: 8400, cabangCount: 10, coords: { x: 53.5, y: 41 } },
  { id: '24', name: 'Kalimantan Utara', wargaCount: 6500, siswaCount: 1500, cabangCount: 5, coords: { x: 52.5, y: 24 } },

  // Sulawesi (Kordinat diperbaiki untuk Sulawesi)
  { id: '25', name: 'Sulawesi Utara', wargaCount: 9800, siswaCount: 2200, cabangCount: 15, coords: { x: 73, y: 23 } },
  { id: '29', name: 'Gorontalo', wargaCount: 5600, siswaCount: 1200, cabangCount: 6, coords: { x: 68.5, y: 28 } },
  { id: '26', name: 'Sulawesi Tengah', wargaCount: 12400, siswaCount: 3100, cabangCount: 13, coords: { x: 66, y: 42 } },
  { id: '30', name: 'Sulawesi Barat', wargaCount: 6700, siswaCount: 1500, cabangCount: 6, coords: { x: 61.5, y: 50 } },
  { id: '27', name: 'Sulawesi Selatan', wargaCount: 32000, siswaCount: 9500, cabangCount: 24, coords: { x: 62.5, y: 65 } },
  { id: '28', name: 'Sulawesi Tenggara', wargaCount: 11200, siswaCount: 2800, cabangCount: 17, coords: { x: 70, y: 62 } },

  // Bali & Nusa Tenggara (Kordinat diperbaiki)
  { id: '17', name: 'Bali', wargaCount: 12000, siswaCount: 3400, cabangCount: 9, coords: { x: 53.5, y: 88 } },
  { id: '18', name: 'Nusa Tenggara Barat', wargaCount: 8900, siswaCount: 2100, cabangCount: 10, coords: { x: 57.5, y: 89 } },
  { id: '19', name: 'Nusa Tenggara Timur', wargaCount: 15400, siswaCount: 4500, cabangCount: 22, coords: { x: 65.5, y: 91 } },

  // Maluku & Papua (Kordinat diperbaiki)
  { id: '32', name: 'Maluku Utara', wargaCount: 3800, siswaCount: 900, cabangCount: 10, coords: { x: 75.5, y: 31 } },
  { id: '31', name: 'Maluku', wargaCount: 4500, siswaCount: 1100, cabangCount: 11, coords: { x: 77, y: 56 } },
  { id: '38', name: 'Papua Barat Daya', wargaCount: 4100, siswaCount: 1000, cabangCount: 6, coords: { x: 79.5, y: 36 } },
  { id: '33', name: 'Papua Barat', wargaCount: 5200, siswaCount: 1200, cabangCount: 13, coords: { x: 83, y: 42 } },
  { id: '36', name: 'Papua Tengah', wargaCount: 2800, siswaCount: 700, cabangCount: 8, coords: { x: 89, y: 55 } },
  { id: '34', name: 'Papua', wargaCount: 8900, siswaCount: 2100, cabangCount: 29, coords: { x: 94.5, y: 50 } },
  { id: '37', name: 'Papua Pegunungan', wargaCount: 2100, siswaCount: 500, cabangCount: 8, coords: { x: 94, y: 58 } },
  { id: '35', name: 'Papua Selatan', wargaCount: 3200, siswaCount: 800, cabangCount: 4, coords: { x: 94.5, y: 69 } },

  // Overseas (Luar Negeri tetap di posisi khusus)
  { id: '39', name: 'PSHT Luar Negeri', wargaCount: 15600, siswaCount: 4200, cabangCount: 18, coords: { x: 88, y: 15 } },
];

export const MOCK_WARGA: MemberData[] = [
  {
    fullName: "H. SUDARMANTO",
    nia: "1922-PST-001",
    birthPlace: "Madiun",
    birthDate: "1972-05-12",
    address: "Padepokan Agung Madiun",
    cabang: "Madiun Pusat",
    ranting: "Manguharjo",
    yearOfValidation: "1992",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jyvk5p1WgmXZ6IyVW8gr8FXFE5wqUa6HRA&s",
    status: 'APPROVED',
    isWarga: true,
    role: 'SUPER_ADMIN'
  },
  {
    fullName: "BUDI SANTOSO",
    nia: "1922-CAB-290",
    birthPlace: "Madiun",
    birthDate: "1985-08-20",
    address: "Pusat Madiun",
    cabang: "Madiun Pusat",
    ranting: "Dusun Timur",
    yearOfValidation: "2005",
    photoUrl: "https://pshtbartim.wordpress.com/wp-content/uploads/2019/08/c22._isa_maulana.jpeg?w=584",
    status: 'APPROVED',
    isWarga: true,
    role: 'ADMIN_CABANG'
  },
  {
    fullName: "SITI FATIMAH",
    nia: "1922-SIS-420",
    birthPlace: "Sampit",
    birthDate: "1990-03-15",
    address: "Kotawaringin Timur",
    cabang: "Barito Timur",
    ranting: "Pematang Karau",
    yearOfValidation: "2010",
    photoUrl: "https://i.pinimg.com/736x/c9/bf/dd/c9bfdd9fdc6065f2113a44d7cabbc9cb.jpg",
    status: 'APPROVED',
    isWarga: false,
    role: 'USER'
  },
  {
    fullName: "ARIS SETIAWAN",
    nia: "1922-SIS-511",
    birthPlace: "Ponorogo",
    birthDate: "1995-11-22",
    address: "Ponorogo Kota",
    cabang: "Ponorogo",
    ranting: "Siman",
    yearOfValidation: "2015",
    photoUrl: "https://pshtbartim.wordpress.com/wp-content/uploads/2020/11/17.jpeg?w=375",
    status: 'APPROVED',
    isWarga: false,
    role: 'USER'
  },
  {
    fullName: "EKO PRASETYO",
    nia: "1922-SIS-622",
    birthPlace: "Magetan",
    birthDate: "1998-01-10",
    address: "Magetan Kota",
    cabang: "Magetan",
    ranting: "Maospati",
    yearOfValidation: "2018",
    photoUrl: "https://pshtbartim.wordpress.com/wp-content/uploads/2019/08/c22._isa_maulana.jpeg?w=584",
    status: 'APPROVED',
    isWarga: false,
    role: 'USER'
  }
];

export const CABANG_LIST = [
  "Madiun Pusat", "Ponorogo", "Magetan", "Ngawi", "Surabaya", "Malang", "Solo", "Yogyakarta", "Jakarta Pusat", "Tangerang", "Barito Timur"
];

export const FAQS = [
  {
    q: "Apa itu PSHT Digital?",
    a: "PSHT Digital adalah platform resmi Persaudaraan Setia Hati Terate untuk manajemen data anggota secara terpusat, modern, dan transparan."
  },
  {
    q: "Bagaimana cara mendapatkan Kartu Digital?",
    a: "Anda dapat mendaftar melalui aplikasi ini. Jika sudah memiliki kartu fisik, Anda dapat melakukan aktivasi akun dengan memasukkan NIA Anda."
  },
  {
    q: "Apakah data saya aman?",
    a: "Ya, keamanan data adalah prioritas kami. Semua informasi anggota dienkripsi dengan standar keamanan tinggi dan hanya dapat diakses oleh pihak berwenang."
  },
  {
    q: "Siapa yang bisa menggunakan dashboard Admin Cabang?",
    a: "Dashboard Admin Cabang dikhususkan untuk pengurus cabang yang telah ditunjuk resmi oleh pusat untuk mengelola data anggota di wilayahnya."
  }
];
