const switchers = document.querySelectorAll('.switcher__radio');
const lightRadio = document.querySelector('.switcher-icon--light');
const darkRadio = document.querySelector('.switcher-icon--dark');
const lightIndicator = document.querySelector('.switcher-indicator--light');
const darkIndicator = document.querySelector('.switcher-indicator--dark');
const pageByBody = document.body.dataset.set;

[...switchers].forEach(radio => radio.addEventListener('change', changeStyle));

function changeStyle(e) {
  const switchThema = e.target.value;

  chackedScheme(switchThema);
  saveScheme(switchThema);
}

function chackedScheme(thema) {
  if (thema === 'dark') {
    takeDarkScheme();
  } else {
    takeLightScheme();
  }
}

function takeLightScheme() {
  document.body.removeAttribute('dark');
  document.body.setAttribute('light', 'light');

  lightRadio.classList.add('is-light');
  lightIndicator.classList.add('is-light');

  darkRadio.classList.remove('is-dark');
  darkIndicator.classList.remove('is-dark');
}

function takeDarkScheme() {
  document.body.removeAttribute('light');
  document.body.setAttribute('dark', 'dark');

  lightRadio.classList.remove('is-light');
  lightIndicator.classList.remove('is-light');

  darkRadio.classList.add('is-dark');
  darkIndicator.classList.add('is-dark');
}

function saveScheme(scheme) {
  localStorage.setItem('color-scheme', scheme);
}

function getSavedScheme() {
  return localStorage.getItem('color-scheme');
}

function putCurrentScheme() {
  const savedScheme = getSavedScheme();

  if (savedScheme !== null) {
    const currentRadio = document.querySelector(
      `.switcher__radio[value=${savedScheme}]`
    );
    currentRadio.checked = true;

    chackedScheme(savedScheme);
  }

  return;
}

// Функция для определения и подсветки текущей страницы Хедера Деск&Таблет

function changeCurrentPage() {
  const navLinks = document.querySelectorAll('a[data-set]');

  const currentLink = [...navLinks].find(
    link => link.dataset.set === pageByBody
  );

  const isCurrentPage = currentLink.dataset.set;

  if (isCurrentPage === pageByBody) {
    currentLink.classList.add('header-list__link--current');
  }
}

// Функция для определения и осветления текущей страницы в мобильном меню

function changeCurrentMobilePage() {
  const mobileItems = document.querySelectorAll('li[data-mobile]');

  const currentItem = [...mobileItems].find(
    item => item.dataset.mobile === pageByBody
  );

  const isCurrentPage = currentItem.dataset.mobile;

  if (isCurrentPage === pageByBody) {
    currentItem.classList.add('modal-list__item--current');

    const mobileCurrentLink = currentItem.querySelector('.modal-list__link');

    mobileCurrentLink.classList.add('modal-list__link--current');
  }
}

putCurrentScheme();
changeCurrentPage();
changeCurrentMobilePage();
