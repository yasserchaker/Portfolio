import { motion } from "motion/react";

function Skills() {
  const technologies = [
    { name: "React", logo: "/videos/react.png", color: "from-cyan-500/40 via-blue-500/40 to-purple-500/40", glow: "shadow-cyan-500/60" },
    { name: "TypeScript", logo: "/videos/typescript.png", color: "from-blue-500/40 via-indigo-500/40 to-purple-500/40", glow: "shadow-blue-500/60" },
    { name: "Tailwind CSS", logo: "/videos/tailwind.png", color: "from-cyan-400/40 via-teal-500/40 to-blue-500/40", glow: "shadow-cyan-500/60" },
    { name: "Node.js", logo: "/videos/nodejs.png", color: "from-green-500/40 via-emerald-500/40 to-teal-500/40", glow: "shadow-green-500/60" },
    { name: "Python", logo: "/videos/python.png", color: "from-blue-400/40 via-cyan-500/40 to-purple-500/40", glow: "shadow-blue-500/60" },
    { name: "MongoDB", logo: "/videos/mongodb.png", color: "from-green-500/40 via-teal-500/40 to-cyan-500/40", glow: "shadow-green-500/60" },
    { name: "AI/ML", logo: "/videos/ai.png", color: "from-purple-500/40 via-pink-500/40 to-rose-500/40", glow: "shadow-purple-500/60" },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section
      id="skills"
      className="
        relative min-h-screen w-full 
        flex flex-col items-center justify-center 
        px-4 sm:px-6 py-20 sm:py-24 
        overflow-hidden
      "
    >
      {/* Title */}
      <motion.h2
        className="
          text-3xl sm:text-4xl md:text-5xl 
          font-extrabold text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
          mb-12 sm:mb-16
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        Technologies & Skills
      </motion.h2>

      {/* Two feature cards */}
      <div
        className="
          w-full max-w-5xl 
          grid grid-cols-1 md:grid-cols-2 
          gap-6 sm:gap-8 mb-10 sm:mb-16
        "
      >
        <div className="
          p-5 sm:p-6 
          rounded-3xl 
          bg-white/5 
          border border-cyan-400/20
          shadow-lg 
          hover:shadow-cyan-400/40 
          transition-all duration-300
        ">
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-2">
            Web Development
          </h3>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Full-stack development with React, Node.js, Express, and MongoDB,
            building responsive, modern, and scalable web applications.
          </p>
        </div>

        <div className="
          p-5 sm:p-6 
          rounded-3xl 
          bg-white/5 
          border border-purple-400/20
          shadow-lg 
          hover:shadow-purple-400/40 
          transition-all duration-300
        ">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-2">
            AI & Machine Learning
          </h3>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Applied AI & ML using modern models and APIs, creating intelligent,
            interactive features and practical AI-powered solutions.
          </p>
        </div>
      </div>

      {/* Scrolling logos */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8">
        <div className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap">
          {duplicatedTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`
                min-w-[110px] sm:min-w-[130px] 
                h-28 sm:h-32 
                p-3 sm:p-4 
                rounded-2xl 
                flex flex-col items-center justify-center 
                bg-gradient-to-br ${tech.color} 
                shadow-xl ${tech.glow}
                hover:scale-110 
                transition-transform duration-300
              `}
              whileHover={{ y: -6 }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-10 h-10 sm:w-14 sm:h-14 mb-2 object-contain"
              />
              <p className="text-white font-bold text-xs sm:text-sm text-center">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;
