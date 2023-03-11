const express = require('express');
const router = express.Router();


//ADDED SWAGGER ROUTES
router.use('/', require('./swagger'));




module.exports = router;