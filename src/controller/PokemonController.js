const PokemonService = require('../service/PokemonService');
const formatListPokemonsResponse = require('../utils/formatListPokemonsResponse');

const getAllPokemons = async (req, res) => {
  const { limit, page } = req.query;

  const pokemons = await PokemonService.getAllPokemons({ limit, page });

  res.json(formatListPokemonsResponse(pokemons));
};

module.exports = { getAllPokemons };
