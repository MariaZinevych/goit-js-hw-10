const API_KEY =
  'live_7ctoNlYDqvRmUrjGDIjzkXX0AcLi54Bj3E5E1IL8zd4wg4HCVIG5ZdJbaWtVOXLA';

export function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds/`;

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    return response.json();
  });
}

export function fetchCatByBreed(valueId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${valueId}&api_key=${API_KEY}`
  ).then(response => {
    return response.json();
  });
}
