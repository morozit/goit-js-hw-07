console.log("=======>task-8<=======");

// ! Variant-1
("use strict");

const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.firstElementChild;
const boxesRef = document.querySelector("#boxes");
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

btnRenderRef.addEventListener("click", getAmount);
btnDestroyRef.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = inputRef.value;
  inputRef.value = "";
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const createElement = document.createElement("div");
    createElement.style.cssText = `display: inline-block; width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    boxesRef.appendChild(createElement);
    size += 10;
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function random() {
  return Math.round(Math.random() * 256);
}

// ! Variant-2

// const boxes = {
//   renderBtn: document.querySelector("[data-action=render]"),
//   destroyBtn: document.querySelector("[data-action=destroy]"),
//   amount: document.querySelector("#controls input"),
//   value: 0,
//   boxcontainer: document.querySelector("#boxes"),
//   width: 30,
//   height: 30,
//   created: 0,
//   createdBoxes: document.querySelector("#boxes").children,
//   random: () => Math.floor(255 * Math.random()),
//   createBoxes: function () {
//     for (let i = 1; i <= this.value; i++) {
//       const newDiv = document.createElement("div");
//       newDiv.style.width = `${this.width}px`;
//       newDiv.style.height = `${this.height}px`;
//       newDiv.style.display = "inline-block";
//       newDiv.style.backgroundColor = `rgb(${this.random()}, ${this.random()}, ${this.random()})`;
//       this.boxcontainer.appendChild(newDiv);
//       this.width += 10;
//       this.height += 10;
//       this.created += 1;
//     }
//   },
//   destroyBoxes: function () {
//     for (let i = 1; i <= this.created; i++) {
//       this.createdBoxes[this.created - i].remove();
//     }
//     this.width = 30;
//     this.height = 30;
//     this.created = 0;
//   },
// };
// boxes.renderBtn.addEventListener("click", boxes.createBoxes.bind(boxes));
// boxes.destroyBtn.addEventListener("click", boxes.destroyBoxes.bind(boxes));
// boxes.amount.addEventListener(
//   "input",
//   () => (boxes.value = boxes.amount.value)
// );
