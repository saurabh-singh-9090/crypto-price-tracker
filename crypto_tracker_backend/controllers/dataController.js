const Data = require('../models/Data');

async function getData(req, res) {
    const { symbol } = req.params;
    const data = await Data.find({ symbol }).sort({ _id: -1 }).limit(20);
    res.json(data);
}

module.exports = { getData };
