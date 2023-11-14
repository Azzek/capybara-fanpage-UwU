const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header-menu');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')

})