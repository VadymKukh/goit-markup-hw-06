`use strict`;

const modal = document.querySelector('.modal-overlay');

const openModalBtn = document.querySelector('.main-button');
const closeModalBtn = document.querySelector('.icon-close');

openModalBtn.addEventListener(`click`, () => {
  modal.classList.add(`is-open`);
});

closeModalBtn.addEventListener(`click`, () => {
  modal.classList.remove(`is-open`);
});
