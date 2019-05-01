const express = require('express');
const router = require('./router');
const data = require('./data');
const scripts = require('./scripts');
const connection = require('./dbConnect');

const app = express();
const port = 3000;

connection.connect(err => {
  if (err) {
    throw err;
  }

  console.log('Connection established to MYSQL.');

  connection.query('DROP DATABASE IF EXISTS my_db');
  connection.query('CREATE DATABASE my_db');
  connection.query('USE my_db');
  connection.query(scripts.createInputsTable, err => {
    if (err) throw err;
    data.inputs.forEach(input => connection.query(scripts.insertInput(input)));
  });
  connection.query(scripts.createFightersTable, err => {
    if (err) throw err;
    data.fighters.forEach(fighter => connection.query(scripts.insertFighter(fighter)));
  });
  connection.query(scripts.createMovesTable, err => {
    if (err) throw err;
  });
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', router);

app.listen(port, () => console.log(`Backend listening on port ${port}`));
