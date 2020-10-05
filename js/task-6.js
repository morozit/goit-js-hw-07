console.log("=======>task-6<=======");
// !  Variant-1

("use strict");

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("focus", (e) => {
  inputRef.classList.remove("invalid", "valid");
});

inputRef.addEventListener("blur", (e) => {
  e.target.value.length == e.target.getAttribute("data-length")
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
});

// !  Variant-2

// let strangeInputRef = document.querySelector("#validation-input");
// strangeInputRef.addEventListener("blur", () => {
//   if (strangeInputRef.value.length < +strangeInputRef.dataset.length) {
//     strangeInputRef.classList.remove("valid");
//     strangeInputRef.classList.add("invalid");
//   } else {
//     strangeInputRef.classList.remove("invalid");
//     strangeInputRef.classList.add("valid");
//   }
// });

// ! Variant-3
// const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);
// const dataRef = document.querySelector("#validation-input").dataset.length;

// function onInputChange(event) {
//   if (Number(event.currentTarget.value.length) === Number(dataRef)) {
//     console.log("yes");

//     inputRef.classList.add("valid");
//   } else {
//     console.log("no");

//     inputRef.classList.add("invalid");
//   }
// }

// inputRef.addEventListener("blur", onInputChange);
