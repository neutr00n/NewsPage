// import {
//   newsId,
//   LOCALSTORAGE_KEY,
//   idArrayPars,
//     getNewsArray,
//     deletNews,
//     addToFavorite,
//     auditArrayNews,
//     idDone,
// idArray,
// } from '../favorites/localStorage'

export const LOCALSTORAGE_KEY = 'ID-SAVE-FAVORITE';
export let idArray = localStorage.getItem('ID-SAVE-FAVORITE');
export let idArrayPars = JSON.parse(idArray) || [];
export let newsId = 0;

export const getNewsArray = function (e) {
  if (!e.target.classList.contains('button')) {
    return;
  } else if (e.target.classList.contains('add')) {
    deletNews(e);
  } else {
    addToFavorite(e);
  }
};

export function deletNews(e) {
  let id = e.target.closest('.set').attributes[1].value;
  idArrayPars.map(el => {
    if (id === el.id) {
      const index = idArrayPars.map(el => el.id).indexOf(id);
      console.log(index);
      idArrayPars.splice(index, 1);
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
      e.target.parentNode.childNodes[1].innerHTML = 'Add To Favorite';
      e.target.classList.remove('add');
      e.target.parentNode.childNodes[3].classList.remove('add');
      return;
    }
  });
}

export const addToFavorite = function (e) {
  let arrayFavorites = {
    photo: e.target.closest('.thumb').childNodes[1].attributes[1].value,
    date: e.target.closest('.set').childNodes[9].childNodes[1].innerText,
    url: e.target.closest('.set').childNodes[9].childNodes[3].attributes[0]
      .value,
    title: e.target.closest('.set').childNodes[5].innerText,
    abstract: e.target.closest('.set').childNodes[7].innerText,
    idLenght: newsId,
    id: e.target.closest('.set').attributes[1].value,
    category: e.target.closest('.thumb').childNodes[5].innerText,
  };
  idArrayPars.push(arrayFavorites);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
  e.target.parentNode.childNodes[3].classList.add('add');
  e.target.classList.add('add');
  e.target.parentNode.childNodes[1].innerHTML = 'Remove From Favorite';

  newsId += 1;
};

export const auditArrayNews = function (arr) {
  idArrayPars.map(el => {
    arr.querySelectorAll('.set').forEach(element => {
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
};

export const idDone = function () {
  if (idArrayPars.length === 0) {
    return;
  } else {
    newsId = idArrayPars[idArrayPars.length - 1].idLenght + 1 || 0;
  }
};
