import './styles.css';
const debounce = require('lodash.debounce');

const inputAreaRef = document.querySelector('#input-area');

inputAreaRef.addEventListener(
  'input',
  debounce(() => {
    searchCountry(inputAreaRef.value);
  }, 500),
);

function searchCountry(name) {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(country => console.log(country[0]));
}
