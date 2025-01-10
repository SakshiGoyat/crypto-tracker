const CryptoData = require("../models/crypto");
const fetchCryptoData = require("../utils/fetchCrypto");
const cron = require("node-cron");

const fetchAndStoreCryptoData = async () => {
  try {
    const data = await fetchCryptoData(); // Use the utility function to fetch data

    for (const coin of data) {
      await CryptoData.create({
        coin: coin.id,
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
      });
    }

    console.log("Crypto data fetched and stored successfully.");
  } catch (error) {
    console.error("Error fetching and storing crypto data:", error.message);
  }
};

// Schedule the job to run every 2 hours
cron.schedule("0 */2 * * *", fetchAndStoreCryptoData);

module.exports = fetchAndStoreCryptoData;
