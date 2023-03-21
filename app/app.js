const d = document;
const searchInput = d.getElementById('search-input');
const searchBtn = d.getElementById('search-btn');

const pokedexInnerScreen = d.getElementById('pokedex-inner-screen');

const pokemonPicture = d.getElementById('pokemon-picture');
const pokemonName = d.getElementById('pokemon-name')
const pokemonNumber = d.getElementById('pokemon-number')
const pokemonType = d.getElementById('pokemon-type')
const pokemonHeight = d.getElementById('pokemon-height')
const pokemonWeight = d.getElementById('pokemon-weight')
const pokemonAbilities = d.getElementById('pokemon-abilities')


const getPokemonInfo = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) => showInfo(data))
};

searchBtn.addEventListener('click', () => {
  getPokemonInfo((searchInput.value).toLowerCase());
});

const stringToCapítalize = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

const showInfo = (data) => {
  console.log(data)
  pokedexInnerScreen.style.background = 'var(--screen-on-bg)';
  pokemonPicture.src = `${data.sprites.front_default}`;
  pokemonName.innerText = `${stringToCapítalize(data.name)}`;
  pokemonNumber.innerText = `N° ${data.id}`;
  pokemonType.innerText = `Type: ${data.types[0].type.name}`;
  pokemonHeight.innerText = `Height: ${((data.height)*0.1).toFixed(2)}m`;
  pokemonWeight.innerText = `Weight: ${((data.weight)*0.1).toFixed(2)}kg`;
  pokemonAbilities.innerText = `Abilities: ${data.abilities[0].ability.name}`;
};
