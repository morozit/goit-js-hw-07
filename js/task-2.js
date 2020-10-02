'use strict';

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsRef = document.querySelector('#ingredients');

const arr = ingredients.map(ingredient => {
  const createElement = document.createElement('li');
  createElement.textContent = ingredient;
  return createElement;
});

ingredientsRef.append(...arr);
