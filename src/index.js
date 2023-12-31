import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

const onSelect = document.querySelector('.breed-select');
const onCatInfo = document.querySelector('.cat-info');
const onloader = document.querySelector('.loader');

const onError = document.querySelector('.error');

function arrow(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let value = arr[i].id;
    let text = arr[i].name;

    const elements = document.createElement('option');
    elements.value = value;
    elements.textContent = text;
    onSelect.appendChild(elements);
  }
}

addCats();

function addCats() {
  onloader.style.display = 'block';
  fetchBreeds()
    .then(arrow)
    .catch(error => {
      if (error) showError();
      onloader.style.display = 'none';
    });
}

function showError() {
  Notiflix.Report.failure(
    'Error',
    'Oops! Something went wrong! Try reloading the page!',
    'Try Again'
  );
}

onSelect.addEventListener('change', onSearch);

function onSearch(e) {
  const valueId = e.target.value;
  onloader.style.display = 'block';
  fetchCatByBreed(valueId)
    .then(data => {
      onCatInfo.innerHTML = '';
      markUp(data);
      onloader.style.display = 'none';
    })
    .catch(error => {
      if (error) showError();
      onloader.style.display = 'none';
    });
}
function markUp(arr) {
  let imgUrl = arr.map(link => link.url);

  let catDesc = arr.map(link => link.breeds[0].description);

  let catTemp = arr.map(link => link.breeds[0].temperament);

  const markUp = `<img class="img-cat" src="${imgUrl}" width="440" height="400" loading="lazy">
    <div class="intro">
      <p class="cat-info"><b>Description: </b>${catDesc}</p>
      <p class="cat-info"><b>Temperament: </b>${catTemp}</p>
    </div>
  `;

  onCatInfo.insertAdjacentHTML('beforeend', markUp);
}
onError.style.display = 'none';
