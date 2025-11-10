import { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle, Trophy, Target, TrendingUp, Calendar, Zap, Award, Brain } from 'lucide-react'

const HabitPractice = ({ habit, onBack }) => {
  const [phase, setPhase] = useState('intro') // intro, tracker, challenge, quiz, complete
  const [streak, setStreak] = useState(0)
  const [completedDays, setCompletedDays] = useState([])
  const [todayChecked, setTodayChecked] = useState(false)
  const [challengeScore, setChallengeScore] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [score, setScore] = useState(0)

  const today = new Date().toDateString()

  useEffect(() => {
    const savedData = localStorage.getItem(`habit_${habit.id}`)
    if (savedData) {
      const data = JSON.parse(savedData)
      setCompletedDays(data.days || [])
      setStreak(data.streak || 0)
      setTodayChecked(data.days?.includes(today) || false)
    }
  }, [habit.id, today])

  const checkHabit = () => {
    if (!todayChecked) {
      const newDays = [...completedDays, today]
      const newStreak = streak + 1
      setCompletedDays(newDays)
      setStreak(newStreak)
      setTodayChecked(true)
      
      localStorage.setItem(`habit_${habit.id}`, JSON.stringify({
        days: newDays,
        streak: newStreak
      }))
    }
  }

  // 21-Day Challenge
  const challenges = [
    { day: 1, task: `Start your ${habit.name} practice`, points: 10 },
    { day: 3, task: 'Complete 3 days in a row', points: 20 },
    { day: 7, task: 'Reach 1 week streak', points: 50 },
    { day: 14, task: 'Complete 2 weeks', points: 75 },
    { day: 21, task: 'Master 21-day challenge', points: 100 }
  ]

  const unlockedChallenges = challenges.filter(c => streak >= c.day)
  const totalPoints = unlockedChallenges.reduce((sum, c) => sum + c.points, 0)

  // Quiz questions
  const quizQuestions = [
    {
      question: `How long does it take to form a habit like ${habit.name}?`,
      options: ['1 day', '21-66 days on average', '1 year', '1 week'],
      correct: 1
    },
    {
      question: `What is the recommended frequency for ${habit.name}?`,
      options: ['Never', habit.frequency, 'Once a year', 'Every hour'],
      correct: 1
    },
    {
      question: 'What helps maintain consistency in habit building?',
      options: [
        'Only motivation',
        'Tracking progress and accountability',
        'Doing it whenever you feel like it',
        'Waiting for perfect conditions'
      ],
      correct: 1
    },
    {
      question: `What is the primary benefit of ${habit.name}?`,
      options: [habit.benefit, 'Making money', 'Impressing others', 'Wasting time'],
      correct: 0
    },
    {
      question: 'What should you do if you miss a day?',
      options: [
        'Give up completely',
        'Get back on track the next day',
        'Wait until next month',
        'Feel guilty and stressed'
      ],
      correct: 1
    },
    {
      question: `What impact level does ${habit.name} have?`,
      options: ['No impact', 'Low impact', habit.impact, 'Negative impact'],
      correct: 2
    }
  ]

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

  // Weekly calendar view
  const getLast7Days = () => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      days.push(date)
    }
    return days
  }

  const isDayCompleted = (date) => {
    return completedDays.includes(date.toDateString())
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
              <div className="px-4 py-2 bg-amber-600/30 rounded-xl border border-amber-400/30">
                <span className="text-amber-200 font-bold">🔥 {streak} Day Streak</span>
              </div>
              <div className="px-4 py-2 bg-purple-600/30 rounded-xl border border-purple-400/30">
                <span className="text-purple-200 font-bold">⭐ {totalPoints} Points</span>
              </div>
            </div>
          </div>

          {/* Intro Phase */}
          {phase === 'intro' && (
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ 
                    background: `radial-gradient(circle, ${habit.color}40, ${habit.color}20)`, 
                    border: `3px solid ${habit.color}60`, 
                    boxShadow: `0 0 40px ${habit.color}50` 
                  }}>
                  <habit.icon className="h-12 w-12" style={{ color: habit.color }} />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">{habit.name}</h1>
                <p className="text-xl text-purple-300 mb-4">{habit.benefit}</p>
                
                <div className="flex justify-center gap-4 mb-6">
                  <div className="px-4 py-2 bg-blue-600/30 rounded-xl border border-blue-400/30">
                    <span className="text-sm text-blue-200">Duration: {habit.duration}</span>
                  </div>
                  <div className="px-4 py-2 bg-green-600/30 rounded-xl border border-green-400/30">
                    <span className="text-sm text-green-200">Frequency: {habit.frequency}</span>
                  </div>
                  <div className={`px-4 py-2 rounded-xl border ${
                    habit.impact === 'Very High' ? 'bg-amber-600/30 border-amber-400/30' :
                    habit.impact === 'High' ? 'bg-purple-600/30 border-purple-400/30' :
                    'bg-blue-600/30 border-blue-400/30'
                  }`}>
                    <span className={`text-sm ${
                      habit.impact === 'Very High' ? 'text-amber-200' :
                      habit.impact === 'High' ? 'text-purple-200' :
                      'text-blue-200'
                    }`}>Impact: {habit.impact}</span>
                  </div>
                </div>
              </div>

              {/* Why This Habit Matters */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  Why {habit.name}?
                </h3>
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-6 rounded-2xl border border-purple-400/30">
                  <p className="text-purple-100 leading-relaxed mb-4">
                    {habit.name} is a powerful habit that can transform your daily life. Research shows that consistent 
                    practice of this habit leads to significant improvements in overall well-being and life satisfaction.
                  </p>
                  <p className="text-purple-100 leading-relaxed">
                    With {habit.impact.toLowerCase()} impact on your wellness journey, this habit is essential for 
                    achieving your personal growth goals.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                  What You'll Gain
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-5 rounded-xl border border-green-400/20">
                    <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
                    <h4 className="font-bold text-green-200 mb-2">Physical Health</h4>
                    <p className="text-purple-100 text-sm">Boost energy levels and vitality</p>
                  </div>
                  <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-400/20">
                    <Brain className="h-6 w-6 text-blue-400 mb-2" />
                    <h4 className="font-bold text-blue-200 mb-2">Mental Clarity</h4>
                    <p className="text-purple-100 text-sm">Sharpen focus and reduce stress</p>
                  </div>
                  <div className="bg-purple-900/20 p-5 rounded-xl border border-purple-400/20">
                    <Target className="h-6 w-6 text-purple-400 mb-2" />
                    <h4 className="font-bold text-purple-200 mb-2">Goal Achievement</h4>
                    <p className="text-purple-100 text-sm">Build discipline and consistency</p>
                  </div>
                  <div className="bg-pink-900/20 p-5 rounded-xl border border-pink-400/20">
                    <TrendingUp className="h-6 w-6 text-pink-400 mb-2" />
                    <h4 className="font-bold text-pink-200 mb-2">Long-term Growth</h4>
                    <p className="text-purple-100 text-sm">Compound positive effects over time</p>
                  </div>
                </div>
              </div>

              {/* 21-Day Challenge Preview */}
              <div className="bg-amber-900/20 p-6 rounded-xl border border-amber-400/30 mb-8">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Award className="h-6 w-6 text-amber-400" />
                  21-Day Mastery Challenge
                </h3>
                <p className="text-amber-100 mb-4">
                  Complete the 21-day challenge to build this habit permanently! Earn points and unlock achievements.
                </p>
                <div className="space-y-2">
                  {challenges.slice(0, 3).map((c, i) => (
                    <div key={i} className="flex items-center justify-between bg-amber-900/20 p-3 rounded-lg">
                      <span className="text-amber-200">Day {c.day}: {c.task}</span>
                      <span className="text-amber-400 font-bold">+{c.points} pts</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setPhase('tracker')}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
              >
                <Calendar className="h-6 w-6" />
                Start Tracking Your Habit
              </button>
            </div>
          )}

          {/* Tracker Phase */}
          {phase === 'tracker' && (
            <div className="space-y-6">
              {/* Today's Check-in */}
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Daily Check-In</h2>
                
                <div className="text-center mb-8">
                  <button
                    onClick={checkHabit}
                    disabled={todayChecked}
                    className={`w-48 h-48 mx-auto rounded-full transition-all ${
                      todayChecked
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 cursor-default scale-100'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-110 cursor-pointer'
                    } flex items-center justify-center flex-col text-white shadow-2xl`}
                  >
                    {todayChecked ? (
                      <>
                        <CheckCircle className="h-20 w-20 mb-3" />
                        <span className="text-2xl font-bold">Done! ✓</span>
                      </>
                    ) : (
                      <>
                        <Target className="h-20 w-20 mb-3" />
                        <span className="text-2xl font-bold">Check In</span>
                      </>
                    )}
                  </button>
                  <p className="text-purple-300 mt-4 text-lg">
                    {todayChecked ? "Great job! Come back tomorrow!" : "Tap to mark today complete"}
                  </p>
                </div>

                {/* Weekly View */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">This Week</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {getLast7Days().map((date, i) => {
                      const completed = isDayCompleted(date)
                      const isToday = date.toDateString() === today
                      return (
                        <div key={i} className="text-center">
                          <div className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                            completed ? 'bg-green-600 text-white' :
                            isToday ? 'bg-purple-600 text-white' :
                            'bg-gray-700 text-gray-400'
                          }`}>
                            <span className="text-xs mb-1">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </span>
                            <span className="text-lg font-bold">{date.getDate()}</span>
                            {completed && <CheckCircle className="h-4 w-4 mt-1" />}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-amber-900/30 p-5 rounded-xl border border-amber-400/30 text-center">
                    <Zap className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-white mb-1">{streak}</p>
                    <p className="text-amber-300">Day Streak</p>
                  </div>
                  <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-400/30 text-center">
                    <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-white mb-1">{completedDays.length}</p>
                    <p className="text-purple-300">Total Days</p>
                  </div>
                  <div className="bg-blue-900/30 p-5 rounded-xl border border-blue-400/30 text-center">
                    <Trophy className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-white mb-1">{totalPoints}</p>
                    <p className="text-blue-300">Points Earned</p>
                  </div>
                </div>

                <button
                  onClick={() => setPhase('challenge')}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3"
                >
                  <Award className="h-6 w-6" />
                  View 21-Day Challenge
                </button>
              </div>
            </div>
          )}

          {/* Challenge Phase */}
          {phase === 'challenge' && (
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">21-Day Mastery Challenge</h2>
              
              <div className="mb-8">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-purple-300 font-semibold">Progress</span>
                    <span className="text-white font-bold">{Math.min(Math.round((streak / 21) * 100), 100)}%</span>
                  </div>
                  <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-700">
                    <div 
                      style={{ width: `${Math.min((streak / 21) * 100, 100)}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {challenges.map((challenge, i) => {
                  const unlocked = streak >= challenge.day
                  return (
                    <div key={i} className={`p-6 rounded-2xl border-2 transition-all ${
                      unlocked 
                        ? 'bg-green-900/20 border-green-400/50' 
                        : 'bg-gray-800/40 border-gray-600/30'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                            unlocked ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'
                          }`}>
                            {unlocked ? '✓' : challenge.day}
                          </div>
                          <div>
                            <h4 className={`font-bold text-lg ${unlocked ? 'text-green-200' : 'text-purple-200'}`}>
                              Day {challenge.day} Challenge
                            </h4>
                            <p className={unlocked ? 'text-green-100' : 'text-purple-300'}>
                              {challenge.task}
                            </p>
                          </div>
                        </div>
                        <div className={`text-right ${unlocked ? 'text-green-400' : 'text-gray-400'}`}>
                          <p className="text-2xl font-bold">+{challenge.points}</p>
                          <p className="text-sm">points</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setPhase('tracker')}
                  className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white text-lg font-bold rounded-xl transition-all"
                >
                  Back to Tracker
                </button>
                <button
                  onClick={() => setPhase('quiz')}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Brain className="h-5 w-5" />
                  Take Quiz
                </button>
              </div>
            </div>
          )}

          {/* Quiz Phase */}
          {phase === 'quiz' && (
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40">
              <div className="text-center mb-8">
                <Brain className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">Habit Knowledge Quiz</h2>
                <p className="text-purple-300">Test your understanding of {habit.name}</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Knowledge Unlocked! 🎉</h2>
              <p className="text-2xl text-purple-300 mb-8">
                Quiz Score: {score} out of {quizQuestions.length}
              </p>

              <div className="inline-block px-8 py-4 rounded-2xl mb-8"
                style={{
                  background: score >= 5 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' :
                             score >= 4 ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' :
                             'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                }}>
                <p className="text-white text-xl font-bold">
                  {score >= 5 ? '🏆 Habit Expert!' : score >= 4 ? '⭐ Well Done!' : '💪 Keep Learning!'}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-amber-900/30 p-6 rounded-xl border border-amber-400/30">
                  <Zap className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{streak}</p>
                  <p className="text-amber-300">Day Streak</p>
                </div>
                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-400/30">
                  <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{completedDays.length}</p>
                  <p className="text-purple-300">Total Days</p>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-400/30">
                  <Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{score}/6</p>
                  <p className="text-blue-300">Quiz Score</p>
                </div>
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-400/30">
                  <Trophy className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">{totalPoints}</p>
                  <p className="text-green-300">Total Points</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setPhase('tracker')}
                  className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-xl transition-all"
                >
                  Continue Tracking
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

export default HabitPractice
