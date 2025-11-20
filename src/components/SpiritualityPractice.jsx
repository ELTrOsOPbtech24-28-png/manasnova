import { useState } from 'react'
import { ArrowLeft, Book, Heart, Brain, Trophy, CheckCircle, Sparkles, Target } from 'lucide-react'

const SpiritualityPractice = ({ discipline, onBack }) => {
  const [phase, setPhase] = useState('learn') // learn, explore, quiz, complete
  const [currentPractice, setCurrentPractice] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [completedPractices, setCompletedPractices] = useState([])

  // Generate quiz based on discipline
  const generateQuiz = () => {
    const commonQuestions = [
      {
        question: `What is the origin of ${discipline.name}?`,
        options: [discipline.origin, 'Modern America', 'Ancient Egypt', 'Medieval Spain'],
        correct: 0
      },
      {
        question: 'What is the main goal of spiritual practice?',
        options: [
          'Material wealth',
          'Inner peace and enlightenment',
          'Physical strength',
          'Social status'
        ],
        correct: 1
      },
      {
        question: `Which practice is part of ${discipline.name}?`,
        options: discipline.practices.concat(['Running', 'Swimming', 'Coding']).slice(0, 4),
        correct: 0
      },
      {
        question: 'How often should spiritual practices be done?',
        options: ['Never', 'Once a year', 'Regularly and consistently', 'Only on holidays'],
        correct: 2
      },
      {
        question: `Approximately how many followers does ${discipline.name} have?`,
        options: [discipline.followers, '100 people', '1 billion', '50 million'],
        correct: 0
      },
      {
        question: 'What is essential for spiritual growth?',
        options: [
          'Expensive equipment',
          'Dedication and regular practice',
          'Special clothing',
          'Traveling to specific places'
        ],
        correct: 1
      }
    ]
    return commonQuestions
  }

  const quizQuestions = generateQuiz()

  const handlePracticeComplete = (index) => {
    if (!completedPractices.includes(index)) {
      setCompletedPractices([...completedPractices, index])
    }
  }

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    const newAnswers = { ...quizAnswers, [questionIndex]: answerIndex }
    setQuizAnswers(newAnswers)
    
    if (Object.keys(newAnswers).length === quizQuestions.length) {
      let correctCount = 0
      quizQuestions.forEach((q, i) => {
        if (newAnswers[i] === q.correct) correctCount++
      })
      setScore(correctCount)
      setTimeout(() => setPhase('complete'), 500)
    }
  }

  // Detailed practice descriptions
  const practiceDetails = discipline.practices.map((practice, i) => ({
    name: practice,
    description: `${practice} is a core practice in ${discipline.name} that helps develop spiritual awareness and connection.`,
    steps: [
      `Find a quiet, comfortable space for ${practice.toLowerCase()}`,
      'Set your intention and dedicate time for practice',
      'Begin with grounding and centering yourself',
      `Focus on the essence of ${practice.toLowerCase()}`,
      'Maintain awareness throughout the practice',
      'Close with gratitude and reflection'
    ],
    duration: '15-30 minutes',
    benefits: [
      'Deepens spiritual connection',
      'Enhances mindfulness',
      'Promotes inner peace',
      'Develops discipline'
    ]
  }))

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 z-50 overflow-y-auto">
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-2xl transition-all border border-white/20 shadow-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Library
            </button>
            
            <div className="flex items-center gap-4">
              {['learn', 'explore', 'quiz'].map((p, i) => (
                <div key={p} className="flex items-center">
                  {i > 0 && <div className="w-12 h-1 bg-purple-400/30 mr-4" />}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all shadow-lg ${
                    phase === p ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-purple-500/50' :
                    ['learn', 'explore', 'quiz'].indexOf(phase) > i ? 'bg-green-600 text-white' :
                    'bg-white/10 text-gray-400 backdrop-blur-xl border border-white/20'
                  }`}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learn Phase */}
          {phase === 'learn' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Info Card */}
              <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ 
                      background: `radial-gradient(circle, ${discipline.color}40, ${discipline.color}20)`, 
                      border: `3px solid ${discipline.color}60`, 
                      boxShadow: `0 0 40px ${discipline.color}50` 
                    }}>
                    <discipline.icon className="h-12 w-12" style={{ color: discipline.color }} />
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-3">{discipline.name}</h1>
                  <p className="text-xl text-purple-300 mb-6">{discipline.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/30 rounded-xl border border-purple-400/30">
                    <Sparkles className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-200 font-semibold">Origin: {discipline.origin}</span>
                  </div>
                </div>

                {/* Historical Background */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Book className="h-6 w-6 text-purple-400" />
                    Historical Background
                  </h3>
                  <p className="text-purple-100 leading-relaxed mb-4">
                    {discipline.name} has a rich history dating back to {discipline.origin}. This spiritual tradition has 
                    influenced countless practitioners worldwide, with approximately {discipline.followers} followers today.
                  </p>
                  <p className="text-purple-100 leading-relaxed">
                    The core philosophy emphasizes {discipline.description.toLowerCase()}, guiding practitioners toward 
                    deeper understanding and spiritual fulfillment.
                  </p>
                </div>

                <button
                  onClick={() => setPhase('explore')}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
                >
                  <Target className="h-6 w-6" />
                  Explore Practices
                </button>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Global Community Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 text-center">
                  <p className="text-amber-400 font-bold text-lg mb-3">Global Community</p>
                  <p className="text-4xl font-bold text-white mb-3">{discipline.followers}</p>
                  <p className="text-amber-200">practitioners worldwide</p>
                </div>

                {/* Core Teachings Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                    <Heart className="h-6 w-6 text-pink-400" />
                    Core Values
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-pink-900/30 p-4 rounded-xl border border-pink-400/20">
                      <h4 className="font-bold text-pink-200 mb-1 text-sm">🙏 Compassion</h4>
                      <p className="text-purple-100 text-xs">Loving-kindness toward all beings</p>
                    </div>
                    <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-400/20">
                      <h4 className="font-bold text-blue-200 mb-1 text-sm">🧘 Mindfulness</h4>
                      <p className="text-purple-100 text-xs">Present moment awareness</p>
                    </div>
                    <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-400/20">
                      <h4 className="font-bold text-purple-200 mb-1 text-sm">✨ Wisdom</h4>
                      <p className="text-purple-100 text-xs">Understanding reality and existence</p>
                    </div>
                    <div className="bg-green-900/30 p-4 rounded-xl border border-green-400/20">
                      <h4 className="font-bold text-green-200 mb-1 text-sm">🌿 Harmony</h4>
                      <p className="text-purple-100 text-xs">Balance with nature and universe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Explore Phase */}
          {phase === 'explore' && (
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Core Practices of {discipline.name}
                </h2>
                <p className="text-purple-300 mb-2">
                  Complete each practice to unlock the knowledge quiz
                </p>
              </div>

              {practiceDetails.map((practice, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border p-6 transition-all ${
                    completedPractices.includes(index)
                      ? 'border-green-400/50 bg-green-500/10'
                      : 'border-white/20 hover:border-purple-400/60'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{practice.name}</h3>
                    {completedPractices.includes(index) && (
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    )}
                  </div>

                  <p className="text-purple-200 text-sm mb-4 leading-relaxed">{practice.description}</p>

                  <div className="mb-5">
                    <p className="text-xs text-purple-400 mb-3 font-semibold">Duration: {practice.duration}</p>
                    <div className="space-y-2">
                      {practice.steps.slice(0, 4).map((step, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-purple-100">
                          <span className="text-purple-400 font-bold">•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handlePracticeComplete(index)}
                    disabled={completedPractices.includes(index)}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                      completedPractices.includes(index)
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white'
                    }`}
                  >
                    {completedPractices.includes(index) ? '✓ Completed' : 'Mark as Practiced'}
                  </button>
                </div>
              ))}

              {completedPractices.length >= 2 && (
                <div className="lg:col-span-4">
                  <button
                    onClick={() => setPhase('quiz')}
                    className="w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
                  >
                    <Brain className="h-6 w-6" />
                    Take Knowledge Quiz
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Quiz Phase */}
          {phase === 'quiz' && (
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 text-center">
                <Brain className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">Spiritual Knowledge Quiz</h2>
                <p className="text-purple-300">Test your understanding of {discipline.name}</p>
              </div>

              {quizQuestions.map((q, qIndex) => (
                <div key={qIndex} className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6">
                  <h4 className="text-lg font-bold text-white mb-5">
                    {qIndex + 1}. {q.question}
                  </h4>
                  <div className="space-y-3">
                    {q.options.map((option, oIndex) => (
                      <button
                        key={oIndex}
                        onClick={() => handleQuizAnswer(qIndex, oIndex)}
                        disabled={quizAnswers[qIndex] !== undefined}
                        className={`w-full p-4 rounded-xl text-left transition-all text-sm ${
                          quizAnswers[qIndex] === undefined
                            ? 'bg-white/5 hover:bg-purple-600/30 text-purple-100 border border-purple-400/20 hover:border-purple-400'
                            : quizAnswers[qIndex] === oIndex
                              ? oIndex === q.correct
                                ? 'bg-green-600/30 text-green-100 border-2 border-green-400'
                                : 'bg-red-600/30 text-red-100 border-2 border-red-400'
                              : oIndex === q.correct
                                ? 'bg-green-600/20 text-green-100 border border-green-400/30'
                                : 'bg-white/5 text-gray-400 border border-gray-600/30'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Complete Phase */}
          {phase === 'complete' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Achievement Card */}
              <div className="lg:col-span-3 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 text-center">
                <Trophy className="h-24 w-24 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4">Journey Complete! 🎉</h2>
                <p className="text-2xl text-purple-300 mb-6">
                  You scored {score} out of {quizQuestions.length}
                </p>

                <div className="inline-block px-8 py-4 rounded-2xl"
                  style={{
                    background: score >= 5 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' :
                               score >= 4 ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' :
                               'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                  }}>
                  <p className="text-white text-xl font-bold">
                    {score >= 5 ? '🏆 Spiritual Master!' : score >= 4 ? '⭐ Great Understanding!' : '💪 Keep Learning!'}
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 text-center">
                <Target className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                <p className="text-4xl font-bold text-white mb-2">{completedPractices.length}</p>
                <p className="text-purple-300 font-semibold">Practices Completed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 text-center">
                <Brain className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <p className="text-4xl font-bold text-white mb-2">{score}/6</p>
                <p className="text-blue-300 font-semibold">Quiz Score</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 text-center">
                <Sparkles className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <p className="text-4xl font-bold text-white mb-2">100%</p>
                <p className="text-green-300 font-semibold">Journey Progress</p>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-3 grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setPhase('learn')
                    setQuizAnswers({})
                    setScore(0)
                    setCompletedPractices([])
                  }}
                  className="py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white text-lg font-bold rounded-2xl transition-all"
                >
                  Start Again
                </button>
                <button
                  onClick={onBack}
                  className="py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-lg font-bold rounded-2xl transition-all border border-white/20"
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

export default SpiritualityPractice
