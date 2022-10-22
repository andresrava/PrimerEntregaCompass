const express = require('express');

const router = express.Router();

const mysqlConnection = require('../db/database');

router.get('/v1/', (req, res) => {
    mysqlConnection.query('SELECT * FROM productos', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/v1/', (req, res) => {
    const {name, price, description} = req.body;
    const query = `
    INSERT INTO productos (nombre_producto, precio, descripcion) VALUES (?, ?, ?);
    `;
    mysqlConnection.query(query, [name, price, description], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Producto cargado'});
        } else {
            console.log(err);
        }
    })
})

module.exports = router;