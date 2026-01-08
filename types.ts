
export type UserRole = 'USER' | 'ADMIN_CABANG' | 'SUPER_ADMIN';

export interface MemberData {
  fullName: string;
  nia: string;
  birthPlace: string;
  birthDate: string;
  address: string;
  cabang: string;
  ranting: string;
  yearOfValidation: string;
  photoUrl: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  isWarga: boolean;
  role: UserRole;
}

export interface ProvinceStat {
  id: string;
  name: string;
  wargaCount: number;
  siswaCount: number;
  cabangCount: number;
  coords: { x: number; y: number }; // Percentage coords for map
}

export enum AppStep {
  LANDING = 'LANDING',
  REGISTRATION = 'REGISTRATION',
  DASHBOARD = 'DASHBOARD',
  PROFILE = 'PROFILE'
}
