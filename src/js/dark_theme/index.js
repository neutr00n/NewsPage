import { setStorage } from '../local-storage/index';
import { getStorage } from '../local-storage/index';

const bodyTheme = document.querySelector('body');
const switcherArea = document.querySelector('.switcher');
const elsOfSwitcher = document.querySelectorAll('.js-switcher');
const pageByBody = document.body.dataset.set;

const darkClass = 'is-dark';
const lightClass = 'is-light';

const LOCAL_STORAGE_KEY = 'color-scheme';

switcherArea.addEventListener('click', onSwitcherAreaClick);

function onSwitcherAreaClick() {
  handleNeededStyle();
}

function handleNeededStyle() {
  let currentTheme = bodyTheme.dataset.theme;

  if (currentTheme === lightClass) {
    changeColorScheme(currentTheme, darkClass);
  } else if (currentTheme === darkClass) {
    changeColorScheme(currentTheme, lightClass);
  }
}

function changeColorScheme(currentTheme, neededTheme) {
  bodyTheme.setAttribute('data-theme', neededTheme);

  elsOfSwitcher.forEach(el => {
    el.classList.replace(currentTheme, neededTheme);
  });

  setStorage(LOCAL_STORAGE_KEY, neededTheme);
}

function putCurrentScheme() {
  const savedScheme = getStorage(LOCAL_STORAGE_KEY);

  if (savedScheme !== null) {
    if (savedScheme === darkClass) {
      changeColorScheme(lightClass, darkClass);
    } else changeColorScheme(darkClass, lightClass);
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
