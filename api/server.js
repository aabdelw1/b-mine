require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Function to log data to a file
const logToFile = (message) => {
  const logFilePath = path.join(__dirname, 'user-logs.txt');
  const logEntry = `${new Date().toISOString()} - ${message}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) console.error('Error writing to log file:', err);
  });
};

// Routes
app.post('/log', (req, res) => {
  const { action } = req.body;

  if (!action) {
    return res.status(400).json({ error: 'Action is required' });
  }

  logToFile(`User performed action: ${action}`);
  console.log(`L: ${action}`);

  res.json({ message: 'Action logged successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
