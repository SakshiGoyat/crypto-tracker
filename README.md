# Cryptocurrency Tracker with CoinGecko API

This project is a Node.js-based server-side application that periodically fetches cryptocurrency data (Bitcoin, Matic, and Ethereum) using the CoinGecko API and provides APIs to query the latest stats and calculate the standard deviation for the cryptocurrency prices.

---

## **Features**
1. A background job fetches the latest price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum every 2 hours.
2. Provides a `/stats` API to fetch the latest data of a specific cryptocurrency.
3. Provides a `/deviation` API to calculate the standard deviation of the last 100 price records of a specific cryptocurrency.

---

## **Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (or MongoDB Atlas for cloud deployment)

---

## **Setup and Installation**

### 1. **Clone the Repository**
```bash
git clone https://github.com/SakshiGoyat/crypto-tracker.git
cd crypto-tracker
```
### 2. **Install Dependencies**
```bash
npm install
```
### 3. **Configure Environment Variables**
```bash
MONGO_URI=mongodb+srv://<userName>:<password>@cluster0.nx130.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3000
```

### 4. **Start the Server**
```bash
npm start
```
---
The server will start running on http://localhost:3000
---
MongoDB Atlas link: https://cloud.mongodb.com/v2/67812c292eaf6b0759d695ef#/metrics/replicaSet/67812cdd02ec79698c3a717e/explorer/test/cryptodatas/find

## **API**
1. https://crypto-tracker-tf6u.onrender.com/api/stats?coin=bitcoin
2. https://crypto-tracker-tf6u.onrender.com/api/stats?coin=matic-network
3. https://crypto-tracker-tf6u.onrender.com/api/stats?coin=ethereum
4. https://crypto-tracker-tf6u.onrender.com/api/deviation?coin=bitcoin
5. https://crypto-tracker-tf6u.onrender.com/api/deviation?coin=matic-network
6. https://crypto-tracker-tf6u.onrender.com/api/deviation?coin=ethereum
