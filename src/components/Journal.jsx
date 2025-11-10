import { useState } from 'react'
import { BookOpen, Save, Sparkles, Calendar } from 'lucide-react'

const Journal = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: 'November 8, 2025',
      prompt: 'What are you grateful for today?',
      content: 'I\'m grateful for my health, my supportive friends, and the beautiful sunrise I saw this morning. Small moments of peace make life meaningful.',
    }
  ])
  const [currentEntry, setCurrentEntry] = useState('')
  const [selectedPrompt, setSelectedPrompt] = useState(null)

  const prompts = [
    { icon: '🌟', text: 'What are you grateful for today?' },
    { icon: '💪', text: 'What challenge did you overcome recently?' },
    { icon: '🎯', text: 'What goals do you want to achieve this week?' },
    { icon: '😊', text: 'What made you smile today?' },
    { icon: '🌱', text: 'How have you grown as a person lately?' },
    { icon: '💭', text: 'What\'s on your mind right now?' },
    { icon: '✨', text: 'What would make tomorrow even better?' },
    { icon: '🧘‍♀️', text: 'How do you feel after your meditation practice?' },
  ]

  const selectPrompt = (prompt) => {
    setSelectedPrompt(prompt)
  }

  const saveEntry = () => {
    if (currentEntry.trim()) {
      const newEntry = {
        id: entries.length + 1,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        prompt: selectedPrompt?.text || 'Free writing',
        content: currentEntry,
      }
      setEntries([newEntry, ...entries])
      setCurrentEntry('')
      setSelectedPrompt(null)
    }
  }

  const wordCount = currentEntry.trim().split(/\s+/).filter(word => word.length > 0).length

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Writing Area */}
      <div className="card-gradient p-8">
        <div className="flex items-center space-x-3 mb-6">
          <BookOpen className="h-6 w-6 text-accent-600" />
          <h3 className="text-2xl font-bold text-gray-900">Daily Journal</h3>
        </div>

        {/* Prompts */}
        {!selectedPrompt && (
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Choose a prompt or start free writing:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {prompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => selectPrompt(prompt)}
                  className="p-3 bg-white rounded-xl hover:shadow-lg transition-all text-left group border border-gray-200 hover:border-zen-300"
                >
                  <div className="text-2xl mb-1">{prompt.icon}</div>
                  <div className="text-xs text-gray-700 group-hover:text-zen-700">
                    {prompt.text}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Prompt Display */}
        {selectedPrompt && (
          <div className="mb-4 p-4 bg-gradient-to-r from-zen-50 to-primary-50 rounded-xl border border-zen-200 animate-slide-down">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{selectedPrompt.icon}</span>
                <span className="font-medium text-gray-900">{selectedPrompt.text}</span>
              </div>
              <button
                onClick={() => setSelectedPrompt(null)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Change
              </button>
            </div>
          </div>
        )}

        {/* Writing Area */}
        <div className="mb-4">
          <textarea
            value={currentEntry}
            onChange={(e) => setCurrentEntry(e.target.value)}
            placeholder="Start writing your thoughts..."
            rows="12"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-zen-600 focus:border-transparent outline-none transition resize-none text-gray-800 leading-relaxed"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">{wordCount} words</span>
            <button
              onClick={saveEntry}
              disabled={!currentEntry.trim()}
              className="px-6 py-2 bg-gradient-to-r from-zen-600 to-primary-600 text-white rounded-full font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Entry</span>
            </button>
          </div>
        </div>

        {/* AI Suggestion */}
        <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-start space-x-3">
          <Sparkles className="h-5 w-5 text-zen-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">AI Tip</p>
            <p className="text-sm text-gray-600">
              Writing for just 10 minutes daily can reduce stress and improve mental clarity. Don't worry about perfection – just let your thoughts flow!
            </p>
          </div>
        </div>
      </div>

      {/* Previous Entries */}
      {entries.length > 0 && (
        <div className="card p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary-600" />
            <span>Previous Entries</span>
          </h4>
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-zen-700">
                    {entry.prompt}
                  </span>
                  <span className="text-xs text-gray-500">{entry.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{entry.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Card */}
      <div className="card p-6 bg-gradient-to-r from-zen-600 to-primary-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/80 mb-1">Journal Entries</p>
            <p className="text-3xl font-bold">{entries.length}</p>
          </div>
          <BookOpen className="h-12 w-12 text-white/30" />
        </div>
        <p className="text-sm text-white/90 mt-4">
          Keep writing! Regular journaling helps process emotions and track personal growth. 📝
        </p>
      </div>
    </div>
  )
}

export default Journal