
import React from 'react';
import { PSHT_LOGO } from '../constants';

interface NavbarProps {
  onHome: () => void;
  onDashboard: () => void;
  onLogin: () => void;
  onRegister: () => void;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, onDashboard, onLogin, onRegister, isLoggedIn }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer group" onClick={onHome}>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-1">
              <img src={PSHT_LOGO} alt="PSHT Logo" className="w-full h-full object-contain" />
            </div>
            <span className="ml-4 font-extrabold text-xl tracking-tighter uppercase">PSHT Digital</span>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <button onClick={onHome} className="text-gray-500 hover:text-black font-semibold transition-colors">About Us</button>
            <a href="#features" className="text-gray-500 hover:text-black font-semibold transition-colors">Features</a>
            <a href="#faq" className="text-gray-500 hover:text-black font-semibold transition-colors">FAQ</a>
            {isLoggedIn ? (
              <button 
                onClick={onDashboard}
                className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg"
              >
                Dashboard
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button onClick={onLogin} className="font-bold text-gray-900 px-4 hover:text-red-600 transition-colors">Log in</button>
                <button 
                  onClick={onRegister}
                  className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg"
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
