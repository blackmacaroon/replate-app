const express = require('express');

const server = express();

server.use(express.json());

//sanity check
server.get('/', (req, res) => {
      res.status(200).json({ message: 'hello, world.' });
});

module.exports = server;