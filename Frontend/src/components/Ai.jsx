import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

function Ai() {
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: "Hi! Ask me anything about Chaker and I will answer it",
    timestamp: new Date()
  }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!input.trim() || isTyping) return;

    setMessages(prev => [...prev, { role: "user", content: input.trim(), timestamp: new Date() }]);
    const question = input.trim();
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:5000/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.answer || "Sorry, couldn't process that.", timestamp: new Date() }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error. Try again later.", timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="ai" className="h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] flex flex-col bg-white/5 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xl">🤖</div>
            <div>
              <h3 className="text-white font-semibold">AI Chat</h3>
              <p className="text-xs text-gray-400">Ask about Me</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>

        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${msg.role === 'user' ? 'bg-linear-to-r from-pink-500 to-purple-500' : 'bg-white/10 border border-white/20'} rounded-2xl px-4 py-3`}>
                <p className="text-white text-sm">{msg.content}</p>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3 flex gap-1.5">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-white/5">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." disabled={isTyping} className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 disabled:opacity-50" />
            <motion.button type="submit" disabled={isTyping || !input.trim()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all disabled:opacity-50">Send</motion.button>
          </form>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Tell me about his experience", "What are his skills?", "Show projects"].map((s, i) => (
              <button key={i} onClick={() => setInput(s)} className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">{s}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ai;
