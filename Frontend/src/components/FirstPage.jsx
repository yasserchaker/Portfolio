import { motion } from "motion/react";

function FirstPage() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="space-y-4 lg:space-y-8"
        >
          {/* Mobile Photo - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
            className="lg:hidden flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30"
              >
                <img 
                  src="/videos/Untitled (12).png" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-lg -z-10"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Benbattouche</h3>
              <p className="text-xs text-cyan-400 font-medium">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="space-y-2 lg:space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-semibold text-gray-300">
              Web Solutions & Data-Driven Insights
            </h2>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="bg-white/5 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-blue-500/20 shadow-xl shadow-blue-500/10"
          >
            <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
              Crafting elegant solutions with modern technologies. Specializing in building
              scalable web applications and transforming complex data into actionable insights.
              Passionate about clean code, user experience, and innovative problem-solving.
            </p>
          </motion.div>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="flex flex-wrap gap-2 lg:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-base bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg lg:rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-base bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg lg:rounded-xl border-2 border-blue-400/50 hover:bg-white/20 hover:border-blue-400 transition-all duration-300"
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="/cv/portfolio.pdf"
              download="/Chaker_Benbattouche_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-base bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg lg:rounded-xl border-2 border-purple-400/50 hover:bg-white/20 hover:border-purple-400 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Tech Stack Icons/Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="flex flex-wrap gap-2 lg:gap-3"
          >
            {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'JavaScript'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                viewport={{ amount: 0.5 }}
                className="px-2.5 lg:px-4 py-1 lg:py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-xs lg:text-sm font-medium rounded-md lg:rounded-lg border border-blue-400/30"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Portrait Image - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="hidden lg:flex justify-start items-start"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img 
              src="/videos/Untitled (12).png" 
              alt="Developer Portrait" 
              className="w-full max-w-sm rounded-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FirstPage;