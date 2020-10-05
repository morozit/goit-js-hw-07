console.log("=======>task-1<=======");

// !  Variant-1
const categoriesArr = Array.from(
  document.querySelectorAll("#categories li.item")
);
console.log(`В списке ${categoriesArr.length} категории`);
//  forEach   кожного елементу el
categoriesArr.forEach((el) => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.querySelectorAll("li").length}`);
});

// !  Variant-2

// ("use strict");

// const listCategoriesRef = document.querySelector("#categories");
// const listItemRef = Array.from(document.querySelectorAll(".item"));

// console.log(`В списке ${listItemRef.length} категории`);

// const getNameCategories = (arr) => {
//   arr.forEach((item) =>
//     console.log(
//       `Категория: ${item.firstElementChild.innerHTML}\nКоличество элементов: ${item.lastElementChild.children.length}`
//     )
//   );
// };

// getNameCategories(listItemRef);
