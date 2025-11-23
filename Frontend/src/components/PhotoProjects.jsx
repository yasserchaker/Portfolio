import { useRef, useState } from "react";
import { motion } from "motion/react";

function PhotoProjects({ media, projectTitle, projectIndex }) {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const containerWidth = container.offsetWidth;
    container.scrollTo({
      left: containerWidth * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const scrollNext = () => {
    if (currentIndex < media.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <motion.div 
      className="
        relative 
        w-[95%]          /* mobile */
        sm:w-[420px]     /* small tablets */
        md:w-[460px] 
        lg:w-[480px]     /* original width */
        h-56 sm:h-60 md:h-64 /* responsive height */
        shrink-0 rounded-2xl overflow-hidden 
        bg-linear-to-br from-purple-900/50 via-blue-900/50 to-cyan-900/50 
        group shadow-2xl
      "
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
      <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-400/60 transition-all duration-500"></div>
      
      {/* Animated stars background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[60%] left-[70%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[40%] right-[20%] w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Scrollable Media Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scrollbar-hide h-full snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {media.map((item, index) => (
          <motion.div 
            key={index} 
            className="min-w-full h-full shrink-0 snap-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0.7,
              scale: currentIndex === index ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {item.type === "image" ? (
              <motion.img 
                src={item.url} 
                alt={`${projectTitle} ${index + 1}`}
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable="false"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <video 
                src={item.url}
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Project Number Badge - Desktop */}
      <motion.div 
        className="hidden lg:block absolute top-3 left-3 px-3 py-1.5 bg-linear-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-full text-xs font-bold text-cyan-300 pointer-events-none border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        #{projectIndex + 1}
      </motion.div>

      {/* Project Title - Mobile Only */}
      <motion.div 
        className="lg:hidden absolute top-3 left-3 px-3 py-1.5 text-sm font-bold text-cyan-400 pointer-events-none drop-shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)' }}
      >
        {projectTitle}
      </motion.div>

      {/* Dots Indicator */}
      {media.length > 1 && (
        <motion.div 
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {media.map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full"
              animate={{ 
                width: i === currentIndex ? 20 : 6,
                height: 6,
                opacity: i === currentIndex ? 1 : 0.4,
                background: i === currentIndex 
                  ? "linear-gradient(90deg, #06b6d4, #a855f7)" 
                  : "#fff",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      )}

      {/* Navigation Buttons */}
      {media.length > 1 && (
        <>
          {/* Left Button */}
          {currentIndex > 0 && (
            <motion.button
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-linear-to-r from-cyan-500/30 to-purple-500/30 backdrop-blur-md rounded-full border border-cyan-400/40 text-cyan-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all z-10"
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}

          {/* Right Button */}
          {currentIndex < media.length - 1 && (
            <motion.button
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-linear-to-r from-cyan-500/30 to-purple-500/30 backdrop-blur-md rounded-full border border-cyan-400/40 text-cyan-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all z-10"
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </>
      )}
    </motion.div>
  );
}

export default PhotoProjects;
