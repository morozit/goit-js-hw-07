console.log("=======>task-3<=======");

// !  Variant-1
// ("use strict");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");

const createGallery = images.map((image) => {
  const createItem = document.createElement("li");
  createItem.classList.add("gallery-item");
  const createImg = document.createElement("img");
  createImg.src = image.url;
  createImg.alt = image.alt;

  createItem.append(createImg);
  return createItem;
});

galleryRef.append(...createGallery);

// !  Variant-2

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const galRef = document.querySelector("#gallery");

// let imgToInsert = images.reduce((acc, { url, alt }) => {
//   return (acc += `<li><img src=${url} alt='${alt}'></li>`);
// }, "");

// galRef.insertAdjacentHTML("beforeend", imgToInsert);

// Object.assign(galRef.style, {
//   display: "flex",
//   justifyContent: "center",
//   flexWrap: "wrap",
// });

// Array.from(galRef.querySelectorAll("img")).map(({ style }) => {
//   Object.assign(style, {
//     width: "300px",
//     height: "200px",
//     objectFit: "cover",
//     marginRight: "10px",
//   });
// });

// ! Variant-3

// const imagesListRef = document.getElementById("gallery");
// imagesListRef.classList.add("images-list");

// const makeItemsOfImagesMarkup = (transactions) => {
//   return `<li><img src="${transactions.url}" alt="${transactions.alt}" width="300" height="150" /></li>`;
// };

// const makeImagesList = images.map(makeItemsOfImagesMarkup).join("");

// imagesListRef.insertAdjacentHTML("afterbegin", makeImagesList);

// console.log(imagesListRef);

// const imagesItemRef = imagesListRef.querySelectorAll("li");
// imagesItemRef.forEach((image) => image.classList.add("images-item"));
