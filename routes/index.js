const express = require('express');
const router = express.Router();

const { auth } = require('express-openid-connect');


// Swagger Route
router.use('/', require('./swagger'));

//  Amazon Route
router.use('/amazon', require('./amazon'));

// Ebay Route 
router.use('/ebay', require('./ebay'));

//  Alibaba Route
router.use('/alibaba', require('./alibaba'));

//  Aliexpress Route
router.use('/aliexpress', require('./aliexpress'));

// Auth0 config and routes
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: 'https://trackit-km9j.onrender.com',
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: process.env.ISSUER_BASE_URL
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// router.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });





module.exports = router;