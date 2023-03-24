const express = require('express');
const router = express.Router();

const amazonController = require('../controllers/amazon');
// TODO Validator
const {
    validateCreateProduct, 
    validateUpdateProduct,
    validateDelete} = require('../validations/newProductValidation')



router.get('/', amazonController.getAll);

router.get('/:asin', amazonController.getSingle);

router.post('/', validateCreateProduct, amazonController.createProduct);

router.put('/:asin', validateUpdateProduct, amazonController.updateProduct);

// TODO: Possibly add the validateDelete function after fixing it
router.delete('/:asin', amazonController.deleteProduct);




module.exports = router;