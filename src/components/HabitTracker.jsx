import { useState } from 'react'
import { Plus, Check, Target, TrendingUp, Flame } from 'lucide-react'

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Morning Meditation', streak: 7, completed: [true, true, true, true, true, true, true], color: 'zen' },
    { id: 2, name: 'Drink 8 Glasses of Water', streak: 3, completed: [true, true, false, true, false, true, true], color: 'primary' },
    { id: 3, name: 'Gratitude Journal', streak: 5, completed: [true, true, true, true, true, false, true], color: 'accent' },
    { id: 4, name: 'Exercise 30 mins', streak: 2, completed: [false, true, false, false, true, true, false], color: 'calm' },
  ])
  const [showAddHabit, setShowAddHabit] = useState(false)
  const [newHabitName, setNewHabitName] = useState('')

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const toggleHabit = (habitId, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const newCompleted = [...habit.completed]
        newCompleted[dayIndex] = !newCompleted[dayIndex]
        
        // Calculate new streak
        let newStreak = 0
        for (let i = newCompleted.length - 1; i >= 0; i--) {
          if (newCompleted[i]) {
            newStreak++
          } else {
            break
          }
        }
        
        return { ...habit, completed: newCompleted, streak: newStreak }
      }
      return habit
    }))
  }

  const addHabit = () => {
    if (newHabitName.trim()) {
      const colors = ['zen', 'primary', 'accent', 'calm']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      
      const newHabit = {
        id: habits.length + 1,
        name: newHabitName,
        streak: 0,
        completed: [false, false, false, false, false, false, false],
        color: randomColor
      }
      
      setHabits([...habits, newHabit])
      setNewHabitName('')
      setShowAddHabit(false)
    }
  }

  const getColorClasses = (color, completed) => {
    const colors = {
      zen: completed ? 'bg-zen-500 border-zen-600' : 'bg-zen-50 border-zen-200',
      primary: completed ? 'bg-primary-500 border-primary-600' : 'bg-primary-50 border-primary-200',
      accent: completed ? 'bg-accent-500 border-accent-600' : 'bg-accent-50 border-accent-200',
      calm: completed ? 'bg-calm-500 border-calm-600' : 'bg-calm-50 border-calm-200',
    }
    return colors[color] || colors.zen
  }

  const getTotalStreak = () => {
    return habits.reduce((sum, habit) => sum + habit.streak, 0)
  }

  const getCompletionRate = () => {
    const total = habits.length * 7
    const completed = habits.reduce((sum, habit) => 
      sum + habit.completed.filter(Boolean).length, 0
    )
    return Math.round((completed / total) * 100)
  }

  return (
    <div className="card-gradient p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Target className="h-6 w-6 text-primary-600" />
          <h3 className="text-2xl font-bold text-gray-900">Habit Tracker</h3>
        </div>
        <button
          onClick={() => setShowAddHabit(!showAddHabit)}
          className="px-4 py-2 bg-gradient-to-r from-zen-600 to-primary-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Habit</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Streak</p>
              <p className="text-2xl font-bold text-gray-900">{getTotalStreak()}</p>
            </div>
            <Flame className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">{getCompletionRate()}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-calm-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Habits</p>
              <p className="text-2xl font-bold text-gray-900">{habits.length}</p>
            </div>
            <Target className="h-8 w-8 text-zen-500" />
          </div>
        </div>
      </div>

      {/* Add Habit Form */}
      {showAddHabit && (
        <div className="mb-6 p-4 bg-white rounded-xl shadow-sm animate-slide-down">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addHabit()}
              placeholder="Enter habit name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zen-600 focus:border-transparent outline-none"
            />
            <button
              onClick={addHabit}
              className="px-6 py-2 bg-gradient-to-r from-zen-600 to-primary-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* Habits List */}
      <div className="space-y-4">
        {habits.map((habit) => (
          <div key={habit.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h4 className="font-semibold text-gray-900">{habit.name}</h4>
                {habit.streak > 0 && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
                    <Flame className="h-3 w-3" />
                    <span>{habit.streak} day streak</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Week Grid */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-600 mb-2">{day}</div>
                  <button
                    onClick={() => toggleHabit(habit.id, index)}
                    className={`w-full aspect-square rounded-lg border-2 transition-all duration-300 flex items-center justify-center hover:scale-110 ${getColorClasses(habit.color, habit.completed[index])}`}
                  >
                    {habit.completed[index] && (
                      <Check className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Motivation */}
      <div className="mt-6 p-4 bg-gradient-to-r from-zen-50 to-primary-50 rounded-xl border border-zen-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">💪 Keep going!</span> It takes 21 days to form a habit. You're building a better you, one day at a time!
        </p>
      </div>
    </div>
  )
}

export default HabitTracker