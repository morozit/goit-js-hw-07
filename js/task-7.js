'use strict';

const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', e => {
  textRef.style.fontSize = `${e.target.value}px`;
});
