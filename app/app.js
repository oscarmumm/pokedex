const d = document;

const lightBlueLight = d.getElementById('lightblue-light');
const redLight = d.getElementById('red-light');
const yellowLight = d.getElementById('yellow-light');
const greenLight = d.getElementById('green-light');

const searchInput = d.getElementById('search-input');
const searchBtn = d.getElementById('search-btn');
const previousBtn = d.getElementById('previous-btn');
const nextBtn = d.getElementById('next-btn');

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
    .catch(error => {
      showError();
    })
};

searchBtn.addEventListener('click', () => {
  getPokemonInfo((searchInput.value).toLowerCase());
});

previousBtn.addEventListener('click', () => {
  getPokemonInfo(parseInt(lastSearchId) - 1);
});

nextBtn.addEventListener('click', () => {
  getPokemonInfo(parseInt(lastSearchId) + 1);
});

const stringToCapítalize = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

const showInfo = (data) => {
  pokedexInnerScreen.style.background = 'var(--screen-on-bg)';
  pokemonPicture.src = `${data.sprites.front_default}`;
  pokemonName.innerText = `${stringToCapítalize(data.name)}`;
  pokemonNumber.innerText = `N° ${data.id}`;
  pokemonType.innerText = `Type: ${data.types[0].type.name}`;
  pokemonHeight.innerText = `Height: ${((data.height)*0.1).toFixed(2)}m`;
  pokemonWeight.innerText = `Weight: ${((data.weight)*0.1).toFixed(2)}kg`;
  pokemonAbilities.innerText = `Abilities: ${data.abilities[0].ability.name}`;
  redLight.classList.remove('light-on');
  lightBlueLight.classList.add('light-on');
  return lastSearchId = `${data.id}`;
};

const showError = () => {
  pokedexInnerScreen.style.background = 'var(--screen-on-bg)';
  pokemonPicture.src = '';
  pokemonNumber.innerText = '';
  pokemonType.innerText = '';
  pokemonHeight.innerText = '';
  pokemonWeight.innerText = '';
  pokemonAbilities.innerText = '';
  pokemonName.innerText = `Error en la búsqueda. Revise que el nombre esté bien escrito`;
  redLight.classList.add('light-on');
  lightBlueLight.classList.remove('light-on');
} 