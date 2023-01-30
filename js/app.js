const navbar = document.querySelector('.navbar');
const toggleNav = document.querySelector('.nav-toggle');

toggleNav.addEventListener('click', () => {
    navbar.classList.toggle('peelOpen')
})