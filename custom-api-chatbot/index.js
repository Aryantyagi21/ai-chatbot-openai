const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const faqData = require('./faqData'); // Keep for later use

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(bodyParser.json());

// Create access log stream with proper path handling
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);

// Setup HTTP request logging
app.use(morgan('combined', { stream: accessLogStream }));

// POST /chat route
app.post('/chat', (req, res) => {
  const userInput = req.body.message;
  console.log(`User asked: ${userInput}`);

  // Sample static response for now
  const answer = "Sample response";

  res.json({ answer });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server connected to port ${PORT}`);
});
