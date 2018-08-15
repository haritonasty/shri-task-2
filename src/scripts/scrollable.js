// main-arrows logic

const block = document.querySelector('.scrollable__wrap-scroll');
const scrollArrows = document.querySelector('.main__scrollable__arrows');

block.addEventListener("scroll", function () {
  scrollArrows.classList.remove('arrows_visible');
});


// devices arrows logic

const scroll = document.querySelector('.devices__scrollable');
const wrapScroll = document.querySelector(".devices__scrollable__wrap-scroll");
const contentScroll = document.querySelector(".devices__scrollable__content");

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

const travelDistance = 150;

document.addEventListener('DOMContentLoaded', () => {
  setOverflowAttr();
});

wrapScroll.addEventListener("scroll", setOverflowAttr);

leftArrow.addEventListener("click", function () {
  const overflow = determineOverflow(wrapScroll, contentScroll);
  if (overflow === "left" || overflow === "both") {
    wrapScroll.scrollLeft = wrapScroll.scrollLeft - travelDistance;
  }
  scroll.setAttribute("data-overflowing", overflow);
});


rightArrow.addEventListener("click", function () {
  const overflow = determineOverflow(wrapScroll, contentScroll);
  if (overflow === "right" || overflow === "both") {
    wrapScroll.scrollLeft = wrapScroll.scrollLeft + travelDistance;
  }
  scroll.setAttribute("data-overflowing", overflow);
});


function setOverflowAttr() {
  scroll.setAttribute('data-overflowing', determineOverflow(wrapScroll, contentScroll));
}

function determineOverflow(container, content) {
  const containerMetrics = container.getBoundingClientRect();
  const containerMetricsRight = Math.floor(containerMetrics.right);
  const containerMetricsLeft = Math.floor(containerMetrics.left);

  const contentMetrics = content.getBoundingClientRect();
  const contentMetricsRight = Math.floor(contentMetrics.right);
  const contentMetricsLeft = Math.floor(contentMetrics.left);

  if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
    return "both";
  } else if (contentMetricsLeft < containerMetricsLeft) {
    return "left";
  } else if (contentMetricsRight > containerMetricsRight) {
    return "right";
  } else {
    return "none";
  }
}


