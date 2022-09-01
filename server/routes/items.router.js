const {response} = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM "groceries" ORDER BY "name";`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        });
});




// POST
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let sqlText = `INSERT INTO "groceries" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);`
    pool.query(sqlText, [req.body.name, req.body.quantity, req.body.unit])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

//PUT request to update data base
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    let sqlText = `UPDATE "groceries"
                    SET "purchased" = true
                    WHERE id = $1;
                  `
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});





module.exports = router;