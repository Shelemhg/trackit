const express = require('express');
const router = express.Router();

const aliexpressController = require('../controllers/aliexpress');
// TODO Validator
const {
    validateCreateProductAliexpress, 
    validateUpdateProductAliexpress,
    validateDeleteAliexpress} = require('../validations/aliexpressValidation')



router.get('/', aliexpressController.getAll);

router.get('/:sku', aliexpressController.getSingle);

router.post('/', validateCreateProductAliexpress, aliexpressController.createProduct);

router.put('/:sku', validateUpdateProductAliexpress, aliexpressController.updateProduct);

// TODO: Possibly add the validateDelete function after fixing it
router.delete('/:sku', validateDeleteAliexpress, aliexpressController.deleteProduct);




module.exports = router;