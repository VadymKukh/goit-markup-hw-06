`use strict`;

const modalMobile = document.querySelector('.overlay-head');

const openModalMobileBtn = document.querySelector('.head-btn');
const closeModalMobileBtn = document.querySelector('.icon-close-mobile');

openModalMobileBtn.addEventListener(`click`, () => {
  modalMobile.classList.add(`is-opened`);
});

closeModalMobileBtn.addEventListener(`click`, () => {
  modalMobile.classList.remove(`is-opened`);
});
