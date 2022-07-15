const { Router } = require('express');
const pokemonController = require('../controller/PokemonController');

const route = Router();

route.get('/pokemons', pokemonController.getAllPokemons);

module.exports = route;
