import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center px-3 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="w-full max-w-[1600px] space-y-4 lg:space-y-8"
      >
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
          {/* Left: 2x2 grid of small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ amount: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-xl lg:rounded-2xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-xl lg:rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 lg:p-10 h-full flex flex-col items-center text-center min-h-[200px] lg:min-h-[280px]">
                <div className="relative mb-4 lg:mb-6">
                  <div className="absolute -inset-2 bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-spin"></div>
                  <img src="/videos/gojo.gif" alt="Gojo" className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full object-cover ring-4 ring-blue-500/40" />
                </div>
                <h4 className="text-white font-semibold text-lg lg:text-2xl">Hi I'm Chaker</h4>
                <p className="text-gray-300 text-sm lg:text-base mt-2 lg:mt-3">3rd year CS student at USTHB.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ amount: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-xl lg:rounded-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-xl lg:rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 lg:p-10 h-full min-h-[200px] lg:min-h-[280px]">
                <h4 className="text-white font-semibold text-lg lg:text-2xl mb-3 lg:mb-4 flex items-center gap-2"> <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>Flexibility</h4>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">I believe in staying adaptable and constantly growing. I welcome new opportunities as learning, freelance work, or collaborations that help me become a stronger developer.</p>
              </div>
            </motion.div>

            {/* Card 3 - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              viewport={{ amount: 0.5 }}
              className="relative group sm:col-span-2">
              <div className="absolute -inset-px rounded-xl lg:rounded-2xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-xl lg:rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 lg:p-10 w-full h-full min-h-40 lg:min-h-[200px] flex flex-col">
                <div className="flex justify-center mb-1">
                 
                </div>
                <h4 className="text-white font-semibold text-lg lg:text-2xl mb-3 lg:mb-4 flex items-center gap-2"> <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>My Passion</h4> 
                <p className="text-gray-300 text-sm lg:text-base">I'm passionate about coding, exploring new technologies, and constantly improving my development skills. I enjoy building real projects, experimenting with new ideas, and working on AI features that make applications smarter and more useful.</p>
              </div>
            </motion.div>
        
          </div>

          {/* Right: Big card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-px rounded-xl lg:rounded-2xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-slate-900/95 backdrop-blur-md rounded-xl lg:rounded-2xl p-6 lg:p-12 h-full flex flex-col">
              <h3 className="text-xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                About Me
              </h3>
              <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
               
                I'm a 3rd year CS student at USTHB, passionate about Web Development and AI. I enjoy building modern, efficient solutions with attention to detail and user experience. I value clarity, performance, and continuous learning.
              </p>
              
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;