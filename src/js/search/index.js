import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  paginationSearch,
  appendPaginationBtnSearchMarkup,
  addClassPaginationCurrentPage,
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
  pagWrapper,
} from '../refs/index';
import { fetchSearch } from '../api/index';
// ---------------------------------------------------------------------------------------------
import { makeOpacityReadedNews } from '../read/localStorage';
// ___________________________________________________________________________
import { auditArrayNews } from '../favorites/localStorage';
import { listNews } from '../refs/index';
import { markUpSearchNews } from '../news-filter/news-filter-page';
import { addWeather } from '../weather/index';

// ------------------- Для поиска новостей по выбранной дате-----------------------

let dateApi = '';
export function setDateApi(value) {
  dateApi = value;
}

// ______________________________________________________________________________

searchForm.addEventListener('submit', handleSubmitSearchForm);

function handleSubmitSearchForm(event) {
  event.preventDefault();
  const searchingNews = event.target.search.value.trim().toLowerCase();

  if (!searchingNews) {
    return makeInfoMessage('What would you like to find?');
  }

  notFound.classList.add('not-found-hidden');
  pagWrapper.classList.remove('pagination-hidden');
  removeClassFromCategoryBtn();

  searchNewsfromApi(searchingNews, dateApi);

  event.currentTarget.reset();
}

async function searchNewsfromApi(value, date) {
  try {
    const response = await fetchSearch(value, date);

    if (response.length === 0) {
      listNews.innerHTML = '';
      pagWrapper.classList.add('pagination-hidden');
      notFound.classList.remove('not-found-hidden');
    } else {
      paginationSearch.getTotalPages(response);

      appendPaginationBtnSearchMarkup();

      pagListBtn.addEventListener('click', handlePaginationBtnClickPages);
      pagList.addEventListener('click', handlePaginationBtnClick);

      function handlePaginationBtnClick(event) {
        const target = event.target;

        if (target === nextPage) {
          paginationSearch.getNextPagination(response);
          paginationSearch.slicingResponse(response);
          addClassPaginationCurrentPage(paginationSearch);
          markUpSearchNews(paginationSearch.slicedResponse);
          addWeather();
        }

        if (target === previousPage) {
          paginationSearch.getPreviousPagination();
          paginationSearch.slicingResponse(response);
          addClassPaginationCurrentPage(paginationSearch);
          markUpSearchNews(paginationSearch.slicedResponse);
          addWeather();
        }
      }

      function handlePaginationBtnClickPages(event) {
        const target = event.target.dataset.pages;

        paginationSearch.setCurrentPage(target);
        paginationSearch.getCurrentPage(response);
        addClassPaginationCurrentPage(paginationSearch);
        markUpSearchNews(paginationSearch.slicedResponse);
        addWeather();
      }

      markUpSearchNews(response);
      addWeather();
    }
  } catch (err) {
    console.error(err);
  } finally {
    () => makeOpacityReadedNews(() => auditArrayNews(listNews));
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
