
document.addEventListener("DOMContentLoaded", function() {
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.querySelector('.navbar-brand');
const body = document.body;
const navbarCollapse = document.querySelector('.navbar-collapse'); 

// Function to handle the navbar toggle logic
const toggleNavbar = () => {
  body.classList.toggle('body-nav');
  navbarBrand.classList.toggle('d-none');
  navbarToggler.classList.toggle('is-active');
  navbarCollapse.classList.toggle('show'); // Toggle the 'show' class
};

// Add a click event listener to the navbar toggler
navbarToggler.addEventListener('click', toggleNavbar);

// Optional: Add a resize listener to handle cases where the user resizes the window
window.addEventListener('resize', () => {
  if (window.innerWidth >= 991) {
    if (body.classList.contains('body-nav')) {
      body.classList.remove('body-nav');
      navbarBrand.classList.remove('d-none');
      navbarToggler.classList.remove('is-active');
      navbarCollapse.classList.remove('show'); // Remove the 'show' class on resize
    }
  }
});
let burgerMenu = document.querySelector("#navbar-burger");

burgerMenu.addEventListener("click", function() {
  navbarCollapse.classList.toggle('show');
});
});
// 2nd-part--------------------------------------?
document.addEventListener("DOMContentLoaded", function() {
// Get the header element
const pageHeader = document.querySelector('.page-header');

// Define the scroll threshold (e.g., 50 pixels from the top)
const scrollThreshold = 60;

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', () => {
  // Check if the scroll position is greater than the threshold 
  if (window.scrollY > scrollThreshold) {
    // If it is, add the 'scrolled' class
    pageHeader.classList.add('is-sticky');
  } else {
    // If not, remove the 'scrolled' class
    pageHeader.classList.remove('is-sticky');
  }
});
});























// practice-----------------------------------------------/
// 1. Select all the card elements you want to animate.
document.addEventListener("DOMContentLoaded", function() {

// Select all the elements you want to animate
const myBoxes = document.querySelectorAll('.my-box, .my-box1, .my-box2, .my-box3');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is visible in the viewport
    if (entry.isIntersecting) {
      // Add the 'animate' class to start the animation
      entry.target.classList.add('animate');
    } else {
      // If the element is not in the viewport, remove the class to reset ite
      entry.target.classList.remove('animate');
    }
  });
});

// Loop through each box and tell the observer to watch it
myBoxes.forEach(box => {
  observer.observe(box);
});
});


// practice 2ndd 
document.addEventListener("DOMContentLoaded", function() {

// Select all the elements you want to animate
const myBoxes = document.querySelectorAll('.my-box4, .my-box5, .my-box6');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is visible in the viewport
    if (entry.isIntersecting) {
      // Add the 'animate' class to start the animation
      entry.target.classList.add('animate-part2');
    } else {
      // If the element is not in the viewport, remove the class to reset ite
      entry.target.classList.remove('animate-part2');
    }
  });
});

// Loop through each box and tell the observer to watch it
myBoxes.forEach(box => {
  observer.observe(box);
});
});




document.querySelectorAll('a.smooth-scroll[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});