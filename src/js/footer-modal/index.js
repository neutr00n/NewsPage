const bntOpen = document.querySelector('.footer-btn__reg');
const bntClose = document.querySelector('.modal-btn-close');
const footerModalReg = document.querySelector('.footer-mobile-modal');
const formReg = document.querySelector('.modal-form');
const licenseCheck = document.querySelector('.form-checkbox');
const btnRegSubm = document.querySelector('.form-btn');

bntOpen.addEventListener('click', onClickBtnModalOpen);
bntClose.addEventListener('click', onClickBtnModalClose);
footerModalReg.addEventListener('click', onBackdropClick);
formReg.addEventListener('submit', onFormRegSubmite);
licenseCheck.addEventListener('change', onCheckLicense);

function onClickBtnModalOpen() {
  footerModalReg.classList.remove('is-hidden');

  window.addEventListener('keydown', onModalCloseByEsc);
}

function onClickBtnModalClose() {
  footerModalReg.classList.add('is-hidden');

  window.removeEventListener('keydown', onModalCloseByEsc);
}

function onBackdropClick(e) {
  const IS_BACKDROP = e.currentTarget === e.target;

  if (IS_BACKDROP) {
    onClickBtnModalClose();
  }
}

function onModalCloseByEsc(e) {
  const IS_ESCAPE = e.code === 'Escape';

  if (IS_ESCAPE) {
    onClickBtnModalClose();
  }
}

function onFormRegSubmite(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((name, value) => {
    console.log(value, name);
  });

  formReg.reset();
  btnRegSubm.disabled = true;
}

function onCheckLicense(e) {
  const IS_CHECKED = e.currentTarget.checked;

  btnRegSubm.disabled = !IS_CHECKED;
}
