// app.js

const express = require("express");
const app = express();
const mongodb = require('./config/db.config.js');
const bodyParser = require('body-parser');

const { auth } = require('express-openid-connect');

const port = process.env.PORT || 3000;

// app.get('/', (req, res, next) => {
//     res.send('Whats up');
// });




// Auth0 config and routes
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    // baseURL: 'https://trackit-km9j.onrender.com',
	baseURL: 'http://localhost:3000',  // Local development URL
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
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
		console.log(`\nConnected to DB and listening on port: ${port}\n`);
	}
});