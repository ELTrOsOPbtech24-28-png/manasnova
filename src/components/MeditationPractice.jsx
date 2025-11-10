import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, CheckCircle, Brain, Heart, Trophy, ArrowLeft, Volume2, VolumeX } from 'lucide-react'

const MeditationPractice = ({ meditation, onBack }) => {
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [phase, setPhase] = useState('intro') // intro, practice, quiz, complete
  const [currentStep, setCurrentStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [breathCount, setBreathCount] = useState(0)

  // Convert duration to seconds
  const getDurationInSeconds = () => {
    const match = meditation.duration.match(/(\d+)/)
    return match ? parseInt(match[0]) * 60 : 600
  }

  useEffect(() => {
    setTimeLeft(getDurationInSeconds())
  }, [meditation])

  useEffect(() => {
    let interval = null
    if (isActive && timeLeft > 0 && phase === 'practice') {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsActive(false)
            setPhase('quiz')
            return 0
          }
          return time - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, timeLeft, phase])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const startPractice = () => {
    setPhase('practice')
    setIsActive(true)
  }

  const pausePractice = () => setIsActive(!isActive)

  const resetPractice = () => {
    setIsActive(false)
    setTimeLeft(getDurationInSeconds())
    setCurrentStep(0)
    setBreathCount(0)
  }

  const nextStep = () => {
    if (currentStep < meditation.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Quiz questions based on meditation type
  const quizQuestions = [
    {
      question: `What is the primary focus of ${meditation.name}?`,
      options: [
        'Breath awareness',
        'Body sensations',
        'Loving thoughts',
        'Visual imagery'
      ],
      correct: meditation.name.includes('Mindfulness') ? 0 : 
               meditation.name.includes('Body') ? 1 :
               meditation.name.includes('Loving') ? 2 : 3
    },
    {
      question: 'How often should you practice meditation for best results?',
      options: ['Once a week', 'Daily', 'Once a month', 'Only when stressed'],
      correct: 1
    },
    {
      question: `What is a key benefit of ${meditation.name}?`,
      options: meditation.benefits.slice(0, 4).map(b => b),
      correct: 0
    },
    {
      question: 'What should you do when your mind wanders during meditation?',
      options: [
        'Get frustrated and stop',
        'Gently return focus without judgment',
        'Keep thinking about it',
        'Force your mind to be blank'
      ],
      correct: 1
    },
    {
      question: `What is the recommended duration for ${meditation.name}?`,
      options: ['5 minutes', meditation.duration, '2 hours', '30 seconds'],
      correct: 1
    }
  ]

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    const newAnswers = { ...quizAnswers, [questionIndex]: answerIndex }
    setQuizAnswers(newAnswers)
    
    if (Object.keys(newAnswers).length === quizQuestions.length) {
      // Calculate score
      let correctCount = 0
      quizQuestions.forEach((q, i) => {
        if (newAnswers[i] === q.correct) correctCount++
      })
      setScore(correctCount)
      setTimeout(() => setPhase('complete'), 500)
    }
  }

  const breathingExercise = () => {
    setBreathCount(prev => prev + 1)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 z-50 overflow-y-auto">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 hover:bg-gray-700/80 text-white rounded-xl transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 bg-gray-800/60 hover:bg-gray-700/80 text-white rounded-lg transition-all"
              >
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Intro Phase */}
          {phase === 'intro' && (
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-6xl mb-4"
                  style={{ 
                    background: `radial-gradient(circle, ${meditation.color}40, ${meditation.color}20)`, 
                    border: `3px solid ${meditation.color}60`, 
                    boxShadow: `0 0 40px ${meditation.color}50` 
                  }}>
                  {meditation.emoji}
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">{meditation.name}</h1>
                <p className="text-xl text-purple-300 mb-4">{meditation.description}</p>
                
                <div className="flex justify-center gap-4 mb-6">
                  <div className="px-4 py-2 bg-purple-600/30 rounded-xl border border-purple-400/30">
                    <span className="text-sm text-purple-200">Duration: {meditation.duration}</span>
                  </div>
                  <div className="px-4 py-2 bg-blue-600/30 rounded-xl border border-blue-400/30">
                    <span className="text-sm text-blue-200">Level: {meditation.difficulty}</span>
                  </div>
                  <div className="px-4 py-2 bg-pink-600/30 rounded-xl border border-pink-400/30">
                    <span className="text-sm text-pink-200">Best Time: {meditation.bestTime}</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  ✨ Benefits You'll Experience
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {meditation.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 bg-green-900/20 p-4 rounded-xl border border-green-400/20">
                      <CheckCircle className="h-6 w-6 text-green-400 shrink-0" />
                      <span className="text-purple-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Preview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📋 Practice Steps
                </h3>
                <div className="space-y-2">
                  {meditation.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-800/40 p-4 rounded-xl border border-purple-400/20">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-purple-100 pt-1">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={startPractice}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
              >
                <Play className="h-6 w-6" />
                Begin Meditation Practice
              </button>
            </div>
          )}

          {/* Practice Phase */}
          {phase === 'practice' && (
            <div className="space-y-6">
              {/* Timer Circle */}
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <svg className="w-64 h-64 transform -rotate-90">
                      <circle
                        cx="128"
                        cy="128"
                        r="120"
                        stroke="rgba(139, 92, 246, 0.2)"
                        strokeWidth="16"
                        fill="none"
                      />
                      <circle
                        cx="128"
                        cy="128"
                        r="120"
                        stroke="url(#gradient)"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 120}`}
                        strokeDashoffset={`${2 * Math.PI * 120 * (1 - timeLeft / getDurationInSeconds())}`}
                        className="transition-all duration-1000"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-6xl font-bold text-white">{formatTime(timeLeft)}</span>
                      <span className="text-purple-300 mt-2">remaining</span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={pausePractice}
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                  >
                    {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    {isActive ? 'Pause' : 'Resume'}
                  </button>
                  <button
                    onClick={resetPractice}
                    className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Reset
                  </button>
                </div>

                {/* Breathing Guide */}
                {meditation.name.includes('Mindfulness') || meditation.name.includes('Breath') && (
                  <div className="text-center">
                    <button
                      onClick={breathingExercise}
                      className="px-6 py-3 bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 rounded-xl border border-blue-400/30 transition-all"
                    >
                      🫁 Count Breath: {breathCount}
                    </button>
                  </div>
                )}
              </div>

              {/* Current Step Guide */}
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Current Step</h3>
                  <span className="text-purple-300">Step {currentStep + 1} of {meditation.steps.length}</span>
                </div>

                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-6 rounded-2xl border border-purple-400/30 mb-6">
                  <p className="text-2xl text-white text-center leading-relaxed">
                    {meditation.steps[currentStep]}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={currentStep === meditation.steps.length - 1}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Phase */}
          {phase === 'quiz' && (
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
              <div className="text-center mb-8">
                <Brain className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">Knowledge Check</h2>
                <p className="text-purple-300">Test your understanding of {meditation.name}</p>
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="bg-gray-800/40 p-6 rounded-2xl border border-purple-400/20">
                    <h4 className="text-lg font-bold text-white mb-4">
                      {qIndex + 1}. {q.question}
                    </h4>
                    <div className="grid gap-3">
                      {q.options.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizAnswer(qIndex, oIndex)}
                          disabled={quizAnswers[qIndex] !== undefined}
                          className={`p-4 rounded-xl text-left transition-all ${
                            quizAnswers[qIndex] === undefined
                              ? 'bg-gray-700/50 hover:bg-purple-600/30 text-purple-100 border border-purple-400/20 hover:border-purple-400'
                              : quizAnswers[qIndex] === oIndex
                                ? oIndex === q.correct
                                  ? 'bg-green-600/30 text-green-100 border-2 border-green-400'
                                  : 'bg-red-600/30 text-red-100 border-2 border-red-400'
                                : oIndex === q.correct
                                  ? 'bg-green-600/20 text-green-100 border border-green-400/30'
                                  : 'bg-gray-700/30 text-gray-400 border border-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Phase */}
          {phase === 'complete' && (
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40 text-center">
              <Trophy className="h-24 w-24 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Practice Complete! 🎉</h2>
              <p className="text-2xl text-purple-300 mb-8">
                You scored {score} out of {quizQuestions.length}
              </p>

              {/* Score Badge */}
              <div className="inline-block px-8 py-4 rounded-2xl mb-8"
                style={{
                  background: score >= 4 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' :
                             score >= 3 ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' :
                             'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                }}>
                <p className="text-white text-xl font-bold">
                  {score >= 4 ? '🏆 Excellent!' : score >= 3 ? '⭐ Good Job!' : '💪 Keep Practicing!'}
                </p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-400/30">
                  <Heart className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{meditation.duration}</p>
                  <p className="text-purple-300">Practiced</p>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-400/30">
                  <Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{breathCount}</p>
                  <p className="text-blue-300">Breaths Counted</p>
                </div>
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-400/30">
                  <Trophy className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{score}/5</p>
                  <p className="text-green-300">Quiz Score</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setPhase('intro')
                    resetPractice()
                    setQuizAnswers({})
                    setScore(0)
                  }}
                  className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-xl transition-all"
                >
                  Practice Again
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white text-lg font-bold rounded-xl transition-all"
                >
                  Back to Library
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MeditationPractice
