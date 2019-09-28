'use strict';

{
  const writeButton = document.querySelector('.button-contacts');
  const popup = document.querySelector('.write');
  const overlay = document.querySelector('.modal-overlay');
  const blur = document.querySelector('.js-blur');
  const slideExpensive = document.querySelector('.item-expensive');
  const slideMath = document.querySelector('.item-math');
  const slideNight = document.querySelector('.item-night');
  const btnFirstSlide = document.querySelector('.btnFirstSlide');
  const btnSecondSlide = document.querySelector('.btnSecondSlide');
  const btnThirdSlide = document.querySelector('.btnThirdSlide');
  
  writeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    blur.classList.add('modal-blur');
    overlay.classList.add('modal-show');
    popup.classList.add('modal-show');
  });

  const close = document.querySelector('.modal-close');
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('modal-show');
    blur.classList.remove('modal-blur');
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('modal-show');
    blur.classList.remove('modal-blur');
  });
  
  btnFirstSlide.addEventListener('click', function (evt) {
    evt.preventDefault();
    slideMath.classList.remove('slideOn');
    slideNight.classList.remove('slideOn');
    slideExpensive.classList.add('slideOn');
  });
  
  btnSecondSlide.addEventListener('click', function (evt) {
    evt.preventDefault();
    slideExpensive.classList.remove('slideOn');
    slideNight.classList.remove('slideOn');
    slideMath.classList.add('slideOn');
  });
  
  btnThirdSlide.addEventListener('click', function (evt) {
    evt.preventDefault();
    slideExpensive.classList.remove('slideOn');
    slideMath.classList.remove('slideOn');
    slideNight.classList.add('slideOn');
  });
}