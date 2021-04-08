const mainUrl = "https://pokeapi.co/api/v2/pokemon/";


// Render all available pokemon from API
function renderAllPokemon() {
  for (let i = 1; i <= 200; i++) {
    fetch(`${mainUrl}${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(pokemon);
        // console.log(pokemon.types[0].type.name);
        renderPokemon(data);
      });
  }
}

function renderPokemon(pokemon) {
  // Create div to hold card and add class list of card
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");

  const typeContainer = document.createElement("div");
  typeContainer.classList.add("type-container");
  pokemonCard.appendChild(typeContainer);

  for (let i = 0; i < pokemon.types.length; i++) {
    const pokemonType = document.createElement("span");
    pokemonType.textContent = pokemon.types[i].type.name;
    pokemonType.classList.add(pokemonType.textContent);
    typeContainer.appendChild(pokemonType);
  }
  // Create image and set src attribute from API data
  const createPokemonImg = document.createElement("img");
  createPokemonImg.src = pokemon.sprites.other.dream_world.front_default;
  // Create h3 and set text content from API data
  const pokemonNameTag = document.createElement("h3");
  const pokemonName = pokemon.name.toUpperCase();
  pokemonNameTag.textContent = pokemon.id + ". " + pokemonName;
  // Append everything to the card
  pokemonCard.appendChild(createPokemonImg);
  pokemonCard.appendChild(pokemonNameTag);

  // Create div to hold span tags which indicate pokemon type
  // Add class list of container and append to the card

  // Determine class to add based on pokemon type

  const pokemonContainer = document.getElementById("all-pokemon");
  pokemonContainer.append(pokemonCard);
}

function renderOnePokemon() {
  fetch(`${mainUrl}pikachu`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderPokemon(data);
    });
}

renderAllPokemon();

// renderOnePokemon();
