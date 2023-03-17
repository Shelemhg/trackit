const express = require("express");
const app = express();
const mongodb = require('./config/db.config.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Whats up');
});


app
	.use(bodyParser.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(port);
		console.log(`Connected to DB and listening on ${port}`);
	}
});