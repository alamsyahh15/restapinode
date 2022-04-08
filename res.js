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