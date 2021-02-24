import './styles.css';
import { clarifyMessage, errorMessage } from './js/notification';
import countryListTemplate from '../src/templates/listcountries.hbs';
import countryTempalte from '../src/templates/country.hbs';
import { fetchCountryHandler } from '../src/js/fetchCountries';

const debounce = require('lodash.debounce');

const inputAreaRef = document.querySelector('#input-area');
const listRef = document.querySelector('#list');
const resultConteinerRef = document.querySelector('#result-conteiner');

inputAreaRef.addEventListener(
  'input',
  debounce(() => {
    searchCountry(inputAreaRef.value);
  }, 500),
);

function searchCountry(name) {
  listRef.innerHTML = '';
  resultConteinerRef.innerHTML = '';
  fetchCountryHandler(name).then(data => {
    if (data.length === 0) {
      errorMessage();
    } else if (data.length === 1) {
      const markup = countryTempalte(data);
      resultConteinerRef.insertAdjacentHTML('beforeend', markup);
    } else if (data.length <= 10) {
      const markup = countryListTemplate(data);
      listRef.insertAdjacentHTML('beforeend', markup);
    } else if (data.length > 11) {
      clarifyMessage();
    }
  });
}
