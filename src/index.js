/* eslint-disable spaced-comment */
const express = require('express');

const { info } = require('./modules/my-log');
const { countries } = require('countries-list');
const { query } = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('HELLO');
});

app.get('/info', (request, response) => {
  info('Hola Info');
  response.send('Info nodemon 3');
});

app.get('/country', (request, response) => {
  console.log('request.query', request.query);
  response.json(countries[request.query.code]);
});

app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(4000, () => {
  console.log('running on 4000');
});
