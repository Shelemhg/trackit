const express = require('express');
const router = express.Router();

const { auth } = require('express-openid-connect');


//Added Swagger Routes
router.use('/', require('./swagger'));



//  Added Amazon Routes
router.use('/amazon', require('./amazon'));




// Oauth config and routes
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: 'http://localhost:3000',
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});





module.exports = router;