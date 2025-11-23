import { motion } from "motion/react";
import PhotoProjects from "./PhotoProjects";

function Projects() {
  const projects = [
    { 
      title: "My Portfolio", 
      tech: ["React", "Node.js", "express"],
      description: "Full-featured online shopping platform with secure payments and inventory management.",
      github: "https://github.com/chaker/portfolio",
      website: "https://demo-ecommerce.com",
      media: [
        { type: "video", url: "/videos/video-portfolio.mp4" },
        { type: "image", url: "/videos/capture1.png" },
        { type: "image", url: "/videos/capture2.png" },
      ]
    },
  ];

  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-6xl w-full space-y-12"
      >
        <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ amount: 0.3 }}
      className="
        flex flex-col lg:flex-row 
        items-center lg:items-start 
        justify-between 
        gap-4 lg:gap-12
      "
    >
      {/* Mobile: Media with Buttons Below */}
      <div className="flex lg:hidden flex-col items-center gap-3 w-full">
        <PhotoProjects 
          media={project.media}
          projectTitle={project.title}
          projectIndex={index}
        />
        
        {/* Mobile Buttons */}
        <div className="flex gap-2 w-full px-2">
          <motion.a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg text-white font-semibold shadow-lg"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Website
          </motion.a>
          
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs bg-white/10 backdrop-blur-sm rounded-lg text-cyan-300 font-semibold border border-cyan-500/30 hover:border-cyan-400"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>

      {/* Desktop: Media Only */}
      <div className="hidden lg:block">
        <PhotoProjects 
          media={project.media}
          projectTitle={project.title}
          projectIndex={index}
        />
      </div>

      {/* Content - Hidden on Mobile */}
      <motion.div 
        className="
          relative 
          hidden lg:flex
          w-full lg:w-[55%] 
          flex-col
          space-y-6 
          bg-linear-to-br 
          from-purple-900/30 via-blue-900/20 to-cyan-900/30 
          backdrop-blur-xl 
          rounded-2xl 
          border border-cyan-500/20 
          p-6 sm:p-7 
          shadow-2xl 
          overflow-hidden group
        "
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >

        {/* Background Animation (desktop only for performance) */}
        <motion.div 
          className="absolute inset-0 hidden lg:block bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{ 
            background: [
              "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1), transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1), transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1), transparent 50%)",
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Particles — desktop only */}
        <div className="absolute inset-0 opacity-20 pointer-events-none hidden lg:block">
          <motion.div 
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div 
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            style={{ top: "60%", right: "15%" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-5">

          {/* Title */}
          <motion.h3 
            className="
              text-2xl sm:text-3xl 
              font-bold 
              bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 
              bg-clip-text text-transparent

              /* MOBILE */
              text-center lg:text-left
            "
            whileHover={{ scale: 1.02 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="
            text-gray-300 
            text-sm sm:text-base 
            leading-relaxed
            lg:text-left text-center
          ">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 justify-start">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, y: -3 }}
                className="
                  px-3 py-1.5 
                  bg-linear-to-r from-cyan-500/10 to-purple-500/10 
                  rounded-lg 
                  text-xs sm:text-sm 
                  font-medium text-cyan-300 
                  border border-cyan-500/30 
                  hover:border-cyan-400 
                  hover:shadow-lg 
                  hover:shadow-cyan-500/20 
                  transition-all 
                  backdrop-blur-sm
                "
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons - Desktop Only */}
          <div className="flex gap-4 pt-2">
            {/* Website */}
            <motion.a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center justify-center gap-2 
                px-5 py-3 
                text-sm sm:text-base 
                bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 
                rounded-xl 
                text-white font-semibold 
                shadow-xl 
                hover:shadow-2xl 
              "
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Visit Website
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center justify-center gap-2 
                px-5 py-3 
                text-sm sm:text-base 
                bg-linear-to-r from-purple-500/20 to-cyan-500/20 
                backdrop-blur-sm 
                rounded-xl 
                text-cyan-300 font-semibold 
                border border-cyan-500/30 
                hover:border-cyan-400 
                hover:shadow-lg 
              "
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </motion.a>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}

export default Projects;
