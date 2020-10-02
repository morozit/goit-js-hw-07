'use strict';

const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.firstElementChild;
const boxesRef = document.querySelector('#boxes');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

btnRenderRef.addEventListener('click', getAmount);
btnDestroyRef.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = inputRef.value;
  inputRef.value = '';
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const createElement = document.createElement('div');
    createElement.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    boxesRef.appendChild(createElement);
    size += 10;
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function random() {
  return Math.round(Math.random() * 256);
}
