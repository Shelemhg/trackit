const dotenv = require('dotenv');
dotenv.config();


const { MongoClient } = require('mongodb');

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('DB is already initialized');
        return callback(null, _db);
    }

    MongoClient.connect(process.env.MONGODB_URI)
}