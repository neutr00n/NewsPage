import { getStorage } from '../local-storage';
import { markUpPage } from '../markup/index';
import { listNews, notFound } from '../refs/index';
import { readNewsDateContainer } from '../refs/index';
import {
  newsId,
  LOCALSTORAGE_KEY,
  idArrayPars,
  getNewsArray,
  deletNews,
  addToFavorite,
  auditArrayNews,
  idDone,
} from '../favorites/features';
let newsList = null;
// -----------------------------------------------------------------------------------
const localStorageReadNews = getStorage('readNews');

const sortedNews = sortByDate(localStorageReadNews);
startPage();

function startPage() {
  if (!sortedNews) {
    notFound.classList.remove('not-found-hidden');
  } else {
    createContainerFromDate(sortedNews);
    renderByDate();
  }
}

function sortByDate(arr) {
  const dateSort = {};
  if (!arr) {
    return;
  }
  for (let object = 0; object < arr.length; object += 1) {
    const date = arr[object].readDate;
    const objOfArr = arr[object];
    if (dateSort[date]) {
      dateSort[date].push(objOfArr);
    } else {
      dateSort[date] = [objOfArr];
    }
  }
  return dateSort;
}

function renderCardSet(arr) {
  const cardSet = arr
    .map(({ photo, title, abstract, date, url, category, id, idLenght }) =>
      markUpPage(photo, title, abstract, date, url, category, id, idLenght)
    )
    .join('');
  return cardSet;
}

function createContainerFromDate(obj) {
  const dates = Object.keys(obj);
  dates.forEach(date => {
    const dateContainer = `<div class='date-card'>
  <button class='date-btn'><span class='date-btn__text'>${date}</span><span class='read_icon'>
  <svg class="date-btn___arrow" width="14" height="9" aria-hidden="true" style="position: absolute;>
<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">
<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>
</symbol>
</svg >
  </span>
  </button>
   <div id='dateNowList' class='list-news dates'></div>
  </div>`;
    readNewsDateContainer.insertAdjacentHTML('beforeend', dateContainer);
  });
}

function renderByDate() {
  const dateButton = document.querySelectorAll('.date-btn');
  dateButton.forEach(button => {
    newsList = button.nextSibling.nextSibling;
    const buttonText = button.firstElementChild.innerText;
    const arrDates = Object.keys(sortedNews);
    for (const dates of arrDates) {
      if (dates === buttonText) {
        newsList.innerHTML = renderCardSet(sortedNews[dates]);
        idDone();
        const containersList = document.querySelectorAll('#dateNowList');
        containersList.forEach(box => {
          auditArrayNews(box);
          box.addEventListener('click', getNewsArray);
        });
      }
    }
    button.addEventListener('click', () => {
      console.log(button.lastElementChild.firstElementChild);
      button.lastElementChild.firstElementChild.classList.toggle(
        'arrow_rotate'
      );
      button.nextSibling.nextSibling.classList.toggle('show');

      const pageList = document.querySelector('#dateNowList');
      console.log(pageList);
      pageList.addEventListener('click', getNewsArray);
    });
  });
}
