import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

const OnboardingQuestions = ({ isOpen, onComplete, userData }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = [
    {
      id: 'wellness_goal',
      question: 'What is your primary wellness goal?',
      type: 'radio',
      options: [
        'Reduce stress and anxiety',
        'Improve focus and productivity',
        'Better sleep quality',
        'Build positive habits',
        'Emotional balance',
        'Personal growth and self-awareness'
      ]
    },
    {
      id: 'current_state',
      question: 'How would you describe your current mental state?',
      type: 'radio',
      options: [
        'Very stressed and overwhelmed',
        'Moderately stressed',
        'Balanced but could improve',
        'Generally calm and positive',
        'Very peaceful and content'
      ]
    },
    {
      id: 'meditation_experience',
      question: 'What is your experience with meditation?',
      type: 'radio',
      options: [
        'Complete beginner',
        'Tried a few times',
        'Practice occasionally',
        'Regular practitioner (weekly)',
        'Daily practitioner'
      ]
    },
    {
      id: 'time_commitment',
      question: 'How much time can you dedicate daily to wellness practices?',
      type: 'radio',
      options: [
        '5-10 minutes',
        '10-20 minutes',
        '20-30 minutes',
        '30-60 minutes',
        '60+ minutes'
      ]
    },
    {
      id: 'challenges',
      question: 'What challenges do you face most often?',
      type: 'checkbox',
      options: [
        'Difficulty focusing',
        'Racing thoughts',
        'Trouble sleeping',
        'Low motivation',
        'Negative thinking patterns',
        'Work-life balance',
        'Anxiety or worry',
        'Feeling overwhelmed'
      ]
    },
    {
      id: 'preferred_activities',
      question: 'Which wellness activities interest you most?',
      type: 'checkbox',
      options: [
        'Guided meditation',
        'Breathing exercises',
        'Journaling',
        'Habit tracking',
        'Mood tracking',
        'Mindfulness exercises',
        'Gratitude practice',
        'Goal setting'
      ]
    },
    {
      id: 'notification_preference',
      question: 'When would you like daily reminders?',
      type: 'radio',
      options: [
        'Morning (6-9 AM)',
        'Midday (12-2 PM)',
        'Evening (6-9 PM)',
        'Night (9-11 PM)',
        'No reminders needed'
      ]
    }
  ]

  const currentQuestion = questions[currentStep]

  const handleAnswer = (value) => {
    if (currentQuestion.type === 'radio') {
      setAnswers({ ...answers, [currentQuestion.id]: value })
    } else {
      // Checkbox handling
      const current = answers[currentQuestion.id] || []
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
      setAnswers({ ...answers, [currentQuestion.id]: updated })
    }
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    onComplete({ ...userData, ...answers })
  }

  const isAnswered = () => {
    const answer = answers[currentQuestion.id]
    if (currentQuestion.type === 'checkbox') {
      return answer && answer.length > 0
    }
    return answer !== undefined && answer !== ''
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-white/70 text-sm">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 animate-fadeIn max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-5 text-center leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-2.5 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = currentQuestion.type === 'radio'
                ? answers[currentQuestion.id] === option
                : (answers[currentQuestion.id] || []).includes(option)

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-3.5 text-left rounded-xl border-2 transition-all duration-300 text-sm ${
                    isSelected
                      ? 'border-pink-500 bg-pink-500/20 text-white shadow-lg'
                      : 'border-white/20 bg-white/5 text-white/80 hover:border-pink-500/50 hover:bg-white/10 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {isSelected && <Check className="h-4 w-4 text-pink-500 flex-shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 py-3 bg-white/10 text-white font-bold rounded-xl uppercase tracking-wider hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
            )}

            {currentStep < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isAnswered()}
                className={`flex-1 py-3 font-bold rounded-xl uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                  isAnswered()
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-2xl hover:scale-[1.02]'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isAnswered()}
                className={`flex-1 py-3 font-bold rounded-xl uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                  isAnswered()
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-2xl hover:scale-[1.02]'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                Complete Setup
                <Check className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingQuestions
