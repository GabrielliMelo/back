const axios = require('axios');

const axiosRequest = axios.create({
  baseURL: process.env.POKEMON_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

module.exports = axiosRequest;
