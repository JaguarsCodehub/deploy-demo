const express = require('express');
// const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Endpoint 1: Basic test
app.get('/ping', (req, res) => {
  res.json({ message: 'Pong from Research Connect USA' });
  console.log('Ping received from frontend, Pong sent to frontend');
});

// Endpoint 2: Hits frontend (assumes frontend is running on port 5173)
app.get('/use-frontend', async (req, res) => {
  try {
    const response = await fetch('http://localhost:5173/ping');
    const data = await response.text();
    res.json({ frontendResponse: data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from frontend' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
