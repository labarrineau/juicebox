


const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./api');
const { client, updatePost, getPostById } = require('./db');
const server = express();
const { PORT = 3000 } = process.env

server.use(morgan('dev'));
server.use(bodyParser.json());
client.connect();
server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});
server.use('/api', apiRouter);

server.get('/add/:first/to/:second', (req, res, next) => {
  res.send(`<h1>${ req.params.first } + ${ req.params.second } = ${
    Number(req.params.first) + Number(req.params.second)
   }</h1>`);
});


module.exports = getPostById ;


