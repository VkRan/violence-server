const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

let coordinates;

// API endpoint to receive coordinates
app.post('/coordinates', (req, res) => {
  coordinates = req.body;
  console.log(coordinates); // Log the coordinates to the console
  res.send('Coordinates received'); // Send a response to the client
});

app.get('/coordinates', (req, res) => {
    res.send(coordinates);
    console.log('Get req working')
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
