import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 text-lg md:text-xl font-bold"
            >
              <img 
                src="/videos/Untitled (12).png" 
                alt="Benbattouche Chaker Yasser" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 object-cover"
              />
              <div>
                <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Benbattouche
                </span>
                <span className="text-white ml-2">
                  Chaker Yasser
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 text-white font-medium rounded-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 text-white font-medium rounded-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 text-white font-medium rounded-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 text-white font-medium rounded-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              Skills
            </button>
         
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-white font-medium rounded-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - Moved to Left */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors order-first"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide from Left */}
      <div className={`md:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-black/95 backdrop-blur-xl border-r border-white/20 shadow-2xl transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 space-y-2">
          <button 
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projects
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Skills
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('ai')}
            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Chat
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-400/30"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </span>
          </button>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

export default NavBar;