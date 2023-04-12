const express = require('express');
const router = express.Router();

const { auth } = require('express-openid-connect');


// Swagger Route
router.use('/', require('./swagger'));

//  Amazon Route
router.use('/amazon', require('./amazon'));

// Ebay Route 
router.use('/ebay', require('./ebay'));

//  Alibaba Route
router.use('/alibaba', require('./alibaba'));

//  Aliexpress Route
router.use('/aliexpress', require('./aliexpress'));



module.exports = router;