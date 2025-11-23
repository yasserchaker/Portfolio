import { useState } from 'react'
import Background from './components/Background'
import NavBar from './components/NavBar'
import FirstPage from './components/FirstPage'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Ai from './components/Ai'
import { motion } from "motion/react"

function App() {
  const [count, setCount] = useState(0)
  const [showAIChat, setShowAIChat] = useState(false)

  const scrollToAI = () => {
    const aiSection = document.getElementById('ai');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="containerGeneral">
        <Background />
        <NavBar />
        
        <div className="content">
          <FirstPage />
          <About />
          <Projects />
          <Skills />
          <Ai />
          <Contact />
        </div>

        {/* Floating AI Button */}
        <motion.button
          onClick={scrollToAI}
          className="fixed bottom-8 right-8 z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Glowing rings */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 opacity-30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
          
          {/* Main button */}
          <motion.div
            className="relative w-16 h-16 bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full shadow-2xl shadow-purple-500/50 flex items-center justify-center border-2 border-purple-400/30"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            {/* AI Icon */}
            <span className="text-2xl">🤖</span>

            {/* Sparkle effect */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-rose-300 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Label on hover */}
          <motion.div
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg whitespace-nowrap border border-purple-400/30 shadow-lg shadow-purple-500/20"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            <span className="text-sm font-medium text-rose-300">Chat with AI</span>
          </motion.div>
        </motion.button>
      </div>
    </>
  )
}

export default App
