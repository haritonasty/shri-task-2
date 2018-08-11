const menuNavOpen = document.querySelector('.button-burger');
const menuNavClose = document.querySelector('.button-close');
const menuNav = document.querySelector('.main-nav');
const menuNavInner = document.querySelector('.main-nav__inner');

menuNavOpen.addEventListener('click', e => {
  menuNavInner.classList.remove('main-nav__inner_hidden');
  menuNav.classList.remove('main-nav__hidden');
});

menuNavClose.addEventListener('click', e => {
  menuNavInner.classList.add('main-nav__inner_hidden');
  menuNav.classList.add('main-nav__hidden');
});