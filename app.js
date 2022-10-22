const express = require('express');
const mysql = require('mysql');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use(express.json());

// Routes
app.use(express.json());
app.use(require('./routes/productosRoutes.js'));


// Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});
