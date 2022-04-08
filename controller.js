'use strict'

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("REST Application running", res);
}

// Get All mahasiswas
exports.mahasiswas = function (req, res) { 
    connection.query('SELECT * FROM mahasiswa', function (err, rows, fields) { 
        if(err){ 
            console.log(err);
        }else{
            response.ok(rows, res);
        }
     })
 }