import { addWeather } from '../weather/index';
import { filterByCategory } from '../api/index';
import {
  paginationCategories,
  appendPaginationBtnCategoriesMarkup,
  addClassPaginationCurrentPage,
} from '../pagination/index';
import {
  listNews,
  notFound,
  pagList,
  nextPage,
  previousPage,
  pagListBtn,
} from '../refs/index';
import { markUpPage } from '../markup/index';

let newsId = 0;

export async function getFilterByCategory(category) {
  try {
    const response = await filterByCategory(category);
    if (!response) {
      listNews.innerHTML = '';
      pagList.classList.add('pagination-hidden');
      notFound.classList.remove('not-found-hidden');
      return;
    }
    pagList.classList.remove('pagination-hidden');
    paginationCategories.getTotalPages(response);
    appendPaginationBtnCategoriesMarkup();

    pagListBtn.addEventListener('click', handlePaginationBtnClickPages);
    pagList.addEventListener('click', handlePaginationBtnClick);

    function handlePaginationBtnClick(event) {
      const target = event.target;

      if (target === nextPage) {
        paginationCategories.getNextPagination(response);
        paginationCategories.slicingResponse(response);
        addClassPaginationCurrentPage(paginationCategories);
        markUpByCategory(paginationCategories.slicedResponse);
        addWeather();
      }

      if (target === previousPage) {
        paginationCategories.getPreviousPagination();
        paginationCategories.slicingResponse(response);
        addClassPaginationCurrentPage(paginationCategories);
        markUpByCategory(paginationCategories.slicedResponse);
        addWeather();
      }
    }

    function handlePaginationBtnClickPages(event) {
      const target = event.target.dataset.pages;

      paginationCategories.setCurrentPage(target);
      paginationCategories.getCurrentPage(response);
      addClassPaginationCurrentPage(paginationCategories);
      markUpByCategory(paginationCategories.slicedResponse);
      addWeather();
    }

    markUpByCategory(response);
    addWeather();
  } catch (err) {
    console.error(err);
  }
}

function markUpByCategory(category) {
  notFound.classList.add('not-found-hidden');
  notFound.classList.add('not-found-hidden');
  if (!category) {
    listNews.innerHTML = '';
    notFound.classList.remove('not-found-hidden');
    notFound.classList.remove('not-found-hidden');
    return;
  }

  const markup = markupCategoriesNews(category);

  const weather = '<div class="weather"></div>';

  const endMarkup = weather + markup;
  listNews.innerHTML = endMarkup;
}

function markupCategoriesNews(arr) {
  let array = [];

  if (window.matchMedia('(max-width: 767px)').matches) {
    array = arr.slice(0, 4);
    return markUp(array);
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
  ) {
    array = arr.slice(0, 7);
    return markUp(array);
  } else {
    array = arr.slice(0, 8);
    return markUp(array);
  }
}

function markUp(arr) {
  const array = arr
    .map(
      (
        { multimedia, section, title, abstract, published_date, url, uri },
        idLenght = newsId
      ) => {
        let id = uri;
        let dateUser = new Date(published_date);
        let date = dateUser.toLocaleDateString().replaceAll('.', '/');
        let category = section || 'other';
        let photo =
          multimedia?.length !== 0
            ? `${multimedia[2].url}`
            : 'https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg';

        if (abstract?.length < 120) {
          return markUpPage(
            photo,
            title,
            abstract,
            date,
            url,
            category,
            id,
            idLenght
          );
        } else abstract = abstract.slice(0, 120) + '...';
        return markUpPage(
          photo,
          title,
          abstract,
          date,
          url,
          category,
          idLenght
        );
      }
    )
    .join('');
  return array;
}
