const express = require('express');
const router = express.Router();

const ebayController = require('../controllers/ebay');
// TODO Validator
const {
    validateCreateProductEbay, 
    // validateUpdateProductE,
    validateDeleteEbay} = require('../validations/ebayValidation')



    router.get('/', ebayController.getAll);
    router.get('/:epid', ebayController.getSingle);
    router.post('/', validateCreateProductEbay, ebayController.createProduct);
    router.delete('/:epid', validateDeleteEbay, ebayController.deleteProduct);


    module.exports = router;