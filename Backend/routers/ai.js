const express = require("express");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = express.Router();
const app = express();

// Load your personal data
const personalData = fs.readFileSync("./secrets/aboutChaker.JSON", "utf8");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

router.post("/ask", async (req, res) => {
  const question = req.body.question;
if (!question || question.length > 500) {
  return res.status(400).json({ error: "Invalid question." });
}
  const prompt = `
You are an AI assistant trained ONLY on the following information about Chaker. you can respond to Hi by "what are the informations that you need to know about chaker"
If the question is not about Chaker, respond with:
"I can only answer questions about Chaker."

--- DATA START ---
${personalData}
--- DATA END ---

User question: ${question}
`;

  try {
    const result = await model.generateContent(prompt);
    res.json({ answer: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating answer." });
  }
});

module.exports = router;