import { setStorage, getStorage } from '../local-storage';
import { input, form, listNews, notFound } from '../refs/index';
listNews.addEventListener('click', getNewsToLocalStorage);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
let arrayOfReadNews = [];
getStorage('readNews')
  ? (arrayOfReadNews = [...getStorage('readNews')])
    : (arrayOfReadNews = []);
  
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
        // readDate: "16/02/2023",
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
