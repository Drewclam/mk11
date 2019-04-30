const express = require('express');
const connection = require('./dbConnect');
const scripts = require('./scripts');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'base path' });
});

router.get('/fighters', (req, res) => {
  connection.connect(err => {
    connection.query(scripts.selectFighters, (err, fighters) => {
      res.send(fighters);
    });
  });
});

module.exports = router;
