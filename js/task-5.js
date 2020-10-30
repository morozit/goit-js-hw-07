console.log("=======>task-5<=======");
// !  Variant-1

// ("use strict");

// const inputRef = document.querySelector("#name-input");
// const titleSpanRef = document.querySelector("#name-output");

// inputRef.addEventListener("input", (e) => {
//   titleSpanRef.textContent = e.target.value;

//   e.target.value
//     ? (titleSpanRef.textContent = e.target.value)
//     : (titleSpanRef.textContent = "незнакомец");
// });

// !  Variant-2

let inputRef = document.querySelector("#name-input");
let outputNameRef = document.querySelector("#name-output");
inputRef.addEventListener(
  "input",
  () =>
    (outputNameRef.textContent =
      inputRef.value.length > 0 ? inputRef.value : "незнайомець")
);
