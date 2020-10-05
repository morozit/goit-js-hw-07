console.log("=======>task-2<=======");

// !  Variant-1

// ("use strict");

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsRef = document.querySelector("#ingredients");

// const arr = ingredients.map((ingredient) => {
//   const createElement = document.createElement("li");
//   createElement.textContent = ingredient;
//   return createElement;
// });

// ingredientsRef.append(...arr);

// !  Variant-2

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListRef = document.querySelector("#ingredients");
let newListItem = ingredients.map((el, index, arr) => {
  arr[index] = document.createElement("li");
  arr[index].textContent = el;
  return arr[index];
});
ingredientsListRef.append(...newListItem);
