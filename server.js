// Create an empty object to serve as the endpoint for all routes
let weatherData = {};

// Import necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Instantiate the express app
const app = express();

// Set up middleware to handle data parsing and enable CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'website' folder
app.use(express.static('website'));

// Define the server's port
const serverPort = 8000;

// Start the server and log a message once it is running
const server = app.listen(serverPort, () => {
    console.log(`Server is active and listening on port ${serverPort}`);
});

// Route to handle GET requests
app.get('/weatherData', (req, res) => {
    res.json(weatherData); // Send the weather data as JSON
});

// Route to handle POST requests
app.post('/updateWeather', (req, res) => {
    const receivedData = req.body;

    console.log('Received data from client:', receivedData);

    // Update the weatherData object with the new data
    weatherData.date = receivedData.date;
    weatherData.temp = receivedData.temp;
    weatherData.feeling = receivedData.feeling;

    res.json(weatherData); // Respond with the updated data
});
