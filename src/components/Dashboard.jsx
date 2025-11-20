import { useState, useEffect } from 'react';
import { User, Target, Award, TrendingUp, Calendar, Clock, Heart, Brain, CheckCircle, Plus, Edit, Trash2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

function Dashboard({ onClose, onReset, onStartOnboarding }) {
  const [userData, setUserData] = useState(null);
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // Load data from localStorage (in production, fetch from MongoDB)
    const data = localStorage.getItem('userOnboarding');
    if (data) {
      const parsed = JSON.parse(data);
      setUserData(parsed);
      
      // Load goals from localStorage
      const savedGoals = localStorage.getItem('userGoals');
      if (savedGoals) {
        setGoals(JSON.parse(savedGoals));
      }
    }
  }, []);

  const addGoal = () => {
    if (newGoal.trim()) {
      const goal = {
        id: Date.now(),
        text: newGoal,
        completed: false,
        createdAt: new Date().toISOString()
      };
      const updatedGoals = [...goals, goal];
      setGoals(updatedGoals);
      localStorage.setItem('userGoals', JSON.stringify(updatedGoals));
      setNewGoal('');
    }
  };

  const toggleGoal = (id) => {
    const updatedGoals = goals.map(g => 
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    setGoals(updatedGoals);
    localStorage.setItem('userGoals', JSON.stringify(updatedGoals));
  };

  const handleDeleteAllData = () => {
    // Clear all user data from localStorage
    localStorage.removeItem('userOnboarding');
    localStorage.removeItem('userGoals');
    setShowDeleteModal(false);
    
    // Call onReset to go back to home and reset app state
    if (onReset) {
      onReset();
    }
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center p-3 sm:p-4">
        <div className="max-w-2xl w-full">
          {/* Empty State Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12 text-center w-full">
            {/* Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Welcome to Your Dashboard
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-2">
              To personalize your ManasNova experience and unlock your dashboard, please complete your journey setup first.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 w-full max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Personalized Insights</h3>
                <p className="text-xs sm:text-sm text-gray-600">AI-powered recommendations based on your goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Track Progress</h3>
                <p className="text-xs sm:text-sm text-gray-600">Monitor your goals and celebrate achievements</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Custom Journey</h3>
                <p className="text-xs sm:text-sm text-gray-600">Tailored meditation and wellness plans</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <button
                onClick={onStartOnboarding}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              {onClose && (
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base"
                >
                  Back to Home
                </button>
              )}
            </div>

            {/* Info Note */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-100 w-full">
              <p className="text-xs sm:text-sm text-purple-800">
                <strong>Just 3 steps:</strong> Share your details → Choose your focus → Answer a few questions
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const completionPercentage = userData.answers ? 
    Math.round((Object.keys(userData.answers).length / 10) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-3 sm:p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div 
          className="rounded-xl md:rounded-2xl shadow-sm border border-purple-200/40 p-4 sm:p-6 mb-4 md:mb-6 backdrop-blur-md relative overflow-hidden w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative z-10 w-full">
            <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto min-w-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shrink-0">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 truncate">{userData.userData.name}</h1>
                <p className="text-sm sm:text-base text-gray-600 truncate">{userData.userData.email}</p>
                <p className="text-xs sm:text-sm text-purple-600 mt-1">Category: {userData.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                title="Delete all data and start fresh"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Reset Data</span>
                <span className="sm:hidden">Reset</span>
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 w-full">
          <div 
            className="rounded-lg md:rounded-xl shadow-sm border border-purple-200/30 p-3 sm:p-4 md:p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 relative z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900">Goals</h3>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 relative z-10">{goals.length}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 relative z-10">Total goals set</p>
          </div>

          <div 
            className="rounded-lg md:rounded-xl shadow-sm border border-green-200/30 p-3 sm:p-4 md:p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 relative z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 truncate">Completed</h3>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 relative z-10">{goals.filter(g => g.completed).length}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 relative z-10">Goals achieved</p>
          </div>

          <div 
            className="rounded-lg md:rounded-xl shadow-sm border border-blue-200/30 p-3 sm:p-4 md:p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 relative z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900">Progress</h3>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 relative z-10">{completionPercentage}%</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 relative z-10 truncate">Assessment completed</p>
          </div>

          <div 
            className="rounded-lg md:rounded-xl shadow-sm border border-amber-200/30 p-3 sm:p-4 md:p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 relative z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900">Streak</h3>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 relative z-10">1</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 relative z-10">Days active</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
            {/* AI-Generated Roadmap */}
            <div 
              className="rounded-xl md:rounded-2xl shadow-sm border border-purple-200/40 p-4 sm:p-5 md:p-6 backdrop-blur-md relative overflow-hidden w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 relative z-10">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 shrink-0" />
                <span className="break-words">Your AI-Generated Roadmap</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative z-10 w-full">
                {/* Week 1 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-100 w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm sm:text-base text-purple-600">Week 1</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">Now</span>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 break-words">Foundation Building</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 break-words">Establish daily meditation routine</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-purple-600 shrink-0">•</span><span className="break-words">10min morning meditation</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-600 shrink-0">•</span><span className="break-words">Evening gratitude journaling</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-600 shrink-0">•</span><span className="break-words">Track mood daily</span></li>
                  </ul>
                </div>

                {/* Week 2 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-blue-100 w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm sm:text-base text-blue-600">Week 2</h3>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 break-words">Habit Formation</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 break-words">Increase mindfulness awareness</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">•</span><span className="break-words">15min meditation</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">•</span><span className="break-words">Breathing exercises 2x daily</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">•</span><span className="break-words">Weekly reflection</span></li>
                  </ul>
                </div>

                {/* Week 3 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-indigo-100 w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm sm:text-base text-indigo-600">Week 3</h3>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 break-words">Skill Development</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 break-words">Learn advanced techniques</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-indigo-600 shrink-0">•</span><span className="break-words">Body scan meditation</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-600 shrink-0">•</span><span className="break-words">Mindful walking</span></li>
                    <li className="flex items-start gap-2"><span className="text-indigo-600 shrink-0">•</span><span className="break-words">Stress management</span></li>
                  </ul>
                </div>

                {/* Week 4 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-pink-100 w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm sm:text-base text-pink-600">Week 4</h3>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 break-words">Integration</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 break-words">Apply mindfulness to daily life</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-pink-600 shrink-0">•</span><span className="break-words">Mindful eating</span></li>
                    <li className="flex items-start gap-2"><span className="text-pink-600 shrink-0">•</span><span className="break-words">Work breaks</span></li>
                    <li className="flex items-start gap-2"><span className="text-pink-600 shrink-0">•</span><span className="break-words">Evening wind-down routine</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Today's Personalized Schedule */}
            <div 
              className="rounded-xl md:rounded-2xl shadow-sm border border-blue-200/40 p-4 sm:p-5 md:p-6 backdrop-blur-md relative overflow-hidden w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 relative z-10">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 shrink-0" />
                <span className="break-words">Today's Personalized Schedule</span>
              </h2>
              <div className="space-y-2 md:space-y-3 relative z-10 w-full">
                {/* Morning Meditation */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 w-full min-w-0">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="text-center shrink-0">
                      <p className="text-xs sm:text-sm font-bold text-purple-600">10 min</p>
                      <p className="text-xs text-gray-600">6:00 AM</p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 break-words">Morning Meditation</h3>
                    </div>
                  </div>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto">
                    Start Session
                  </button>
                </div>

                {/* Midday Breathing */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 w-full min-w-0">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="text-center shrink-0">
                      <p className="text-xs sm:text-sm font-bold text-blue-600">5 min</p>
                      <p className="text-xs text-gray-600">12:00 PM</p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 break-words">Midday Breathing</h3>
                    </div>
                  </div>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto">
                    Start Session
                  </button>
                </div>

                {/* Evening Reflection */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 w-full min-w-0">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="text-center shrink-0">
                      <p className="text-xs sm:text-sm font-bold text-indigo-600">10 min</p>
                      <p className="text-xs text-gray-600">6:00 PM</p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 break-words">Evening Reflection</h3>
                    </div>
                  </div>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto">
                    Start Session
                  </button>
                </div>

                {/* Sleep Meditation */}
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-violet-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 w-full min-w-0">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="text-center shrink-0">
                      <p className="text-xs sm:text-sm font-bold text-violet-600">15 min</p>
                      <p className="text-xs text-gray-600">9:00 PM</p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 break-words">Sleep Meditation</h3>
                    </div>
                  </div>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto">
                    Start Session
                  </button>
                </div>
              </div>
            </div>

            {/* Wellness Metrics Overview */}
            <div 
              className="rounded-xl md:rounded-2xl shadow-sm border border-green-200/40 p-4 sm:p-5 md:p-6 backdrop-blur-md relative overflow-hidden w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 relative z-10">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 shrink-0" />
                <span className="break-words">Wellness Metrics Overview</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 relative z-10 w-full">
                {/* Mental Wellness */}
                <div className="w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-semibold text-gray-900">Mental Wellness</span>
                    <span className="text-sm sm:text-base font-bold text-purple-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>

                {/* Emotional Balance */}
                <div className="w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-semibold text-gray-900">Emotional Balance</span>
                    <span className="text-sm sm:text-base font-bold text-blue-600">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>

                {/* Physical Vitality */}
                <div className="w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-semibold text-gray-900">Physical Vitality</span>
                    <span className="text-sm sm:text-base font-bold text-green-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>

                {/* Social Connection */}
                <div className="w-full min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-semibold text-gray-900">Social Connection</span>
                    <span className="text-sm sm:text-base font-bold text-amber-600">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full" style={{width: '55%'}}></div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 sm:p-4 border border-blue-200 mt-4 w-full min-w-0">
                  <div className="flex items-start gap-2">
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-blue-900 mb-1">AI Insight</h3>
                      <p className="text-xs sm:text-sm text-gray-700 break-words">Your social connection score shows room for improvement. Consider joining our community meditation sessions or group wellness activities to boost this area.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Habit & Progress Tracker */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full min-w-0">
            {/* Habit & Progress Tracker */}
            <div 
              className="rounded-xl md:rounded-2xl shadow-sm border border-indigo-200/40 p-4 sm:p-5 md:p-6 backdrop-blur-md relative overflow-hidden w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 relative z-10 flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 shrink-0" />
                <span className="break-words">Habit & Progress Tracker</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative z-10 w-full mb-4 md:mb-6">
                {/* Meditation Minutes */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 sm:p-4 border border-purple-200 w-full min-w-0">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1">147</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">Meditation Minutes</p>
                    <p className="text-xs text-gray-600 mt-1">This week</p>
                  </div>
                </div>

                {/* Journal Entries */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 sm:p-4 border border-blue-200 w-full min-w-0">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1">12</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">Journal Entries</p>
                    <p className="text-xs text-gray-600 mt-1">This month</p>
                  </div>
                </div>

                {/* Breathing Sessions */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 sm:p-4 border border-green-200 w-full min-w-0">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1">23</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">Breathing Sessions</p>
                    <p className="text-xs text-gray-600 mt-1">This week</p>
                  </div>
                </div>

                {/* Streak */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-3 sm:p-4 border border-amber-200 w-full min-w-0">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-1">7</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 break-words">Days</p>
                    <p className="text-xs text-gray-600 mt-1">Current streak</p>
                  </div>
                </div>
              </div>

              {/* Streak Celebration */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 sm:p-5 border-2 border-pink-200 text-center relative z-10 w-full min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 break-words">
                  7 Day Streak! 🎉
                </p>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">Keep it up!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full p-4 sm:p-6 animate-in fade-in zoom-in duration-200 mx-3">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">Delete All Data?</h2>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Are you sure you want to delete all your data? This will remove:
            </p>
            
            <ul className="space-y-2 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-1.5"></div>
                <span className="break-words">Your personal information</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-1.5"></div>
                <span className="break-words">All questionnaire responses</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-1.5"></div>
                <span className="break-words">All goals and progress</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-1.5"></div>
                <span className="break-words">Your dashboard history</span>
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-amber-800 break-words">
                <strong>Warning:</strong> This action cannot be undone. You'll need to complete the onboarding process again to create a new profile.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-full sm:flex-1 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAllData}
                className="w-full sm:flex-1 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
