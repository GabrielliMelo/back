const PokemonService = require('../service/PokemonService');
const responseFormat = require('../utils/formatListPokemonsResponse');

const getAllPokemons = async (req, res) => {
  const { limit, page } = req.query;

  const pokemons = await PokemonService.getAllPokemons({ limit, page });

  res.json(responseFormat.formatListPokemonsResponse(pokemons));
};

const getPokemon = async (req, res) => {
  const { name } = req.params;
  const pokemon = await PokemonService.getPokemon({ name });
  res.json(responseFormat.formatPokemonResponse(pokemon));
};

module.exports = { getAllPokemons, getPokemon };
