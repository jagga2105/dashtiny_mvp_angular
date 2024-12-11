const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Dashtiny', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Mongoose Schema for AirportData
const airportDataSchema = new mongoose.Schema({
  code: String,
  lat: String,
  lon: String,
  name: String,
  city: String,
  state: String,
  country: String,
  woeid: String,
  tz: String,
  phone: String,
  type: String,
  email: String,
  url: String,
  runway_length: String,
  elev: String,
  icao: String,
  direct_flights: String,
  carriers: String,
});

const AirportData = mongoose.model('AirportData', airportDataSchema);

// API endpoint to get all airport data
app.get('/api/airportData', async (req, res) => {
  try {
    const airportData = await AirportData.find();
    res.json(airportData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
