import API from './cat-api';

const onSelect = document.querySelector('.breed-select');

function arrow(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let value = arr[i].id;
    let text = arr[i].name;
  }

  const elements = document.createElement('option');
  elements.value = value;
  elements.textContent = text;
  onSelect.appendChild(elements);
}
addCats();

function addCats() {
  fetchBreeds()
    .then(arrow)
    .catch(error => console.log('error'));
}

// onSelect.addEventListener('change', onSearch);

// onSelect.addEventListener('change', onSelectView);

// // API Fetch & Add options in select
// getOptions();

// // Fetching object with chosen breed and create markup
// function onSelectView() {
//   const breedId = selectedBreeds();

//   const isContent = document.querySelector('.img-cat');

//   if (isContent) {
//     clearCatContainer();
//   }
//   // Show loading message
//   showLoadingMessage();

//   API.fetchCatByBreed(breedId)
//     .then(markUp)
//     .catch(showError)
//     .finally(hideLoadingMessage);

//   // add is-active class for modal window
//   refs.container.classList.add('is-active');
// }

// // Getting Breed from Select
// function selectedBreeds() {
//   const selectedValue = refs.select.options[refs.select.selectedIndex];
//   const selectedText = selectedValue.textContent;

//   const selectedId = selectedValue.value;

//   return selectedId;
// }

// // Create Markup
// function markUp(arr) {
//   //Add Img
//   let imgUrl = arr.map(link => link.url);

//   // Add Description
//   let catDesc = arr.map(link => link.breeds[0].description);

//   // Add Temperament
//   let catTemp = arr.map(link => link.breeds[0].temperament);

//   const markUp = `

//     <img class="img-cat" src="${imgUrl}" width="440" height="400" loading="lazy">
//     <div class="intro">
//       <p class="cat-info"><b>Description: </b>${catDesc}</p>
//       <p class="cat-info"><b>Temperament: </b>${catTemp}</p>
//     </div>
//   `;

//   refs.catContainer.insertAdjacentHTML('beforeend', markUp);
// }

// // Show loading message
// function showLoadingMessage() {
//   refs.loadingMessage.style.display = 'block';
// }

// // Hide loading message
// function hideLoadingMessage() {
//   refs.loadingMessage.style.display = 'none';
// }

// //Show error
// function showError() {
//   // refs.errorMessage.style.display = 'block';

//   Notify.failure(' Oops! Something went wrong! Try reloading the page!');
// }

// // Remove all childs from .cat-info
// function clearCatContainer() {
//   const children = Array.from(refs.catContainer.children);

//   // Check every child element
//   children.forEach(child => {
//     // if not a close btn
//     if (child !== refs.closeButton) {
//       refs.catContainer.removeChild(child);
//     }
//   });
// }
// const API_KEY =
//

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

// function getRefs() {
//   return {
//     select: document.querySelector('.breed-select'),
//     catContainer: document.querySelector('.cat-info'),
//     loadingMessage: document.querySelector('.loader'),
//     errorMessage: document.querySelector('.error'),
//     // closeButton: document.querySelector('.close-btn'),
//     // content: document.querySelector('.content'),
//     // container: document.querySelector('.container'),
//     // selectMenu: document.querySelector('.ss-main'),
//   };
// }

// export default getRefs;
// import API from './cat-api';
// import Notiflix from 'notiflix';
// import { Report } from 'notiflix/build/notiflix-notify-aio';

// // fetching API and adding <options> in select
// function createOptions() {
//   API.fetchBreeds()
//     .then(getAllIds)
//     .catch(error => {
//       if (error) {
//         showError();
//       }
//     });
// }

// // Add all ids in select ".breed-select"
// function getAllIds(arr) {
//   const breedSelect = document.querySelector('.breed-select');

//   for (let i = 0; i < arr.length; i += 1) {
//     let value = arr[i].id;
//     let text = arr[i].name;

//     const optionsElement = document.createElement('option');
//     optionsElement.value = value;
//     optionsElement.textContent = text;
//     breedSelect.appendChild(optionsElement);
//   }
// }

// //Show error
// function showError() {
//   Notiflix.Report.failure(
//     'Error',
//     'Oops! Something went wrong! Try reloading the page!',
//     'Try Again'
//   );
// }

// export default createOptions;
