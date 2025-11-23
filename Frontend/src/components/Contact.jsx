import { motion } from "motion/react";
import { useState , useEffect } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const apiBase = 'https://portfolio-1bow.onrender.com';
      const res = await fetch(`${apiBase}/api/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const err = data.error || 'Failed to send message';
        console.error('Email send error:', err);
        alert(err);
        return;
      }

      setSubmitted(true);
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Could not send message — please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center px-3 lg:px-8 py-8 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="w-full lg:max-w-6xl space-y-3 lg:space-y-6"
      >
        <motion.div 
          className="relative text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-96 lg:h-96 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <motion.h2 
            className="relative text-2xl lg:text-5xl font-black text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative inline-block">
              {/* Animated gradient text */}
              <span className="bg-linear-to-r  from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                Get In Touch
              </span>
              
              {/* Sparkle effects */}
              <motion.span
                className="absolute -top-1  -right-2 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span
                className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.span
                className="absolute -bottom-1 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Underline effect */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent rounded-full"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left Side - Content - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="hidden lg:flex flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 shadow-xl flex-row items-center justify-center"
          >
               <div className="flex-1/2">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Let's Connect</h3>
            <p className="text-gray-300 text-center">
             Available for freelance work and exciting opportunities.
            Let’s build something great Reach out to me.
            </p>
            </div>
            <div className="relative mb-6 ">
             
              <img src="/videos/goku-gif.gif" alt="Goku" className="relative w-full h-64 rounded-7xl " />
            </div>
         
          </motion.div>

          {/* Right Side - Form - Full Width on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="w-full lg:flex-1 bg-linear-to-br from-pink-500/10 via-purple-500/10 to-rose-500/10 lg:bg-white/5 backdrop-blur-md rounded-lg lg:rounded-2xl p-3 lg:p-6 border-2 border-pink-400/40 lg:border-pink-500/20 shadow-lg shadow-pink-500/20 lg:shadow-xl space-y-2.5 lg:space-y-4"
          >
          <p className="text-gray-300 text-xs lg:text-base text-center leading-snug lg:leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, fill out the form below!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-2.5 lg:space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 text-xs lg:text-sm font-medium mb-0.5 lg:mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-2.5 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-md lg:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 text-xs lg:text-sm font-medium mb-0.5 lg:mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="2"
                className="w-full px-2.5 lg:px-4 py-1.5 lg:py-2.5 text-xs lg:text-base bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-md lg:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
              className={
                "w-full px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-base bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 text-white font-bold rounded-md lg:rounded-xl shadow-md shadow-pink-500/30 lg:shadow-lg lg:shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 " +
                (submitting ? 'opacity-60 cursor-not-allowed' : '')
              }
            >
              {submitting ? 'Sending...' : (submitted ? 'Message Sent! ✓' : 'Send Message')}
            </motion.button>
          </form>

          <div className="flex flex-col sm:flex-row gap-1.5 lg:gap-3 justify-center pt-2 lg:pt-3 border-t border-gray-700/50">
            <motion.a
              href="https://www.linkedin.com/in/chaker-yasser-benbattouche-593a9a351/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 lg:px-5 py-1 lg:py-2 bg-linear-to-r from-blue-500/20 to-cyan-500/20 lg:bg-white/10 backdrop-blur-sm text-white font-medium rounded-md lg:rounded-lg border border-blue-400/40 lg:border-blue-400/30 hover:bg-white/20 hover:border-blue-400 transition-all duration-300 text-center text-xs lg:text-sm"
            >
              LinkedIn
            </motion.a>
            
            <motion.a
              href="https://github.com/yasserchaker"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 lg:px-5 py-1 lg:py-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 lg:bg-white/10 backdrop-blur-sm text-white font-medium rounded-md lg:rounded-lg border border-purple-400/40 lg:border-purple-400/30 hover:bg-white/20 hover:border-purple-400 transition-all duration-300 text-center text-xs lg:text-sm"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;