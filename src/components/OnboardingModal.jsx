import { useState } from 'react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

function OnboardingModal({ isOpen, onClose, onComplete }) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    goal: ''
  });
  const [answers, setAnswers] = useState({});

  // Questions for each category
  const questions = {
    'AI Wisdom': [
      { id: 'q1', question: 'What are your main goals for personal growth?', type: 'text' },
      { id: 'q2', question: 'How would you rate your current stress level? (1-10)', type: 'number' },
      { id: 'q3', question: 'What time of day do you feel most productive?', type: 'select', options: ['Morning', 'Afternoon', 'Evening', 'Night'] },
      { id: 'q4', question: 'Do you currently practice any mindfulness techniques?', type: 'radio', options: ['Yes', 'No', 'Sometimes'] },
      { id: 'q5', question: 'What challenges do you face in your daily life?', type: 'textarea' },
      { id: 'q6', question: 'How many hours do you sleep on average?', type: 'number' },
      { id: 'q7', question: 'What motivates you the most?', type: 'text' },
      { id: 'q8', question: 'Do you have any specific phobias or anxieties?', type: 'textarea' },
      { id: 'q9', question: 'How do you handle stressful situations?', type: 'textarea' },
      { id: 'q10', question: 'What are your top 3 life priorities?', type: 'textarea' }
    ],
    'Meditation': [
      { id: 'm1', question: 'Have you practiced meditation before?', type: 'radio', options: ['Never', 'Beginner', 'Intermediate', 'Advanced'] },
      { id: 'm2', question: 'How many minutes per day can you dedicate to meditation?', type: 'number' },
      { id: 'm3', question: 'What type of meditation interests you most?', type: 'select', options: ['Mindfulness', 'Guided', 'Transcendental', 'Loving-kindness', 'Body scan'] },
      { id: 'm4', question: 'What time would you prefer to meditate?', type: 'select', options: ['Early morning', 'Mid-morning', 'Afternoon', 'Evening', 'Before bed'] },
      { id: 'm5', question: 'Do you have a quiet space for meditation?', type: 'radio', options: ['Yes', 'No', 'Sometimes'] },
      { id: 'm6', question: 'What do you hope to achieve through meditation?', type: 'textarea' },
      { id: 'm7', question: 'Do you experience difficulty focusing?', type: 'radio', options: ['Often', 'Sometimes', 'Rarely', 'Never'] },
      { id: 'm8', question: 'Would you prefer music or silence during meditation?', type: 'select', options: ['Silence', 'Nature sounds', 'Soft music', 'Guided voice', 'Any'] },
      { id: 'm9', question: 'How would you rate your current mental clarity? (1-10)', type: 'number' },
      { id: 'm10', question: 'What prevents you from meditating regularly?', type: 'textarea' }
    ],
    'Growth Tracking': [
      { id: 'g1', question: 'What personal goals would you like to track?', type: 'textarea' },
      { id: 'g2', question: 'How often do you review your progress?', type: 'select', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
      { id: 'g3', question: 'What habits would you like to build?', type: 'textarea' },
      { id: 'g4', question: 'What habits would you like to break?', type: 'textarea' },
      { id: 'g5', question: 'Do you keep a journal?', type: 'radio', options: ['Yes, daily', 'Yes, occasionally', 'No, but interested', 'No'] },
      { id: 'g6', question: 'How important is tracking progress to you? (1-10)', type: 'number' },
      { id: 'g7', question: 'What areas of life do you want to improve?', type: 'textarea' },
      { id: 'g8', question: 'Do you set specific, measurable goals?', type: 'radio', options: ['Always', 'Usually', 'Sometimes', 'Rarely'] },
      { id: 'g9', question: 'How do you celebrate your achievements?', type: 'text' },
      { id: 'g10', question: 'What would success look like for you in 6 months?', type: 'textarea' }
    ]
  };

  const handleUserDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate user details
      if (!userData.name || !userData.email || !userData.goal) {
        alert('Please fill in all required fields');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Validate category selection
      if (!category) {
        alert('Please select a category');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Save all data and complete onboarding
      handleComplete();
    }
  };

  const handleComplete = async () => {
    const onboardingData = {
      userData,
      category,
      answers,
      completedAt: new Date().toISOString()
    };

    // Save to localStorage (in production, this would go to MongoDB)
    localStorage.setItem('userOnboarding', JSON.stringify(onboardingData));
    
    // Call parent completion handler
    onComplete(onboardingData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4">
      <div 
        className="rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl backdrop-blur-md relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.97)), url('https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome to ManasNova</h2>
            <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: User Details */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell us about yourself</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Goal *</label>
                <textarea
                  name="goal"
                  value={userData.goal}
                  onChange={handleUserDataChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none"
                  placeholder="What brought you to ManasNova? What do you hope to achieve?"
                />
              </div>
            </div>
          )}

          {/* Step 2: Category Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose your focus area</h3>
              <p className="text-gray-600 mb-6">Select the category you'd like to explore first:</p>
              
              <div className="grid gap-4">
                {[
                  { name: 'AI Wisdom', desc: 'Get personalized guidance powered by AI', bg: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=800' },
                  { name: 'Meditation', desc: 'Practice mindfulness and inner peace', bg: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800' },
                  { name: 'Growth Tracking', desc: 'Track your progress and build habits', bg: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800' }
                ].map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setCategory(cat.name)}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-200 backdrop-blur-sm relative overflow-hidden ${
                      category === cat.name
                        ? 'border-purple-600 shadow-lg shadow-purple-200'
                        : 'border-gray-300 hover:border-purple-400 hover:shadow-md'
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('${cat.bg}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 relative z-10">{cat.name}</h4>
                    <p className="text-sm text-gray-600 relative z-10">{cat.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Questions */}
          {step === 3 && category && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category} - Assessment Questions
              </h3>
              
              {questions[category].map((q, index) => (
                <div key={q.id} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {index + 1}. {q.question}
                  </label>
                  
                  {q.type === 'text' && (
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                  )}
                  
                  {q.type === 'number' && (
                    <input
                      type="number"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                  )}
                  
                  {q.type === 'textarea' && (
                    <textarea
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none"
                    />
                  )}
                  
                  {q.type === 'select' && (
                    <select
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    >
                      <option value="">Select an option</option>
                      {q.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  )}
                  
                  {q.type === 'radio' && (
                    <div className="space-y-2">
                      {q.options.map((opt) => (
                        <label key={opt} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            className="w-4 h-4 text-purple-600"
                          />
                          <span className="text-sm text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            {step === 3 ? 'Complete' : 'Next'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingModal;
