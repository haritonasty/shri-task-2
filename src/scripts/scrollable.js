const block = document.querySelector('.scrollable__wrap-scroll');
const scrollArrows = document.querySelector('.main__scrollable__arrows');

block.addEventListener("scroll", function () {
  scrollArrows.classList.remove('arrows_visible');
});