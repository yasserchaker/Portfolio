const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Email and message are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // transporter = the server's Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS  // your App Password
      }
    });

    // send to YOUR email address
await transporter.sendMail({
  from: process.env.EMAIL_USER,   // your Gmail only
  to: process.env.EMAIL_USER,     // you receive the mail
  replyTo: email,                 // visitor's email (this is what you want!)
  subject: "New message from portfolio website",
  text: `Sender email: ${email}\n\nMessage:\n${message}`
});

    res.status(200).json({
      success: true,
      email : email,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

module.exports = router;