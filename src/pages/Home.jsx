import MainFeature from '../components/MainFeature'
import ApperIcon from '../components/ApperIcon'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-secondary via-secondary-light to-primary">
        <div className="absolute inset-0 bg-bollywood-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-glow">
                  <ApperIcon 
                    name="Brain" 
                    className="w-12 h-12 sm:w-16 sm:h-16 text-secondary animate-pulse-slow" 
                  />
                </div>
              </div>
            </div>
            
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-4 drop-shadow-2xl tracking-tight">
              Bolly<span className="text-gold animate-glow">Brains</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
              30 engaging questions across 3 difficulty levels. Test your Bollywood knowledge!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-white/80">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <ApperIcon name="Clock" className="w-4 h-4" />
                <span>~15 minutes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <ApperIcon name="Target" className="w-4 h-4" />
                <span>30 Questions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <ApperIcon name="Trophy" className="w-4 h-4" />
                <span>3 Difficulty Levels</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Quiz Feature */}
      <main className="relative -mt-8 sm:-mt-12">
        <MainFeature />
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-surface-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <ApperIcon name="Film" className="w-8 h-8 text-primary" />
          </div>
          <p className="text-surface-300">
            © 2024 BollyBrains. Test your Bollywood knowledge and become the ultimate cinema buff!
          </p>
        </div>
      </footer>
    </div>
  )
}