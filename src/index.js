/* eslint-disable spaced-comment */
const express = require('express');

const { info } = require('./modules/my-log');

const app = express();

app.get('/', (request, response) => {
  response.send('HELLO');
});

app.get('/info', (request, response) => {
  info('Hola Info');
  response.send('Info nodemon 3');
});

app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(4000, () => {
  console.log('running on 4000');
});
