import { getStorage } from "../local-storage";
import { markUpPage } from '../markup/index';
import { notFound } from '../refs/index';

const localStorageReadNews = getStorage('readNews');

import { readNewsDateContainer } from '../refs/index';

const sortedNews = sortByDate(localStorageReadNews);
startPage();

function startPage() {
    if (!sortedNews) {
        notFound.classList.remove('not-found-hidden');
    } else {
        createContainerFromDate(sortedNews);
        renderByDate();
    };
};

function sortByDate(arr) {
    const dateSort = {};
    if (!arr) {
        return;
    };
    for (let object = 0; object < arr.length; object += 1){
        const date = arr[object].readDate;
        const objOfArr = arr[object];
        if (dateSort[date]) { dateSort[date].push(objOfArr) } else {
            dateSort[date] = [objOfArr];
        };
    };
    return dateSort;
};

function renderCardSet(arr) {
    const cardSet = arr.map(({photo, title, abstract, date, url, category,id,  idLenght}) => markUpPage(photo, title, abstract, date, url, category, id, idLenght)).join('');
    return cardSet
};

function createContainerFromDate(obj) {
    const dates = Object.keys(obj)
    dates.forEach((date) => {
        const dateContainer = `<div class='date-card'>
  <button class='date-btn'><span class='date-btn__text'>${date}</span><svg class="date-btn___arrow" width="14" height="14">
          <use href="/symbol-defs.a8b2e413.svg#icon-down"></use>
        </svg>
  </button>
   <div class='list-news dates'></div>
  </div>`;
        readNewsDateContainer.insertAdjacentHTML("beforeend", dateContainer)
    });
};   

function renderByDate() {
const dateButton = document.querySelectorAll('.date-btn');
    dateButton.forEach(button => {
        const newsList = button.nextSibling.nextSibling;
        const buttonText = button.firstElementChild.innerText;
        const arrDates = Object.keys(sortedNews);
        for (const dates of arrDates) {
            if (dates === buttonText) {
                newsList.innerHTML = renderCardSet(sortedNews[dates]);
            };
        };
        button.addEventListener('click', () => {
            button.lastElementChild.classList.toggle('arrow_rotate');
            button.nextSibling.nextSibling.classList.toggle('show');
        });
    });
};



