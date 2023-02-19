import {
  categoriesFilter,
  categoriesFilterBtn,
  categoriesFilterIcon,
  categoriesFilterContainer,
  jsCategoryBtn,
} from '../refs/index';

import { fetchCategories } from '../api/index';
import { createCategoriesMarkup } from '../markup/index';

let currentCountBtn = 0;

let checkCategory = '';

categoriesFilter.addEventListener('click', handleCategoriesContainerClick);
categoriesFilterBtn.addEventListener('click', handleCategoriesFilterBtnClick);

checkMatchMediaSize();

function handleCategoriesContainerClick(event) {
  event.preventDefault();

  if (
    !event.target.classList.contains('js-category-btn') &&
    !event.target.classList.contains('js-categories-filter__link')
  ) {
    return;
  }

  const currentActiveBtn = event.currentTarget.querySelector('.active');
  currentActiveBtn?.classList.remove('active');

  const nextActiveBtn = event.target;

  nextActiveBtn.classList.add('active');

  removeCategoriesFilterClass();

  checkCategory = event.target.textContent;
  const normalizeCheckCategory = encodeURIComponent(
    checkCategory.toLowerCase()
  );

  console.log(normalizeCheckCategory);
}

function handleCategoriesFilterBtnClick(event) {
  getFetchCategoriesDataToClick();

  if (event.currentTarget.dataset.categories === 'open') {
    removeCategoriesFilterClass();
    return;
  }

  addCategoriesFilterClass();
}

async function getFetchCategoriesDataToClick() {
  try {
    const { results } = await fetchCategories();
    addCategoriesMarkup(results, currentCountBtn);
    addCategoriesBtnName(results, currentCountBtn);
  } catch (err) {
    console.log(err);
  }
}

async function getFetchCategoriesData() {
  try {
    const { results } = await fetchCategories();

    addCategoriesBtnName(results, currentCountBtn);
  } catch (err) {
    console.log(err);
  }
}

function addCategoriesMarkup(categories, currentCountBtn) {
  const currentCategories = categories.slice(currentCountBtn);

  const markup = currentCategories.map(createCategoriesMarkup).join('');
  categoriesFilterContainer.insertAdjacentHTML('beforeend', markup);
}

function addCategoriesBtnName(categories, currentCountBtn) {
  const currentCategories = categories.slice(0, currentCountBtn);

  jsCategoryBtn.forEach((btn, index) => {
    if (index >= currentCountBtn) {
      return;
    }

    const currentCategory = currentCategories[index]?.display_name;
    btn.textContent = currentCategory;
    btn.setAttribute('data', `${currentCategory}`);
  });
}

function addCategoriesFilterClass() {
  categoriesFilterBtn.classList.add('active');
  categoriesFilterIcon.classList.add('rotate');
  categoriesFilterContainer.classList.add('show');
  categoriesFilterBtn.setAttribute('data-categories', 'open');

  document.addEventListener('keydown', handleKeyboardClick);
  //   document.addEventListener('click', handleBodyClick);
  categoriesFilterContainer.addEventListener(
    'click',
    handleCategoriesFilterContainerClick
  );
}

function removeCategoriesFilterClass() {
  categoriesFilterBtn.classList.remove('active');
  categoriesFilterIcon.classList.remove('rotate');
  categoriesFilterContainer.classList.remove('show');
  categoriesFilterBtn.removeAttribute('data-categories');

  document.removeEventListener('keydown', handleKeyboardClick);
  //   document.removeEventListener('click', handleBodyClick);
  categoriesFilterContainer.removeEventListener(
    'click',
    handleCategoriesFilterContainerClick
  );
}

// function handleBodyClick(event) {
//   if (event.target.classList.contains('js-no-close')) {
//     console.log('js-no-close');
//     return;
//   }
//   removeCategoriesFilterClass();
// }

function handleKeyboardClick(event) {
  console.log(event.code);
  if (event.code !== 'Escape') {
    return;
  }
  removeCategoriesFilterClass();
}

function handleCategoriesFilterContainerClick(event) {
  const category = event.target.textContent;

  document.querySelector(
    '.js-categories-filter__btn span'
  ).textContent = `${category}`;
}

function checkMatchMediaSize() {
  if (window.matchMedia('(max-width: 767.98px)').matches) {
    return;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.querySelector('.js-categories-filter__text').textContent =
      'Others';
    currentCountBtn = 4;
    getFetchCategoriesData();
  }
  if (window.matchMedia('(min-width: 1280px)').matches) {
    currentCountBtn = 6;
    getFetchCategoriesData();
  }
}
