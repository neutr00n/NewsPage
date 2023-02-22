import { checkStorageReadNews, getNewsToLocalStorage, makeOpacityReadedNews} from '../read/localStorage'
import { getStorage } from '../local-storage';

let arrayOfReadNews = [];
getStorage('readNews')
  ? (arrayOfReadNews = [...getStorage('readNews')])
  : (arrayOfReadNews = []);

 import { markUpPage } from '../markup/index';
// const favoritesEL = document.querySelector('.favorits-list');
const listNews = document.querySelector('.list-news');

const LOCALSTORAGE_KEY = 'ID-SAVE-FAVORITE';
let idArray = localStorage.getItem('ID-SAVE-FAVORITE');
let idArrayPars = JSON.parse(idArray) || [];

// listNews.addEventListener('change', deletNewsFavorite);
listNews.addEventListener('click', (e) => {
  deletNewsFavorite(e);
  getNewsToLocalStorage(e, arrayOfReadNews);
});
creatFavoritesList(idArrayPars);

makeOpacityReadedNews(auditArrayNews)

function creatFavoritesList(arr) {
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
        // console.log(title);
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

function deletNewsFavorite(e) {
  if (!e.target.classList.contains('button')) {
    return;
  } else if (e.target.classList.contains('add')) {
    const findIndex = +idArrayPars.findIndex(
      el => el.idLenght === +e.target.attributes[2].value
    );
    // console.log(e.target.attributes[2].value);
    idArrayPars.splice(findIndex, 1);

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));

    e.target.parentNode.parentNode.parentNode.remove();
  }
}

export function auditArrayNews() {
  idArrayPars.map(el => {
    listNews.querySelectorAll('.set').forEach(element => {
      let id = element.dataset.id;

      if (id === el.id) {
        // console.log(element)
        element
          .querySelector('.js-button_favorites')
          .setAttribute('checked', 'true');
        element.querySelector('.js-button_favorites').classList.add('add');
        element.querySelector('.button').classList.add('add');

        element.querySelector('lable').innerHTML = 'Remove From Favorite';
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
    el.innerHTML = 'Remove From Favorite';
  });
}
