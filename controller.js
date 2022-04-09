"use strict";

var response = require("./res");
var connection = require("./connection");

exports.index = function (req, res) {
  response.ok("REST Application running", res);
};

// Get All mahasiswas
exports.mahasiswas = function (req, res) {
  let id = req.params.id;
  let query = req.query.query;
  if (id != null) {
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        response.ok(rows, res);
      }
    });
  } else if (query != null) {
    connection.query("SELECT * FROM mahasiswa WHERE name LIKE ?", ["%" + query + "%"], function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        response.ok(rows, res);
      }
    });
  } else {
    connection.query("SELECT * FROM mahasiswa", function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(400).json({ error: err });
      } else {
        response.ok(rows, res);
      }
    });
  }
};

// Store Data
exports.storeMahasiswa = function (req, res) {
  let nim = req.body.nim;
  let name = req.body.name;
  let faculty = req.body.faculty;

  connection.query("INSERT INTO mahasiswa (nim, name, faculty) VALUES (?,?,?)", [nim, name, faculty], function (err, rows, field) {
    if (err) {
      console.log(err);
      res.status(400).json({ error: err });
    } else response.ok("Success created data", res);
  });
};

// Update Data
exports.updateMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  var name = req.body.name;
  var faculty = req.body.faculty;

  connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (err, existData, field) {
    if (err) {
      res.status(400).json({ error: err });
      console.log(err);
    }
    if (existData.length > 0) {
      name = name ?? existData[0]["name"];
      faculty = faculty ?? existData[0]["faculty"];
      connection.query("UPDATE mahasiswa SET name=?, faculty=? WHERE id_mahasiswa", [name, faculty, id], function (err, rows, field) {
        if (err) console.log(err);
        else response.ok("Success updated data", res);
      });
    } else {
      res.status(400).json({ error: "Data Kosong" });
    }
  });
};

// Delete Data
exports.deleteMahasiswa = function (req,res) { 
  var id = req.body.id;

  connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?", [id], function (err, rows, field) {
    if (err) {
      console.log(err);
      res.status(400).json({ error: err });
    } else response.ok("Data successfully deleted", res);
  });


 }
