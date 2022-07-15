const formatListPokemonsResponse = (pokemonInfoList) =>
  pokemonInfoList.map(({ data: pokemonInfo }) => ({
    name: pokemonInfo.name,
    sprites: { back_default: pokemonInfo.sprites.back_default },
    species: { name: pokemonInfo.species.name },
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
  }));

const formatPokemonResponse = (pokemonInfo) => ({
  name: pokemonInfo.name,
  sprites: { back_default: pokemonInfo.sprites.back_default },
  species: { name: pokemonInfo.species.name },
  height: pokemonInfo.height,
  weight: pokemonInfo.weight,
  abilities: pokemonInfo.abilities,
});

module.exports = {
  formatListPokemonsResponse,
  formatPokemonResponse,
};
