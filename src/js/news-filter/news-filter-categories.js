import axios from 'axios';
import { addWeather } from '../weather/index';

const API_KEY = 'VRI2ALbuR85aCcrGuVmVKHAZ8wR5XhKg';

const categorisContainer = document.querySelector('.js-categories-filter');
const listNews = document.querySelector('.list-news');
const notFound = document.querySelector('.not-found');

categorisContainer.addEventListener('click', handleCategoriesContainerClick);

function handleCategoriesContainerClick(event) {
  if (
    !event.target.classList.contains('js-category-btn') &&
    !event.target.classList.contains('js-categories-filter__link')
  ) {
    return;
  }

  notFound.classList.add('not-found-hidden');
    
  const currentCategory = event.target.textContent;
  const normalizeCurrentCategory = currentCategory.toLowerCase();

  filterByCategory(normalizeCurrentCategory);
}

function filterByCategory(category) {
  axios
    .get(
      `https://api.nytimes.com/svc/news/v3/content/inyt/${category}.json?api-key=${API_KEY}`
    )
    .then(response => {
      markUpByCategory(response.data.results);
      addWeather()
    })
    .catch(error => console.log(error))
}

function markUpByCategory(category) {
  if (!category) {
    listNews.innerHTML = '';
    notFound.classList.remove('not-found-hidden');
    return
  }

  const markup = markUpPage(category);

  const weather = '<div class="weather"></div>';

  const endMarkup = weather + markup;
  listNews.innerHTML = endMarkup;
}

function markUpPage(category) {
  return category.map(({ multimedia, section, title, abstract, published_date, url, uri}, idLenght) => {
    return `<div class="set" data-id=${uri}>
      <div class="overlay noActive-over"></div>
      <div class="thumb">
        <img class="img-news" src="${multimedia[2].url}" alt="" width="288"
        onerror= src="https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg">
        <p class="already-read-button noActive-rmBtn">Already read</p >
        <button class="name-category">${section}</button >
        <div class="button_add">
                 <lable сlass="lable">AddToFavorite</lable>
                 <input type="checkbox"  class="button js-button" data-idLenght=${idLenght}>
        </div>
      </div>
      <h2 class="title">${title}</h2>
      <p class="text">${abstract}</p>
      <div class="wrapper">
      <p class="date">${published_date}</p>
      <a href="${url}" class="read" target="_blank" rel="noreferrer noopener">Read more</a>
      </div>
  </div>  `;
  }).join('');
}