const cron = require('cron');
const { fetchCryptoData } = require('../services/fetchData');
const { storeData } = require('../services/storeData');

const cryptoSymbols = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'bitcoin-cash'];

async function trackData() {
    const cryptoData = await fetchCryptoData(cryptoSymbols);

    if (cryptoData) {
        await storeData(cryptoData);
    }
}

function startCronJob() {
    const job = new cron.CronJob('*/5 * * * * *', async () => {
        console.log('Fetching data...');
        await trackData();
    });

    job.start();
}

module.exports = { startCronJob };
