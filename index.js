


const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./api');
const { client } = require('./db');
const server = express();
const PORT = 3000;

server.use(morgan('dev'));
server.use(bodyParser.json());
client.connect();
server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});
server.use('/api', apiRouter);






