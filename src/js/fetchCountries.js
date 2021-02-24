function fetchCountryHandler(countryName) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${countryName}`,
  ).then(country => (country.ok ? country.json() : (country = [])));
}

export { fetchCountryHandler };
