const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
// Middleware
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors({
  origin: 'https://portfolio-tau-lake-u67e4furea.vercel.app/', 
  methods: ['GET','POST','PUT','DELETE']
}));

// Import routes
const emailRouter = require('./routers/email');
const aiRouter = require('./routers/ai')
// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Email route
app.use('/api/email', emailRouter);
app.use('/api/ai' , aiRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
