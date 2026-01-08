
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ChoiceSection from './components/ChoiceSection';
import AppShowcase from './components/AppShowcase';
import FAQ from './components/FAQ';
import { AppStep, MemberData } from './types';
import { MOCK_WARGA } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.LANDING);
  const [member, setMember] = useState<MemberData | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleRegisterSuccess = (data: MemberData) => {
    setMember(data);
    setCurrentStep(AppStep.DASHBOARD);
  };

  const handleMockLogin = () => {
    // For demo purposes, logging in as the first mock warga (Super Admin)
    setMember(MOCK_WARGA[0]);
    setCurrentStep(AppStep.DASHBOARD);
  };

  const handleLogout = () => {
    setMember(null);
    setCurrentStep(AppStep.LANDING);
  };

  const renderContent = () => {
    switch (currentStep) {
      case AppStep.LANDING:
        return (
          <>
            <Hero 
              onStart={() => setCurrentStep(AppStep.REGISTRATION)} 
              isLoggedIn={!!member}
              onDashboard={() => setCurrentStep(AppStep.DASHBOARD)}
            />
            <ChoiceSection onRegister={() => setCurrentStep(AppStep.REGISTRATION)} />
            <AppShowcase />
            <Features />
            <FAQ />
          </>
        );
      case AppStep.REGISTRATION:
        return <Registration onSuccess={handleRegisterSuccess} onCancel={() => setCurrentStep(AppStep.LANDING)} />;
      case AppStep.DASHBOARD:
        return member ? <Dashboard member={member} onLogout={handleLogout} /> : null;
      default:
        // Added missing props 'isLoggedIn' and 'onDashboard' to Hero component in the default case to satisfy HeroProps
        return (
          <Hero 
            onStart={() => setCurrentStep(AppStep.REGISTRATION)} 
            isLoggedIn={!!member}
            onDashboard={() => setCurrentStep(AppStep.DASHBOARD)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      <Navbar 
        onHome={() => setCurrentStep(AppStep.LANDING)} 
        onDashboard={() => setCurrentStep(AppStep.DASHBOARD)}
        onLogin={handleMockLogin}
        onRegister={() => setCurrentStep(AppStep.REGISTRATION)}
        isLoggedIn={!!member}
      />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
