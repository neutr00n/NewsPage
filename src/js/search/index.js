import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  paginationSearch,
  appendPaginationBtnSearchMarkup,
} from '../pagination/index';

import {
  listNews,
  searchForm,
  notFound,
  pagList,
  nextPage,
  previousPage,
  pagListBtn,
  jsCategoryBtn,
} from '../refs/index';
import { fetchSearch } from '../api/index';
// ---------------------------------------------------------------------------------------------
import { makeOpacityReadedNews } from '../read/localStorage';
// ___________________________________________________________________________
// import{auditArrayNews} from '../favorites/localStorage'
import {
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
  pagList.classList.remove('pagination-hidden');
  removeClassFromCategoryBtn();
  const date = '2023-02-16';

  searchNewsfromApi(searchingNews, date);

  event.currentTarget.reset();
}

async function searchNewsfromApi(value, date) {
  try {
    const response = await fetchSearch(value, date);

    if (response.length === 0) {
      listNews.innerHTML = '';
      pagList.classList.add('pagination-hidden');
      notFound.classList.remove('not-found-hidden');
    } else {
      console.log(response);
      paginationSearch.getTotalPages(response);
      console.log(paginationSearch.totalPage);

      appendPaginationBtnSearchMarkup();

      pagListBtn.addEventListener('click', handlePaginationBtnClickPages);
      pagList.addEventListener('click', handlePaginationBtnClick);

      function handlePaginationBtnClick(event) {
        const target = event.target;

        if (target === nextPage) {
          paginationSearch.getNextPagination(response);
          paginationSearch.slicingResponse(response);

          markUpSearchNews(paginationSearch.slicedResponse);
          addWeather();
          console.log(paginationSearch.slicedResponse);
        }

        if (target === previousPage) {
          paginationSearch.getPreviousPagination();
          paginationSearch.slicingResponse(response);

          markUpSearchNews(paginationSearch.slicedResponse);
          addWeather();
          console.log(paginationSearch.slicedResponse);
        }
      }

      function handlePaginationBtnClickPages(event) {
        const target = event.target.dataset.pages;

        paginationSearch.setCurrentPage(target);
        paginationSearch.getCurrentPage(response);

        markUpSearchNews(paginationSearch.slicedResponse);
        addWeather();
      }

      markUpSearchNews(response);
      addWeather();
    }
  } catch (err) {
    console.error(err);
  } finally {
    makeOpacityReadedNews();
  }
}

function removeClassFromCategoryBtn() {
  jsCategoryBtn.forEach(btn => btn.classList.remove('active'));
}

function makeInfoMessage(message) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return;
  }
  Notify.info(message);
}
