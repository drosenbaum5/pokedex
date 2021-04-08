const mainUrl = "https://pokeapi.co/api/v2/pokemon/";
const searchBtn = document.getElementById("search-button")
const viewOriginal = document.getElementById('view-original')
const clearResults =  document.getElementById('all-pokemon');

// Render all available pokemon from API
function getAllPokemon() {
  for (let i = 1; i <= 150; i++) {
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

  // Create div to hold span tags which indicate pokemon type
  // Add class list of container and append to the card
  const typeContainer = document.createElement("div");
  typeContainer.classList.add("type-container");
  pokemonCard.appendChild(typeContainer);

  // Determine class to add based on pokemon type
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

  // Append card to the page
  const pokemonContainer = document.getElementById("all-pokemon");
  pokemonContainer.append(pokemonCard);
}

function getOnePokemon(pokemon) {
  fetch(`${mainUrl}${pokemon}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderPokemon(data);
    });
}



// renderAllPokemon();

// renderOnePokemon();

searchBtn.addEventListener("click", function (e) {
  console.log("Clicky Clicky")
  e.preventDefault()

  clearResults.innerHTML = ""
  let searchValue = document.getElementById('search-field').value.trim().toLowerCase()
  getOnePokemon(searchValue);
}) 

viewOriginal.addEventListener("click", function () {
  clearResults.innerHTML = ""
  getAllPokemon();
})