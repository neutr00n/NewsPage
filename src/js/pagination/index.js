import { pagList, pagListBtn, pagWrapper } from '../refs/index';
import {
  createPaginationFirstBtnMarkup,
  createPaginationBtnMarkup,
} from '../markup/index';

export class Pagination {
  constructor() {
    this.response = [];
    this.slicedResponse = [];
    this.mobileStaticLength = 4;
    this.TabletStaticLength = 7;
    this.DesktopStaticLength = 8;
    this.startLength = 0;
    this.mobileLength = 4;
    this.TabletLength = 7;
    this.DesktopLength = 8;
    this.totalPage = 1;
    this.currentPage = 1;
  }

  slicingResponse() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.slicedResponse = this.response.slice(
        this.startLength,
        this.mobileLength
      );
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      this.slicedResponse = this.response.slice(
        this.startLength,
        this.TabletLength
      );
    } else {
      this.slicedResponse = this.response.slice(
        this.startLength,
        this.DesktopLength
      );
    }
  }

  getNextPagination() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (this.mobileLength >= this.response.length) {
        return;
      }

      this.startLength += this.mobileStaticLength;
      this.mobileLength += this.mobileStaticLength;
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      if (this.TabletLength >= this.response.length) {
        return;
      }

      this.startLength += this.TabletStaticLength;
      this.TabletLength += this.TabletStaticLength;
    } else {
      if (this.DesktopLength >= this.response.length) {
        return;
      }
      this.startLength += this.DesktopStaticLength;
      this.DesktopLength += this.DesktopStaticLength;
    }
    this.getNextPage();
  }

  getPreviousPagination() {
    if (this.startLength <= 0) {
      return;
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
      this.startLength -= this.mobileStaticLength;
      this.mobileLength -= this.mobileStaticLength;
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      this.startLength -= this.TabletStaticLength;
      this.TabletLength -= this.TabletStaticLength;
    } else {
      this.startLength -= this.DesktopStaticLength;
      this.DesktopLength -= this.DesktopStaticLength;
    }
    this.getPreviousPage();
  }

  setCurrentPage(page) {
    this.currentPage = Number(page);
  }

  getCurrentPage() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (this.currentPage === 1) {
        this.startLength = 0;
        this.mobileLength = this.mobileStaticLength;
        this.slicedResponse = this.response.slice(0, this.mobileStaticLength);
      } else {
        this.startLength = this.mobileStaticLength * (this.currentPage - 1);
        this.mobileLength = this.mobileStaticLength * this.currentPage;
        this.slicedResponse = this.response.slice(
          this.startLength,
          this.mobileLength
        );
      }
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      if (this.currentPage === 1) {
        this.startLength = 0;
        this.TabletLength = this.TabletStaticLength;
        this.slicedResponse = this.response.slice(0, this.TabletStaticLength);
      } else {
        this.startLength = this.TabletStaticLength * (this.currentPage - 1);
        this.TabletLength = this.TabletStaticLength * this.currentPage;
        this.slicedResponse = this.response.slice(
          this.startLength,
          this.TabletLength
        );
      }
    } else {
      if (this.currentPage === 1) {
        this.startLength = 0;
        this.DesktopLength = this.DesktopStaticLength;
        this.slicedResponse = this.response.slice(0, this.DesktopStaticLength);
      } else {
        this.startLength = this.DesktopStaticLength * (this.currentPage - 1);
        this.DesktopLength = this.DesktopStaticLength * this.currentPage;
        this.slicedResponse = this.response.slice(
          this.startLength,
          this.DesktopLength
        );
      }
    }
  }

  getNextPage() {
    this.currentPage += 1;
  }

  getPreviousPage() {
    this.currentPage -= 1;
  }

  resetSlicedLength() {
    this.startLength = 0;
    this.currentPage = 1;
    this.slicedResponse = [];
    this.response = [];
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.mobileLength = this.mobileStaticLength;
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      this.TabletLength = this.TabletStaticLength;
    } else {
      this.DesktopLength = this.DesktopStaticLength;
    }
  }

  getTotalPages() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.totalPage = Math.ceil(this.response.length / 4);
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
    ) {
      this.totalPage = Math.ceil(this.response.length / 7);
    } else {
      this.totalPage = Math.ceil(this.response.length / 8);
    }
  }
}

export const pagination = new Pagination();
export const paginationCategories = new Pagination();
export const paginationSearch = new Pagination();

export function appendPaginationBtnMarkup() {
  let pages = [];

  for (let i = 1; i <= pagination.totalPage; i += 1) {
    pages.push(i);
  }

  const markup = pages
    .map((btn, index) => {
      if (index === 0) {
        return createPaginationFirstBtnMarkup(btn);
      }
      return createPaginationBtnMarkup(btn);
    })
    .join('');

  pagListBtn.innerHTML = markup;
}

export function appendPaginationBtnCategoriesMarkup() {
  let pages = [];

  for (let i = 1; i <= paginationCategories.totalPage; i += 1) {
    pages.push(i);
  }

  const markup = pages
    .map((btn, index) => {
      if (index === 0) {
        return createPaginationFirstBtnMarkup(btn);
      }
      return createPaginationBtnMarkup(btn);
    })
    .join('');

  pagListBtn.innerHTML = markup;
}

export function appendPaginationBtnSearchMarkup() {
  let pages = [];

  for (let i = 1; i <= paginationSearch.totalPage; i += 1) {
    pages.push(i);
  }

  const markup = pages
    .map((btn, index) => {
      if (index === 0) {
        return createPaginationFirstBtnMarkup(btn);
      }
      return createPaginationBtnMarkup(btn);
    })
    .join('');

  pagListBtn.innerHTML = markup;
}

export function addClassPaginationCurrentPage({ currentPage }) {
  const paginationPages = pagList.querySelectorAll('.js-pagination__page-btn');

  paginationPages.forEach(btn => {
    const numBtn = Number(btn.dataset.pages);

    if (numBtn === currentPage) {
      btn.classList.add('current-page');
    } else {
      btn.classList.remove('current-page');
    }
  });
}

export function showPagination() {
  pagWrapper.classList.remove('pagination-hidden');
}
