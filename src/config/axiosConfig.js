const axios = require('axios');

const axiosRequest = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

module.exports = axiosRequest;
