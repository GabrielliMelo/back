const formatListPokemonsResponse = (pokemonInfoList) =>
  pokemonInfoList.map(({ data: pokemonInfo }) => ({
    name: pokemonInfo.name,
    sprites: { back_default: pokemonInfo.sprites.back_default },
    species: { name: pokemonInfo.species.name },
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
  }));

module.exports = formatListPokemonsResponse;
