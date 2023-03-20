const d = document;
const searchInput = d.getElementById('search-input');
const searchBtn = d.getElementById('search-btn');

const pokemonPicture = d.getElementById('pokemon-picture');
const pokemonName = d.getElementById('pokemon-name-and-number')
const pokemonType = d.getElementById('pokemon-type')
const pokemonHeight = d.getElementById('pokemon-height')
const pokemonWeight = d.getElementById('pokemon-weight')
const pokemonAbilities = d.getElementById('pokemon-abilities')


const getPokemonInfo = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
};

searchBtn.addEventListener('click', () => {
  getPokemonInfo(searchInput.value);
});

const showInfo = (data) => {
  pokemonName.innerText = `${data.name}`;
}