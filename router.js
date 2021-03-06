'use strict'

module.exports = function (app) { 
    var myJson = require('./controller');
    app.route('/').get(myJson.index);

    // Route Mahsiswas
    app.route('/mahasiswas/:id?').get(myJson.mahasiswas);
    app.route('/mahasiswa-assigned').get(myJson.detailMahasiswa);
    app.route('/mahasiswa').post(myJson.storeMahasiswa);
    app.route('/mahasiswa').put(myJson.updateMahasiswa);
    app.route('/mahasiswa').delete(myJson.deleteMahasiswa);
 }