const navbar = document.querySelector('.navbar');
const toggleNav = document.querySelector('.hamburger');
const mainBody = document.querySelector('body');

toggleNav.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mainBody.classList.toggle('unfocus');
})