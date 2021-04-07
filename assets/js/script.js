const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

function renderAllPokemon() {
  for (let i = 1; i < 200; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        // console.log(data);
        // console.log(pokemon);
        // console.log(pokemon.sprites.other.dream_world.front_default);
        console.log(pokemon);
        console.log(pokemon.sprites.other.dream_world.front_default);
        const createPokemonImg = document.createElement("img");
        createPokemonImg.src = pokemon.sprites.other.dream_world.front_default;
        const pokemonContainer = document.getElementById("all-pokemon");
        pokemonContainer.append(createPokemonImg);
      });
  }
}

function renderOnePokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemon) {
      // console.log(data);
      console.log(pokemon);
      console.log(pokemon.sprites.other.dream_world.front_default);
      const createPokemonImg = document.createElement("img");
      createPokemonImg.src = pokemon.sprites.other.dream_world.front_default;
      const pokemonContainer = document.getElementById("all-pokemon");
      pokemonContainer.append(createPokemonImg);
    });
}

renderAllPokemon();
// renderOnePokemon();
