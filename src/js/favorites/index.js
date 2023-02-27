import {
  checkStorageReadNews,
  getNewsToLocalStorage,
  makeOpacityReadedNews,
} from '../read/feature';
import { getStorage } from '../local-storage';

let arrayOfReadNews = [];
getStorage('readNews')
  ? (arrayOfReadNews = [...getStorage('readNews')])
  : (arrayOfReadNews = []);

import { markUpPage } from '../markup/index';
import { notFound } from '../refs/index';
// const favoritesEL = document.querySelector('.favorits-list');
const listNews = document.querySelector('.list-news');

const LOCALSTORAGE_KEY = 'ID-SAVE-FAVORITE';
let idArray = localStorage.getItem('ID-SAVE-FAVORITE');
let idArrayPars = JSON.parse(idArray) || [];

// listNews.addEventListener('change', deletNewsFavorite);
listNews.addEventListener('click', e => {
  deletNewsFavorite(e);
  getNewsToLocalStorage(e, arrayOfReadNews);
});

creatFavoritesList(idArrayPars);

makeOpacityReadedNews(auditArrayNews);

function creatFavoritesList(arr) {
  if (!idArrayPars.length) {
    notFound.classList.remove('not-found-hidden');
  } else {
    let array = arr
      .map(
        ({
          url,
          media,
          title,
          abstract,
          date,
          photo,
          id,
          idLenght,
          category,
        }) => {
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
    listNews.insertAdjacentHTML('beforeend', array);
  }
}

function deletNewsFavorite(e) {
  if (!e.target.classList.contains('button')) {
    return;
  } else if (e.target.classList.contains('add')) {
    const findIndex = +idArrayPars.findIndex(
      el => el.idLenght === +e.target.attributes[2].value
    );

    idArrayPars.splice(findIndex, 1);

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));

    e.target.parentNode.parentNode.parentNode.remove();

    showNothingNotFound(idArrayPars);
  }
  if (listNews.children.length===0) {
       notFound.classList.remove('not-found-hidden');
     }
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
        element.querySelector('.icon').classList.add('add');

        element.querySelector('lable').innerHTML = 'Remove from favorite';
      }
    });
  });
}

export function buttonClass() {
  let but = document.querySelectorAll('.js-button_favorites');
  let label = document.querySelectorAll('lable');

  but.forEach(el => {
    el.setAttribute('checked', 'true');
    el.classList.add('add');
  });
  label.forEach(el => {
    el.innerHTML = 'Remove from favorite';
  });
}
function showNothingNotFound(arr) {
  console.log(arr);
  notFound.classList.add('not-found-hidden');

  if (!arr.length) {
    notFound.classList.remove('not-found-hidden');
  }
}
