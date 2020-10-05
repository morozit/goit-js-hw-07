console.log("=======>task-7<=======");

// !  Variant-1
("use strict");

const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeRef.addEventListener("input", (e) => {
  textRef.style.fontSize = `${e.target.value}px`;
});

// !  Variant-2
// let rangeRef = document.querySelector("#font-size-control");
// let textRef = document.querySelector("#text");

// textRef.style.fontSize = "50px";
// rangeRef.addEventListener(
//   "input",
//   () => (textRef.style.fontSize = rangeRef.value + "px")
// );
