let btn = document.querySelector(".dropdown__button");
let btnText = document.querySelector(".dropdown__button-text");
let dropdown = document.querySelector(".dropdown__inner");
let optionLinks = document.getElementsByClassName("dropdown__option");


for (let i = 0; i < optionLinks.length; i++) {
  optionLinks[i].addEventListener("click", clickFn, false);
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("dropdown__inner_open");
});

function clickFn(e) {
  e.preventDefault();

  btnText.innerHTML = this.innerHTML;

  dropdown.classList.remove("dropdown__inner_open");
  let activeLink = document.querySelector(".dropdown__option_active");
  if (activeLink) activeLink.classList.remove("dropdown__option_active");
  this.classList.add("dropdown__option_active");
};