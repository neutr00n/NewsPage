import { setStorage } from '../local-storage/index';
import { getStorage } from '../local-storage/index';

const switcherArea = document.querySelector('.switcher');
const lightRadioIcon = document.querySelector('.switcher-icon--light');
const darkRadioIcon = document.querySelector('.switcher-icon--dark');
const lightIndicator = document.querySelector('.switcher-indicator--light');
const darkIndicator = document.querySelector('.switcher-indicator--dark');
const switcheStatus = document.querySelector('.switcher__status');
const bodyTheme = document.querySelector('body');
const pageByBody = document.body.dataset.set;

// для календаря
const calendar = document.querySelector('.calendar-input'),
inputBtnDown = document.querySelector('.calendar__button-down');
//________________________________________________________________

const LOCAL_STORAGE_KEY = 'color-scheme';

switcherArea.addEventListener('click', onSwitcherAreaClick);

function onSwitcherAreaClick() {
  changeStyle();
}

function changeStyle() {
  let isScheme = bodyTheme.getAttribute('light');

  if (isScheme === 'light') {
    takeDarkScheme();
  } else if (isScheme !== 'light') {
    takeLightScheme();
  }
}

function takeLightScheme() {
  document.body.removeAttribute('dark');
  document.body.setAttribute('light', 'light');

  lightRadioIcon.classList.add('is-light');
  darkRadioIcon.classList.remove('is-dark');

  lightIndicator.classList.add('is-light');
  darkIndicator.classList.remove('is-dark');

  switcheStatus.classList.add('is-light');
  switcheStatus.classList.remove('is-dark');

  switcherArea.classList.remove('is-dark');

  // для календаря
  calendar.classList.remove('dark-theme-border');
  inputBtnDown.classList.remove('dark-theme-btn');

  setStorage(LOCAL_STORAGE_KEY, 'light');
}

function takeDarkScheme() {
  document.body.removeAttribute('light');
  document.body.setAttribute('dark', 'dark');

  lightRadioIcon.classList.remove('is-light');
  darkRadioIcon.classList.add('is-dark');

  lightIndicator.classList.remove('is-light');
  darkIndicator.classList.add('is-dark');

  switcheStatus.classList.remove('is-light');
  switcheStatus.classList.add('is-dark');

  switcherArea.classList.add('is-dark');

  // для календаря
  calendar.classList.add('dark-theme-border');
  inputBtnDown.classList.add('dark-theme-btn');

  setStorage(LOCAL_STORAGE_KEY, 'dark');
}

function putCurrentScheme() {
  const savedScheme = getStorage(LOCAL_STORAGE_KEY);

  if (savedScheme !== null) {
    if (savedScheme === 'dark') {
      takeDarkScheme();
    } else takeLightScheme();
  }

  return;
}
putCurrentScheme();

// Функция для определения и подсветки текущей страницы Хедера Деск&Таблет
const navLinks = document.querySelectorAll('a[data-set]');

function changeCurrentPage() {
  const currentLink = [...navLinks].find(
    link => link.dataset.set === pageByBody
  );

  const isCurrentPage = currentLink.dataset.set;

  if (isCurrentPage === pageByBody) {
    currentLink.classList.add('header-list__link--current');
  }
}

changeCurrentPage();

// Функция для определения и осветления текущей страницы в мобильном меню
const mobileItems = document.querySelectorAll('li[data-mobile]');

function changeCurrentMobilePage() {
  const currentItem = [...mobileItems].find(
    item => item.dataset.mobile === pageByBody
  );

  const isCurrentPage = currentItem.dataset.mobile;

  if (isCurrentPage === pageByBody) {
    currentItem.classList.add('modal-list__item--current');

    const mobileCurrentLink = currentItem.querySelector('.modal-list__link');
    const mobileCurrentIcon = currentItem.querySelector(
      '.modal-list__icon-way'
    );

    mobileCurrentLink.classList.add('modal-list__link--current');
    mobileCurrentIcon.classList.add('modal-list__icon-way--current');
  }
}

changeCurrentMobilePage();

// Слушатели для блокировки Сабмита
const searchForm = document.querySelector('.header-form');
const searchFormBtn = document.querySelector('.header-form__btn');
const searchFormInput = document.querySelector('.header-form__input');

searchForm.addEventListener('focusin', e => {
  searchFormBtn.classList.add('is-active');
});

searchForm.addEventListener('focusout', e => {
  searchFormBtn.classList.remove('is-active');
});
