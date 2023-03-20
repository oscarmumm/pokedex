const d = document;
const searchInput = d.getElementById('search-input');
const searchBtn = d.getElementById('search-btn');


const getPokemonInfo = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
};

searchBtn.addEventListener('click', () => {
  getPokemonInfo(searchInput.value);
});