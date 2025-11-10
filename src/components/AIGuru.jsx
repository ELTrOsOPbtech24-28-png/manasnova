import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Loader2 } from 'lucide-react'

const AIGuru = () => {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hello! I'm your AI Guru. 🙏 I'm here to guide you on your wellness journey. How are you feeling today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // AI Response suggestions based on keywords
  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('stress') || msg.includes('anxious') || msg.includes('overwhelm')) {
      return "I understand stress can feel overwhelming. Let's take a moment together. Try this: Take a deep breath in for 4 counts, hold for 4, and exhale for 4. Would you like me to guide you through a quick meditation? 🧘‍♀️"
    } else if (msg.includes('sad') || msg.includes('down') || msg.includes('depressed')) {
      return "I hear you, and it's okay to feel this way. Remember, emotions are temporary. What's one small thing that usually brings you comfort? Sometimes the smallest joys can shift our perspective. 💙"
    } else if (msg.includes('happy') || msg.includes('great') || msg.includes('good')) {
      return "That's wonderful to hear! 🌟 Happiness is precious. What made today special? Reflecting on positive moments helps train our minds to notice more good things."
    } else if (msg.includes('sleep') || msg.includes('tired') || msg.includes('insomnia')) {
      return "Good sleep is essential for wellbeing. Try establishing a calming bedtime routine: dim lights 1 hour before bed, avoid screens, try gentle stretches, and perhaps a guided meditation. Would you like some sleep meditation recommendations? 🌙"
    } else if (msg.includes('focus') || msg.includes('distract') || msg.includes('concentrate')) {
      return "Staying focused in our busy world is challenging. Try the Pomodoro Technique: 25 minutes of focused work, then a 5-minute break. During breaks, try mindful breathing. What task would you like to focus on? 🎯"
    } else if (msg.includes('motivation') || msg.includes('inspire')) {
      return "You have the strength within you! 💪 Remember: \"The journey of a thousand miles begins with a single step.\" What's one small action you can take today toward your goals? Let's celebrate progress, not perfection."
    } else if (msg.includes('meditat')) {
      return "Meditation is a powerful practice! For beginners, I recommend starting with just 3-5 minutes of breath awareness. Sit comfortably, close your eyes, and simply notice your breath. No judgment, just awareness. Ready to try? ✨"
    } else if (msg.includes('thank') || msg.includes('help')) {
      return "You're very welcome! I'm here for you anytime. Remember, seeking support is a sign of strength, not weakness. What else can I help you with today? 🙏"
    } else if (msg.includes('habit')) {
      return "Building lasting habits takes time and patience. Start small: attach a new habit to an existing one (habit stacking), make it easy, and track your progress. What habit would you like to build? 📈"
    } else {
      return "I'm here to support your wellness journey. Whether you need guidance on meditation, stress management, building habits, or just someone to listen, I'm here. What would you like to explore today? 🌱"
    }
  }

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const userMessage = {
        role: 'user',
        content: input,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, userMessage])
      setInput('')
      setIsTyping(true)

      // Simulate AI thinking and response
      setTimeout(() => {
        const aiResponse = {
          role: 'ai',
          content: getAIResponse(input),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setMessages(prev => [...prev, aiResponse])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickPrompts = [
    "I'm feeling stressed",
    "Need meditation help",
    "Can't sleep well",
    "Feeling unmotivated"
  ]

  return (
    <div className="card p-6 max-w-3xl mx-auto h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-zen-500 to-primary-600 rounded-full flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-calm-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">AI Guru</h3>
          <p className="text-sm text-calm-600">Always here for you</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`max-w-[75%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-primary-600 to-zen-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
              </div>
              <p className={`text-xs text-gray-500 mt-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-gray-100 p-4 rounded-2xl">
              <Loader2 className="h-5 w-5 text-zen-600 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      {messages.length === 1 && (
        <div className="py-3 flex flex-wrap gap-2">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => setInput(prompt)}
              className="px-4 py-2 text-sm bg-zen-50 text-zen-700 rounded-full hover:bg-zen-100 transition-all"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share your thoughts..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-zen-600 focus:border-transparent outline-none transition"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-zen-600 to-primary-600 text-white rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIGuru