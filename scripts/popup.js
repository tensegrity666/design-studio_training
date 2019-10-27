'Use strict';

{
    const writeButton = document.querySelector('.button-contacts');
    const popup = document.querySelector('.write');
    const overlay = document.querySelector('.modal-overlay');
    const blur = document.querySelector('.js-blur');

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
}
