require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((erro, req, res, next) => {
  console.log(erro);
  res.status(500);
});

module.exports = app;
