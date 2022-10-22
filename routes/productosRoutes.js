const express = require('express');

const router = express.Router();

const mysqlConnection = require('../db/database');

const getAllProducts = (req, res) => {
    mysqlConnection.query('SELECT * FROM productos', (err, rows, fields) => {
        if(!err) {
            res.status(200).json({
                status: 'success',
                results: rows.length,
                data: {
                    rows
                }
                });
        } else {
            console.log(err);
        }
    });
}

const getProductById = (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM productos WHERE idproductos = ?', [id], (err, rows, fields) => {
        if(!err) {
            const producto = rows[0];
            res.status(200).json({
                status: 'success',
                data: {
                    producto
                }
                });
        } else {
            console.log(err);
        }
    });
}

const createProduct = (req, res) => {
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
}

router.get('/api/v1/productos', getAllProducts);
router.get('/api/v1/productos/:id', getProductById);
router.post('/api/v1/productos', createProduct);
module.exports = router;