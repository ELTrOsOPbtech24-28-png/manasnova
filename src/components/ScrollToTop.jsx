import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-zen-600 via-primary-600 to-accent-600 text-white rounded-full shadow-2xl hover:shadow-zen-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce-gentle group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop