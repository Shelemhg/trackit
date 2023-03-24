const { check, validationResult } = require('express-validator');

const validateCreateProduct = [
    check('asin')
        .exists()
        .notEmpty().withMessage('ASIN cannot be empty.'),
    check('title')
        .exists()
        .notEmpty().withMessage('Title cannot be empty.'),
    check('price')
        .exists()
        .notEmpty().withMessage('Price cannot be empty.')
        .isNumeric().withMessage('Price must be a number.'),
    check('quantity')
        .exists()
        .notEmpty().withMessage('Quantity cannot be empty.')
        .isInt().withMessage('Quantity must be a number.'),
    check('url')
        .exists()
        .notEmpty().withMessage('URL cannot be empty.'),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next();
        } catch (err) {
            res.status(400);
            res.send({ errors: err.array()});
        }
    }
];

const validateUpdateProduct = [
    check('asin')
        .exists()
        .notEmpty().withMessage('ASIN cannot be empty.'),
    check('price')
        .optional()
        .isNumeric().withMessage('Price must be a number.'),
    check('quantity')
        .optional()
        .isInt().withMessage('Quantity must be a number.'),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next();
        } catch (err) {
            res.status(400);
            res.send({ errors: err.array()});
        }
    }
];


// TODO Correct the Delete validation to check if an ASIN code has been added at the end of the URL
const validateDelete = [
    check('asin')
        .exists()
        .notEmpty().withMessage('ASIN cannot be empty.'),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next();
        } catch (err) {
            res.status(400);
            res.send({ errors: err.array()});
        }
    }
];

module.exports = { 
    validateCreateProduct,
    validateUpdateProduct,
    validateDelete
 }
