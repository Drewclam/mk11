const express = require('express');
const connection = require('./dbConnect');
const scripts = require('./scripts');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'base path' });
});

router.get('/fighters', (req, res) => {
  connection.connect(err => {
    console.log(connection.query(scripts.selectFighters));
  });
  res.send({ message: 'fighters path' });
});

module.exports = router;
