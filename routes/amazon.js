const express = require('express');
const router = express.Router();

const amazonController = require('../controllers/amazon');
// TODO Validator


router.get('/', amazonController.getAll);

router.get('/:asin', amazonController.getSingle);

router.post('/', amazonController.createProduct);

router.put('/:asin', amazonController.updateProduct);

router.delete('/:asin', amazonController.deleteProduct);




module.exports = router;