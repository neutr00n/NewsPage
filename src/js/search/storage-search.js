import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { searchForm, readNewsDateContainer, notFound } from '../refs/index';
import { getStorage } from '../local-storage/index';
import { markUpPage } from '../markup/index';
import { auditArrayNews } from '../favorites/index'; //

const pageByBody = document.body.dataset.set;

searchForm.addEventListener('submit', handleSubmitSearchForm);

function handleSubmitSearchForm(event) {
  event.preventDefault();

  const searchingNews = event.target.search.value.trim().toLowerCase();

  if (!searchingNews) {
    return makeInfoMessage('What would you like to find?');
  }

  searchFromCurrentPage(searchingNews);

  event.currentTarget.reset();
}

function searchFromCurrentPage(searchingNews) {
  let storageKey = '';

  if (pageByBody === 'favorite') {
    storageKey = 'ID-SAVE-FAVORITE';

    const listNews = document.querySelector('.list-news');
    listNews.innerHTML = '';

    const newsArr = getStorage(storageKey);

    const desiredNews = newsArr.filter(news =>
      news.title.toLowerCase().includes(searchingNews)
    );

    showNothingNotFound(desiredNews);
    appendArticleMarkup(desiredNews, listNews);
    auditArrayNews();
  }

  if (pageByBody === 'read') {
    readNewsDateContainer.innerHTML = '';
    storageKey = 'readNews';

    const listNews = document.querySelector('.read-list-news');

    const newsArr = getStorage(storageKey);

    const desiredNews = newsArr.filter(news =>
      news.title.toLowerCase().includes(searchingNews)
    );

    showNothingNotFound(desiredNews);
    appendArticleMarkup(desiredNews, listNews);
  }
}

function appendArticleMarkup(desiredNews, container) {
  const cardSet = desiredNews
    .map(({ photo, title, abstract, date, url, category, id, idLenght }) =>
      markUpPage(photo, title, abstract, date, url, category, id, idLenght)
    )
    .join('');

  container.innerHTML = cardSet;
}

function showNothingNotFound(arr) {
  notFound.classList.add('not-found-hidden');

  if (arr.length === 0) {
    notFound.classList.remove('not-found-hidden');
  }
}

function makeInfoMessage(message) {
  Notify.info(message);
}
