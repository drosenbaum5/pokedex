const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

function renderAllPokemon() {
  for (let i = 1; i < 200; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        
        console.log(pokemon);
        console.log(pokemon.sprites.other.dream_world.front_default);

        
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("card");
        const createPokemonImg = document.createElement("img");
        createPokemonImg.src = pokemon.sprites.other.dream_world.front_default;
        const pokemonNameTag = document.createElement("h4");
        const pokemonName = pokemon.name.toUpperCase();
        pokemonNameTag.textContent = pokemonName;
        pokemonCard.appendChild(createPokemonImg);
        pokemonCard.appendChild(pokemonNameTag);

        const pokemonContainer = document.getElementById("all-pokemon");
        pokemonContainer.append(pokemonCard);

      });
  }
}



// const pokemonCard = document.createElement("div");
// pokemonCard.classList.add("card");
// const createPokemonImg = document.createElement("img");
// createPokemonImg.src = pokemon.sprites.other.dream_world.front_default;
// pokemonCard.appendChild(createPokemonImg);
// const pokemonContainer = document.getElementById("all-pokemon");
// pokemonContainer.append(pokemoncard);
        




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
