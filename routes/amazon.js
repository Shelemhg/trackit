const express = require('express');
const router = express.Router();

const amazonController = require('../controllers/amazon');
// TODO Validator
const {
    validateCreateProductAmazon, 
    validateUpdateProductAmazon,
    validateDeleteAmazon} = require('../validations/amazonValidation')



router.get('/', amazonController.getAll);

router.get('/:asin', amazonController.getSingle);

router.post('/', validateCreateProductAmazon, amazonController.createProduct);

router.put('/:asin', validateUpdateProductAmazon, amazonController.updateProduct);

// TODO: Possibly add the validateDelete function after fixing it
router.delete('/:asin', validateDeleteAmazon, amazonController.deleteProduct);




module.exports = router;