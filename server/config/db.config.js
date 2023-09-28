const database = 'trackit';
const collectionAmazon = 'amazon';
const collectionAliexpress = 'aliexpress';
const collectionAlibaba = 'alibaba';
const collectionEbay = 'eBay';

const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

let _db;

const initDb = (callback) => {
	if (_db) {
		console.log('DB is already initialized!');
		return callback(null, _db);
	}

	MongoClient.connect(process.env.MONGODB_URI)
		.then((client) => {
		_db = client;
		callback(null, _db);
		})
		.catch((err) => {
		callback(err);
		});
};

const getDb = () => {
	if (!_db) {
		throw Error('DB not initialized');
	}
	return _db;
};


module.exports = { 
	database, 
	collectionAmazon,
	collectionAliexpress,
	collectionAlibaba,
	collectionEbay,
	initDb,
	getDb
};