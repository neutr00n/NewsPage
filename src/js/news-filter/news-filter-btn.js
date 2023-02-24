import {
  categoriesFilter,
  categoriesFilterBtn,
  categoriesFilterIcon,
  categoriesFilterContainer,
  jsCategoryBtn,
} from '../refs/index';

import { fetchCategories } from '../api/index';
import { createCategoriesMarkup } from '../markup/index';
import { getFilterByCategory } from '../news-filter/news-filter-categories';

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

  closeCategoriesList();

  checkCategory = event.target.textContent;
  const normalizeCheckCategory = encodeURIComponent(
    checkCategory.toLowerCase()
  );

  getFilterByCategory(normalizeCheckCategory);
}

function handleCategoriesFilterBtnClick(event) {
  getFetchCategoriesDataToClick();

  if (event.currentTarget.dataset.categories === 'open') {
    closeCategoriesList();
    return;
  }

  openCategoriesList();
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

function openCategoriesList() {
  addClassElement(
    'active',
    categoriesFilterBtn,
    categoriesFilterIcon,
    categoriesFilterContainer
  );
  categoriesFilterBtn.setAttribute('data-categories', 'open');

  document.addEventListener('keydown', handleKeyboardClick);

  categoriesFilterContainer.addEventListener(
    'click',
    handleCategoriesFilterContainerClick
  );
}

function closeCategoriesList() {
  removeClassElement(
    'active',
    categoriesFilterBtn,
    categoriesFilterIcon,
    categoriesFilterContainer
  );

  categoriesFilterBtn.removeAttribute('data-categories');

  document.removeEventListener('keydown', handleKeyboardClick);
  categoriesFilterContainer.removeEventListener(
    'click',
    handleCategoriesFilterContainerClick
  );
}

function handleKeyboardClick(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeCategoriesList();
}

function handleCategoriesFilterContainerClick(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }

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

function addClassElement(cls, ...elements) {
  elements.forEach(element => element.classList.add(cls));
}

function removeClassElement(cls, ...elements) {
  elements.forEach(element => element.classList.remove(cls));
}
