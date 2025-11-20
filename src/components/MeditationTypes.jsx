import { useState, useEffect } from 'react'
import { Brain, Heart, Sparkles, Moon, Leaf, Flame, BookOpen, Target, Zap, Coffee, Dumbbell, Book, Sun, Bed, Apple, Smile, Users, Clock, Star, Award, Play, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react'
import MeditationPractice from './MeditationPractice'
import SpiritualityPractice from './SpiritualityPractice'
import HabitPractice from './HabitPractice'

const MeditationTypes = () => {
  const [activeTab, setActiveTab] = useState('meditations')
  const [selectedItem, setSelectedItem] = useState(null)
  const [savedItems, setSavedItems] = useState([])
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [activePractice, setActivePractice] = useState(null)
  const [practiceType, setPracticeType] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

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
      id: 1, name: 'Mindfulness Meditation', icon: Brain, color: '#8b5cf6', emoji: '',
      description: 'Focus on the present moment without judgment. Become aware of thoughts, feelings, and bodily sensations.',
      duration: '10-20 min', difficulty: 'Beginner', popularity: 95,
      benefits: ['Reduces stress', 'Improves focus', 'Emotional regulation', 'Self-awareness'],
      steps: ['Find quiet space', 'Focus on breath', 'Notice sensations', 'Return to breath', 'Continue practice'],
      bestTime: 'Morning', practitioners: '500M+',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
    },
    {
      id: 2, name: 'Transcendental Meditation', icon: Flame, color: '#3b82f6', emoji: '',
      description: 'Use a mantra to settle your mind and reach pure consciousness.',
      duration: '20 min', difficulty: 'Intermediate', popularity: 80,
      benefits: ['Deep relaxation', 'Reduced blood pressure', 'Enhanced creativity', 'Spiritual awakening'],
      steps: ['Sit comfortably', 'Repeat mantra', 'Let thoughts flow', 'Be effortless', 'Continue 20 minutes'],
      bestTime: 'Morning & Evening', practitioners: '10M+',
      image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80'
    },
    {
      id: 3, name: 'Loving-Kindness', icon: Heart, color: '#ec4899', emoji: '',
      description: 'Cultivate love and compassion for yourself and others.',
      duration: '15 min', difficulty: 'Beginner', popularity: 88,
      benefits: ['Increases compassion', 'Reduces negativity', 'Improves relationships', 'Boosts positivity'],
      steps: ['Relax body', 'Send love to self', 'Extend to loved ones', 'Include difficult people', 'Expand to all'],
      bestTime: 'Evening', practitioners: '50M+',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
    },
    {
      id: 4, name: 'Chakra Meditation', icon: Sparkles, color: '#f59e0b', emoji: '',
      description: 'Balance seven energy centers through visualization and breathing.',
      duration: '30 min', difficulty: 'Intermediate', popularity: 75,
      benefits: ['Energy balance', 'Physical healing', 'Emotional stability', 'Spiritual alignment'],
      steps: ['Lie down comfortably', 'Start at root chakra', 'Visualize colors', 'Move through all seven', 'Feel energy flow'],
      bestTime: 'Anytime', practitioners: '20M+',
      image: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&q=80'
    },
    {
      id: 5, name: 'Vipassana', icon: Leaf, color: '#10b981', emoji: '',
      description: 'Ancient Buddhist technique of self-observation and introspection.',
      duration: '45-60 min', difficulty: 'Advanced', popularity: 70,
      benefits: ['Self-understanding', 'Mental purification', 'Liberation from suffering', 'Wisdom development'],
      steps: ['Sit erect', 'Focus on breath', 'Scan body', 'Observe without reacting', 'Notice impermanence'],
      bestTime: 'Early Morning', practitioners: '5M+',
      image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80'
    },
    {
      id: 6, name: 'Guided Visualization', icon: Moon, color: '#6366f1', emoji: '',
      description: 'Follow guided imagery for relaxation and healing.',
      duration: '15-20 min', difficulty: 'Beginner', popularity: 92,
      benefits: ['Perfect for beginners', 'Stress reduction', 'Goal manifestation', 'Better sleep'],
      steps: ['Get comfortable', 'Listen to guide', 'Visualize vividly', 'Engage senses', 'Fully immerse'],
      bestTime: 'Bedtime', practitioners: '100M+',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80'
    },
    {
      id: 7, name: 'Zen Meditation', icon: Brain, color: '#64748b', emoji: '',
      description: 'Seated practice focusing on posture and breath awareness.',
      duration: '25-40 min', difficulty: 'Advanced', popularity: 65,
      benefits: ['Mental clarity', 'Discipline', 'True insight', 'Emotional equilibrium'],
      steps: ['Lotus position', 'Straight spine', 'Eyes half-open', 'Count breaths', 'Simply sit'],
      bestTime: 'Morning', practitioners: '8M+',
      image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800&q=80'
    },
    {
      id: 8, name: 'Body Scan', icon: Heart, color: '#06b6d4', emoji: '',
      description: 'Systematically focus on body parts to release tension.',
      duration: '20-30 min', difficulty: 'Beginner', popularity: 85,
      benefits: ['Physical relaxation', 'Pain management', 'Body awareness', 'Improved sleep'],
      steps: ['Lie down', 'Start at toes', 'Move up legs', 'Through torso', 'Full body awareness'],
      bestTime: 'Bedtime', practitioners: '30M+',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    }
  ]

  const spiritualityDisciplines = [
    { id: 1, name: 'Yoga Philosophy', icon: Brain, color: '#8b5cf6', description: 'Ancient Indian philosophy combining postures, breath, and meditation.', practices: ['Asanas', 'Pranayama', 'Dhyana', 'Ethics'], origin: 'India, 3000 BCE', followers: '300M+', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80' },
    { id: 2, name: 'Buddhism', icon: Leaf, color: '#f59e0b', description: 'Path to enlightenment through Four Noble Truths.', practices: ['Meditation', 'Mindfulness', 'Compassion', 'Non-attachment'], origin: 'India, 6th century BCE', followers: '520M+', image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80' },
    { id: 3, name: 'Sufism', icon: Heart, color: '#ec4899', description: 'Islamic mysticism focused on divine love.', practices: ['Dhikr', 'Poetry', 'Music', 'Whirling'], origin: 'Middle East, 8th century', followers: '100M+', image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=80' },
    { id: 4, name: 'Taoism', icon: Moon, color: '#6366f1', description: 'Living in harmony with the Tao.', practices: ['Wu Wei', 'Tai Chi', 'Qigong', 'Meditation'], origin: 'China, 4th century BCE', followers: '12M+', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80' },
    { id: 5, name: 'Zen Buddhism', icon: Sparkles, color: '#10b981', description: 'Meditation and intuitive insight.', practices: ['Zazen', 'Koans', 'Tea Ceremony', 'Calligraphy'], origin: 'Japan, 6th century', followers: '20M+', image: 'https://images.unsplash.com/photo-1545450660-f2f6d1967a04?w=800&q=80' },
    { id: 6, name: 'Kabbalah', icon: Flame, color: '#3b82f6', description: 'Jewish mysticism exploring divinity.', practices: ['Hebrew meditation', 'Zohar study', 'Prayer', 'Contemplation'], origin: 'Medieval Europe', followers: '5M+', image: 'https://images.unsplash.com/photo-1509021436665-8f0365ef5f8f?w=800&q=80' },
    { id: 7, name: 'Vedanta', icon: BookOpen, color: '#f97316', description: 'Unity of soul with absolute reality.', practices: ['Self-inquiry', 'Meditation', 'Upanishads', 'Devotion'], origin: 'Ancient India', followers: '900M+', image: 'https://images.unsplash.com/photo-1603988558239-85f9ff81d80d?w=800&q=80' },
    { id: 8, name: 'Christian Mysticism', icon: Heart, color: '#8b5cf6', description: 'Direct communion with God.', practices: ['Contemplative Prayer', 'Lectio Divina', 'Silence', 'Service'], origin: 'Early Christianity', followers: '50M+', image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80' },
    { id: 9, name: 'Shamanism', icon: Zap, color: '#06b6d4', description: 'Connecting with spirit world.', practices: ['Journeying', 'Drumming', 'Plant Medicine', 'Ritual'], origin: 'Indigenous worldwide', followers: '10M+', image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=800&q=80' },
    { id: 10, name: 'Advaita Vedanta', icon: Brain, color: '#a855f7', description: 'Non-dualistic philosophy.', practices: ['Self-inquiry', 'Meditation', 'Discrimination', 'Detachment'], origin: 'Adi Shankaracharya', followers: '50M+', image: 'https://images.unsplash.com/photo-1602500686034-f1a5969ec74c?w=800&q=80' },
    { id: 11, name: 'Stoicism', icon: Target, color: '#64748b', description: 'Greek philosophy teaching virtue.', practices: ['Daily reflection', 'Visualization', 'Journaling', 'Virtue practice'], origin: 'Ancient Greece', followers: '15M+', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80' },
    { id: 12, name: 'Bhakti Yoga', icon: Heart, color: '#f43f5e', description: 'Path of devotion and divine love.', practices: ['Kirtan', 'Puja', 'Mantra', 'Service'], origin: 'Ancient India', followers: '200M+', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' }
  ]

  const habits = [
    { id: 1, name: 'Morning Meditation', icon: Sun, color: '#f59e0b', duration: '10-15 min', benefit: 'Start day with clarity', impact: 'High', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80' },
    { id: 2, name: 'Gratitude Journal', icon: Book, color: '#ec4899', duration: '5 min', benefit: 'Cultivate thankfulness', impact: 'High', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80' },
    { id: 3, name: 'Yoga Practice', icon: Dumbbell, color: '#8b5cf6', duration: '20-30 min', benefit: 'Physical & mental health', impact: 'Very High', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80' },
    { id: 4, name: 'Mindful Breathing', icon: Brain, color: '#3b82f6', duration: '5 min', benefit: 'Reduce stress', impact: 'Medium', frequency: '3x Daily', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80' },
    { id: 5, name: 'Evening Reflection', icon: Moon, color: '#6366f1', duration: '10 min', benefit: 'Process your day', impact: 'High', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80' },
    { id: 6, name: 'Healthy Eating', icon: Apple, color: '#10b981', duration: 'Daily', benefit: 'Nourish body', impact: 'Very High', frequency: '3 Meals', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
    { id: 7, name: 'Digital Detox', icon: Zap, color: '#f97316', duration: '1 hour', benefit: 'Mental peace', impact: 'High', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80' },
    { id: 8, name: 'Reading', icon: BookOpen, color: '#06b6d4', duration: '20 min', benefit: 'Expand knowledge', impact: 'Medium', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80' },
    { id: 9, name: 'Sleep Routine', icon: Bed, color: '#a855f7', duration: '7-8 hours', benefit: 'Restore energy', impact: 'Very High', frequency: 'Nightly', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80' },
    { id: 10, name: 'Positive Affirmations', icon: Smile, color: '#f43f5e', duration: '5 min', benefit: 'Build confidence', impact: 'Medium', frequency: 'Morning', image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&q=80' },
    { id: 11, name: 'Hydration', icon: Coffee, color: '#06b6d4', duration: '2L Daily', benefit: 'Stay energized', impact: 'High', frequency: 'Throughout', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80' },
    { id: 12, name: 'Nature Walk', icon: Leaf, color: '#10b981', duration: '15-20 min', benefit: 'Ground yourself', impact: 'High', frequency: 'Daily', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' }
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
      mostPopular: 'Mindful'
    },
    spirituality: {
      total: spiritualityDisciplines.length,
      totalFollowers: '2.2B+',
      oldest: '3000 BCE',
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
  
  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  // Reset to page 1 when changing tabs or filters
  useEffect(() => {
    setCurrentPage(1)
  }, [activeTab, filterDifficulty, searchTerm])

  return (
    <section 
      id="meditation-types" 
      className="min-h-screen py-12 px-6 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(31, 41, 55, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-2">
            Experience the Divine Power of <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">ManasNova</span> ✨
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-300 mb-8 px-4">Explore sacred practices, spiritual disciplines, and divine habits for holistic growth</p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-xl border border-white/20 p-3 sm:p-4 md:p-6 text-center">
              <Target className="h-6 w-6 md:h-8 md:w-8 text-purple-400 mx-auto mb-1 md:mb-2" />
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{currentStats.total}</p>
              <p className="text-sm text-purple-300">Total Options</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 text-center">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white mb-1">
                {activeTab === 'meditations' ? currentStats.avgDuration : 
                 activeTab === 'spirituality' ? '' : currentStats.dailyTime}
              </p>
              <p className="text-sm text-blue-300">
                {activeTab === 'meditations' ? 'Avg Duration' : 
                 activeTab === 'spirituality' ? 'Timeless' : 'Daily Time'}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 text-center">
              <Users className="h-8 w-8 text-pink-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white mb-1">
                {activeTab === 'meditations' ? currentStats.totalPractitioners : 
                 activeTab === 'spirituality' ? currentStats.totalFollowers : currentStats.highImpact}
              </p>
              <p className="text-sm text-pink-300">
                {activeTab === 'meditations' ? 'Practitioners' : 
                 activeTab === 'spirituality' ? 'Followers' : 'High Impact'}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 text-center">
              <Star className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white mb-1 truncate">
                {activeTab === 'meditations' ? currentStats.mostPopular : 
                 activeTab === 'spirituality' ? currentStats.oldest : currentStats.categories}
              </p>
              <p className="text-sm text-amber-300">
                {activeTab === 'meditations' ? 'Most Popular' : 
                 activeTab === 'spirituality' ? 'Since' : 'Categories'}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6 md:mb-8 px-4">
          {[
            { key: 'meditations', label: ' Meditations', count: meditations.length },
            { key: 'spirituality', label: ' Spirituality', count: spiritualityDisciplines.length },
            { key: 'habits', label: ' Habits', count: habits.length }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { 
                setActiveTab(tab.key); 
                setSelectedItem(null); 
                setFilterDifficulty('all');
                setSearchTerm('');
              }}
              className={'w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all ' + (activeTab === tab.key ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/50 scale-105' : 'bg-white/10 backdrop-blur-xl border border-white/20 text-purple-300 hover:bg-white/20')}
            >
              {tab.label}
              <span className="ml-2 text-sm bg-white/20 px-2.5 py-0.5 rounded-full">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10 max-w-5xl mx-auto px-4">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={'Search ' + activeTab + '...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 md:py-4 pl-12 sm:pl-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-all shadow-xl text-sm md:text-base"
            />
            <BookOpen className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-purple-400" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
          {/* Difficulty Filter (only for meditations) */}
          {activeTab === 'meditations' && (
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
                <button
                  key={level}
                  onClick={() => setFilterDifficulty(level)}
                  className={'flex-1 sm:flex-none px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl text-xs sm:text-sm font-bold transition-all ' + (filterDifficulty === level ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl' : 'bg-white/10 backdrop-blur-xl border border-white/20 text-purple-300 hover:bg-white/20')}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          )}

          {/* Saved Items Counter */}
          <button
            onClick={() => setActiveTab('saved')}
            className="px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 text-amber-300 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 md:gap-3 shadow-xl"
          >
            <Bookmark className="h-5 w-5" />
            <span>Saved ({savedItems.length})</span>
          </button>
          </div>
        </div>

        {/* Content Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-20 text-center">
            <p className="text-3xl text-purple-300 mb-3">No results found</p>
            <p className="text-purple-400 text-lg">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 px-4">
              {paginatedItems.map((item) => {
                const Icon = item.icon
                return (
                  <div 
                    key={item.id}
                    className="group bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 overflow-hidden cursor-pointer hover:border-purple-400 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  >
                    {/* Image Section - Top Half */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      
                      {/* Icon & Bookmark Overlay */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl" style={{ background: 'radial-gradient(circle, ' + item.color + '80, ' + item.color + '40)', border: '2px solid ' + item.color }}>
                          {item.emoji ? <span className="text-2xl">{item.emoji}</span> : <Icon className="h-7 w-7" style={{ color: '#fff' }} />}
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleSave(item); }}
                          className={(isSaved(item) ? 'bg-amber-500 text-white' : 'bg-white/20 backdrop-blur-xl text-white hover:bg-amber-500') + ' p-3 rounded-full transition-all shadow-lg'}
                        >
                          <Bookmark className="h-5 w-5" fill={isSaved(item) ? 'currentColor' : 'none'} />
                        </button>
                      </div>

                      {/* Tags at bottom of image */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {item.duration && (
                          <span className="text-xs px-3 py-1.5 bg-blue-600/80 backdrop-blur-xl text-white rounded-full flex items-center gap-1 font-semibold">
                            <Clock className="h-3 w-3" />
                            {item.duration}
                          </span>
                        )}
                        {item.difficulty && (
                          <span className="text-xs px-3 py-1.5 bg-purple-600/80 backdrop-blur-xl text-white rounded-full font-semibold">
                            {item.difficulty}
                          </span>
                        )}
                        {item.impact && (
                          <span className={'text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-xl ' + (item.impact === 'Very High' ? 'bg-green-600/80 text-white' : item.impact === 'High' ? 'bg-blue-600/80 text-white' : 'bg-purple-600/80 text-white')}>
                            {item.impact}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section - Bottom Half */}
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 line-clamp-1">{item.name}</h3>
                      <p className="text-sm sm:text-base text-purple-200 mb-4 md:mb-5 line-clamp-2 leading-relaxed">{item.description}</p>

                      {/* Stats Row */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.practitioners && (
                          <span className="text-xs px-3 py-1.5 bg-pink-600/30 text-pink-200 rounded-full flex items-center gap-1 font-semibold">
                            <Users className="h-3 w-3" />
                            {item.practitioners}
                          </span>
                        )}
                        {item.followers && (
                          <span className="text-xs px-3 py-1.5 bg-amber-600/30 text-amber-200 rounded-full flex items-center gap-1 font-semibold">
                            <Users className="h-3 w-3" />
                            {item.followers}
                          </span>
                        )}
                        {item.frequency && (
                          <span className="text-xs px-3 py-1.5 bg-indigo-600/30 text-indigo-200 rounded-full font-semibold">
                            {item.frequency}
                          </span>
                        )}
                      </div>

                      {/* Popularity Bar */}
                      {item.popularity && (
                        <div className="mb-5">
                          <div className="flex items-center justify-between text-sm text-purple-300 mb-2">
                            <span className="font-semibold">Popularity</span>
                            <span className="font-bold">{item.popularity}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: item.popularity + '%' }}></div>
                          </div>
                        </div>
                      )}

                      {/* Try it Now Button */}
                      <button 
                        onClick={() => setSelectedItem(item)}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-base font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                      >
                        <Play className="h-5 w-5" />
                        Try it Now
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 px-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={'px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all flex items-center gap-2 ' + (currentPage === 1 ? 'bg-white/5 text-gray-500 cursor-not-allowed' : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-xl')}
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={'w-10 h-10 sm:w-12 sm:h-12 rounded-lg md:rounded-xl font-bold text-sm md:text-base transition-all ' + (currentPage === page ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/50' : 'bg-white/10 backdrop-blur-xl border border-white/20 text-purple-300 hover:bg-white/20')}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={'px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all flex items-center gap-2 ' + (currentPage === totalPages ? 'bg-white/5 text-gray-500 cursor-not-allowed' : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-xl')}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl shrink-0"
                  style={{ background: 'radial-gradient(circle, ' + selectedItem.color + '40, ' + selectedItem.color + '20)', border: '3px solid ' + selectedItem.color }}>
                  {selectedItem.emoji || <selectedItem.icon className="h-8 w-8" style={{ color: selectedItem.color }} />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.name}</h3>
                  <p className="text-purple-200">{selectedItem.description}</p>
                </div>
              </div>
              <button onClick={() => setSelectedItem(null)} className="text-white hover:text-purple-300 text-3xl"></button>
            </div>

            {selectedItem.benefits && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Benefits</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedItem.benefits.map((b, i) => (
                    <li key={i} className="text-purple-200 text-sm flex gap-2 items-center bg-white/5 p-2 rounded-lg">
                      <span className="text-green-400"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedItem.steps && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Steps</h4>
                <ol className="space-y-2">
                  {selectedItem.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 bg-white/5 p-3 rounded-lg">
                      <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <span className="text-purple-200">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {selectedItem.practices && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Core Practices</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedItem.practices.map((p, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10 text-purple-200 text-sm">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => { 
                setActivePractice(selectedItem)
                setPracticeType(activeTab)
                setSelectedItem(null)
              }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5" />
              Start Practice Now
            </button>
          </div>
        </div>
      )}

      {/* Practice Pages */}
      {activePractice && practiceType === 'meditations' && (
        <MeditationPractice meditation={activePractice} onBack={() => { setActivePractice(null); setPracticeType(null); }} />
      )}
      {activePractice && practiceType === 'spirituality' && (
        <SpiritualityPractice discipline={activePractice} onBack={() => { setActivePractice(null); setPracticeType(null); }} />
      )}
      {activePractice && practiceType === 'habits' && (
        <HabitPractice habit={activePractice} onBack={() => { setActivePractice(null); setPracticeType(null); }} />
      )}
    </section>
  )
}

export default MeditationTypes
