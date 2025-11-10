import { useState, useEffect } from 'react'
import { Brain, Heart, Sparkles, Moon, Leaf, Flame, BookOpen, Target, Zap, Coffee, Dumbbell, Book, Sun, Bed, Apple, Smile, Users, Clock, Star, TrendingUp, Award, Play, Bookmark, Share2, Filter } from 'lucide-react'
import MeditationPractice from './MeditationPractice'
import SpiritualityPractice from './SpiritualityPractice'
import HabitPractice from './HabitPractice'

const MeditationTypes = () => {
  const [activeTab, setActiveTab] = useState('meditations')
  const [selectedItem, setSelectedItem] = useState(null)
  const [savedItems, setSavedItems] = useState([])
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showStats, setShowStats] = useState(true)
  const [activePractice, setActivePractice] = useState(null)
  const [practiceType, setPracticeType] = useState(null)

  // Load saved items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedPractices')
    if (saved) setSavedItems(JSON.parse(saved))
  }, [])

  const toggleSave = (item) => {
    const newSaved = savedItems.find(i => i.id === item.id && i.type === activeTab)
      ? savedItems.filter(i => !(i.id === item.id && i.type === activeTab))
      : [...savedItems, { ...item, type: activeTab }]
    setSavedItems(newSaved)
    localStorage.setItem('savedPractices', JSON.stringify(newSaved))
  }

  const isSaved = (item) => savedItems.some(i => i.id === item.id && i.type === activeTab)

  const meditations = [
    {
      id: 1, name: 'Mindfulness Meditation', icon: Brain, color: '#8b5cf6', emoji: '🧘‍♂️',
      description: 'Focus on the present moment without judgment. Become aware of thoughts, feelings, and bodily sensations.',
      duration: '10-20 min', difficulty: 'Beginner', popularity: 95,
      benefits: ['Reduces stress', 'Improves focus', 'Emotional regulation', 'Self-awareness'],
      steps: ['Find quiet space', 'Focus on breath', 'Notice sensations', 'Return to breath', 'Continue practice'],
      bestTime: 'Morning', practitioners: '500M+'
    },
    {
      id: 2, name: 'Transcendental Meditation', icon: Flame, color: '#3b82f6', emoji: '🕉️',
      description: 'Use a mantra to settle your mind and reach pure consciousness.',
      duration: '20 min', difficulty: 'Intermediate', popularity: 80,
      benefits: ['Deep relaxation', 'Reduced blood pressure', 'Enhanced creativity', 'Spiritual awakening'],
      steps: ['Sit comfortably', 'Repeat mantra', 'Let thoughts flow', 'Be effortless', 'Continue 20 minutes'],
      bestTime: 'Morning & Evening', practitioners: '10M+'
    },
    {
      id: 3, name: 'Loving-Kindness', icon: Heart, color: '#ec4899', emoji: '💖',
      description: 'Cultivate love and compassion for yourself and others.',
      duration: '15 min', difficulty: 'Beginner', popularity: 88,
      benefits: ['Increases compassion', 'Reduces negativity', 'Improves relationships', 'Boosts positivity'],
      steps: ['Relax body', 'Send love to self', 'Extend to loved ones', 'Include difficult people', 'Expand to all'],
      bestTime: 'Evening', practitioners: '50M+'
    },
    {
      id: 4, name: 'Chakra Meditation', icon: Sparkles, color: '#f59e0b', emoji: '✨',
      description: 'Balance seven energy centers through visualization and breathing.',
      duration: '30 min', difficulty: 'Intermediate', popularity: 75,
      benefits: ['Energy balance', 'Physical healing', 'Emotional stability', 'Spiritual alignment'],
      steps: ['Lie down comfortably', 'Start at root chakra', 'Visualize colors', 'Move through all seven', 'Feel energy flow'],
      bestTime: 'Anytime', practitioners: '20M+'
    },
    {
      id: 5, name: 'Vipassana', icon: Leaf, color: '#10b981', emoji: '🌿',
      description: 'Ancient Buddhist technique of self-observation and introspection.',
      duration: '45-60 min', difficulty: 'Advanced', popularity: 70,
      benefits: ['Self-understanding', 'Mental purification', 'Liberation from suffering', 'Wisdom development'],
      steps: ['Sit erect', 'Focus on breath', 'Scan body', 'Observe without reacting', 'Notice impermanence'],
      bestTime: 'Early Morning', practitioners: '5M+'
    },
    {
      id: 6, name: 'Guided Visualization', icon: Moon, color: '#6366f1', emoji: '🌙',
      description: 'Follow guided imagery for relaxation and healing.',
      duration: '15-20 min', difficulty: 'Beginner', popularity: 92,
      benefits: ['Perfect for beginners', 'Stress reduction', 'Goal manifestation', 'Better sleep'],
      steps: ['Get comfortable', 'Listen to guide', 'Visualize vividly', 'Engage senses', 'Fully immerse'],
      bestTime: 'Bedtime', practitioners: '100M+'
    },
    {
      id: 7, name: 'Zen Meditation', icon: Brain, color: '#64748b', emoji: '🧘',
      description: 'Seated practice focusing on posture and breath awareness.',
      duration: '25-40 min', difficulty: 'Advanced', popularity: 65,
      benefits: ['Mental clarity', 'Discipline', 'True insight', 'Emotional equilibrium'],
      steps: ['Lotus position', 'Straight spine', 'Eyes half-open', 'Count breaths', 'Simply sit'],
      bestTime: 'Morning', practitioners: '8M+'
    },
    {
      id: 8, name: 'Body Scan', icon: Heart, color: '#06b6d4', emoji: '🫀',
      description: 'Systematically focus on body parts to release tension.',
      duration: '20-30 min', difficulty: 'Beginner', popularity: 85,
      benefits: ['Physical relaxation', 'Pain management', 'Body awareness', 'Improved sleep'],
      steps: ['Lie down', 'Start at toes', 'Move up legs', 'Through torso', 'Full body awareness'],
      bestTime: 'Bedtime', practitioners: '30M+'
    }
  ]

  const spiritualityDisciplines = [
    { id: 1, name: 'Yoga Philosophy', icon: Brain, color: '#8b5cf6', description: 'Ancient Indian philosophy combining postures, breath, and meditation.', practices: ['Asanas', 'Pranayama', 'Dhyana', 'Ethics'], origin: 'India, 3000 BCE', followers: '300M+' },
    { id: 2, name: 'Buddhism', icon: Leaf, color: '#f59e0b', description: 'Path to enlightenment through Four Noble Truths.', practices: ['Meditation', 'Mindfulness', 'Compassion', 'Non-attachment'], origin: 'India, 6th century BCE', followers: '520M+' },
    { id: 3, name: 'Sufism', icon: Heart, color: '#ec4899', description: 'Islamic mysticism focused on divine love.', practices: ['Dhikr', 'Poetry', 'Music', 'Whirling'], origin: 'Middle East, 8th century', followers: '100M+' },
    { id: 4, name: 'Taoism', icon: Moon, color: '#6366f1', description: 'Living in harmony with the Tao.', practices: ['Wu Wei', 'Tai Chi', 'Qigong', 'Meditation'], origin: 'China, 4th century BCE', followers: '12M+' },
    { id: 5, name: 'Zen Buddhism', icon: Sparkles, color: '#10b981', description: 'Meditation and intuitive insight.', practices: ['Zazen', 'Koans', 'Tea Ceremony', 'Calligraphy'], origin: 'Japan, 6th century', followers: '20M+' },
    { id: 6, name: 'Kabbalah', icon: Flame, color: '#3b82f6', description: 'Jewish mysticism exploring divinity.', practices: ['Hebrew meditation', 'Zohar study', 'Prayer', 'Contemplation'], origin: 'Medieval Europe', followers: '5M+' },
    { id: 7, name: 'Vedanta', icon: BookOpen, color: '#f97316', description: 'Unity of soul with absolute reality.', practices: ['Self-inquiry', 'Meditation', 'Upanishads', 'Devotion'], origin: 'Ancient India', followers: '900M+' },
    { id: 8, name: 'Christian Mysticism', icon: Heart, color: '#8b5cf6', description: 'Direct communion with God.', practices: ['Contemplative Prayer', 'Lectio Divina', 'Silence', 'Service'], origin: 'Early Christianity', followers: '50M+' },
    { id: 9, name: 'Shamanism', icon: Zap, color: '#06b6d4', description: 'Connecting with spirit world.', practices: ['Journeying', 'Drumming', 'Plant Medicine', 'Ritual'], origin: 'Indigenous worldwide', followers: '10M+' },
    { id: 10, name: 'Advaita Vedanta', icon: Brain, color: '#a855f7', description: 'Non-dualistic philosophy.', practices: ['Self-inquiry', 'Meditation', 'Discrimination', 'Detachment'], origin: 'Adi Shankaracharya', followers: '50M+' },
    { id: 11, name: 'Stoicism', icon: Target, color: '#64748b', description: 'Greek philosophy teaching virtue.', practices: ['Daily reflection', 'Visualization', 'Journaling', 'Virtue practice'], origin: 'Ancient Greece', followers: '15M+' },
    { id: 12, name: 'Bhakti Yoga', icon: Heart, color: '#f43f5e', description: 'Path of devotion and divine love.', practices: ['Kirtan', 'Puja', 'Mantra', 'Service'], origin: 'Ancient India', followers: '200M+' }
  ]

  const habits = [
    { id: 1, name: 'Morning Meditation', icon: Sun, color: '#f59e0b', duration: '10-15 min', benefit: 'Start day with clarity', impact: 'High', frequency: 'Daily' },
    { id: 2, name: 'Gratitude Journal', icon: Book, color: '#ec4899', duration: '5 min', benefit: 'Cultivate thankfulness', impact: 'High', frequency: 'Daily' },
    { id: 3, name: 'Yoga Practice', icon: Dumbbell, color: '#8b5cf6', duration: '20-30 min', benefit: 'Physical & mental health', impact: 'Very High', frequency: 'Daily' },
    { id: 4, name: 'Mindful Breathing', icon: Brain, color: '#3b82f6', duration: '5 min', benefit: 'Reduce stress', impact: 'Medium', frequency: '3x Daily' },
    { id: 5, name: 'Evening Reflection', icon: Moon, color: '#6366f1', duration: '10 min', benefit: 'Process your day', impact: 'High', frequency: 'Daily' },
    { id: 6, name: 'Healthy Eating', icon: Apple, color: '#10b981', duration: 'Daily', benefit: 'Nourish body', impact: 'Very High', frequency: '3 Meals' },
    { id: 7, name: 'Digital Detox', icon: Zap, color: '#f97316', duration: '1 hour', benefit: 'Mental peace', impact: 'High', frequency: 'Daily' },
    { id: 8, name: 'Reading', icon: BookOpen, color: '#06b6d4', duration: '20 min', benefit: 'Expand knowledge', impact: 'Medium', frequency: 'Daily' },
    { id: 9, name: 'Sleep Routine', icon: Bed, color: '#a855f7', duration: '7-8 hours', benefit: 'Restore energy', impact: 'Very High', frequency: 'Nightly' },
    { id: 10, name: 'Positive Affirmations', icon: Smile, color: '#f43f5e', duration: '5 min', benefit: 'Build confidence', impact: 'Medium', frequency: 'Morning' },
    { id: 11, name: 'Hydration', icon: Coffee, color: '#06b6d4', duration: '2L Daily', benefit: 'Stay energized', impact: 'High', frequency: 'Throughout' },
    { id: 12, name: 'Nature Walk', icon: Leaf, color: '#10b981', duration: '15-20 min', benefit: 'Ground yourself', impact: 'High', frequency: 'Daily' }
  ]

  // Filter and search logic
  const getFilteredItems = () => {
    let items = activeTab === 'meditations' ? meditations : 
                 activeTab === 'spirituality' ? spiritualityDisciplines : habits

    if (filterDifficulty !== 'all' && activeTab === 'meditations') {
      items = items.filter(item => item.difficulty.toLowerCase() === filterDifficulty)
    }

    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return items
  }

  // Calculate stats
  const stats = {
    meditations: {
      total: meditations.length,
      avgDuration: '25 min',
      totalPractitioners: '713M+',
      mostPopular: meditations.reduce((max, m) => m.popularity > max.popularity ? m : max).name
    },
    spirituality: {
      total: spiritualityDisciplines.length,
      totalFollowers: '2.2B+',
      oldest: 'India, 3000 BCE',
      traditions: spiritualityDisciplines.length + ' Traditions'
    },
    habits: {
      total: habits.length,
      dailyTime: '2-3 hrs',
      highImpact: habits.filter(h => h.impact === 'Very High').length,
      categories: '12 Areas'
    }
  }

  const currentStats = activeTab === 'meditations' ? stats.meditations :
                       activeTab === 'spirituality' ? stats.spirituality : stats.habits

  const filteredItems = getFilteredItems()

  return (
    <section 
      id="meditation-types" 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.90), rgba(31, 41, 55, 0.94)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        {/* Header with Stats Toggle */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sacred <span className="text-purple-400">Spiritual Journey</span> ✨
            </h2>
            <button
              onClick={() => setShowStats(!showStats)}
              className="p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 transition-all"
              title="Toggle Stats"
            >
              <TrendingUp className="h-5 w-5" />
            </button>
          </div>
          <p className="text-base text-purple-200 mb-4">Explore practices, disciplines, and habits for holistic growth 🕉️</p>
          
          {/* Quick Stats Bar */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto">
              <div className="bg-purple-900/40 backdrop-blur-md rounded-xl p-4 border border-purple-400/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Target className="h-5 w-5 text-purple-400" />
                  <p className="text-2xl font-bold text-white">{currentStats.total}</p>
                </div>
                <p className="text-xs text-purple-300">Total Options</p>
              </div>
              
              <div className="bg-blue-900/40 backdrop-blur-md rounded-xl p-4 border border-blue-400/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <p className="text-2xl font-bold text-white">
                    {activeTab === 'meditations' ? currentStats.avgDuration : 
                     activeTab === 'spirituality' ? '∞' : currentStats.dailyTime}
                  </p>
                </div>
                <p className="text-xs text-blue-300">
                  {activeTab === 'meditations' ? 'Avg Duration' : 
                   activeTab === 'spirituality' ? 'Timeless' : 'Daily Time'}
                </p>
              </div>
              
              <div className="bg-pink-900/40 backdrop-blur-md rounded-xl p-4 border border-pink-400/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="h-5 w-5 text-pink-400" />
                  <p className="text-2xl font-bold text-white">
                    {activeTab === 'meditations' ? currentStats.totalPractitioners : 
                     activeTab === 'spirituality' ? currentStats.totalFollowers : currentStats.highImpact}
                  </p>
                </div>
                <p className="text-xs text-pink-300">
                  {activeTab === 'meditations' ? 'Practitioners' : 
                   activeTab === 'spirituality' ? 'Followers' : 'High Impact'}
                </p>
              </div>
              
              <div className="bg-amber-900/40 backdrop-blur-md rounded-xl p-4 border border-amber-400/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Star className="h-5 w-5 text-amber-400" />
                  <p className="text-xl font-bold text-white line-clamp-1">
                    {activeTab === 'meditations' ? 'Mindful' : 
                     activeTab === 'spirituality' ? '3000 BCE' : currentStats.categories}
                  </p>
                </div>
                <p className="text-xs text-amber-300">
                  {activeTab === 'meditations' ? 'Most Popular' : 
                   activeTab === 'spirituality' ? 'Since' : 'Categories'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          {[
            { key: 'meditations', label: '🧘 Meditations', count: meditations.length },
            { key: 'spirituality', label: '✨ Spirituality', count: spiritualityDisciplines.length },
            { key: 'habits', label: '🎯 Habits', count: habits.length }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { 
                setActiveTab(tab.key); 
                setSelectedItem(null); 
                setFilterDifficulty('all');
                setSearchTerm('');
              }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all relative ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/50 scale-105'
                  : 'bg-gray-800/60 text-purple-200 hover:bg-gray-700/80'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 max-w-4xl mx-auto w-full">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-800/60 backdrop-blur-md border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-all"
            />
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-400" />
          </div>

          {/* Difficulty Filter (only for meditations) */}
          {activeTab === 'meditations' && (
            <div className="flex gap-2">
              {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                <button
                  key={level}
                  onClick={() => setFilterDifficulty(level)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    filterDifficulty === level
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/60 text-purple-300 hover:bg-gray-700/80'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          )}

          {/* Saved Items Counter */}
          <button
            onClick={() => setActiveTab('saved')}
            className="px-6 py-3 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Bookmark className="h-4 w-4" />
            <span>Saved ({savedItems.length})</span>
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex-1 overflow-hidden">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-purple-300 mb-2">No results found</p>
              <p className="text-purple-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={`grid gap-4 overflow-y-auto pr-2 pb-6 ${
              activeTab === 'meditations' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 
              activeTab === 'spirituality' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
              'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`} style={{ maxHeight: 'calc(100vh - 450px)' }}>
              {activeTab === 'meditations' && filteredItems.map((item, index) => {
              const Icon = item.icon
              const backgrounds = [
                'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=400',
                'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=400',
                'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=400',
                'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=400',
                'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=400',
                'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=400',
                'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?q=80&w=400',
                'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=400'
              ];
              return (
                <div key={item.id}
                  className="cursor-pointer backdrop-blur-xl rounded-2xl p-5 border-2 border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:scale-105 relative overflow-hidden group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.9)), url('${backgrounds[index % backgrounds.length]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSave(item); }}
                      className={`p-1.5 rounded-lg backdrop-blur-md transition-all ${
                        isSaved(item) ? 'bg-amber-500 text-white' : 'bg-gray-800/60 text-purple-300 hover:bg-amber-500/80'
                      }`}
                    >
                      <Bookmark className="h-3.5 w-3.5" fill={isSaved(item) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); alert('Share feature coming soon!'); }}
                      className="p-1.5 rounded-lg bg-gray-800/60 backdrop-blur-md text-purple-300 hover:bg-blue-500/80 transition-all"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-3xl"
                      style={{ background: `radial-gradient(circle, ${item.color}40, ${item.color}20)`, border: `2px solid ${item.color}60`, boxShadow: `0 0 20px ${item.color}40` }}>
                      {item.emoji}
                    </div>
                    <h4 className="text-sm font-bold text-purple-100 mb-2 line-clamp-2">{item.name}</h4>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1 text-xs text-purple-300">
                        <Clock className="h-3 w-3" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-purple-300">
                        <Users className="h-3 w-3" />
                        {item.practitioners}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2.5 py-1 bg-purple-600/40 text-purple-200 rounded-full font-semibold">
                        {item.difficulty}
                      </span>
                      <span className="text-xs px-2.5 py-1 bg-blue-600/40 text-blue-200 rounded-full">
                        {item.bestTime}
                      </span>
                    </div>

                    {/* Popularity Bar */}
                    <div className="w-full mt-2">
                      <div className="flex items-center justify-between text-xs text-purple-300 mb-1">
                        <span>Popularity</span>
                        <span className="font-bold">{item.popularity}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                          style={{ width: `${item.popularity}%` }}
                        ></div>
                      </div>
                    </div>

                    <button className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-1">
                      <Play className="h-3 w-3" />
                      Learn More
                    </button>
                  </div>
                </div>
              )
            })}

            {activeTab === 'spirituality' && filteredItems.map((item, index) => {
              const Icon = item.icon
              const backgrounds = [
                'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=400',
                'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=400',
                'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=400',
                'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=400',
                'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=400',
                'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=400',
                'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?q=80&w=400',
                'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=400',
                'https://images.unsplash.com/photo-1590735213920-68192a487bc1?q=80&w=400',
                'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400',
                'https://images.unsplash.com/photo-1605177963531-82f572f86e01?q=80&w=400',
                'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=400'
              ];
              return (
                <div key={item.id}
                  className="cursor-pointer backdrop-blur-xl rounded-2xl p-5 border-2 border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-2xl hover:scale-105 relative overflow-hidden group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.9)), url('${backgrounds[index % backgrounds.length]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSave(item); }}
                      className={`p-1.5 rounded-lg backdrop-blur-md transition-all ${
                        isSaved(item) ? 'bg-amber-500 text-white' : 'bg-gray-800/60 text-purple-300 hover:bg-amber-500/80'
                      }`}
                    >
                      <Bookmark className="h-3.5 w-3.5" fill={isSaved(item) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); alert('Share feature coming soon!'); }}
                      className="p-1.5 rounded-lg bg-gray-800/60 backdrop-blur-md text-purple-300 hover:bg-blue-500/80 transition-all"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ background: `radial-gradient(circle, ${item.color}40, ${item.color}20)`, border: `2px solid ${item.color}60`, boxShadow: `0 0 15px ${item.color}30` }}>
                      <Icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <h4 className="text-sm font-bold text-purple-100 mb-2 line-clamp-2">{item.name}</h4>
                    <p className="text-xs text-purple-300 line-clamp-3 mb-3">{item.description}</p>
                    
                    <div className="flex items-center gap-1 text-xs text-purple-400 italic mb-2">
                      <Clock className="h-3 w-3" />
                      <span className="line-clamp-1">{item.origin}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold mb-3">
                      <Users className="h-3 w-3" />
                      <span>{item.followers} followers</span>
                    </div>

                    <button className="mt-auto w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-1">
                      <Play className="h-3 w-3" />
                      Explore
                    </button>
                  </div>
                </div>
              )
            })}

            {activeTab === 'habits' && filteredItems.map((item, index) => {
              const Icon = item.icon
              const backgrounds = [
                'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=300',
                'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=300',
                'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=300',
                'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=300',
                'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=300',
                'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=300'
              ];
              return (
                <div key={item.id}
                  className="cursor-pointer backdrop-blur-xl rounded-xl p-4 border-2 border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-xl hover:scale-105 relative overflow-hidden group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.9)), url('${backgrounds[index % backgrounds.length]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSave(item); }}
                      className={`p-1 rounded-lg backdrop-blur-md transition-all ${
                        isSaved(item) ? 'bg-amber-500 text-white' : 'bg-gray-800/60 text-purple-300 hover:bg-amber-500/80'
                      }`}
                    >
                      <Bookmark className="h-3 w-3" fill={isSaved(item) ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                      style={{ background: `radial-gradient(circle, ${item.color}40, ${item.color}20)`, border: `2px solid ${item.color}60`, boxShadow: `0 0 12px ${item.color}30` }}>
                      <Icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <h4 className="text-xs font-bold text-purple-100 mb-1.5 line-clamp-2">{item.name}</h4>
                    
                    <div className="flex items-center gap-1 text-xs text-purple-300 mb-1">
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </div>

                    <div className={`text-xs px-2 py-0.5 rounded-full mb-2 font-semibold ${
                      item.impact === 'Very High' ? 'bg-green-600/40 text-green-200' :
                      item.impact === 'High' ? 'bg-blue-600/40 text-blue-200' :
                      'bg-purple-600/40 text-purple-200'
                    }`}>
                      {item.impact} Impact
                    </div>

                    <p className="text-xs text-purple-400 line-clamp-2 mb-2">{item.benefit}</p>
                    
                    <div className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded">
                      {item.frequency}
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-gray-900/98 backdrop-blur-xl rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-500/50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl shrink-0"
                  style={{ background: `radial-gradient(circle, ${selectedItem.color}40, ${selectedItem.color}20)`, border: `3px solid ${selectedItem.color}60`, boxShadow: `0 0 30px ${selectedItem.color}50` }}>
                  {selectedItem.emoji || <selectedItem.icon className="h-8 w-8" style={{ color: selectedItem.color }} />}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedItem.difficulty && (
                      <span className="text-xs px-3 py-1 bg-purple-600/40 text-purple-200 rounded-full font-semibold border border-purple-400/30">
                        {selectedItem.difficulty}
                      </span>
                    )}
                    {selectedItem.duration && (
                      <span className="text-xs px-3 py-1 bg-blue-600/40 text-blue-200 rounded-full flex items-center gap-1 border border-blue-400/30">
                        <Clock className="h-3 w-3" />
                        {selectedItem.duration}
                      </span>
                    )}
                    {selectedItem.practitioners && (
                      <span className="text-xs px-3 py-1 bg-pink-600/40 text-pink-200 rounded-full flex items-center gap-1 border border-pink-400/30">
                        <Users className="h-3 w-3" />
                        {selectedItem.practitioners}
                      </span>
                    )}
                    {selectedItem.bestTime && (
                      <span className="text-xs px-3 py-1 bg-amber-600/40 text-amber-200 rounded-full border border-amber-400/30">
                        ⏰ {selectedItem.bestTime}
                      </span>
                    )}
                    {selectedItem.impact && (
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        selectedItem.impact === 'Very High' ? 'bg-green-600/40 text-green-200 border border-green-400/30' :
                        selectedItem.impact === 'High' ? 'bg-blue-600/40 text-blue-200 border border-blue-400/30' :
                        'bg-purple-600/40 text-purple-200 border border-purple-400/30'
                      }`}>
                        {selectedItem.impact} Impact
                      </span>
                    )}
                  </div>

                  {selectedItem.origin && <p className="text-sm text-purple-400 italic flex items-center gap-1"><Clock className="h-3 w-3" />{selectedItem.origin}</p>}
                  {selectedItem.followers && (
                    <p className="text-sm text-amber-400 font-semibold flex items-center gap-1 mt-1">
                      <Users className="h-3 w-3" />
                      {selectedItem.followers} followers worldwide
                    </p>
                  )}
                  {selectedItem.frequency && (
                    <p className="text-sm text-blue-300 flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3" />
                      Recommended: {selectedItem.frequency}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSave(selectedItem); }}
                  className={`p-2 rounded-lg transition-all ${
                    isSaved(selectedItem) ? 'bg-amber-500 text-white' : 'bg-gray-800/60 text-purple-300 hover:bg-amber-500/80'
                  }`}
                  title="Save"
                >
                  <Bookmark className="h-5 w-5" fill={isSaved(selectedItem) ? 'currentColor' : 'none'} />
                </button>
                <button 
                  onClick={() => setSelectedItem(null)} 
                  className="text-purple-300 hover:text-white text-3xl w-10 h-10 flex items-center justify-center hover:bg-gray-800/60 rounded-lg transition-all"
                >
                  ✕
                </button>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-purple-900/20 rounded-xl p-4 mb-6 border border-purple-400/20">
              <p className="text-purple-100 leading-relaxed">{selectedItem.description}</p>
            </div>

            {/* Popularity Bar (for meditations) */}
            {selectedItem.popularity && (
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-purple-300 mb-2">
                  <span className="font-semibold">Popularity Score</span>
                  <span className="font-bold text-lg text-white">{selectedItem.popularity}%</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${selectedItem.popularity}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Steps */}
            {selectedItem.steps && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center">
                    📋
                  </div>
                  Step-by-Step Guide
                </h4>
                <ol className="space-y-3">
                  {selectedItem.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 bg-gray-800/40 p-3 rounded-lg border border-purple-400/20 hover:border-purple-400/40 transition-all">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <span className="text-purple-100 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            
            {/* Practices */}
            {selectedItem.practices && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center">
                    🙏
                  </div>
                  Core Practices
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedItem.practices.map((p, i) => (
                    <div key={i} className="bg-purple-900/30 rounded-xl p-3 border border-purple-400/30 text-purple-100 text-sm font-medium hover:bg-purple-900/50 transition-all">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Benefits */}
            {selectedItem.benefits && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center">
                    ✨
                  </div>
                  Key Benefits
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedItem.benefits.map((b, i) => (
                    <li key={i} className="text-purple-100 text-sm flex gap-2 items-center bg-gray-800/40 p-2.5 rounded-lg border border-green-400/20">
                      <span className="text-green-400 text-lg">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button 
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 text-lg"
                onClick={() => { 
                  setActivePractice(selectedItem)
                  setPracticeType(activeTab)
                  setSelectedItem(null)
                }}
              >
                <Play className="h-5 w-5" />
                Start Practice Now
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); alert('Share feature coming soon!'); }}
                className="px-6 py-4 bg-gray-800/60 hover:bg-blue-600/50 text-purple-300 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Practice Pages */}
      {activePractice && practiceType === 'meditations' && (
        <MeditationPractice 
          meditation={activePractice} 
          onBack={() => {
            setActivePractice(null)
            setPracticeType(null)
          }}
        />
      )}

      {activePractice && practiceType === 'spirituality' && (
        <SpiritualityPractice 
          discipline={activePractice} 
          onBack={() => {
            setActivePractice(null)
            setPracticeType(null)
          }}
        />
      )}

      {activePractice && practiceType === 'habits' && (
        <HabitPractice 
          habit={activePractice} 
          onBack={() => {
            setActivePractice(null)
            setPracticeType(null)
          }}
        />
      )}
    </section>
  )
}

export default MeditationTypes
