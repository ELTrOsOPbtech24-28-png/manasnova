import { useState, useEffect } from 'react'
import { 
  Target, TrendingUp, Brain, Heart, Calendar, 
  CheckCircle, BarChart3, Sparkles, Clock, Award,
  BookOpen, Smile, Activity, Bell, User, Mail, 
  MapPin, Phone, Edit3, Zap, LineChart, AlertCircle,
  Coffee, Moon, Sun, Wind, Flame, Home, Trash2, X
} from 'lucide-react'

const UserDashboard = ({ userData, onBackToHome, onDeleteAccount }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [aiInsights, setAiInsights] = useState(null)

  useEffect(() => {
    // Generate AI insights based on user data
    generateAIInsights()
  }, [userData])

  const handleDeleteAccount = () => {
    localStorage.removeItem('manasNovaUser')
    setShowDeleteModal(false)
    if (onDeleteAccount) onDeleteAccount()
  }

  const generateAIInsights = () => {
    // AI Analysis based on user responses
    const insights = {
      mainGoal: userData.wellness_goal || 'Improve overall wellness',
      stressLevel: getStressLevel(userData.current_state),
      experienceLevel: userData.meditation_experience || 'Beginner',
      recommendedDuration: userData.time_commitment || '10-20 minutes',
      topChallenges: userData.challenges || [],
      suggestedActivities: userData.preferred_activities || [],
      
      // AI-generated personalized plan
      weeklyGoals: [
        { id: 1, goal: 'Practice meditation for 10 minutes daily', completed: false, progress: 0 },
        { id: 2, goal: 'Journal your thoughts 3 times this week', completed: false, progress: 0 },
        { id: 3, goal: 'Complete 5 breathing exercises', completed: false, progress: 0 },
        { id: 4, goal: 'Track your mood daily', completed: false, progress: 0 }
      ],
      
      recommendations: [
        {
          title: 'Morning Mindfulness',
          description: 'Start your day with a 10-minute guided meditation to set positive intentions',
          icon: <Brain className="h-6 w-6" />,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Stress Relief Techniques',
          description: 'Practice deep breathing exercises when feeling overwhelmed',
          icon: <Heart className="h-6 w-6" />,
          color: 'from-pink-500 to-rose-500'
        },
        {
          title: 'Gratitude Journaling',
          description: 'Write down 3 things you\'re grateful for each evening',
          icon: <BookOpen className="h-6 w-6" />,
          color: 'from-purple-500 to-indigo-500'
        },
        {
          title: 'Progress Tracking',
          description: 'Monitor your mood and energy levels to identify patterns',
          icon: <TrendingUp className="h-6 w-6" />,
          color: 'from-green-500 to-emerald-500'
        }
      ],
      
      motivationalQuote: getMotivationalQuote(),
      nextMilestone: 'Complete 7 days of consistent practice',
      
      // AI-Generated Personalized Roadmap
      roadmap: [
        { 
          week: 1, 
          phase: 'Foundation Building',
          focus: 'Establish daily meditation routine',
          tasks: ['10min morning meditation', 'Evening gratitude journaling', 'Track mood daily'],
          status: 'current'
        },
        { 
          week: 2, 
          phase: 'Habit Formation',
          focus: 'Increase mindfulness awareness',
          tasks: ['15min meditation', 'Breathing exercises 2x daily', 'Weekly reflection'],
          status: 'upcoming'
        },
        { 
          week: 3, 
          phase: 'Skill Development',
          focus: 'Learn advanced techniques',
          tasks: ['Body scan meditation', 'Mindful walking', 'Stress management'],
          status: 'upcoming'
        },
        { 
          week: 4, 
          phase: 'Integration',
          focus: 'Apply mindfulness to daily life',
          tasks: ['Mindful eating', 'Work breaks', 'Evening wind-down routine'],
          status: 'upcoming'
        }
      ],
      
      // Daily Schedule AI Recommendations
      dailySchedule: [
        { time: '6:00 AM', activity: 'Morning Meditation', duration: '10 min', icon: <Sun className="h-5 w-5" /> },
        { time: '12:00 PM', activity: 'Midday Breathing', duration: '5 min', icon: <Wind className="h-5 w-5" /> },
        { time: '6:00 PM', activity: 'Evening Reflection', duration: '10 min', icon: <BookOpen className="h-5 w-5" /> },
        { time: '9:00 PM', activity: 'Sleep Meditation', duration: '15 min', icon: <Moon className="h-5 w-5" /> }
      ],
      
      // Wellness Score Breakdown
      wellnessMetrics: {
        mental: 65,
        emotional: 70,
        physical: 60,
        social: 55
      }
    }
    
    setAiInsights(insights)
  }

  const getStressLevel = (state) => {
    if (state?.includes('Very stressed')) return 'High'
    if (state?.includes('Moderately')) return 'Moderate'
    if (state?.includes('Balanced')) return 'Low'
    return 'Moderate'
  }

  const getMotivationalQuote = () => {
    const quotes = [
      "Every journey begins with a single step. You've taken yours today.",
      "Progress, not perfection. You're exactly where you need to be.",
      "Your mental wellness is a priority, not a luxury.",
      "Small daily improvements lead to stunning results over time."
    ]
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  if (!aiInsights) return null

  return (
    <>
    <section 
      id="dashboard" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </button>
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-500/20 backdrop-blur-xl rounded-full border border-red-400/30 text-red-300 hover:bg-red-500/30 transition-all"
          >
            <Trash2 className="h-5 w-5" />
            Delete Account
          </button>
        </div>

        {/* Welcome Header - Compact */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Sparkles className="h-10 w-10 text-pink-500" />
            Welcome, {userData.name}!
          </h1>
          <p className="text-lg text-white/70">
            Your personalized wellness dashboard
          </p>
        </div>

        {/* AI Insights Banner - Compact */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-pink-500/50 p-5 mb-6 bg-gradient-to-r from-pink-500/20 to-purple-600/20">
          <div className="flex items-start gap-3">
            <Sparkles className="h-7 w-7 text-pink-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">AI Wellness Insight</h3>
              <p className="text-white/90 text-sm italic">"{aiInsights.motivationalQuote}"</p>
            </div>
          </div>
        </div>

        {/* Stats Overview - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 text-center hover:-translate-y-1 transition-all duration-300">
            <Activity className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-0.5">0</h3>
            <p className="text-white/70 text-sm">Days Active</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 text-center hover:-translate-y-1 transition-all duration-300">
            <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-0.5">4</h3>
            <p className="text-white/70 text-sm">Weekly Goals</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 text-center hover:-translate-y-1 transition-all duration-300">
            <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-0.5">0</h3>
            <p className="text-white/70 text-sm">Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 text-center hover:-translate-y-1 transition-all duration-300">
            <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-0.5">0</h3>
            <p className="text-white/70 text-sm">Streak</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Weekly Goals */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Target className="h-8 w-8 text-pink-500" />
                  Your Weekly Goals
                </h2>
                <span className="text-white/70">0/4 Completed</span>
              </div>
              <div className="space-y-4">
                {aiInsights.weeklyGoals.map((goal) => (
                  <div key={goal.id} className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-medium">{goal.goal}</span>
                      <CheckCircle className={`h-6 w-6 ${goal.completed ? 'text-green-400' : 'text-white/30'}`} />
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-purple-500" />
                AI-Powered Recommendations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {aiInsights.recommendations.map((rec, index) => (
                  <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all group">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${rec.color} mb-4`}>
                      <div className="text-white">{rec.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                      {rec.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* User Profile - Detailed */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="h-5 w-5 text-pink-500" />
                  Profile
                </h3>
                <button className="text-pink-400 hover:text-pink-300 transition-colors">
                  <Edit3 className="h-4 w-4" />
                </button>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{userData.name?.charAt(0)}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 text-center">{userData.name}</h4>
              
              {/* Profile Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Mail className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/80 truncate">{userData.email}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/80">{userData.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <MapPin className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/80">{userData.location}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Calendar className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/80">Age: {userData.age}</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30">
                <p className="text-white/70 text-xs font-semibold mb-1">PRIMARY GOAL</p>
                <p className="text-pink-400 font-medium text-sm">{aiInsights.mainGoal}</p>
              </div>
            </div>

            {/* Stress Level */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-pink-500" />
                Stress Level
              </h3>
              <div className="text-center">
                <div className={`text-5xl font-bold mb-2 ${
                  aiInsights.stressLevel === 'High' ? 'text-red-400' :
                  aiInsights.stressLevel === 'Moderate' ? 'text-yellow-400' :
                  'text-green-400'
                }`}>
                  {aiInsights.stressLevel}
                </div>
                <p className="text-white/70">Based on your assessment</p>
              </div>
            </div>

            {/* Next Session */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-400" />
                Recommended Session
              </h3>
              <p className="text-white/80 mb-8 text-lg">Duration: {aiInsights.recommendedDuration}</p>
              <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-xl transition-all">
                Start Now
              </button>
            </div>
          </div>

          {/* AI Roadmap Section - Horizontal Layout */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="h-6 w-6 text-yellow-400" />
              Your AI-Generated Roadmap
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {aiInsights.roadmap.map((week, index) => (
                <div 
                  key={week.week}
                  className={`p-6 rounded-xl transition-all ${
                    week.status === 'current' 
                      ? 'bg-gradient-to-b from-pink-500/20 to-purple-600/20 border-2 border-purple-400' 
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm font-medium">Week {week.week}</span>
                      {week.status === 'current' && (
                        <span className="px-2.5 py-1 bg-purple-500 text-white text-xs rounded-full">Now</span>
                      )}
                    </div>
                    <LineChart className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-3">{week.phase}</h4>
                  <p className="text-white/70 text-sm mb-3 leading-relaxed">{week.focus}</p>
                  <div className="space-y-2">
                    {week.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-400" />
              Today's Personalized Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {aiInsights.dailySchedule.map((slot, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
                      {slot.icon}
                    </div>
                    <span className="px-3 py-1 bg-purple-500/30 text-white text-xs rounded-full flex-shrink-0">
                      {slot.duration}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-white/60 text-sm mb-1">{slot.time}</div>
                    <h4 className="text-white font-semibold text-base">{slot.activity}</h4>
                  </div>
                  <button className="w-full py-2.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all">
                    Start Session
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Wellness Metrics Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <LineChart className="h-6 w-6 text-green-400" />
              Wellness Metrics Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 flex items-center gap-2 text-base">
                      <Wind className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="truncate">Mental Wellness</span>
                    </span>
                    <span className="text-white font-bold text-base ml-2 flex-shrink-0">{aiInsights.wellnessMetrics.mental}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                      style={{width: `${aiInsights.wellnessMetrics.mental}%`}}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 flex items-center gap-2 text-base">
                      <Heart className="h-5 w-5 text-pink-400 flex-shrink-0" />
                      <span className="truncate">Emotional Balance</span>
                    </span>
                    <span className="text-white font-bold text-base ml-2 flex-shrink-0">{aiInsights.wellnessMetrics.emotional}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all"
                      style={{width: `${aiInsights.wellnessMetrics.emotional}%`}}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 flex items-center gap-2 text-base">
                      <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                      <span className="truncate">Physical Vitality</span>
                    </span>
                    <span className="text-white font-bold text-base ml-2 flex-shrink-0">{aiInsights.wellnessMetrics.physical}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all"
                      style={{width: `${aiInsights.wellnessMetrics.physical}%`}}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 flex items-center gap-2 text-base">
                      <Coffee className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="truncate">Social Connection</span>
                    </span>
                    <span className="text-white font-bold text-base ml-2 flex-shrink-0">{aiInsights.wellnessMetrics.social}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all"
                      style={{width: `${aiInsights.wellnessMetrics.social}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/30">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-white font-semibold text-base mb-2">AI Insight</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Your social connection score shows room for improvement. Consider joining our community meditation sessions or group wellness activities to boost this area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Habit & Progress Tracker Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-pink-400" />
              Habit & Progress Tracker
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {/* Meditation Minutes */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <Brain className="h-6 w-6 text-purple-400" />
                  <span className="text-3xl font-bold text-white">147</span>
                </div>
                <h4 className="text-white/80 text-base mb-1">Meditation Minutes</h4>
                <p className="text-white/60 text-sm">This week</p>
              </div>

              {/* Journal Entries */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                  <span className="text-3xl font-bold text-white">12</span>
                </div>
                <h4 className="text-white/80 text-base mb-1">Journal Entries</h4>
                <p className="text-white/60 text-sm">This month</p>
              </div>

              {/* Breathing Sessions */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <Wind className="h-6 w-6 text-cyan-400" />
                  <span className="text-3xl font-bold text-white">23</span>
                </div>
                <h4 className="text-white/80 text-base mb-1">Breathing Sessions</h4>
                <p className="text-white/60 text-sm">This week</p>
              </div>

              {/* Current Streak */}
              <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-xl border border-orange-400/30 p-6">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2.5 bg-orange-500/30 rounded-lg flex-shrink-0">
                    <Flame className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-bold text-base mb-1">7 Day Streak! 🎉</h4>
                    <p className="text-white/70 text-sm">Keep it up!</p>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <div className="text-3xl font-bold text-white">7</div>
                  <div className="text-white/60 text-sm">Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Delete Account Confirmation Modal */}
    {showDeleteModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-red-400/30 p-8 max-w-md w-full">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-500/20 mb-4">
              <AlertCircle className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Delete Account?</h3>
            <p className="text-white/80 mb-6">
              This will permanently delete all your data including your wellness journey, goals, and progress. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 px-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-bold"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default UserDashboard
