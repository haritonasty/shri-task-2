const block = document.querySelector('.scrollable__wrap-scroll');
const scrollArrows = document.querySelector('.scrollable__arrows');

block.addEventListener("scroll", function () {
  scrollArrows.classList.remove('scrollable__arrows_visible');
});