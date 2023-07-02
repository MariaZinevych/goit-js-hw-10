// const API_KEY =
//   'live_7ctoNlYDqvRmUrjGDIjzkXX0AcLi54Bj3E5E1IL8zd4wg4HCVIG5ZdJbaWtVOXLA';

// // fetching all cat's
// function fetchBreeds() {
//   const url = `https://api.thecatapi.com/v1/breeds/`;

//   return fetch(url, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   }).then(response => {
//     return response.json();
//   });
// }

// // fetching cat by id(breed name)
// function fetchCatByBreed(breedId) {
//   return fetch(
//     `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
//   ).then(response => response.json());
// }

// export default { fetchBreeds, fetchCatByBreed };
