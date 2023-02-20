import axios from 'axios';
import { addWeather } from '../weather/index';

const API_KEY_S = '2Q5D7fvynyshAi0a8Zmy3AdyyqPFqoa6';
const API_KEY_P = 'VYHuklirnHOoGLBMe1pMZhn6akzpgva6';

const input = document.querySelector('.header-form__input');
const form = document.querySelector('.header-form');
const listNews = document.querySelector('.list-news');

form.addEventListener('submit', searchNewsfromApi);

popularNews();

function popularNews() {
  axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY_P}`
    )
    .then(response => {
      markUpNewsPopular(response.data.results);
          addWeather();
    })
    .then(() => readMore())
    .catch(error => console.log('error'));
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
      .map(({ url, media, title, abstract, published_date }, index) => {
        let dateUser = new Date(published_date);
        let date = dateUser.toLocaleDateString().replaceAll('.', '/');
        let photo =
          media.length !== 0
            ? media[0]['media-metadata'][2].url
            : 'https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg';
        let category = "Popular news"
        if (abstract.length < 120) {
          return markUpPage(photo, title, abstract, date, url, category,index);
        } else abstract = abstract.slice(0, 120) + '...';
        return markUpPage(photo, title, abstract, date, url, category, index);
      })
      .join('');
    return array;
  }
  listNews.innerHTML = `<div class="weather"></div>`;
  listNews.insertAdjacentHTML('beforeend', markUp());
}

function searchNewsfromApi(event) {
  event.preventDefault();

  const name = input.value;
  console.log(name);
  const date = '2023-02-16';
  axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&api-key=${API_KEY_S}&begin_date=${date}&end_date=${date}`
    )
    .then(response => {
      const arr = response.data.response.docs;
      if (arr.length === 0) {
        listNews.innerHTML = `<div>
            <p class="text-error">We haven’t found news from this category</p>
          <img src="../images/desktop@2x.png" alt="Image for error">
            </div>`;
      } else {
        markUpSearchNews(arr);
        addWeather();
      }
    });
}

function markUpSearchNews(arr) {
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
    console.log(arr);
    const array = arr
      .map(({ web_url, multimedia, headline, abstract, pub_date, type_of_material }, index) => {
        let dateUser = new Date(pub_date);
        let date = dateUser.toLocaleDateString().replaceAll('.', '/');
        let category = type_of_material||"other";
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
            index
          );
        } else abstract = abstract.slice(0, 120) + '...';
        return markUpPage(photo, headline.main, abstract, date, web_url,category, index);
      })
      .join('');
    return array;
  }
  listNews.innerHTML = `<div class="weather"></div>`;
  listNews.insertAdjacentHTML('beforeend', markUp());
}

function markUpPage(photo, title, abstract, date, url, category) {
return `<div class="set" data-id=${"id"}>
      <div class="overlay noActive-over"></div>
      <div class="thumb">

        <img class="img-news" src="${photo}" alt="" width="288"
        onerror= src="https://timenews.in.ua/wp-content/uploads/2017/07/News.jpg">
        <p class="already-read-button noActive-rmBtn">Already read</p >
        <button class="name-category">${category}</button >
        <div class="button_add">
                 <lable сlass="lable">AddToFavorite</lable>
                 <input type="checkbox"  class="button js-button"  data-idLenght=${"idLenght"}>
        </div>
      </div>
      <h2 class="title">${title}</h2>
      <p class="text">${abstract}</p>
      <div class="wrapper">
      <p class="date">${date}</p>
      <a href="${url}" class="read" target="_blank" rel="noreferrer noopener">Read more</a>
      </div>
  </div>  `;
}


      //   { url, media, title, abstract, published_date, photo, id },
      //   idLenght = newsId
      // ) */}

function readMore() {
  const readMoreBtn = document.querySelector('.read');
  const alreadyBtn = document.querySelector('.already-read-button');
  const newsCard = document.querySelector(".set")
  const overlay = document.querySelector('.overlay')

  // readMoreBtn.addEventListener('click', readMoreVision);
  listNews.addEventListener('click', readMoreVision);

  function readMoreVision(event) {
    const elementRead = event.target.classList.contains("read");
    if (!elementRead) {
      return
    } else {
      console.log(event.target);
      const overlay =  event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
      const alredy= event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[3];
     
      overlay.classList.remove('noActive-over');
      overlay.classList.add('active-over');

      alredy.classList.remove('noActive-rmBtn');
      alredy.classList.add('active-rmBtn');
    }

  }
}

