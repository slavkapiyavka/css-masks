"use strict";

var eyeIcon = document.querySelector('.masked-icon_eye');

var toggleEyeIcons = function toggleEyeIcons() {
  eyeIcon.classList.toggle('masked-icon_eye');
  eyeIcon.classList.toggle('masked-icon_eye-close');
};

eyeIcon.addEventListener('click', toggleEyeIcons);