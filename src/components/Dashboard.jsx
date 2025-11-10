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
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Empty State Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-purple-600" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Your Dashboard
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              To personalize your ManasNova experience and unlock your dashboard, please complete your journey setup first.
            </p>

            {/* Benefits List */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Personalized Insights</h3>
                <p className="text-sm text-gray-600">AI-powered recommendations based on your goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Track Progress</h3>
                <p className="text-sm text-gray-600">Monitor your goals and celebrate achievements</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Custom Journey</h3>
                <p className="text-sm text-gray-600">Tailored meditation and wellness plans</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onStartOnboarding}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
                >
                  Back to Home
                </button>
              )}
            </div>

            {/* Info Note */}
            <div className="mt-8 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <p className="text-sm text-purple-800">
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className="rounded-2xl shadow-sm border border-purple-200/40 p-6 mb-6 backdrop-blur-md relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{userData.userData.name}</h1>
                <p className="text-gray-600">{userData.userData.email}</p>
                <p className="text-sm text-purple-600 mt-1">Category: {userData.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDeleteModal(true)}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                title="Delete all data and start fresh"
              >
                <Trash2 className="w-4 h-4" />
                Reset Data
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div 
            className="rounded-xl shadow-sm border border-purple-200/30 p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Goals</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 relative z-10">{goals.length}</p>
            <p className="text-sm text-gray-600 mt-1 relative z-10">Total goals set</p>
          </div>

          <div 
            className="rounded-xl shadow-sm border border-green-200/30 p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Completed</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 relative z-10">{goals.filter(g => g.completed).length}</p>
            <p className="text-sm text-gray-600 mt-1 relative z-10">Goals achieved</p>
          </div>

          <div 
            className="rounded-xl shadow-sm border border-blue-200/30 p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Progress</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 relative z-10">{completionPercentage}%</p>
            <p className="text-sm text-gray-600 mt-1 relative z-10">Assessment completed</p>
          </div>

          <div 
            className="rounded-xl shadow-sm border border-amber-200/30 p-6 backdrop-blur-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Streak</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 relative z-10">1</p>
            <p className="text-sm text-gray-600 mt-1 relative z-10">Days active</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div 
              className="rounded-2xl shadow-sm border border-purple-200/40 p-6 backdrop-blur-md relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1602524206684-e7e9f7c3e4b3?q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                <User className="w-5 h-5 text-purple-600" />
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-semibold text-gray-900">{userData.userData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{userData.userData.email}</p>
                </div>
                {userData.userData.age && (
                  <div>
                    <p className="text-sm text-gray-600">Age</p>
                    <p className="font-semibold text-gray-900">{userData.userData.age}</p>
                  </div>
                )}
                {userData.userData.phone && (
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">{userData.userData.phone}</p>
                  </div>
                )}
                <div className="col-span-2">
                  <p className="text-sm text-gray-600">Main Goal</p>
                  <p className="font-semibold text-gray-900">{userData.userData.goal}</p>
                </div>
              </div>
            </div>

            {/* Assessment Responses */}
            <div 
              className="rounded-2xl shadow-sm border border-blue-200/40 p-6 backdrop-blur-md relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                <Brain className="w-5 h-5 text-purple-600" />
                Your Assessment - {userData.category}
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto relative z-10">
                {userData.answers && Object.entries(userData.answers).map(([key, value]) => (
                  <div key={key} className="pb-4 border-b border-gray-100 last:border-0">
                    <p className="text-sm font-medium text-gray-700 mb-2">Question {key.replace(/[a-z]/g, '')}</p>
                    <p className="text-gray-900">{value || 'No response'}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals Tracker */}
            <div 
              className="rounded-2xl shadow-sm border border-green-200/40 p-6 backdrop-blur-md relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                <Target className="w-5 h-5 text-purple-600" />
                Goals & Progress
              </h2>
              
              {/* Add Goal */}
              <div className="flex gap-2 mb-4 relative z-10">
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                  placeholder="Add a new goal..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none bg-white/80"
                />
                <button
                  onClick={addGoal}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-md transition-all duration-200 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add
                </button>
              </div>

              {/* Goals List */}
              <div className="space-y-2 relative z-10">
                {goals.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No goals yet. Add your first goal above!</p>
                ) : (
                  goals.map((goal) => (
                    <div
                      key={goal.id}
                      className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={goal.completed}
                        onChange={() => toggleGoal(goal.id)}
                        className="w-5 h-5 text-purple-600 rounded"
                      />
                      <span className={`flex-1 ${goal.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {goal.text}
                      </span>
                      {goal.completed && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Insights */}
          <div className="space-y-6">
            {/* Next Steps */}
            <div 
              className="rounded-2xl shadow-sm border border-indigo-200/40 p-6 backdrop-blur-md relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Recommended Actions</h2>
              <div className="space-y-3 relative z-10">
                <button className="w-full text-left p-4 bg-purple-50/80 backdrop-blur-sm rounded-xl hover:bg-purple-100/90 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Start Meditation</h3>
                  </div>
                  <p className="text-sm text-gray-600">Begin your first 10-minute session</p>
                </button>

                <button className="w-full text-left p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl hover:bg-blue-100/90 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Set Schedule</h3>
                  </div>
                  <p className="text-sm text-gray-600">Plan your weekly routine</p>
                </button>

                <button className="w-full text-left p-4 bg-green-50/80 backdrop-blur-sm rounded-xl hover:bg-green-100/90 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Track Progress</h3>
                  </div>
                  <p className="text-sm text-gray-600">View your growth analytics</p>
                </button>
              </div>
            </div>

            {/* Insights */}
            <div 
              className="rounded-2xl shadow-lg p-6 text-white relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.85), rgba(59, 130, 246, 0.9)), url('https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-xl font-bold mb-4 relative z-10">Today's Insight</h2>
              <p className="text-purple-100 mb-4 relative z-10">
                "The journey of a thousand miles begins with a single step. You've taken yours by joining ManasNova."
              </p>
              <p className="text-sm text-purple-200 relative z-10">- Lao Tzu</p>
            </div>

            {/* Activity Summary */}
            <div 
              className="rounded-2xl shadow-sm border border-pink-200/40 p-6 backdrop-blur-md relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.93)), url('https://images.unsplash.com/photo-1604480133435-25b1f5e5e930?q=80&w=800')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Recent Activity</h2>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Completed onboarding</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Selected {userData.category}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Profile created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Delete All Data?</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete all your data? This will remove:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                Your personal information
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                All questionnaire responses
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                All goals and progress
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                Your dashboard history
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
              <p className="text-sm text-amber-800">
                <strong>Warning:</strong> This action cannot be undone. You'll need to complete the onboarding process again to create a new profile.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAllData}
                className="flex-1 px-4 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
