import { setStorage, getStorage } from '../local-storage';
import axios from 'axios';
import { addWeather } from '../weather/index';
import { markUpPage } from '../markup/index';
import {
  listNews,
  notFound,
  pagList,
  nextPage,
  previousPage,
  pagListBtn,
} from '../refs/index';
import { pagination, appendPaginationBtnMarkup } from '../pagination/index';

import {idArray,newsId,LOCALSTORAGE_KEY,idArrayPars,getNewsArray,deletNews,addToFavorite,auditArrayNews,idDone,} from '../favorites/localStorage'
import { getNewsToLocalStorage, makeOpacityReadedNews} from '../read/localStorage.js'

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
let arrayOfReadNews = [];
getStorage('readNews')
  ? (arrayOfReadNews = [...getStorage('readNews')])
  : (arrayOfReadNews = []);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
const API_KEY_P = 'VYHuklirnHOoGLBMe1pMZhn6akzpgva6';
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
listNews.addEventListener('click', (e) => { getNewsToLocalStorage(e,arrayOfReadNews); getNewsArray(e)});
popularNews();
idDone();

function popularNews() {
  axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY_P}`
    )
    .then(response => {
 
      pagination.getTotalPages(response.data.results);
      appendPaginationBtnMarkup();

      pagListBtn.addEventListener('click', handlePaginationBtnClickPages);
      pagList.addEventListener('click', handlePaginationBtnClick);

      function handlePaginationBtnClick(event) {
        const target = event.target;

        if (target === nextPage) {
          pagination.getNextPagination(response.data.results);
          pagination.slicingResponse(response.data.results);

          markUpNewsPopular(pagination.slicedResponse);
          addWeather();
          // console.log(pagination.slicedResponse);
        }

        if (target === previousPage) {
          pagination.getPreviousPagination();
          pagination.slicingResponse(response.data.results);
          markUpNewsPopular(pagination.slicedResponse);
          addWeather();
          // console.log(pagination.slicedResponse);
        }
      }

      function handlePaginationBtnClickPages(event) {
        const target = event.target.dataset.pages;

        pagination.setCurrentPage(target);
        pagination.getCurrentPage(response.data.results);

        markUpNewsPopular(pagination.slicedResponse);
        addWeather();
        // console.log(pagination.slicedResponse);
        console.log(pagination.currentPage);
      }

      markUpNewsPopular(response.data.results);
      addWeather();
    })
    // .then(() => readMore())
    .catch(error => console.log(error))
    // ------------------------------------------------------------------------------------------------------------------
    .finally(()=> makeOpacityReadedNews(()=>auditArrayNews(listNews)));
  // -----------------------------------------------------------------------------------------------------------------------;;
}

function markUpNewsPopular(arr) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    arr = arr.slice(0, 4);

    markUp();
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
  ) {
    arr = arr.slice(0, 7);
    markUp();
  } else {
    arr = arr.slice(0, 8);
    markUp();
  }

  function markUp() {
    const array = arr
      .map(
        (
          { url, media, title, abstract, published_date, section, asset_id },
          idLenght = newsId
        ) => {
          let id = asset_id;
          let dateUser = new Date(published_date);
          let date = dateUser.toLocaleDateString().replaceAll('.', '/');
          let photo =
            media.length !== 0
              ? media[0]['media-metadata'][2].url
              : 'https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg';
          let category = section || 'other';
          if (abstract.length < 120) {
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
            id,
            idLenght
          );
        }
      )
      .join('');
    return array;
  }
  listNews.innerHTML = `<div class="weather"></div>`;
  listNews.insertAdjacentHTML('beforeend', markUp());
}

export function markUpSearchNews(arr) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    arr = arr.slice(0, 4);
    markUp();
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
  ) {
    arr = arr.slice(0, 7);
    markUp();
  } else {
    arr = arr.slice(0, 8);
    markUp();
  }

  function markUp() {
    // console.log(arr);
    const array = arr
      .map(
        (
          {
            web_url,
            multimedia,
            headline,
            abstract,
            pub_date,
            type_of_material,
            _id,
          },
          idLenght = newsId
        ) => {
          let id = _id;
          let dateUser = new Date(pub_date);
          let date = dateUser.toLocaleDateString().replaceAll('.', '/');
          let category = type_of_material || 'other';
          let photo =
            multimedia.length !== 0
              ? `https://static01.nyt.com/${multimedia[0].url}`
              : 'https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg';
          // if (urlToImage === null) {
          //     urlToImage = "https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg"
          //     // "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png" - заглушка для фото
          // }
          if (abstract.length < 120) {
            return markUpPage(
              photo,
              headline.main,
              abstract,
              date,
              web_url,
              category,
              idLenght
            );
          } else abstract = abstract.slice(0, 120) + '...';
          return markUpPage(
            photo,
            headline.main,
            abstract,
            date,
            web_url,
            category,
            id,
            idLenght
          );
        }
      )
      .join('');
    return array;
  }
  listNews.innerHTML = `<div class="weather"></div>`;
  listNews.insertAdjacentHTML('beforeend', markUp());
}

