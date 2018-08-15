const dropdownButton = document.querySelector(".dropdown__button");
const dropdownButtonText = document.querySelector(".dropdown__button-text");
const dropdown = document.querySelector(".dropdown__inner");
const dropdownOptions = document.getElementsByClassName("dropdown__option");


for (let option of dropdownOptions) {
  option.addEventListener("click", selectOption, false);
}

dropdownButton.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("dropdown__inner_open");
});

function selectOption(e) {
  e.preventDefault();

  dropdownButtonText.innerHTML = this.innerHTML;

  dropdown.classList.remove("dropdown__inner_open");
  let activeLink = document.querySelector(".dropdown__option_active");
  if (activeLink) activeLink.classList.remove("dropdown__option_active");
  this.classList.add("dropdown__option_active");
}
