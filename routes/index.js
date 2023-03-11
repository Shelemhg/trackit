const express = require('express');
const router = express.Router();


//Added Swagger Routes
router.use('/', require('./swagger'));



//  Added Amazon Routes
router.use('/', require('./amazon'));




module.exports = router;