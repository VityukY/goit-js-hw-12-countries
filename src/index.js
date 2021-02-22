import './styles.css';
import { errorMessage } from './js/notification';

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
    .then(data => {
      if (data.length > 10) {
        /*throw new Error('to large requst');*/
        errorMessage();
        return;
      } else {
        return data;
      }
    });
}
