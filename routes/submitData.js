var express = require('express');
var router = express.Router();

const connection = require('../database.js');

router.post('/', function(req, res) {
    // console.log(req.body);
    // res.send("<h1>Form submitted successfully</h1>")

    const sql = "INSERT INTO users(name, age, email, phone) VALUES('" + req.body.name + "', '" + req.body.age + "', '" + req.body.email + "', '" + req.body.phone + "')";

    connection.query(sql, function(err) {
        if (err) throw err
        res.render('userAddSuccess', { title: 'User Add Success' });
    });

});

module.exports = router;