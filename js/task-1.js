'use strict';

const listCategoriesRef = document.querySelector('#categories');
const listItemRef = Array.from(document.querySelectorAll('.item'));

console.log(`В списке ${listItemRef.length} категории`);

const getNameCategories = arr => {
  arr.forEach(item =>
    console.log(
      `Категория: ${item.firstElementChild.innerHTML}\nКоличество элементов: ${item.lastElementChild.children.length}`,
    ),
  );
};

getNameCategories(listItemRef);
