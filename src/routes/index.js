const { Router } = require('express');
const pokemonController = require('../controller/PokemonController');

const route = Router();

route.get('/pokemons', pokemonController.getAllPokemons);
route.get('/pokemons/:name', pokemonController.getPokemon);

module.exports = route;
