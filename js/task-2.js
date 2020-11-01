const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "Соль",
  "Творог",
];

console.log("=======>task-2<=======");

// !  Variant-1


const ingredientsRef = document.querySelector("#ingredients");

const arr = ingredients.map((ingredient) => {
  const newListItem = document.createElement("li");
  newListItem.textContent = ingredient;
  return newListItem;
});

ingredientsRef.append(...arr);



// !  Variant-2


// const ingredientsListRef = document.querySelector("#ingredients");
// let newListItem = ingredients.map((el, index, arr) => {
//   arr[index] = document.createElement("li");
//   arr[index].textContent = el;
//   return arr[index];
// });
// ingredientsListRef.append(...newListItem);

//  Додатково виводить `Количество элементов` 

console.log(`Количество элементов: ${ingredients.length}`);


