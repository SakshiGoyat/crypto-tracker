const CryptoData = require("../models/crypto");

module.exports = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin || !["bitcoin", "matic-network", "ethereum"].includes(coin)) {
      return res.status(400).json({ error: "Invalid coin parameter" });
    }

    const records = await CryptoData.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100)
      .exec();

    if (records.length === 0) {
      return res
        .status(404)
        .json({ error: "Not enough data for standard deviation calculation" });
    }

    const prices = records.map((record) => record.price);
    const mean = prices.reduce((a, b) => a + b, 0) / prices.length;

    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;

    const standardDeviation = Math.sqrt(variance);
    res.json({ deviation: parseFloat(standardDeviation.toFixed(2)) });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
