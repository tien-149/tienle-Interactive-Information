const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('at the main route');
    let query = "SELECT * FROM tbl_marksman";
    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }
        res.render('home', { marksman: result }); 
    })
})

router.get('/users/:id', (req, res) => {
    console.log('at the main route');
    console.log(req.params.id); 
    let query = `select * from tbl_marksman where ID="${req.params.id}"`;
    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result);
        console.log("after trim/conversion:", result[0]);
        res.json(result[0]);
    })
})


module.exports = router;
