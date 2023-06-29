const express = require('express');
const { createtx, findtx} = require('../controllers/txhistoryController');

const router = express.Router();

router.route('/createTransaction').post(createtx);
router.route('/findTransaction').post(findtx);
module.exports = router;