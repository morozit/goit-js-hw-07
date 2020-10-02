'use strict';

const inputRef = document.querySelector('#name-input');
const titleSpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', e => {
  titleSpanRef.textContent = e.target.value;

  e.target.value
    ? (titleSpanRef.textContent = e.target.value)
    : (titleSpanRef.textContent = 'незнакомец');
});
