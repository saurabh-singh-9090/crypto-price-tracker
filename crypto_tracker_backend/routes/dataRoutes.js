const express = require('express');
const { getData } = require('../controllers/dataController');

const router = express.Router();

router.get('/crypto/:symbol', getData);

module.exports = router;
