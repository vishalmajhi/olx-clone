const express = require('express');
const app = express();
const mongoDb = require("./utils/db");
const bodyParser = require('body-parser');
const userrouter = require('./Router/router');
const router = require('./Router/router');
const cors = require('cors');
const port = process.env.PORT || 5000;

// Use bodyParser.json() for parsing JSON request bodies
app.use(bodyParser.json());

// Define your CORS options to allow requests from your React app
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the correct origin of your React app
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Use the 'cors' middleware with the defined options
app.use(cors(corsOptions));

// Define your routes
app.use("/api/v1", router);

// Start the server
app.get('/', (req, res) => {
  res.send('Hello, server is running...');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Initialize the MongoDB connection
mongoDb();
