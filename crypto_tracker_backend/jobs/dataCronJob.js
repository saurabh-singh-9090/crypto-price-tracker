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

// function startCronJob() {
//     const job = new cron.CronJob('*/5 * * * * *', async () => {
//         console.log('Fetching data...');
//         await trackData();
//     });

//     job.start();
// }

// module.exports = { startCronJob };

function startInterval() {
    console.log('Starting interval to fetch crypto data every 3 seconds...');
    setInterval(async () => {
        console.log('Fetching data...');
        await trackData();
    }, 3000); // Fetch data every 3 seconds
}

module.exports = { startInterval };
