const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const dns = require('dns'); dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to read JSON sent by Axios

// MongoDB Connection (Use your Compass connection string in .env)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Compass'))
    .catch(err => console.error('❌ Connection error:', err));

// Test Route: This is how we will check if the connection works
app.get('/test-connection', (req, res) => {
    res.json({ message: "Backend is talking to the Frontend!" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));