console.log("=======>task-4<=======");

// !  Variant-1
("use strict");

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");

btnDecrementRef.addEventListener("click", decrement);
btnIncrementRef.addEventListener("click", increment);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

// !  Variant-2

// let counterPlus = document.querySelector("[data-action=increment]");
// let counterMinus = document.querySelector("[data-action=decrement]");
// let counterSpan = document.querySelector("#value");
// let counterValue = 0;
// const increment = () => {
//   counterValue = ++document.querySelector("#value").textContent;
// };
// const decrement = (event) => {
//   if (counterValue > 0)
//     counterValue = --document.querySelector("#value").textContent;
// };
// counterPlus.addEventListener("click", increment);
// counterMinus.addEventListener("click", decrement);
