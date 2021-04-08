const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

// CSS classes to determine pokemon type styling
const classTypes = [
  "dark",
  "dragon",
  "rock",
  "ice",
  "ghost",
  "psychic",
  "fighting",
  "water",
  "fairy",
  "electric",
  "normal",
  "bug",
  "flying",
  "fire",
  "poison",
  "grass",
];

// Render all available pokemon from API
function renderAllPokemon() {
  for (let i = 1; i < 200; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        // console.log(pokemon);
        // console.log(pokemon.types[0].type.name);

        // Create div to hold card and add class list of card
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("card");
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
        const typeContainer = document.createElement("div");
        typeContainer.classList.add("type-container");
        pokemonCard.appendChild(typeContainer);

        // Determine class to add based on pokemon type
        for (let i = 0; i < pokemon.types.length; i++) {
          const pokemonType = document.createElement("span");
          pokemonType.textContent = pokemon.types[i].type.name;

          // Check if class type is part of the array. If so, add class to element
          if (classTypes.includes(pokemonType.textContent)) {
            pokemonType.classList.add(pokemonType.textContent);
          }

          typeContainer.appendChild(pokemonType);
        }

        const pokemonContainer = document.getElementById("all-pokemon");
        pokemonContainer.append(pokemonCard);
      });
  }
}

function renderOnePokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemon) {
      const pokemonCard = document.createElement("div");
      pokemonCard.classList.add("card");
      const createPokemonImg = document.createElement("img");
      createPokemonImg.src = pokemon.sprites.other.dream_world.front_default;
      const pokemonNameTag = document.createElement("h3");
      const pokemonName = pokemon.name.toUpperCase();
      pokemonNameTag.textContent = pokemon.id + ". " + pokemonName;
      pokemonCard.appendChild(createPokemonImg);
      pokemonCard.appendChild(pokemonNameTag);

      const typeContainer = document.createElement("div");
      typeContainer.classList.add("type-container");
      pokemonCard.appendChild(typeContainer);
      for (let i = 0; i < pokemon.types.length; i++) {
        const pokemonType = document.createElement("span");
        pokemonType.textContent = pokemon.types[i].type.name;
        console.log(pokemonType.value);
        if (pokemonType.value == "grass") {
          console.log("It's a grass pokemon!");
          pokemonType.classList.add("grass");
        }
        typeContainer.appendChild(pokemonType);
      }

      const pokemonContainer = document.getElementById("all-pokemon");
      pokemonContainer.append(pokemonCard);
    });
}

renderAllPokemon();

// renderOnePokemon();
