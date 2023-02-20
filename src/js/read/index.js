import { getStorage } from "../local-storage";
const localStorageReadNews = getStorage('readNews');
const newsDateContainer = document.querySelector('.date-news');
// const noReadNews = document.querySelector('.no-news');
const sortedNews = sortByDate(localStorageReadNews);

createContainerFromDate(sortedNews);
newsDateContainer.addEventListener('click', renderByDate);

function sortByDate(arr) {
    const dateSort = {};
    if (!arr) {
        // noReadNews.classList.remove('')
        return
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

function makeCard({photo, title, abstract, date, url, category,id,  idLenght}) {
    const text = `<div class="set" data-id=${id}>
      <div class="overlay noActive-over"></div>
      <div class="thumb">

        <img class="img-news" src="${photo}" alt="" width="288"
        onerror= src="https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg">
        <p class="already-read-button noActive-rmBtn">Already read</p >
        <button class="name-category">${category}</button >
        <div class="button_add">
                 <lable сlass="lable">AddToFavorite</lable>
                 <input type="checkbox"  class="button js-button"  data-idLenght=${idLenght}>
        </div>
      </div>
      <h2 class="title">${title}</h2>
      <p class="text">${abstract}</p>
      <div class="wrapper">
      <p class="date">${date}</p>
      <a href="${url}" class="read" target="_blank" rel="noreferrer noopener">Read more</a>
      </div>
  </div>  `;
    return text
};

function renderCardSet(arr) {
    const cardSet = arr.map(item => makeCard(item)).join('');
    return cardSet
};

function createContainerFromDate(obj) {
    const dates = Object.keys(obj)
    // console.log(dates)
    dates.forEach((date) => {
        const dateContainer = `<div>
  <button ><span>${date}</span>
  </button>
   <div></div>
  </div>`;
        newsDateContainer.insertAdjacentHTML("beforeend", dateContainer)
    });
};   

function renderByDate(e) {
    const newsList = e.target.parentNode.parentNode.lastElementChild;
if (e.target.parentNode.nodeName === 'BUTTON') {
    const buttonText = e.target.innerText;
    const arrDates = Object.keys(sortedNews);
for (const dates of arrDates) {
if (dates === buttonText) {
if (newsList.firstElementChild) { newsList.innerHTML = ''; }else{
    newsList.innerHTML = renderCardSet(sortedNews[dates]);
    };
    };
    };
    };
};