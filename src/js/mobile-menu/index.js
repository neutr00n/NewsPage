const bntOpen = document.querySelector('.header-btn__open-modal');
const bntClose = document.querySelector('.header-btn__close-modal');
const modalWindow = document.querySelector('.mobile-modal');
const switcherModal = document.querySelector('.switcher-wrapper');

bntOpen.addEventListener('click', onBtnToggleClass);

bntClose.addEventListener('click', onBtnToggleClass);

function onBtnToggleClass() {
  modalWindow.classList.toggle('is-open');
  switcherModal.classList.toggle('mobile');
}
