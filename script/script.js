const eyeIcon = document.querySelector('.masked-icon_eye');

const toggleEyeIcons = () => {
    eyeIcon.classList.toggle('masked-icon_eye');
    eyeIcon.classList.toggle('masked-icon_eye-close');
}

eyeIcon.addEventListener('click', toggleEyeIcons);
