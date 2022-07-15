const axiosRequest = require('../config/axiosConfig');

const getAllPokemons = async ({ limit, page }) => {
  const offSet = (page - 1) * limit;

  const { data: pokemonsBase } = await axiosRequest.get(
    `pokemon?limit=${limit}&offset=${offSet}`
  );

  const getInfoPokemonsRequest = pokemonsBase.results.map((pokemon) =>
    axiosRequest.get(pokemon.url)
  );

  const pokemonsWithInfos = await Promise.all(getInfoPokemonsRequest);
  return pokemonsWithInfos;
};

const getPokemon = async ({ name }) => {
  const { data: pokemonInfo } = await axiosRequest.get(`pokemon/${name}`);
  return pokemonInfo;
};

module.exports = { getAllPokemons, getPokemon };
