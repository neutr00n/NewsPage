import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { listNews, searchForm, notFound } from '../refs/index';
import { fetchSearch } from '../api/index';
import {
  makeOpacityReadedNews,
  markUpSearchNews,
} from '../news-filter/news-filter-page';
import { addWeather } from '../weather/index';

searchForm.addEventListener('submit', handleSubmitSearchForm);

function handleSubmitSearchForm(event) {
  event.preventDefault();
  const searchingNews = event.target.search.value.trim().toLowerCase();

  if (!searchingNews) {
    return makeInfoMessage('What would you like to find?');
  }

  notFound.classList.add('not-found-hidden');
  const date = '2023-02-16';

  searchNewsfromApi(searchingNews, date);

  event.currentTarget.reset();
}

async function searchNewsfromApi(value, date) {
  try {
    const response = await fetchSearch(value, date);

    if (response.length === 0) {
      listNews.innerHTML = '';

      notFound.classList.remove('not-found-hidden');
    } else {
      markUpSearchNews(response);
      addWeather();
    }
  } catch (err) {
    console.error(err);
  } finally {
    makeOpacityReadedNews();
  }
}

function makeInfoMessage(message) {
  Notify.info(message);
}
