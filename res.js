'use strict'

exports.ok = function (values,res) { 
    var data = {
        'status' : 200,
        'message': 'Success | OK',
        'data' : values
    }
    res.json(data);
    res.end();
}

exports.error = function (values,res) { 
    var data = {
        'status' : 400,
        'message': 'Error | 400',
        'data' : values
    }
    res.json(data);
    res.end();
 }