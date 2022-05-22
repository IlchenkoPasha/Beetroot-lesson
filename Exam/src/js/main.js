const burger = document.getElementById('burger');
const navLinks = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});