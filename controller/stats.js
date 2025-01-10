const CryptoData = require("../models/crypto");

module.exports = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(coin)) {
      return res.status(400).json({ error: "Invalid coin parameter" });
    }

    const latestData = await CryptoData.findOne({ coin })
      .sort({ timestamp: -1 })
      .exec();

    if (!latestData) {
      return res
        .status(404)
        .json({ error: "No data found for the requested coin" });
    }

    const { price, marketCap, change24h } = latestData;
    res.json({ price, marketCap, "24hChange": change24h });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
