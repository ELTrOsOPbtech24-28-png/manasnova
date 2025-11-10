import { useState } from 'react'
import { Smile, Meh, Frown, Heart, Sun, Cloud, Zap } from 'lucide-react'

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null)
  const [moodHistory, setMoodHistory] = useState([])
  const [note, setNote] = useState('')

  const moods = [
    { icon: Smile, label: 'Excellent', color: 'from-calm-500 to-calm-600', value: 5 },
    { icon: Sun, label: 'Good', color: 'from-yellow-400 to-yellow-500', value: 4 },
    { icon: Meh, label: 'Okay', color: 'from-primary-400 to-primary-500', value: 3 },
    { icon: Cloud, label: 'Low', color: 'from-gray-400 to-gray-500', value: 2 },
    { icon: Frown, label: 'Struggling', color: 'from-orange-400 to-orange-500', value: 1 },
  ]

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood)
  }

  const saveMood = () => {
    if (selectedMood) {
      const newEntry = {
        mood: selectedMood,
        note,
        timestamp: new Date().toLocaleString(),
      }
      setMoodHistory([newEntry, ...moodHistory.slice(0, 4)])
      setSelectedMood(null)
      setNote('')
    }
  }

  return (
    <div className="card-gradient p-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <Heart className="h-6 w-6 text-accent-600" />
        <h3 className="text-2xl font-bold text-gray-900">How are you feeling today?</h3>
      </div>

      {/* Mood Selection */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {moods.map((mood) => {
          const Icon = mood.icon
          const isSelected = selectedMood?.label === mood.label
          return (
            <button
              key={mood.label}
              onClick={() => handleMoodSelect(mood)}
              className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                isSelected
                  ? 'bg-gradient-to-br ' + mood.color + ' text-white shadow-2xl scale-110'
                  : 'bg-white hover:shadow-lg'
              }`}
            >
              <Icon className={`h-8 w-8 mb-2 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
              <span className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                {mood.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Note Input */}
      {selectedMood && (
        <div className="animate-slide-down mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add a note (optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's on your mind?"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-zen-600 focus:border-transparent outline-none transition resize-none"
          />
        </div>
      )}

      {/* Save Button */}
      {selectedMood && (
        <button
          onClick={saveMood}
          className="w-full btn-primary animate-scale-in"
        >
          Save Mood Check-in
        </button>
      )}

      {/* Mood History */}
      {moodHistory.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Check-ins</h4>
          <div className="space-y-3">
            {moodHistory.map((entry, index) => {
              const MoodIcon = entry.mood.icon
              return (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${entry.mood.color}`}>
                    <MoodIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">{entry.mood.label}</span>
                      <span className="text-xs text-gray-500">{entry.timestamp}</span>
                    </div>
                    {entry.note && (
                      <p className="text-sm text-gray-600">{entry.note}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Encouragement */}
      <div className="mt-6 p-4 bg-gradient-to-r from-zen-50 to-primary-50 rounded-xl border border-zen-200">
        <div className="flex items-start space-x-3">
          <Zap className="h-5 w-5 text-zen-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Daily Tip</p>
            <p className="text-sm text-gray-600">
              Regular mood tracking helps you identify patterns and triggers. Your feelings are valid! 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoodTracker