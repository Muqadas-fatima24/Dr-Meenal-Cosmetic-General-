
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

    // Select all the cards you want to animate
const cards = document.querySelectorAll('.grid .entity.box');

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    // If the card is in the viewport
    if (entry.isIntersecting) {
      // Add the 'is-visible' class to start the animation
      entry.target.classList.add('is-visible');
      // Stop observing the card so the animation only happens once
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  root: null, // The viewport is the container
  threshold: 0.1 // Triggers when 10% of the element is visible
});

cards.forEach(card => {
  observer.observe(card);
});
});