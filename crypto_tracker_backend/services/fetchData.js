const axios = require('axios');

async function fetchCryptoData(symbols) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbols.join(',')}&vs_currencies=usd`);
        return response.data;
    } catch (error) {
        console.error('Error fetching crypto data:', error);
        return null;
    }
}

module.exports = { fetchCryptoData };
