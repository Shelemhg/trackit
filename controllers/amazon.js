const mongodb = require('../config/db.config.js');

//  Names of the Database and Collections from the db.config file
const database = require('../config/db.config.js').database;
const collection = require('../config/db.config.js').collection;





const getAll = async (req, res, next) => {
    try {
        const result = await mongodb
            .getDb()
            .db(database)
            .collection(collection)
            .find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200)
            .json(lists);
        });
    } catch (err1) {
		res.status(500).json(err1);
        console.log(err1.message);
	}

    // mongodb
    //     .getDb()
    //     .db(database)
    //     .collection(collection)
    //     .find()
    //     .toArray((err, lists) => {
    //         if (err) {
    //             res.status(500).json({ message: err });
    //         }
    //     res.setHeader('Content-Type', 'application/json');
    //     res.status(200)
    //     .json(lists);
    // });
};


const getSingle = async (req, res, next) => {
    
};


const createProduct = async (req, res, next) => {
    
};


const updateProduct = async (req, res) => {
    
};


const deleteProduct = async (req, res) => {
    
};

module.exports = { 
    getAll, 
    getSingle, 
    createProduct,
    updateProduct,
    deleteProduct
};