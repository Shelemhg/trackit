const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.listen(port, () => {    
    console.log('listening on port ', port);
});

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