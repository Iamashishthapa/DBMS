const express = require("express")
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "984698"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb1", function (err, result) {
      if (err) throw err;
      console.log("Database created");
      });
  });