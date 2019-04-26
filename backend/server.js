const express = require('express');
const mysql = require('mysql');
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

  connection.query('CREATE DATABASE my_db', err => console.log);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => res.send({ message: 'Hello world' }));

app.listen(port, () => console.log(`Backend listening on port ${port}`));
