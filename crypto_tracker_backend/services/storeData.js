const Data = require('../models/Data');

async function storeData(data) {
    try {
        const dataEntries = Object.keys(data).map(symbol => ({
            symbol,
            price: data[symbol].usd
        }));
        await Data.insertMany(dataEntries);
        console.log(`Inserted ${dataEntries.length} documents into cryptos collection`);
    } catch (error) {
        console.error('Error storing data in MongoDB:', error);
    }
}

module.exports = { storeData };
