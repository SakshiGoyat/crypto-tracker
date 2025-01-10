const axios = require("axios");
const Bottleneck = require("bottleneck");

const limiter = new Bottleneck({
  maxConcurrent: 1, // Allow only 1 concurrent request
  minTime: 1500, // Wait at least 1.5 seconds between requests
});

const fetchCryptoData = async () => {
  try {
    const response = await limiter.schedule(() =>
      axios.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,matic-network,ethereum",
        },
      })
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error.message);
    throw error;
  }
};

module.exports = fetchCryptoData;
