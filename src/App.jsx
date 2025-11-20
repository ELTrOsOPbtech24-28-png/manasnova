import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Features from './components/Features'
import FeaturesDemo from './components/FeaturesDemo'
import MeditationTypes from './components/MeditationTypes'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import OnboardingQuestions from './components/OnboardingQuestions'
import UserDashboard from './components/UserDashboard'

function App() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [userData, setUserData] = useState(null)

  // Check if user data exists on mount
  useEffect(() => {
    const storedData = localStorage.getItem('manasNovaUser')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setUserData(parsedData)
      setShowDashboard(true)
    }
  }, [])

  const handleRegisterClick = () => {
    // Check if user already registered
    const storedData = localStorage.getItem('manasNovaUser')
    if (storedData) {
      setUserData(JSON.parse(storedData))
      setShowDashboard(true)
    } else {
      setShowRegistration(true)
    }
  }

  const handleRegistrationSubmit = (data) => {
    setUserData(data)
    setShowRegistration(false)
    setShowOnboarding(true)
  }

  const handleOnboardingComplete = (completeData) => {
    // Save complete user data to localStorage
    localStorage.setItem('manasNovaUser', JSON.stringify(completeData))
    setUserData(completeData)
    setShowOnboarding(false)
    setShowDashboard(true)
  }

  const handleBackToHome = () => {
    setShowDashboard(false)
  }

  const handleDeleteAccount = () => {
    localStorage.removeItem('manasNovaUser')
    setUserData(null)
    setShowDashboard(false)
  }

  const handleDashboardClick = () => {
    const storedData = localStorage.getItem('manasNovaUser')
    if (storedData) {
      setUserData(JSON.parse(storedData))
      setShowDashboard(true)
    }
  }

  // Show dashboard if user has data
  if (showDashboard && userData) {
    return <UserDashboard 
      userData={userData} 
      onBackToHome={handleBackToHome}
      onDeleteAccount={handleDeleteAccount}
    />
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar 
        onRegisterClick={handleRegisterClick}
        onDashboardClick={handleDashboardClick}
        hasUserData={!!userData}
      />
      <main>
        <Hero />
        <Features />
        <FeaturesDemo />
        <MeditationTypes />
        <About />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Registration Modal */}
      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        onSubmit={handleRegistrationSubmit}
      />

      {/* Onboarding Questions */}
      <OnboardingQuestions
        isOpen={showOnboarding}
        onComplete={handleOnboardingComplete}
        userData={userData}
      />
    </div>
  )
}

export default App
