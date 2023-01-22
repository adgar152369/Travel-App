const featured = document.querySelector('#featured');
const main = document.querySelector('main');


document.querySelector('#landing button').addEventListener('click', function () {
    main.scrollIntoView({
        behavior: 'smooth'
    });
    featured.classList.add('visible');
});

// Get the position of the featured section
var mainPos = main.getBoundingClientRect().top;

// Add an event listener for the scroll event
window.addEventListener('scroll', function () {
    console.log('scrolling');
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    console.log(window.pageYOffset);
    // If the scroll position is greater than the position of the featured section, add the visible class to the content
    if (scrollPos < mainPos) {
        featured.classList.add('visible');
    }
});

