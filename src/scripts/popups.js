const devicesLight = document.getElementsByClassName('light');
const devicesFloor = document.getElementsByClassName('floor');
const devicesTemp = document.getElementsByClassName('temp');

const modalDevices = document.getElementsByClassName('modal__device');

const modalDeviceLight = document.querySelector('.device_light');
const modalDeviceFloor = document.querySelector('.device_floor');
const modalDeviceTemp = document.querySelector('.device_temp');

let popup = document.querySelector(".modal");
let page = document.querySelector(".page");
let popupDecline = document.querySelector(".modal__button_decline");
let popupAccept = document.querySelector(".modal__button_accept");

popupDecline.addEventListener('click', () => {
  togglePopup();
  for (let device of modalDevices) {
    device.classList.remove('modal__device_open');
  }
});

popupAccept.addEventListener('click', () => {
  togglePopup();
  for (let device of modalDevices) {
    device.classList.remove('modal__device_open');
  }
});

for (let device of devicesFloor) {
  device.addEventListener('click', () => {
    togglePopup();
    modalDeviceFloor.classList.add('modal__device_open');
    initInteractive();
  });
}

for (let device of devicesLight) {
  device.addEventListener('click', () => {
    togglePopup();
    modalDeviceLight.classList.add('modal__device_open');
  });
}

for (let i = 0; i < devicesTemp.length; i++) {
  devicesTemp[i].addEventListener('click', () => {
    togglePopup();
    modalDeviceTemp.classList.add('modal__device_open');
  });
}

function togglePopup() {
  popup.classList.toggle('modal_active');
  page.classList.toggle('blur');
}


function initInteractive() {
  const progress = document.querySelector('.circle-enabled');
  const triangle = document.querySelector('.regulator_triangle');
  const text = document.querySelector('.regulator_text');

  const scrollEl = document.querySelector('.hidden-scroll__wrap');
  scrollEl.addEventListener('scroll', onScroll);

  const minTemp = 20;
  const maxTemp = 35;
  const max = maxTemp - minTemp;

  const currPercent = (23 - minTemp) * 100 / max;
  const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
  let currScroll = Math.round(maxScroll * currPercent / 100);
  let currScrollPercent = currPercent;
  scrollEl.scrollTo({ top: currScroll });

  progress.style.strokeDasharray = `${currPercent * 526 / 100}, 625`;
  let tempDash = currPercent * 526 / 100;
  let currTrianglePos = currPercent * 124 / 100;
  triangle.style.setProperty('--pos', `${currTrianglePos}grad`);
  let currGradText = currScrollPercent * max / 100 + minTemp;
  text.innerHTML = `+${currGradText}`;

  function onScroll() {
    currScrollPercent = scrollEl.scrollTop * 100 / maxScroll;
    tempDash = 526 * currScrollPercent / 100;
    currTrianglePos = 124 * currScrollPercent / 100;
    currGradText = Math.round(currScrollPercent * max / 100 + minTemp);
    progress.style.strokeDasharray = `${tempDash}, 625`;
    triangle.style.setProperty('--pos', `${currTrianglePos}grad`);
    text.innerHTML = `+${currGradText}`;
  }
}


