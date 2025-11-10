import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-red-400">🚨 Something went wrong</h1>
            <div className="bg-gray-800 p-6 rounded-lg mb-4">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">Error:</h2>
              <p className="text-red-300 mb-4">{this.state.error?.toString()}</p>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Stack Trace:</h3>
              <pre className="text-sm text-gray-300 overflow-auto max-h-64">
                {this.state.errorInfo?.componentStack}
              </pre>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
