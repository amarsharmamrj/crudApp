var express = require('express');
var router = express.Router();

const connection = require('../database.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            const data = results;
            res.render('users', { data });
        }
    );

});

module.exports = router;