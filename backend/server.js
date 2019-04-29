const express = require('express');
const mysql = require('mysql');
const router = require('./router');
const data = require('./data');
const scripts = require('./scripts');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
});

connection.connect(err => {
  if (err) {
    throw err;
  }

  console.log('Connection established to MYSQL.');

  connection.query('DROP DATABASE IF EXISTS my_db');
  connection.query('CREATE DATABASE my_db');
  connection.query('USE my_db');
  connection.query(scripts.createFightersTable, err => {
    if (err) throw err;
    data.fighters.forEach(fighter => connection.query(scripts.insertFighter(fighter.name)));
  });
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', router);

app.listen(port, () => console.log(`Backend listening on port ${port}`));
