const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

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
