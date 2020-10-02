'use strict';

const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

const valueRef = document.querySelector('#value');

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
