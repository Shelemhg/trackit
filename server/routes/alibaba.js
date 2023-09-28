const express = require('express');
const router = express.Router();

const alibabaController = require('../controllers/alibaba');
// TODO Validator
const {
    validateCreateProductAlibaba, 
    validateUpdateProductAlibaba,
    validateDeleteAlibaba} = require('../validations/alibabaValidation')



router.get('/', alibabaController.getAll);

router.get('/:asin', alibabaController.getSingle);

router.post('/', validateCreateProductAlibaba, alibabaController.createProduct);

router.put('/:asin', validateUpdateProductAlibaba, alibabaController.updateProduct);

// TODO: Possibly add the validateDelete function after fixing it
router.delete('/:asin', validateDeleteAlibaba, alibabaController.deleteProduct);




module.exports = router;