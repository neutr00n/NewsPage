
import { addWeather } from '../weather/index';
import { markUpPage } from '../markup/index';
import { input, form, listNews, notFound } from '../refs/index';
import { makeOpacityReadedNews } from '../read/news-read';
import { fetchPopular } from '../api/index.js';
import {fetchSearch} from '../api/index.js';


form.addEventListener('submit', searchNewsfromApi);


popularNewsfromApi() 

function popularNewsfromApi() {
    fetchPopular()
    .then(response => {
      markUpNewsPopular(response.data.results);
      addWeather();
    })
 // .then(() => readMore())
    .catch(error => console.log('error'))
    .finally(makeOpacityReadedNews);
}

function markUpNewsPopular(arr) {
  // console.log(arr);

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

function searchNewsfromApi(event) {
  event.preventDefault();

  notFound.classList.add('not-found-hidden');

  const name = input.value;
  const date = '2023-02-16';


  fetchSearch(date, name)
    .then(response => {
      const arr = response.data.response.docs;
      if (arr.length === 0) {
        listNews.innerHTML = '';

        notFound.classList.remove('not-found-hidden');
      } else {
        markUpSearchNews(arr);
        addWeather();
      }
    })
    .finally(makeOpacityReadedNews);
}

function markUpSearchNews(arr) {
  console.log(arr);
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

const API_KEY_S = '2Q5D7fvynyshAi0a8Zmy3AdyyqPFqoa6';
const API_KEY_P = 'VYHuklirnHOoGLBMe1pMZhn6akzpgva6';
const LOCALSTORAGE_KEY = 'ID-SAVE-FAVORITE';
let idArray = localStorage.getItem('ID-SAVE-FAVORITE');
let idArrayPars = JSON.parse(idArray) || [];
let newsId = 0;
listNews.addEventListener('change', getNewsArray);
window.addEventListener('DOMContentLoaded', idDone);
idDone();
auditArrayNews();

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
  e.target.parentNode.childNodes[1].innerHTML = 'AddToFavorite';
  e.target.classList.remove('add');
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
  e.target.classList.add('add');
  e.target.parentNode.childNodes[1].innerHTML = 'RemoveFromFavorite';
  newsId += 1;
}

export function auditArrayNews() {
  idArrayPars.map(el => {
    listNews.querySelectorAll('.set').forEach(element => {
      let id = element.dataset.id;
      if (id === el.id) {
        element
          .querySelector('.js-button_favorites')
          .setAttribute('checked', 'true');
        element.querySelector('.js-button_favorites').classList.add('add');
        element.querySelector('lable').innerHTML = 'RemoveFromFavorite';
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