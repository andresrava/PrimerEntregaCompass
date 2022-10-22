const express = require('express');
//const productosRoutes = require('./routes/productosRoutes');


const mysql = require('mysql');
const app = express();
app.use(express.json());

const mysqlConnection = require('./db/database.js');

// Routes
app.use(require('./routes/productosRoutes.js'));


// Settings
app.set('port', process.env.PORT || 3000);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})
