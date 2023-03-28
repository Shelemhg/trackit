const mongodb = require('../config/db.config.js');

//  Names of the Database and Collections from the db.config file
const database = require('../config/db.config.js').database;
const collectionAliexpress = require('../config/db.config.js').collectionAliexpress;





const getAll = async (req, res, next) => {
    try {
        mongodb
            .getDb()
            .db(database)
            .collection(collectionAliexpress)
            .find()
            .toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200)
            .json(lists);
        });
    } catch (err1) {
		res.status(500).json(err1);
        console.log(err1.message);
	}
};


const getSingle = async (req, res, next) => {
    try {
        const skuSearch =  req.params.sku.toUpperCase();      
        mongodb
            .getDb()
            .db(database)
            .collection(collectionAliexpress)
            .find({ sku: skuSearch })
            .toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200)
                .json(lists[0]);
            });
    } catch (err2){
        res.status(500).json(err2);
        console.log(err2.message);
    }
};


const createProduct = async (req, res, next) => {
    try {
        const newDate = new Date();

        const newProduct = {
            sku: req.body.sku.toUpperCase(),
            title: req.body.title,
            price: req.body.price,
            date: newDate,
            imageUrl: req.body.imageUrl,
            quantity: req.body.quantity,
            url: req.body.url,
            comment: req.body.comment
        };
        const response = await mongodb    
            .getDb()
            .db(database)
            .collection(collectionAliexpress)
            .insertOne(newProduct);
            
        if (response.acknowledged) {
            res.status(201)
            .json(response);
            console.log('Information saved to DB succesfully');
        } else {
            res.status(500)
            .json(response.error || 'Some error occurred while creating the contact.');
            console.log('Upload of info failed.');
        }
    } catch (err3) {
		res.status(500).json(err3);
    }
};


const updateProduct = async (req, res) => {
    try {
        const skuSearch =  req.params.sku;
        const newDate = new Date();
        // TODO Check the correct update of the date

        const updatedProduct = {
            $set: req.body
        };

        const response = await mongodb    
            .getDb()
            .db(database)
            .collection(collectionAliexpress)
            .updateOne({ sku: skuSearch }, updatedProduct);
        
        if (response.modifiedCount > 0) {
            res.status(204).json(response);
            console.log('Product information updated in DB succesfully');
        } else {
            res.status(500).json(response.error || 'Some error occurred while updating the product.');
            console.log('Update of product failed.');
        }
    } catch (err4) {
		res.status(500);
        console.log(err4);
	}
};


const deleteProduct = async (req, res) => {
    try {
        const skuSearch =  req.params.sku;
        const response = await mongodb
            .getDb()
            .db(database)
            .collection(collectionAliexpress)
            .deleteOne({ sku : skuSearch }, true);
            console.log(response);
        if (response.deletedCount > 0) {
            res.status(200).send();
            console.log(skuSearch + ' product DELETED');
        } else {
            res.status(500).json(response.error || 'An error occurred while deleting the product.');
            console.log('Unable to Delete');
        }
    } catch (err5) {
		res.status(500).json(err5);
    }
};

module.exports = { 
    getAll, 
    getSingle, 
    createProduct,
    updateProduct,
    deleteProduct
};