'Use strict';

{
  const slideExpensive = document.querySelector('.item-expensive');
  const slideMath = document.querySelector('.item-math');
  const slideNight = document.querySelector('.item-night');
  const btnFirstSlide = document.querySelector('.btnFirstSlide');
  const btnSecondSlide = document.querySelector('.btnSecondSlide');
  const btnThirdSlide = document.querySelector('.btnThirdSlide');

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