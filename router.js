'use strict'

module.exports = function (app) { 
    var myJson = require('./controller');
    app.route('/').get(myJson.index);

    // Route Mahsiswas
    app.route('/mahasiswas/:id?').get(myJson.mahasiswas);
 }