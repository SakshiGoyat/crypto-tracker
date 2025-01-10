const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes/routes");
const fetchCryptoJob = require("./jobs/cryptoJobs");

const app = express();
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

// Start the background job
fetchCryptoJob();
