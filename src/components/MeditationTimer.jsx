import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, Timer, Volume2 } from 'lucide-react'

const MeditationTimer = () => {
  const [time, setTime] = useState(300) // 5 minutes default
  const [isActive, setIsActive] = useState(false)
  const [selectedDuration, setSelectedDuration] = useState(300)

  const durations = [
    { label: '3 min', value: 180 },
    { label: '5 min', value: 300 },
    { label: '10 min', value: 600 },
    { label: '15 min', value: 900 },
    { label: '20 min', value: 1200 },
  ]

  useEffect(() => {
    let interval = null
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      // Play completion sound (placeholder)
      alert('Meditation session complete! 🧘‍♀️')
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(selectedDuration)
  }

  const selectDuration = (duration) => {
    setSelectedDuration(duration)
    setTime(duration)
    setIsActive(false)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = ((selectedDuration - time) / selectedDuration) * 100

  return (
    <div className="card-gradient p-8 max-w-md mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <Timer className="h-6 w-6 text-zen-600" />
        <h3 className="text-2xl font-bold text-gray-900">Meditation Timer</h3>
      </div>

      {/* Duration Selection */}
      <div className="flex flex-wrap gap-2 mb-6">
        {durations.map((duration) => (
          <button
            key={duration.value}
            onClick={() => selectDuration(duration.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedDuration === duration.value
                ? 'bg-gradient-to-r from-zen-600 to-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {duration.label}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="relative mb-8">
        {/* Progress Ring */}
        <div className="relative w-64 h-64 mx-auto">
          <svg className="transform -rotate-90 w-64 h-64">
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 120}`}
              strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
              className="transition-all duration-1000 ease-linear"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Time Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-6xl font-bold text-gradient mb-2">
              {formatTime(time)}
            </div>
            <div className="text-sm text-gray-600">
              {isActive ? 'Breathing...' : 'Ready to begin'}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-zen-600 to-primary-600 text-white rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          {isActive ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
        </button>
        <button
          onClick={resetTimer}
          className="w-14 h-14 flex items-center justify-center bg-white text-gray-700 border-2 border-gray-300 rounded-full hover:border-zen-600 hover:text-zen-600 transition-all"
        >
          <RotateCcw className="h-6 w-6" />
        </button>
        <button className="w-14 h-14 flex items-center justify-center bg-white text-gray-700 border-2 border-gray-300 rounded-full hover:border-zen-600 hover:text-zen-600 transition-all">
          <Volume2 className="h-6 w-6" />
        </button>
      </div>

      {/* Breathing Guide */}
      {isActive && (
        <div className="mt-6 text-center animate-pulse-slow">
          <div className="text-zen-600 font-medium mb-2">Follow your breath</div>
          <div className="text-sm text-gray-600">Inhale... Hold... Exhale...</div>
        </div>
      )}
    </div>
  )
}

export default MeditationTimer