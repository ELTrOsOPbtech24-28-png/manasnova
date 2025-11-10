import { useState, useEffect } from 'react'
import NavbarExtreme from './components/NavbarExtreme'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import HeroExtreme from './components/HeroExtreme'
import FeaturesExtreme from './components/FeaturesExtreme'
import FeaturesDemo from './components/FeaturesDemo'
import MeditationTypes from './components/MeditationTypes'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OnboardingModal from './components/OnboardingModal'
import Dashboard from './components/Dashboard'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [hasUserData, setHasUserData] = useState(false);

  // Check if user data exists on mount
  useEffect(() => {
    const checkUserData = () => {
      const data = localStorage.getItem('userOnboarding');
      setHasUserData(!!data);
    };
    
    checkUserData();
    
    // Listen for storage changes (in case data is updated in another tab)
    window.addEventListener('storage', checkUserData);
    return () => window.removeEventListener('storage', checkUserData);
  }, []);

  const handleGetStarted = () => {
    // Check if user already has data
    const existingData = localStorage.getItem('userOnboarding');
    if (existingData) {
      // User already has data, show dashboard
      setShowDashboard(true);
    } else {
      // No data, show onboarding
      setShowOnboarding(true);
    }
  };

  const handleOnboardingComplete = (data) => {
    console.log('Onboarding complete:', data);
    setShowOnboarding(false);
    setShowDashboard(true);
    setHasUserData(true);
  };

  const handleCloseDashboard = () => {
    setShowDashboard(false);
  };

  const handleViewDashboard = () => {
    setShowDashboard(true);
  };

  const handleStartOnboardingFromDashboard = () => {
    setShowDashboard(false);
    setShowOnboarding(true);
  };

  const handleResetData = () => {
    // Reset all state
    setShowDashboard(false);
    setShowOnboarding(false);
    setHasUserData(false);
    
    // Force re-check of user data
    setTimeout(() => {
      const data = localStorage.getItem('userOnboarding');
      setHasUserData(!!data);
    }, 100);
  };

  // Show dashboard if user has completed onboarding
  if (showDashboard) {
    return (
      <Dashboard 
        onClose={handleCloseDashboard} 
        onReset={handleResetData}
        onStartOnboarding={handleStartOnboardingFromDashboard}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <ScrollProgress />
      <ScrollToTop />
      <NavbarExtreme 
        onGetStarted={handleGetStarted}
        onViewDashboard={handleViewDashboard}
      />
      <main>
        <HeroExtreme onGetStarted={handleGetStarted} />
        <FeaturesDemo />
        <MeditationTypes />
        <FeaturesExtreme />
        <About />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <OnboardingModal 
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        onComplete={handleOnboardingComplete}
      />
    </div>
  )
}

export default App
