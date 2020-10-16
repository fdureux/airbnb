const express = require('express');
const router = express.Router();

const users = require('./users');
const accomodations = require('./accomodations');
const pictures = require('./pictures');
const reservations = require('./reservations');


router.use('/users', users);
router.use('/accomodations', accomodations);
router.use('/pictures', pictures);
router.use('/reservations', reservations);


module.exports = router; 