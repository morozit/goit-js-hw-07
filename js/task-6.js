'use strict';

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', e => {
  inputRef.classList.remove('invalid', 'valid');
});

inputRef.addEventListener('blur', e => {
  e.target.value.length >= e.target.getAttribute('data-length')
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
});
