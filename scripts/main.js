'use strict';

const writeButton = document.querySelector('.button-contacts');
const popup = document.querySelector('.write');
const overlay = document.querySelector('.modal-overlay');
const blur = document.querySelector('.js-blur');
const close = document.querySelector('.modal-close');


writeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  blur.classList.add('modal-blur');
  overlay.classList.add('modal-show');
  popup.classList.add('modal-show');
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  blur.classList.remove('modal-blur');
  overlay.classList.remove('modal-show');
});