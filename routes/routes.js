const express = require("express");
const router = express.Router();
require("../db/connection");

router.use(express.json());

const statsController = require('../controller/stats');
const deviationController = require('../controller/deviation');

//route for stats API
router.get('/stats', statsController);

//route for deviation API
router.get('/deviation', deviationController);

module.exports = router;