'use strict'

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("REST Application running", res);
}

// Get All mahasiswas
exports.mahasiswas = function (req, res) { 
    let id = req.params.id;
    let query = req.query.query;
    if(id != null){
        connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function (err, rows, field) { 
            if(err){ 
                console.log(err);
            }else{
                response.ok(rows, res);
            }
         })
        
    }else if(query != null ){
        
        connection.query('SELECT * FROM mahasiswa WHERE name LIKE ?', ['%' + query + '%'], function (err, rows, field) { 
            if(err){ 
                console.log(err);
            }else{
                response.ok(rows, res);
            }
         })
    }else{
        connection.query('SELECT * FROM mahasiswa', function (err, rows, fields) { 
            if(err){ 
                console.log(err);
            }else{
                response.ok(rows, res);
            }
         })
    }
 }