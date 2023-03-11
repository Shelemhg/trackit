const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const port = process.env.PORT || 3000;

app.listen(port, () => {    
    console.log('listening on port ', port);
});

app.get('/', (req, res) => {
    res.send('Whats up');
});


// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));