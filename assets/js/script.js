const mainUrl = "https://pokeapi.co/api/v2/pokemon/";
const searchBtn = document.getElementById("search-button");
const kantoPokemon = document.getElementById("kanto");
const clearResults = document.getElementById("all-pokemon");
const pokeBall = document.querySelector(".center-on-page");
const dropDownContent = document.querySelector(".dropdown-content");

// Render all available pokemon from API
// async function getAllPokemon() {
//   for (let i = 1; i <= 150; i++) {
//     const response = await fetch(`${mainUrl}${i}`)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         // console.log(pokemon);
//         // console.log(pokemon.types[0].type.name);
//         renderPokemon(data);
//       });
//   }
// }

async function getAllPokemon(lower, upper) {
  clearResults.innerHTML = "";
  pokeBall.setAttribute("style", "display:none;");
  for (let i = lower; i <= upper; i++) {
    const response = await fetch(`${mainUrl}${i}`)
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

async function getOnePokemon(pokemon) {
  const respone = await fetch(`${mainUrl}${pokemon}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderPokemon(data);
    });
}

// Event listener for single search
searchBtn.addEventListener("click", function (e) {
  console.log("Clicky Clicky");
  e.preventDefault();
  pokeBall.setAttribute("style", "display:none;");
  clearResults.innerHTML = "";
  let searchValue = document.getElementById("search-field").value.trim().toLowerCase();
  getOnePokemon(searchValue);
});

// Search Original 150 pokemon
pokeBall.addEventListener("click", function () {
  clearResults.innerHTML = "";
  pokeBall.setAttribute("style", "display:none;");
  getAllPokemon(1, 150);
});


// Event delegation for handling region clicks
dropDownContent.addEventListener("click", function (e) {
  console.log(e.target.id);
  const generation = e.target.id;
  switch (generation) {
    case "kanto":
      getAllPokemon(1, 150)
      break;
    case "johto":
      getAllPokemon(152, 251)
      break;
    case "hoenn":
      getAllPokemon(252, 386)
      break;
    case "sinnoh":
      getAllPokemon(387, 493)
      break;
    case "unova":
      getAllPokemon(493, 649)
      break;

    default:
      break;
  }
});
