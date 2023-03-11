const express = require('express');
const router = express.Router();

// TODO Amazon Controller

// TODO Validator


router.get('/', amazonController.getAll);

router.get('/:asin', amazonController.getSingle);

router.post('/', validateCreateProduct, amazonController.createProduct);

router.put('/:asin', validateCreateProduct, amazonController.updateProduct);

router.delete('/:asin', amazonController.deleteProduct);




module.exports = router;