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

const API_KEY_P = 'VYHuklirnHOoGLBMe1pMZhn6akzpgva6';

const LOCALSTORAGE_KEY = 'ID-SAVE-FAVORITE';
let idArray = localStorage.getItem('ID-SAVE-FAVORITE');
let idArrayPars = JSON.parse(idArray) || [];

let newsId = 0;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
import { setStorage, getStorage } from '../local-storage';
listNews.addEventListener('click', getNewsToLocalStorage);
listNews.addEventListener('change', getNewsArray);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
let arrayOfReadNews = [];
getStorage('readNews')
  ? (arrayOfReadNews = [...getStorage('readNews')])
  : (arrayOfReadNews = []);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', idDone);

popularNews();

idDone();

function popularNews() {
  axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY_P}`
    )
    .then(response => {
      // console.log(response.data.results);
      // console.log(pagListBtn);
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
    .finally(makeOpacityReadedNews);
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

// function readMore() {

//   listNews.addEventListener('click', readMoreVision);

//   function readMoreVision(event) {
//     const elementRead = event.target.classList.contains("read");
//     if (!elementRead) {
//       return
//     } else {
//       console.log(event.target);
//       const overlay =  event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
//       const alredy= event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[3];

//       overlay.classList.remove('noActive-over');
//       overlay.classList.add('active-over');

//       alredy.classList.remove('noActive-rmBtn');
//       alredy.classList.add('active-rmBtn');
//     }

//   }
// }

// --------------------------------------------------при нажатии на ссылку в карточке новостей собирает данные с разметки текущей карточки в обьект и записывает в localStorage
function getNewsToLocalStorage(e) {
  const readMoreLinks = document.querySelectorAll('.read');
  const DateNow = new Date()
    .toLocaleDateString([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .replaceAll('.', '/');
  readMoreLinks.forEach(link => {
    if (e.target === link) {
      //  console.log()
      const objectRead = {
        category:
          e.target.parentNode.parentNode.firstElementChild.nextSibling
            .nextSibling.childNodes[5].innerText,
        photo:
          e.target.parentNode.parentNode.firstElementChild.nextSibling
            .nextSibling.firstElementChild.src,
        date: e.target.parentNode.firstElementChild.innerText,
        url: e.target.href,
        title:
          e.target.parentNode.previousSibling.previousSibling.previousSibling
            .previousSibling.innerText,
        abstract: e.target.parentNode.previousSibling.previousSibling.innerText,
        id: e.target.parentNode.parentNode.dataset.id,
        // readDate: "18/02/2023",
        readDate: DateNow,
      };
      for (const item of arrayOfReadNews) {
        if (item.id === objectRead.id) {
          return;
        }
      }
      e.target.parentNode.parentNode.firstElementChild.classList.remove(
        'noActive-over'
      );
      e.target.parentNode.parentNode.firstElementChild.classList.add(
        'active-over'
      );
      e.target.parentNode.parentNode.firstElementChild.nextSibling.nextSibling.childNodes[3].classList.remove(
        'noActive-rmBtn'
      );
      e.target.parentNode.parentNode.firstElementChild.nextSibling.nextSibling.childNodes[3].classList.add(
        'active-rmBtn'
      );
      arrayOfReadNews.push(objectRead);
      setStorage('readNews', arrayOfReadNews);
    } else {
      return;
    }
  });
}
// --------------------------------------------------при нажатии на ссылку в карточке новостей собирает данные с разметки текущей карточки в обьект и записывает в localStorage

// ---------------------поставить в .finally каждого фетча, Функция для додавания класса прозрачности просмотренным новостям после рендера разметки
export function makeOpacityReadedNews() {
  auditArrayNews();
  const newsContainer = document.querySelectorAll('.set');
  const readNews = getStorage('readNews');
  if (!readNews) {
    return;
  }
  newsContainer.forEach(item => {
    for (let i = 0; i < readNews.length; i++) {
      const element = readNews[i];
      if (item.dataset.id === element.id) {
        const alredy = item.childNodes[3].childNodes[3];
        const overlay = item.firstElementChild;
        overlay.classList.add('active-over');
        overlay.classList.remove('noActive-over');
        alredy.classList.remove('noActive-rmBtn');
        alredy.classList.add('active-rmBtn');
      }
    }
  });
}
// ---------------------поставить в .finally каждого фетча, Функция для додавания класса прозрачности просмотренным новостям после рендера разметки

// ============================================================================= обработка кнопки ADD =================================================================
function getNewsArray(e) {
  if (!e.target.classList.contains('button')) {
    return;
  } else if (e.target.classList.contains('add')) {
    deletNews(e);
  } else {
    addToFavorite(e);
  }
}

function deletNews(e) {
  const findIndex = +idArrayPars.findIndex(
    el => el.idLenght === +e.target.attributes[2].value
  );

  idArrayPars.splice(findIndex, 1);

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
  e.target.parentNode.childNodes[1].innerHTML = 'Add To Favorite';
  e.target.classList.remove('add');
  e.target.parentNode.childNodes[3].classList.remove('add');
}

function addToFavorite(e) {
  let arrayFavorites = {
    photo:
      e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1]
        .attributes[1].value,
    date: e.target.parentNode.parentNode.parentNode.childNodes[9].childNodes[1]
      .innerText,
    url: e.target.parentNode.parentNode.parentNode.childNodes[9].childNodes[3]
      .attributes[0].value,
    title: e.target.parentNode.parentNode.parentNode.childNodes[5].innerText,
    abstract: e.target.parentNode.parentNode.parentNode.childNodes[7].innerText,
    idLenght: newsId,
    id: e.target.parentNode.parentNode.parentNode.attributes[1].value,
    category:
      e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[5]
        .innerText,
  };

  idArrayPars.push(arrayFavorites);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
  e.target.parentNode.childNodes[3].classList.add('add');
  e.target.classList.add('add');
  idDone;
  e.target.parentNode.childNodes[1].innerHTML = 'Remove From Favorite';

  newsId += 1;
}
// ================================================================= Проверка есть ли в добавленых =================================

function auditArrayNews() {
  idArrayPars.map(el => {
    listNews.querySelectorAll('.set').forEach(element => {
      let id = element.dataset.id;

      if (id === el.id) {
        element
          .querySelector('.js-button_favorites')
          .setAttribute('checked', 'true');
        element.querySelector('.js-button_favorites').classList.add('add');
        element.querySelector('.icon').classList.add('add');

        element.querySelector('lable').innerHTML = 'Remove From Favorite';
      }
    });
  });
}

function idDone() {
  if (idArrayPars.length === 0) {
    return;
  } else {
    newsId = idArrayPars[idArrayPars.length - 1].idLenght + 1 || 0;
  }
}
